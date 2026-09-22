// Input, Seed & Nutrient Calculator Service
// Computes total seed and fertilizer quantity based on verified agronomic rates and land dimensions.

export const inputCalculatorService = {
  calculateInputs: ({ crop, landArea = 1, unit = "Acre" }) => {
    if (!crop) return null;

    // Convert land area to acres for baseline calculations
    const areaInAcres = unit.toLowerCase() === "hectare" ? Number(landArea) * 2.471 : Number(landArea);

    // 1. Seed Calculations
    const totalSeed = Math.round(crop.seedRate * areaInAcres * 10) / 10;
    const unitPrice = crop.seedCostPerKg || 80;
    const minCost = Math.round(totalSeed * unitPrice * 0.9);
    const maxCost = Math.round(totalSeed * unitPrice * 1.15);

    // 2. Pure Nutrient (N-P-K) Requirements in kg
    const nTotal = Math.round((crop.nutrientGuidance?.n || 20) * areaInAcres);
    const pTotal = Math.round((crop.nutrientGuidance?.p || 16) * areaInAcres);
    const kTotal = Math.round((crop.nutrientGuidance?.k || 12) * areaInAcres);

    // 3. Commercial Fertilizer Equivalents (Approximate Bags)
    // DAP supplies 46% P2O5 and 18% N. DAP quantity = P / 0.46
    const dapKg = Math.round(pTotal / 0.46);
    const nFromDap = dapKg * 0.18;
    // Remaining N supplied by Urea (46% N)
    const remainingN = Math.max(0, nTotal - nFromDap);
    const ureaKg = Math.round(remainingN / 0.46);
    // Potash (MOP) supplies 60% K2O
    const mopKg = Math.round(kTotal / 0.60);

    const ureaBags = Math.ceil(ureaKg / 45); // 45 kg bag
    const dapBags = Math.ceil(dapKg / 50);   // 50 kg bag
    const mopBags = Math.ceil(mopKg / 50);   // 50 kg bag

    return {
      cropName: crop.name,
      landArea: Number(landArea),
      unit,
      areaInAcres: Math.round(areaInAcres * 100) / 100,
      seed: {
        totalSeedKg: totalSeed,
        seedRatePerAcre: crop.seedRate,
        seedRateUnit: "kg/acre",
        estimatedCostRange: `₹${minCost.toLocaleString('en-IN')} – ₹${maxCost.toLocaleString('en-IN')}`,
        spacingGuidance: "Maintain 45 cm between rows and 10–12 cm between plants for optimal aeration and solar intercept."
      },
      nutrients: {
        nitrogenKg: nTotal,
        phosphorusKg: pTotal,
        potassiumKg: kTotal
      },
      commercialFertilizerEquivalent: {
        ureaKg,
        ureaBags,
        dapKg,
        dapBags,
        mopKg,
        mopBags,
        applicationTiming: crop.nutrientGuidance?.applicationStage || "Apply full DAP, MOP and 1/3 Urea as basal at sowing."
      },
      disclaimer: "Demo/reference value — verify with local Krishi Vigyan Kendra (KVK), soil test results (Soil Health Card), or agricultural extension officer before application."
    };
  }
};
