// Crop Recommendation Engine (Rule-based Decision Support System)
// ==============================================================================
// SIH Prototype Architecture:
// This is a transparent, explainable multi-attribute decision-support engine.
// It evaluates 5 core agronomic parameters with weighted scoring:
// 1. Season Compatibility (30%)
// 2. Soil Compatibility (25%)
// 3. Water / Irrigation Compatibility (25%)
// 4. Land Condition (10%)
// 5. Farmer Objective (10%)
//
// FUTURE ML MIGRATION ROADMAP:
// When transitioning from prototype to production AI/ML:
// 1. Replace this scoring engine with an asynchronous call to a Python FastAPI service:
//    POST /api/v1/predict-crops { soil_npk, ph, rainfall_mm, temp_c, humidity, land_area, region }
// 2. Train a Random Forest Classifier or LightGBM model on ICAR historical yield & agro-climatic datasets.
// ==============================================================================

import { cropCatalogData } from "../data/cropCatalogData";

export const cropRecommendationService = {
  // Main recommendation evaluation function
  recommendCrops: ({
    season = "Kharif",
    soilType = "Black",
    waterAvailability = "Medium",
    irrigationType = "Partially Irrigated",
    landType = "Normal",
    farmingObjective = "Maximum profit",
    budget = "Normal",
    landArea = 3
  }) => {
    const results = cropCatalogData.map((crop) => {
      let seasonScore = 0;
      let soilScore = 0;
      let waterScore = 0;
      let landScore = 0;
      let objectiveScore = 0;

      const whyReasons = [];
      const warnings = [...crop.commonWarnings];

      // 1. Season Evaluation (Max 30 points)
      if (crop.seasons.includes(season)) {
        seasonScore = 30;
        whyReasons.push(`Optimal fit for the ${season} cropping season.`);
      } else if (crop.seasons.length > 1) {
        seasonScore = 15;
        whyReasons.push(`Can be cultivated in secondary transition window.`);
      } else {
        seasonScore = 5;
        warnings.unshift(`Not traditionally sown during ${season}. Off-season cultivation requires temperature regulation.`);
      }

      // 2. Soil Evaluation (Max 25 points)
      if (crop.soilTypes.includes(soilType)) {
        soilScore = 25;
        whyReasons.push(`Highly compatible with ${soilType} soil found on your farm.`);
      } else if (crop.soilTypes.some((s) => s.toLowerCase().includes(soilType.toLowerCase()) || soilType === "Loamy" || soilType === "Alluvial")) {
        soilScore = 18;
        whyReasons.push(`Moderately suitable for ${soilType} soil with organic amendments.`);
      } else {
        soilScore = 10;
        warnings.push(`Soil texture (${soilType}) may require pH correction or aeration for optimal root growth.`);
      }

      // 3. Water & Irrigation Evaluation (Max 25 points)
      const waterReq = crop.waterRequirement.toLowerCase();
      const avail = waterAvailability.toLowerCase();

      if (
        (waterReq === "low" && (avail === "low" || avail === "medium" || avail === "high")) ||
        (waterReq === "medium" && (avail === "medium" || avail === "high")) ||
        (waterReq === "high" && avail === "high")
      ) {
        waterScore = 25;
        whyReasons.push(`Crop water demand (${crop.waterRequirement}) matches your ${waterAvailability} water availability.`);
      } else if (waterReq === "high" && avail === "medium") {
        waterScore = 14;
        warnings.push(`Paddy/high-water crops in medium water situations require supplementary borewell or canal backup.`);
      } else if (waterReq === "medium" && avail === "low") {
        waterScore = 12;
        warnings.push(`Medium water requirement crop under rainfed conditions may experience yield reduction if dry spell exceeds 15 days.`);
      } else {
        waterScore = 8;
        warnings.push(`Severe water mismatch: high water crop under rain-dependent conditions carries elevated moisture stress risk.`);
      }

      // 4. Land Condition Evaluation (Max 10 points)
      if (crop.landTypes.includes(landType) || landType === "Fertile" || landType === "Normal") {
        landScore = 10;
        whyReasons.push(`Adapts well to ${landType} land topography.`);
      } else if (landType === "Dry/Rainfed" && crop.waterRequirement === "Low") {
        landScore = 9;
        whyReasons.push(`Deep taproot system thrives even on dry/rainfed acreage.`);
      } else if (landType === "Barren/Degraded" && (crop.id === "bajra" || crop.id === "moong" || crop.id === "chickpea")) {
        landScore = 8;
        whyReasons.push(`Hardy legume/millet capable of growing in degraded soils while fixing atmospheric nitrogen.`);
      } else {
        landScore = 5;
        warnings.push(`Land condition (${landType}) may necessitate deep summer ploughing or subsoiling.`);
      }

      // 5. Farmer Objective Alignment (Max 10 points)
      if (crop.objectives.includes(farmingObjective)) {
        objectiveScore = 10;
        whyReasons.push(`Directly fulfills your goal of "${farmingObjective}".`);
      } else {
        objectiveScore = 6;
        whyReasons.push(`Provides balanced agronomic returns across market and soil health.`);
      }

      const totalScore = Math.min(100, Math.round(seasonScore + soilScore + waterScore + landScore + objectiveScore));

      // Land area based calculations
      const totalSeedNeeded = Math.round(crop.seedRate * landArea);
      const estSeedCost = totalSeedNeeded * crop.seedCostPerKg;

      return {
        crop,
        matchScore: totalScore,
        scoreBreakdown: {
          season: { score: seasonScore, max: 30 },
          soil: { score: soilScore, max: 25 },
          water: { score: waterScore, max: 25 },
          land: { score: landScore, max: 10 },
          objective: { score: objectiveScore, max: 10 }
        },
        whyReasons,
        warnings,
        totalSeedNeeded,
        estSeedCost,
        disclaimer: "This is a rule-based prototype recommendation based on the information provided by the farmer. Actual crop suitability may vary with local weather, soil testing, pest pressure, irrigation availability, and agricultural practices."
      };
    });

    // Sort descending by match score
    return results.sort((a, b) => b.matchScore - a.matchScore);
  }
};
