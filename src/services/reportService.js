// Report Generation & RFC-4180 Compliant CSV Export Service
// Formats and exports 5 essential agricultural reports for farmers, FPOs, and bank loan documentation.

export const reportService = {
  // Helper to convert structured array of objects into RFC-4180 compliant CSV string
  generateCsvContent: (headers, rows) => {
    const escapeCell = (val) => {
      if (val === null || val === undefined) return '""';
      let stringVal = String(val);
      if (stringVal.includes('"') || stringVal.includes(',') || stringVal.includes('\n')) {
        stringVal = `"${stringVal.replace(/"/g, '""')}"`;
      }
      return stringVal;
    };

    const headerLine = headers.map(escapeCell).join(',');
    const rowLines = rows.map((row) => row.map(escapeCell).join(','));
    return [headerLine, ...rowLines].join('\r\n');
  },

  // Trigger client-side browser file download
  downloadCsvFile: (filename, csvString) => {
    const blob = new Blob(["\uFEFF" + csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  // Report 1: Farm Profile CSV
  exportFarmProfileCsv: (profile) => {
    const headers = ["Parameter", "Farm Detail", "Unit / Notes"];
    const rows = [
      ["Farmer Name", profile.name, ""],
      ["Contact Phone", profile.phone, ""],
      ["Location", `${profile.village}, ${profile.district}, ${profile.state}`, ""],
      ["Total Land Area", profile.totalLandArea, profile.landUnit],
      ["Land Condition", profile.landType, "Topography"],
      ["Soil Type", profile.soilType, `Condition: ${profile.soilCondition}`],
      ["Water & Irrigation", profile.irrigationType, `Availability: ${profile.waterAvailability}`],
      ["Current Season", profile.currentSeason, ""],
      ["Current Crop", profile.currentCrop, ""],
      ["Previous Crop", profile.previousCrop, ""],
      ["Farming Objective", profile.farmingObjective, ""],
      ["Report Date", new Date().toLocaleDateString('en-IN'), "Generated via Kisan Mitra"]
    ];
    const csv = reportService.generateCsvContent(headers, rows);
    reportService.downloadCsvFile(`Farm_Profile_Report_${profile.name.replace(/\s+/g, '_')}.csv`, csv);
  },

  // Report 2: Crop Recommendation CSV
  exportCropRecommendationsCsv: (recommendations, farmerName = "Farmer") => {
    const headers = ["Rank", "Crop Name", "Match Score", "Season", "Suitable Soils", "Water Demand", "Duration", "Seed Rate", "Expected Yield", "Key Match Reason"];
    const rows = recommendations.map((rec, index) => [
      index + 1,
      rec.crop.name,
      `${rec.matchScore}%`,
      rec.crop.seasons.join(" / "),
      rec.crop.soilTypes.join(", "),
      rec.crop.waterRequirement,
      rec.crop.durationDays,
      `${rec.crop.seedRate} ${rec.crop.seedRateUnit}`,
      rec.crop.expectedYieldQuintalPerAcre,
      rec.whyReasons[0] || "Compatible agronomic parameters"
    ]);
    const csv = reportService.generateCsvContent(headers, rows);
    reportService.downloadCsvFile(`Crop_Suitability_Recommendations_${farmerName.replace(/\s+/g, '_')}.csv`, csv);
  },

  // Report 3: Seed & Fertilizer Requirement CSV
  exportInputRequirementCsv: (inputData, farmerName = "Farmer") => {
    const headers = ["Category", "Input Item", "Quantity Needed", "Unit / Packing", "Application Guidance"];
    const rows = [
      ["Seed", inputData.cropName, `${inputData.seed.totalSeedKg} kg`, `For ${inputData.landArea} ${inputData.unit}`, `Est Cost: ${inputData.seed.estimatedCostRange}`],
      ["Pure Nutrient", "Nitrogen (N)", `${inputData.nutrients.nitrogenKg} kg`, "Elemental N", "Split basal & top-dressing"],
      ["Pure Nutrient", "Phosphorus (P2O5)", `${inputData.nutrients.phosphorusKg} kg`, "Elemental P", "Basal placement with seed"],
      ["Pure Nutrient", "Potassium (K2O)", `${inputData.nutrients.potassiumKg} kg`, "Elemental K", "Basal placement"],
      ["Commercial Bag", "Urea (46% N)", `${inputData.commercialFertilizerEquivalent.ureaKg} kg`, `${inputData.commercialFertilizerEquivalent.ureaBags} Bags (45kg)`, "Nitrogen supplement"],
      ["Commercial Bag", "DAP (18-46-0)", `${inputData.commercialFertilizerEquivalent.dapKg} kg`, `${inputData.commercialFertilizerEquivalent.dapBags} Bags (50kg)`, "Basal phosphate supplement"],
      ["Commercial Bag", "MOP (60% K)", `${inputData.commercialFertilizerEquivalent.mopKg} kg`, `${inputData.commercialFertilizerEquivalent.mopBags} Bags (50kg)`, "Potash supplement"]
    ];
    const csv = reportService.generateCsvContent(headers, rows);
    reportService.downloadCsvFile(`Input_Requirement_Plan_${inputData.cropName}_${farmerName.replace(/\s+/g, '_')}.csv`, csv);
  },

  // Report 4: Market Price CSV
  exportMarketPricesCsv: (priceRecords) => {
    const headers = ["Crop", "Mandi / APMC Yard", "District", "State", "Min Price", "Modal Price", "Max Price", "Unit", "Arrivals", "Reporting Date", "Data Source"];
    const rows = priceRecords.map((item) => [
      item.crop,
      item.mandi,
      item.district,
      item.state,
      item.minPrice,
      item.modalPrice,
      item.maxPrice,
      item.unit,
      item.arrivalQuantity || "N/A",
      item.date,
      item.source
    ]);
    const csv = reportService.generateCsvContent(headers, rows);
    reportService.downloadCsvFile(`Mandi_Market_Price_Intelligence_${new Date().toISOString().split('T')[0]}.csv`, csv);
  },

  // Report 5: Marketplace Listings CSV
  exportListingsCsv: (listings) => {
    const headers = ["Listing ID", "Crop", "Variety", "Quantity", "Unit", "Expected Price", "Grade", "Location", "Harvest Date", "Status", "Farmer Name"];
    const rows = listings.map((l) => [
      l.id,
      l.crop,
      l.variety,
      l.quantity,
      l.unit,
      `₹${l.pricePerUnit}`,
      l.qualityGrade,
      `${l.village}, ${l.district}, ${l.state}`,
      l.harvestDate,
      l.status,
      l.farmerName
    ]);
    const csv = reportService.generateCsvContent(headers, rows);
    reportService.downloadCsvFile(`Harvest_Marketplace_Listings_${new Date().toISOString().split('T')[0]}.csv`, csv);
  }
};
