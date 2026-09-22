// Curated Indian Agricultural Crop Catalog Dataset (Demonstration / Reference)
// Note: Reference values based on ICAR / State Agricultural Universities package of practices.
// Always verify with local Krishi Vigyan Kendra (KVK) or agricultural extension officer.

export const cropCatalogData = [
  {
    id: "soybean",
    name: "Soybean",
    hindiName: "सोयाबीन",
    scientificName: "Glycine max",
    seasons: ["Kharif"],
    soilTypes: ["Black", "Loamy", "Clay", "Alluvial"],
    waterRequirement: "Medium", // Low, Medium, High
    irrigationNeeded: ["Rainfed", "Limited", "Assured"],
    landTypes: ["Normal", "Fertile", "Dry/Rainfed", "Partially Irrigated"],
    durationDays: "95–115 days",
    durationRange: [95, 115],
    seedRate: 25, // kg per acre
    seedRateUnit: "kg/acre",
    seedCostPerKg: 85, // INR reference
    nutrientGuidance: {
      n: 12, // kg/acre
      p: 24, // kg/acre
      k: 16, // kg/acre
      applicationStage: "Basal application at sowing time. Inoculate seed with Rhizobium culture for biological nitrogen fixation."
    },
    expectedYieldQuintalPerAcre: "8–12 Quintals",
    referenceMspPrice: 4892, // INR per quintal (MSP reference)
    objectives: ["Maximum profit", "Low water requirement", "Soil improvement", "Stable market demand"],
    riskLevel: "Medium",
    commonWarnings: [
      "Extremely sensitive to waterlogging during germination and flowering stages.",
      "Susceptible to yellow mosaic virus and girdle beetle in high humidity.",
      "Ensure proper row spacing (45 cm) and drainage channels in black soils."
    ],
    cultivationSummary: "Soybean is a premier oilseed and pulse crop of central India. It fixes atmospheric nitrogen into soil, improving fertility for subsequent Rabi crops.",
    source: "ICAR-Indian Institute of Soybean Research (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "wheat",
    name: "Wheat",
    hindiName: "गेहूं",
    scientificName: "Triticum aestivum",
    seasons: ["Rabi"],
    soilTypes: ["Loamy", "Alluvial", "Clay", "Black"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Assured", "Limited", "Canal", "Borewell", "Sprinkler"],
    landTypes: ["Fertile", "Normal", "Irrigated", "Partially Irrigated"],
    durationDays: "120–135 days",
    durationRange: [120, 135],
    seedRate: 40, // kg per acre
    seedRateUnit: "kg/acre",
    seedCostPerKg: 45,
    nutrientGuidance: {
      n: 48,
      p: 24,
      k: 16,
      applicationStage: "Full P & K and 1/3 Nitrogen as basal. Remaining Nitrogen in two split doses at CRI (21 DAS) and flowering."
    },
    expectedYieldQuintalPerAcre: "18–24 Quintals",
    referenceMspPrice: 2425,
    objectives: ["Stable market demand", "Low risk", "Suitable for available resources"],
    riskLevel: "Low",
    commonWarnings: [
      "Terminal heat stress during grain filling stage can reduce yield.",
      "Requires critical irrigation at Crown Root Initiation (CRI) stage (20-25 days after sowing).",
      "Monitor for yellow rust in North-Western plains."
    ],
    cultivationSummary: "Primary staple food crop of Rabi season. Performs best under cool winter temperatures and well-drained loamy soils.",
    source: "ICAR-Indian Institute of Wheat & Barley Research (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "rice",
    name: "Paddy / Rice",
    hindiName: "धान / चावल",
    scientificName: "Oryza sativa",
    seasons: ["Kharif"],
    soilTypes: ["Clay", "Loamy", "Alluvial", "Black"],
    waterRequirement: "High",
    irrigationNeeded: ["Assured", "Canal", "Borewell"],
    landTypes: ["Fertile", "Normal", "Irrigated"],
    durationDays: "120–140 days",
    durationRange: [120, 140],
    seedRate: 15, // kg per acre for transplanted
    seedRateUnit: "kg/acre",
    seedCostPerKg: 70,
    nutrientGuidance: {
      n: 40,
      p: 20,
      k: 20,
      applicationStage: "Basal dose of 50% N, 100% P & K. Remaining N top-dressed at tillering and panicle initiation."
    },
    expectedYieldQuintalPerAcre: "20–28 Quintals",
    referenceMspPrice: 2320,
    objectives: ["Stable market demand", "Maximum profit", "Suitable for available resources"],
    riskLevel: "Medium",
    commonWarnings: [
      "Requires standing water; high vulnerability in drought conditions.",
      "Check for stem borer and bacterial leaf blight.",
      "Methane emissions can be curtailed through Alternate Wetting and Drying (AWD)."
    ],
    cultivationSummary: "Major Kharif staple crop requiring heavy soil with good water retention and abundant irrigation.",
    source: "ICAR-National Rice Research Institute (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "cotton",
    name: "Cotton",
    hindiName: "कपास",
    scientificName: "Gossypium hirsutum",
    seasons: ["Kharif"],
    soilTypes: ["Black", "Alluvial", "Loamy"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Rainfed", "Limited", "Drip", "Assured"],
    landTypes: ["Fertile", "Normal", "Dry/Rainfed", "Partially Irrigated"],
    durationDays: "150–180 days",
    durationRange: [150, 180],
    seedRate: 2, // kg per acre (Bt hybrids)
    seedRateUnit: "kg/acre",
    seedCostPerKg: 850,
    nutrientGuidance: {
      n: 40,
      p: 20,
      k: 20,
      applicationStage: "Apply P and K basal. Nitrogen in 3 splits: at thinning, square formation, and peak boll development."
    },
    expectedYieldQuintalPerAcre: "8–14 Quintals",
    referenceMspPrice: 7521,
    objectives: ["Maximum profit", "Stable market demand"],
    riskLevel: "High",
    commonWarnings: [
      "High pest vulnerability (Pink bollworm, whitefly). Strictly follow integrated pest management.",
      "Sensitive to frost and water-stagnation.",
      "Labor intensive picking required."
    ],
    cultivationSummary: "White Gold commercial cash crop widely cultivated in black cotton soils of Deccan plateau and alluvial plains.",
    source: "Central Institute for Cotton Research (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "mustard",
    name: "Mustard",
    hindiName: "सरसों",
    scientificName: "Brassica juncea",
    seasons: ["Rabi"],
    soilTypes: ["Sandy loam", "Loamy", "Alluvial", "Clay"],
    waterRequirement: "Low",
    irrigationNeeded: ["Rainfed", "Limited", "Sprinkler", "Assured"],
    landTypes: ["Normal", "Dry/Rainfed", "Partially Irrigated", "Fallow"],
    durationDays: "105–125 days",
    durationRange: [105, 125],
    seedRate: 2, // kg per acre
    seedRateUnit: "kg/acre",
    seedCostPerKg: 120,
    nutrientGuidance: {
      n: 24,
      p: 16,
      k: 8,
      applicationStage: "Full P, K and half N as basal. Remaining half N after first irrigation at 30 days."
    },
    expectedYieldQuintalPerAcre: "7–10 Quintals",
    referenceMspPrice: 5950,
    objectives: ["Low water requirement", "Low risk", "Maximum profit"],
    riskLevel: "Low",
    commonWarnings: [
      "Aphids outbreak is common during cloudy winter days; monitor weekly.",
      "Sensitive to white rust and Alternaria blight.",
      "Avoid heavy irrigation; 2 light irrigations are sufficient."
    ],
    cultivationSummary: "Leading winter oilseed crop needing minimal water and producing valuable oil and high protein meal cake.",
    source: "Directorate of Rapeseed-Mustard Research (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "chickpea",
    name: "Chickpea / Gram",
    hindiName: "चना",
    scientificName: "Cicer arietinum",
    seasons: ["Rabi"],
    soilTypes: ["Loamy", "Black", "Sandy loam", "Clay"],
    waterRequirement: "Low",
    irrigationNeeded: ["Rainfed", "Limited", "None"],
    landTypes: ["Normal", "Dry/Rainfed", "Partially Irrigated", "Barren/Degraded"],
    durationDays: "100–120 days",
    durationRange: [100, 120],
    seedRate: 30, // kg per acre
    seedRateUnit: "kg/acre",
    seedCostPerKg: 90,
    nutrientGuidance: {
      n: 8,
      p: 16,
      k: 8,
      applicationStage: "Basal placement with seed drill. Pulse crop fixes atmospheric nitrogen via root nodules."
    },
    expectedYieldQuintalPerAcre: "6–9 Quintals",
    referenceMspPrice: 5650,
    objectives: ["Low water requirement", "Soil improvement", "Low risk", "Stable market demand"],
    riskLevel: "Low",
    commonWarnings: [
      "Avoid fields with severe Fusarium wilt history; use resistant varieties.",
      "Over-irrigation leads to excessive vegetative growth without pod setting.",
      "Helicoverpa pod borer causes pod damage at maturity."
    ],
    cultivationSummary: "Major pulse crop with high drought tolerance, ideal for rainfed regions and soil fertility restoration.",
    source: "Indian Institute of Pulses Research (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "maize",
    name: "Maize / Corn",
    hindiName: "मक्का",
    scientificName: "Zea mays",
    seasons: ["Kharif", "Rabi"],
    soilTypes: ["Loamy", "Alluvial", "Red", "Black"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Rainfed", "Limited", "Assured", "Drip"],
    landTypes: ["Fertile", "Normal", "Partially Irrigated"],
    durationDays: "90–105 days",
    durationRange: [90, 105],
    seedRate: 8, // kg per acre
    seedRateUnit: "kg/acre",
    seedCostPerKg: 220,
    nutrientGuidance: {
      n: 48,
      p: 24,
      k: 20,
      applicationStage: "Nitrogen in 3 equal splits: basal, knee-high stage, and tasseling stage."
    },
    expectedYieldQuintalPerAcre: "22–30 Quintals",
    referenceMspPrice: 2225,
    objectives: ["Fast harvest", "Stable market demand", "Maximum profit"],
    riskLevel: "Medium",
    commonWarnings: [
      "Fall Armyworm (FAW) is a serious pest requiring timely pheromone traps and biopesticides.",
      "Cannot tolerate water stagnation even for 24 hours.",
      "Nutrient-exhaustive crop; maintain soil organic matter."
    ],
    cultivationSummary: "Versatile cereal crop used for food, livestock feed, and industrial starch with high productivity per acre.",
    source: "ICAR-Indian Institute of Maize Research (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "groundnut",
    name: "Groundnut / Peanut",
    hindiName: "मूंगफली",
    scientificName: "Arachis hypogaea",
    seasons: ["Kharif", "Zaid"],
    soilTypes: ["Sandy loam", "Red", "Loamy"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Rainfed", "Limited", "Sprinkler"],
    landTypes: ["Normal", "Dry/Rainfed", "Partially Irrigated"],
    durationDays: "105–125 days",
    durationRange: [105, 125],
    seedRate: 45, // kg per acre (kernels)
    seedRateUnit: "kg/acre",
    seedCostPerKg: 110,
    nutrientGuidance: {
      n: 8,
      p: 16,
      k: 16,
      applicationStage: "Basal dose + Gypsum application (100 kg/acre) at flowering/pegging for pod filling and calcium."
    },
    expectedYieldQuintalPerAcre: "8–12 Quintals",
    referenceMspPrice: 6783,
    objectives: ["Maximum profit", "Soil improvement"],
    riskLevel: "Medium",
    commonWarnings: [
      "Heavy, compact clay soil hinders peg penetration and makes harvesting pods difficult.",
      "Tikka disease (leaf spot) can cause premature defoliation.",
      "Proper drying required post-harvest to avoid aflatoxin contamination."
    ],
    cultivationSummary: "Key oilseed crop preferring loose, friable sandy loam soils that facilitate subsurface peg development.",
    source: "ICAR-Directorate of Groundnut Research (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "moong",
    name: "Green Gram / Moong",
    hindiName: "मूंग",
    scientificName: "Vigna radiata",
    seasons: ["Kharif", "Zaid"],
    soilTypes: ["Loamy", "Sandy loam", "Alluvial", "Black"],
    waterRequirement: "Low",
    irrigationNeeded: ["Rainfed", "Limited", "None"],
    landTypes: ["Normal", "Fallow", "Dry/Rainfed", "Barren/Degraded"],
    durationDays: "60–75 days",
    durationRange: [60, 75],
    seedRate: 8, // kg per acre
    seedRateUnit: "kg/acre",
    seedCostPerKg: 130,
    nutrientGuidance: {
      n: 6,
      p: 16,
      k: 8,
      applicationStage: "Basal application. Excellent short-duration catch crop that enriches soil organic carbon."
    },
    expectedYieldQuintalPerAcre: "4–6 Quintals",
    referenceMspPrice: 8682,
    objectives: ["Fast harvest", "Low water requirement", "Soil improvement", "Low risk"],
    riskLevel: "Low",
    commonWarnings: [
      "Yellow mosaic virus transmitted by whiteflies; grow resistant varieties like IPM-02-3.",
      "Rain during pod maturity can cause grain discolouration and sprouting in pod.",
      "Light irrigations only."
    ],
    cultivationSummary: "Ultra short-duration legume (65 days) ideal as summer catch crop between Rabi and Kharif.",
    source: "ICAR-Indian Institute of Pulses Research (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "bajra",
    name: "Pearl Millet / Bajra",
    hindiName: "बाजरा",
    scientificName: "Pennisetum glaucum",
    seasons: ["Kharif"],
    soilTypes: ["Sandy", "Sandy loam", "Red", "Loamy"],
    waterRequirement: "Low",
    irrigationNeeded: ["Rainfed", "Limited", "None"],
    landTypes: ["Dry/Rainfed", "Barren/Degraded", "Normal", "Fallow"],
    durationDays: "75–90 days",
    durationRange: [75, 90],
    seedRate: 2, // kg per acre
    seedRateUnit: "kg/acre",
    seedCostPerKg: 140,
    nutrientGuidance: {
      n: 20,
      p: 12,
      k: 8,
      applicationStage: "Half N and full P, K as basal. Remaining half N top-dressed at 30 DAS."
    },
    expectedYieldQuintalPerAcre: "10–14 Quintals",
    referenceMspPrice: 2625,
    objectives: ["Low water requirement", "Low risk", "Suitable for available resources"],
    riskLevel: "Low",
    commonWarnings: [
      "Ergot and Downy Mildew disease risk if untrusted seeds are used.",
      "Bird damage near maturity requires watching.",
      "Extremely hardy; handles heat and salinity better than most cereals."
    ],
    cultivationSummary: "Nutri-cereal (Millet) champion for arid and semi-arid regions with exceptional drought tolerance.",
    source: "ICAR-All India Coordinated Research Project on Pearl Millet (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "urad",
    name: "Black Gram / Urad",
    hindiName: "उड़द",
    scientificName: "Vigna mungo",
    seasons: ["Kharif"],
    soilTypes: ["Loamy", "Black", "Alluvial", "Clay"],
    waterRequirement: "Low",
    irrigationNeeded: ["Rainfed", "Limited"],
    landTypes: ["Normal", "Dry/Rainfed", "Partially Irrigated"],
    durationDays: "70–85 days",
    durationRange: [70, 85],
    seedRate: 8, // kg per acre
    seedRateUnit: "kg/acre",
    seedCostPerKg: 125,
    nutrientGuidance: {
      n: 8,
      p: 16,
      k: 8,
      applicationStage: "Basal application with seed drill."
    },
    expectedYieldQuintalPerAcre: "4–6 Quintals",
    referenceMspPrice: 7400,
    objectives: ["Fast harvest", "Low water requirement", "Soil improvement"],
    riskLevel: "Low",
    commonWarnings: [
      "Sensitive to waterlogging.",
      "Check for pod borers at flowering.",
      "High market demand in south and central India for culinary use."
    ],
    cultivationSummary: "Essential pulse with high protein content and deep taproot system that tolerates dry spells.",
    source: "ICAR-IIPR (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "peas",
    name: "Field Pea",
    hindiName: "मटर",
    scientificName: "Pisum sativum",
    seasons: ["Rabi"],
    soilTypes: ["Loamy", "Sandy loam", "Alluvial"],
    waterRequirement: "Low",
    irrigationNeeded: ["Limited", "Assured"],
    landTypes: ["Normal", "Fertile", "Partially Irrigated"],
    durationDays: "90–110 days",
    durationRange: [90, 110],
    seedRate: 35, // kg per acre
    seedRateUnit: "kg/acre",
    seedCostPerKg: 75,
    nutrientGuidance: {
      n: 8,
      p: 20,
      k: 10,
      applicationStage: "Basal dressing. Fixes nitrogen."
    },
    expectedYieldQuintalPerAcre: "7–10 Quintals",
    referenceMspPrice: 5450,
    objectives: ["Low water requirement", "Fast harvest", "Soil improvement"],
    riskLevel: "Low",
    commonWarnings: [
      "Powdery mildew occurs during warm dry spells in late winter.",
      "Requires well-drained soil; water stagnation causes root rot."
    ],
    cultivationSummary: "High-value winter pulse suited for loamy plains, providing green pods or dry grain.",
    source: "ICAR-IIPR (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "watermelon",
    name: "Watermelon",
    hindiName: "तरबूज",
    scientificName: "Citrullus lanatus",
    seasons: ["Zaid"],
    soilTypes: ["Sandy", "Sandy loam", "Alluvial"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Drip", "Assured", "Borewell", "Sprinkler"],
    landTypes: ["Normal", "Fertile", "Irrigated", "Partially Irrigated"],
    durationDays: "80–95 days",
    durationRange: [80, 95],
    seedRate: 1.5, // kg per acre
    seedRateUnit: "kg/acre",
    seedCostPerKg: 1800,
    nutrientGuidance: {
      n: 30,
      p: 20,
      k: 25,
      applicationStage: "Basal dose + fertigation via drip at vine elongation, flowering, and fruit development."
    },
    expectedYieldQuintalPerAcre: "120–180 Quintals",
    referenceMspPrice: 1500, // Commercial market reference
    objectives: ["Maximum profit", "Fast harvest"],
    riskLevel: "Medium",
    commonWarnings: [
      "High temperature (>42°C) can cause fruit sunburn; use straw mulching.",
      "Fruit fly damage during early fruit set; install methyl eugenol traps.",
      "Stop irrigation 5 days before harvest to enhance brix sugar content."
    ],
    cultivationSummary: "Premier summer cash crop delivering quick returns within 90 days when drip irrigation and mulch are utilized.",
    source: "ICAR-Indian Institute of Horticultural Research (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "cucumber",
    name: "Cucumber",
    hindiName: "खीरा",
    scientificName: "Cucumis sativus",
    seasons: ["Zaid", "Kharif"],
    soilTypes: ["Loamy", "Sandy loam", "Alluvial"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Drip", "Assured", "Sprinkler"],
    landTypes: ["Normal", "Fertile", "Irrigated"],
    durationDays: "50–65 days",
    durationRange: [50, 65],
    seedRate: 1, // kg per acre
    seedRateUnit: "kg/acre",
    seedCostPerKg: 2400,
    nutrientGuidance: {
      n: 25,
      p: 15,
      k: 20,
      applicationStage: "Regular fertigation splits every 3-4 days after germination."
    },
    expectedYieldQuintalPerAcre: "60–90 Quintals",
    referenceMspPrice: 2000,
    objectives: ["Fast harvest", "Maximum profit"],
    riskLevel: "Low",
    commonWarnings: [
      "Downy and powdery mildew in cloudy weather.",
      "Frequent small pickings every 2 days to maintain tender fruit quality."
    ],
    cultivationSummary: "Quickest harvest vegetable crop (under 60 days) with steady urban vegetable market demand.",
    source: "ICAR-IIHR (Demo Reference)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "lentil",
    name: "Lentil / Masoor",
    hindiName: "मसूर",
    scientificName: "Lens culinaris",
    seasons: ["Rabi"],
    soilTypes: ["Loamy", "Alluvial", "Clay", "Black"],
    waterRequirement: "Low",
    irrigationNeeded: ["Rainfed", "Limited", "None"],
    landTypes: ["Normal", "Dry/Rainfed", "Fallow"],
    durationDays: "110–125 days",
    durationRange: [110, 125],
    seedRate: 18, // kg per acre
    seedRateUnit: "kg/acre",
    seedCostPerKg: 105,
    nutrientGuidance: {
      n: 8,
      p: 16,
      k: 8,
      applicationStage: "Basal dressing with Rhizobium seed inoculation."
    },
    expectedYieldQuintalPerAcre: "5–8 Quintals",
    referenceMspPrice: 6700,
    objectives: ["Low water requirement", "Soil improvement", "Low risk"],
    riskLevel: "Low",
    commonWarnings: [
      "Rust and vascular wilt can impact yield in dense stands.",
      "Cannot tolerate flooding or water stagnation."
    ],
    cultivationSummary: "Hardy winter legume capable of growing on residual moisture following Kharif rice (relay cropping).",
    source: "ICAR-IIPR (National Pulses Institute)",
    lastUpdated: "2026-09-01"
  },
  {
    id: "onion",
    name: "Red Onion",
    hindiName: "लाल प्याज",
    scientificName: "Allium cepa",
    seasons: ["Kharif", "Late Kharif", "Rabi"],
    soilTypes: ["Loamy", "Alluvial", "Sandy Loam", "Black"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Drip", "Sprinkler", "Canal", "Borewell", "Furrow"],
    landTypes: ["Fertile", "Normal", "Irrigated"],
    durationDays: "120–140 days",
    durationRange: [120, 140],
    seedRate: 4, // kg per acre (nursery)
    seedRateUnit: "kg/acre (seed) or 20,000 seedlings",
    seedCostPerKg: 1400,
    nutrientGuidance: {
      n: 40,
      p: 20,
      k: 30,
      applicationStage: "Full P & K with 1/2 Nitrogen as basal. Remaining Nitrogen top-dressed in two splits at 30 and 45 days after transplanting (DAT). Apply 15 kg Sulphur per acre for high pungency and shelf life."
    },
    expectedYieldQuintalPerAcre: "100–140 Quintals (10–14 MT)",
    referenceMspPrice: 2450, // Benchmark APMC modal
    objectives: ["Maximum profit", "Stable market demand", "Export opportunities"],
    riskLevel: "Medium",
    commonWarnings: [
      "Stop irrigation 10-15 days prior to harvest to prevent neck rot and maximize storage life.",
      "Susceptible to purple blotch (Alternaria porri) and thrips during hot dry spells.",
      "Cure bulbs under shade for 7-10 days before bagging."
    ],
    cultivationSummary: "Major commercial vegetable crop of Maharashtra, MP, and Karnataka. Rabi onion (Garwa) offers exceptional storability of 5-6 months and strong Gulf export demand.",
    source: "ICAR-Directorate of Onion and Garlic Research (DOGR, Rajgurunagar)",
    lastUpdated: "2026-09-20"
  },
  {
    id: "tomato",
    name: "Tomato (Hybrid)",
    hindiName: "टमाटर",
    scientificName: "Solanum lycopersicum",
    seasons: ["Kharif", "Rabi", "Zaid"],
    soilTypes: ["Loamy", "Sandy Loam", "Black", "Alluvial"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Drip", "Borewell", "Sprinkler"],
    landTypes: ["Fertile", "Irrigated", "Normal"],
    durationDays: "110–135 days",
    durationRange: [110, 135],
    seedRate: 0.15, // 150 grams per acre
    seedRateUnit: "150 grams/acre (approx 12,000 hybrid seedlings)",
    seedCostPerKg: 28000,
    nutrientGuidance: {
      n: 48,
      p: 32,
      k: 40,
      applicationStage: "Basal dressing with FYM and complete P. Fertigation with 19:19:19 and Calcium Nitrate during flowering and fruit setting stages."
    },
    expectedYieldQuintalPerAcre: "160–240 Quintals (16–24 MT)",
    referenceMspPrice: 1850,
    objectives: ["Maximum profit", "Quick returns", "Stable market demand"],
    riskLevel: "High",
    commonWarnings: [
      "Staking with bamboo and GI wire is essential to prevent soil-borne fruit rotting.",
      "Susceptible to tomato leaf curl virus (TLCV) transmitted by whiteflies and early blight.",
      "Prone to price volatility during synchronized glut harvests."
    ],
    cultivationSummary: "High-yielding cash crop suitable for year-round cultivation in peninsular and central India. Responds exceptionally well to drip irrigation and plastic mulching.",
    source: "ICAR-Indian Institute of Horticultural Research (IIHR, Bengaluru)",
    lastUpdated: "2026-09-20"
  },
  {
    id: "potato",
    name: "Potato",
    hindiName: "आलू",
    scientificName: "Solanum tuberosum",
    seasons: ["Rabi"],
    soilTypes: ["Sandy Loam", "Loamy", "Alluvial"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Furrow", "Sprinkler", "Drip", "Borewell"],
    landTypes: ["Fertile", "Irrigated", "Well-drained"],
    durationDays: "90–110 days",
    durationRange: [90, 110],
    seedRate: 1200, // kg seed tubers per acre
    seedRateUnit: "kg seed tubers/acre (12 Quintals)",
    seedCostPerKg: 22,
    nutrientGuidance: {
      n: 60,
      p: 40,
      k: 50,
      applicationStage: "Full P & K and half Nitrogen at planting time during ridge formation. Remaining Nitrogen at first earthing-up (30-35 DAP)."
    },
    expectedYieldQuintalPerAcre: "120–180 Quintals (12–18 MT)",
    referenceMspPrice: 1650,
    objectives: ["Maximum profit", "Bulk yield", "High income"],
    riskLevel: "Medium",
    commonWarnings: [
      "Requires cold night temperatures (15-18°C) for optimal tuberization.",
      "High susceptibility to late blight (Phytophthora infestans) during cloudy humid weather.",
      "Use certified disease-free seed tubers from CPRI or accredited cold storages."
    ],
    cultivationSummary: "Primary staple tuber crop of northern and eastern India. High calorific yield per unit area with strong food processing and chips manufacturing demand.",
    source: "ICAR-Central Potato Research Institute (CPRI, Shimla)",
    lastUpdated: "2026-09-20"
  },
  {
    id: "garlic",
    name: "Garlic",
    hindiName: "लहसुन",
    scientificName: "Allium sativum",
    seasons: ["Rabi"],
    soilTypes: ["Loamy", "Black", "Alluvial", "Clay Loam"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Drip", "Sprinkler", "Canal", "Borewell"],
    landTypes: ["Fertile", "Irrigated", "Well-drained"],
    durationDays: "130–150 days",
    durationRange: [130, 150],
    seedRate: 200, // kg cloves per acre
    seedRateUnit: "kg cloves/acre (2 Quintals)",
    seedCostPerKg: 140,
    nutrientGuidance: {
      n: 40,
      p: 20,
      k: 30,
      applicationStage: "Full P & K with 1/3 N at planting. Two split applications of N at 30 and 60 days after planting with elemental sulphur."
    },
    expectedYieldQuintalPerAcre: "35–50 Quintals",
    referenceMspPrice: 14200,
    objectives: ["Maximum profit", "High value crop", "Export opportunities"],
    riskLevel: "Medium",
    commonWarnings: [
      "Heavy clay soils with poor drainage cause clove discolouration and rotting.",
      "Withhold watering 15 days before harvest to allow outer wrapper skins to dry properly."
    ],
    cultivationSummary: "Extremely high-value spice cash crop of Malwa region (Mandsaur, Neemuch, Kota). High export demand across GCC nations for Ooty and G2 varieties.",
    source: "ICAR-DOGR (Demo Reference)",
    lastUpdated: "2026-09-20"
  },
  {
    id: "chilli",
    name: "Dry Red Chilli (Teja / G4)",
    hindiName: "सूखी लाल मिर्च",
    scientificName: "Capsicum annuum",
    seasons: ["Kharif", "Rabi"],
    soilTypes: ["Black", "Loamy", "Red Sandy Loam"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Drip", "Furrow", "Borewell"],
    landTypes: ["Fertile", "Irrigated", "Normal"],
    durationDays: "150–180 days",
    durationRange: [150, 180],
    seedRate: 0.4, // 400 grams per acre
    seedRateUnit: "400 grams/acre (transplanted nursery)",
    seedCostPerKg: 18000,
    nutrientGuidance: {
      n: 48,
      p: 24,
      k: 32,
      applicationStage: "Basal application of P & K. Nitrogen top dressing in 3 equal splits at 30, 60, and 90 days after transplanting."
    },
    expectedYieldQuintalPerAcre: "18–28 Quintals (Dry pods)",
    referenceMspPrice: 21800,
    objectives: ["Maximum profit", "Export demand", "High value"],
    riskLevel: "Medium",
    commonWarnings: [
      "Susceptible to chilli leaf curl and thrips during hot dry weather.",
      "Ensure proper sun drying on clean tarpaulins to avoid aflatoxin contamination."
    ],
    cultivationSummary: "Major commercial spice crop of Guntur, Warangal, and Saurashtra. High capsaicin and ASTA color values command top export premiums in Vietnam, China, and USA.",
    source: "Spices Board of India & ICAR-IIHR",
    lastUpdated: "2026-09-20"
  },
  {
    id: "cumin",
    name: "Cumin Seeds (Jeera)",
    hindiName: "जीरा",
    scientificName: "Cuminum cyminum",
    seasons: ["Rabi"],
    soilTypes: ["Sandy Loam", "Loamy", "Alluvial"],
    waterRequirement: "Low",
    irrigationNeeded: ["Sprinkler", "Limited", "Borewell"],
    landTypes: ["Normal", "Dry/Arid", "Well-drained"],
    durationDays: "100–115 days",
    durationRange: [100, 115],
    seedRate: 5,
    seedRateUnit: "kg/acre",
    seedCostPerKg: 350,
    nutrientGuidance: {
      n: 12,
      p: 16,
      k: 12,
      applicationStage: "Basal application at sowing with seed treatment with Trichoderma viride."
    },
    expectedYieldQuintalPerAcre: "3.5–5.5 Quintals",
    referenceMspPrice: 25600,
    objectives: ["Maximum profit", "Low water requirement", "Export demand"],
    riskLevel: "High",
    commonWarnings: [
      "Extremely vulnerable to cloudy and humid weather leading to powdery mildew and blight.",
      "Requires dry and cool winter conditions with light, controlled irrigations."
    ],
    cultivationSummary: "High-value seed spice native to Gujarat (Unjha) and Rajasthan (Jodhpur, Bikaner). Commands global export market dominance (>70% world trade).",
    source: "ICAR-NRC on Seed Spices (NRCSS, Ajmer)",
    lastUpdated: "2026-09-20"
  },
  {
    id: "turmeric",
    name: "Turmeric (Haldi)",
    hindiName: "हल्दी",
    scientificName: "Curcuma longa",
    seasons: ["Kharif"],
    soilTypes: ["Loamy", "Alluvial", "Clay Loam", "Red Loam"],
    waterRequirement: "High",
    irrigationNeeded: ["Drip", "Furrow", "Canal", "Borewell"],
    landTypes: ["Fertile", "Irrigated", "Well-drained"],
    durationDays: "240–270 days",
    durationRange: [240, 270],
    seedRate: 800, // kg mother rhizomes per acre
    seedRateUnit: "kg seed rhizomes/acre (8 Quintals)",
    seedCostPerKg: 45,
    nutrientGuidance: {
      n: 48,
      p: 24,
      k: 48,
      applicationStage: "Heavily manured with FYM (10 tonnes/acre). Full P & K with split nitrogen applications up to 120 days."
    },
    expectedYieldQuintalPerAcre: "80–120 Quintals (Fresh rhizomes) / 18–25 Qtl Cured",
    referenceMspPrice: 13450,
    objectives: ["Maximum profit", "Long shelf life", "Export opportunities"],
    riskLevel: "Low",
    commonWarnings: [
      "Waterlogging causes fatal rhizome rot (Pythium aphanidermatum).",
      "Requires boiling and curing of harvested rhizomes within 2-3 days of harvest."
    ],
    cultivationSummary: "Ancient medicinal spice crop of Nizamabad, Sangli, and Erode. Varieties with >3.5% curcumin command high pharmaceutical and export value in Europe and North America.",
    source: "ICAR-Indian Institute of Spices Research (IISR, Kozhikode)",
    lastUpdated: "2026-09-20"
  },
  {
    id: "ginger",
    name: "Ginger (Adrak)",
    hindiName: "अदरक",
    scientificName: "Zingiber officinale",
    seasons: ["Kharif"],
    soilTypes: ["Sandy Loam", "Red Loam", "Clay Loam"],
    waterRequirement: "High",
    irrigationNeeded: ["Drip", "Sprinkler", "Furrow"],
    landTypes: ["Fertile", "Irrigated", "Well-drained"],
    durationDays: "210–240 days",
    durationRange: [210, 240],
    seedRate: 600, // kg seed rhizomes per acre
    seedRateUnit: "kg seed rhizomes/acre (6 Quintals)",
    seedCostPerKg: 65,
    nutrientGuidance: {
      n: 40,
      p: 20,
      k: 40,
      applicationStage: "Basal dressing with FYM and neem cake. Multistage mulching with green leaves (10-12 tonnes/acre) essential."
    },
    expectedYieldQuintalPerAcre: "60–90 Quintals (Fresh ginger)",
    referenceMspPrice: 5800,
    objectives: ["Maximum profit", "High value", "Export demand"],
    riskLevel: "Medium",
    commonWarnings: [
      "Soft rot (rhizome rot) is devastating in poorly drained soils.",
      "Green leaf mulching is mandatory to conserve moisture and suppress weeds."
    ],
    cultivationSummary: "High-value commercial rhizome crop cultivated across Karnataka, Kerala, Odisha, and Northeast India. Exceptional processing demand for dry ginger (Sonth) and oleoresin.",
    source: "ICAR-IISR Kozhikode",
    lastUpdated: "2026-09-20"
  },
  {
    id: "cauliflower",
    name: "Cauliflower",
    hindiName: "फूलगोभी",
    scientificName: "Brassica oleracea var. botrytis",
    seasons: ["Rabi", "Early Kharif"],
    soilTypes: ["Loamy", "Alluvial", "Clay Loam"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Furrow", "Drip", "Borewell"],
    landTypes: ["Fertile", "Irrigated", "Normal"],
    durationDays: "85–110 days",
    durationRange: [85, 110],
    seedRate: 0.25,
    seedRateUnit: "250 grams/acre (nursery)",
    seedCostPerKg: 16000,
    nutrientGuidance: {
      n: 48,
      p: 24,
      k: 32,
      applicationStage: "Basal application of P, K and 1/3 N. Apply Boron (5 kg Borax/acre) to prevent hollow stem and browning."
    },
    expectedYieldQuintalPerAcre: "80–120 Quintals",
    referenceMspPrice: 1600,
    objectives: ["Quick returns", "High yield", "Stable market demand"],
    riskLevel: "Medium",
    commonWarnings: [
      "Buttoning occurs if transplanted with over-aged seedlings.",
      "Curds turn yellow if exposed to direct sun; blanching by covering curds with inner leaves is advised."
    ],
    cultivationSummary: "Major Cole vegetable grown extensively during winter in northern and central plains. High demand in peri-urban wholesale mandis.",
    source: "ICAR-IIVR Varanasi",
    lastUpdated: "2026-09-20"
  },
  {
    id: "cabbage",
    name: "Cabbage",
    hindiName: "पत्तागोभी",
    scientificName: "Brassica oleracea var. capitata",
    seasons: ["Rabi", "Kharif"],
    soilTypes: ["Loamy", "Alluvial", "Clay"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Furrow", "Drip", "Canal"],
    landTypes: ["Fertile", "Irrigated", "Normal"],
    durationDays: "75–95 days",
    durationRange: [75, 95],
    seedRate: 0.2,
    seedRateUnit: "200 grams/acre (nursery)",
    seedCostPerKg: 14000,
    nutrientGuidance: {
      n: 48,
      p: 24,
      k: 32,
      applicationStage: "Basal application with FYM. Top dress nitrogen at 30 and 45 days after transplanting."
    },
    expectedYieldQuintalPerAcre: "120–180 Quintals",
    referenceMspPrice: 1250,
    objectives: ["Quick returns", "High yield", "Low risk"],
    riskLevel: "Low",
    commonWarnings: [
      "Diamondback moth (DBM) is a serious pest requiring IPM pheromone traps.",
      "Heavy irrigation after a dry period causes head bursting."
    ],
    cultivationSummary: "Hardy, high-yielding leafy crucifer crop. Excellent shipping endurance for long-distance truck transportation across state lines.",
    source: "ICAR-IIVR Varanasi",
    lastUpdated: "2026-09-20"
  },
  {
    id: "okra",
    name: "Ladyfinger / Okra (Bhindi)",
    hindiName: "भिंडी",
    scientificName: "Abelmoschus esculentus",
    seasons: ["Kharif", "Zaid"],
    soilTypes: ["Sandy Loam", "Loamy", "Black", "Alluvial"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Drip", "Furrow", "Borewell"],
    landTypes: ["Fertile", "Normal", "Irrigated"],
    durationDays: "65–85 days",
    durationRange: [65, 85],
    seedRate: 4,
    seedRateUnit: "kg/acre",
    seedCostPerKg: 1200,
    nutrientGuidance: {
      n: 40,
      p: 20,
      k: 24,
      applicationStage: "Half N and full P & K at sowing. Remaining N top-dressed in two splits at flowering and pod filling."
    },
    expectedYieldQuintalPerAcre: "45–65 Quintals",
    referenceMspPrice: 2800,
    objectives: ["Daily cash flow", "Quick harvest", "High returns"],
    riskLevel: "Medium",
    commonWarnings: [
      "Yellow Vein Mosaic Virus (YVMV) transmitted by whitefly can destroy entire crop. Choose resistant hybrids like Radhika/Kashi Kranti.",
      "Requires frequent pickings (every 2-3 days) to avoid pods becoming fibrous."
    ],
    cultivationSummary: "Premier short-duration vegetable giving continuous alternate-day picking income over a 2-month harvest window. Highly demanded in Gulf air-freight exports.",
    source: "ICAR-IIVR Varanasi",
    lastUpdated: "2026-09-20"
  },
  {
    id: "capsicum",
    name: "Capsicum / Bell Pepper",
    hindiName: "शिमला मिर्च",
    scientificName: "Capsicum annuum var. grossum",
    seasons: ["Rabi", "Kharif", "Polyhouse Year-round"],
    soilTypes: ["Loamy", "Sandy Loam", "Red Loam"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Drip with Fertigation", "Borewell"],
    landTypes: ["Fertile", "Shade-net / Polyhouse / Irrigated"],
    durationDays: "120–150 days",
    durationRange: [120, 150],
    seedRate: 0.1,
    seedRateUnit: "100 grams/acre (approx 10,000 seedlings)",
    seedCostPerKg: 45000,
    nutrientGuidance: {
      n: 60,
      p: 40,
      k: 60,
      applicationStage: "Water soluble fertigation (19:19:19, Potassium Nitrate, Calcium Nitrate) throughout 120-day picking cycle."
    },
    expectedYieldQuintalPerAcre: "140–200 Quintals (Open field) / 350+ Qtl Polyhouse",
    referenceMspPrice: 3800,
    objectives: ["Maximum profit", "High technology", "Urban retail demand"],
    riskLevel: "Medium",
    commonWarnings: [
      "Sunscald damage in open fields during high temperatures (above 35°C).",
      "Requires 4-wire trellis staking to support heavy multi-lobed bell peppers."
    ],
    cultivationSummary: "High-value premium vegetable. Colour capsicums (Red, Yellow) command ₹60–₹120/kg in metropolitan modern retail and quick-commerce chains.",
    source: "ICAR-IIHR Bengaluru",
    lastUpdated: "2026-09-20"
  },
  {
    id: "banana",
    name: "Cavendish Banana (Grand Naine G9)",
    hindiName: "केला",
    scientificName: "Musa acuminata",
    seasons: ["Kharif", "Rabi", "All Year"],
    soilTypes: ["Clay Loam", "Alluvial", "Black", "Fertile Loam"],
    waterRequirement: "High",
    irrigationNeeded: ["Drip Irrigation Mandatory", "Borewell", "Canal"],
    landTypes: ["Fertile", "Irrigated", "Well-drained"],
    durationDays: "330–365 days",
    durationRange: [330, 365],
    seedRate: 1200, // Tissue culture plants per acre
    seedRateUnit: "1,200 tissue culture plants/acre (1.8m x 1.8m spacing)",
    seedCostPerKg: 18, // per plant
    nutrientGuidance: {
      n: 80,
      p: 30,
      k: 120,
      applicationStage: "Intensive fertigation scheduling. High Potassium requirement during bunch development and finger filling."
    },
    expectedYieldQuintalPerAcre: "300–450 Quintals (30–45 MT)",
    referenceMspPrice: 1850,
    objectives: ["Maximum profit", "Massive bulk yield", "Export contracts"],
    riskLevel: "Low",
    commonWarnings: [
      "Sensitive to high velocity winds; bamboo propping of fruiting bunches is mandatory.",
      "Bunch sleeving with blue polythene covers prevents sunburn and thrips spots for export grade."
    ],
    cultivationSummary: "India is the world's largest banana producer. Tissue culture Grand Naine (G9) from Jalgaon, Solapur, and Theni leads maritime container shipments to Europe and the Middle East.",
    source: "ICAR-National Research Centre for Banana (NRCB, Tiruchirappalli)",
    lastUpdated: "2026-09-20"
  },
  {
    id: "mango",
    name: "Mango (Alphonso / Kesar)",
    hindiName: "आम",
    scientificName: "Mangifera indica",
    seasons: ["Perennial Orchard"],
    soilTypes: ["Laterite", "Alluvial", "Red Loam", "Black"],
    waterRequirement: "Medium",
    irrigationNeeded: ["Drip", "Borewell", "Rainfed once established"],
    landTypes: ["Fertile", "Well-drained", "Orchard land"],
    durationDays: "Perennial (Harvest Mar-Jun)",
    durationRange: [90, 120],
    seedRate: 70, // grafted trees per acre
    seedRateUnit: "70 grafted saplings/acre (Ultra High Density: 200/acre)",
    seedCostPerKg: 180,
    nutrientGuidance: {
      n: 40,
      p: 20,
      k: 40,
      applicationStage: "Applied in ring trenches after monsoon harvest. Micronutrient foliar spray (Zinc, Boron) during flowering panicle emergence."
    },
    expectedYieldQuintalPerAcre: "40–70 Quintals",
    referenceMspPrice: 6500,
    objectives: ["Long term wealth", "Export premium", "High value"],
    riskLevel: "Medium",
    commonWarnings: [
      "Inflorescence midge and powdery mildew can destroy blossom panicles.",
      "Vapour Heat Treatment (VHT) or irradiation mandatory for export to Japan and USA."
    ],
    cultivationSummary: "The king of fruits. GI-tagged Alphonso (Konkan) and Kesar (Gir, Gujarat) command top worldwide market valuations and institutional export contracts.",
    source: "ICAR-Central Institute for Subtropical Horticulture (CISH, Lucknow)",
    lastUpdated: "2026-09-20"
  },
  {
    id: "pomegranate",
    name: "Pomegranate (Bhagwa Variety)",
    hindiName: "अनार",
    scientificName: "Punica granatum",
    seasons: ["Ambe Bahar / Mrig Bahar / Hasta Bahar"],
    soilTypes: ["Light Loam", "Sandy Loam", "Red Soil", "Black"],
    waterRequirement: "Low",
    irrigationNeeded: ["Drip with Fertigation", "Borewell"],
    landTypes: ["Light", "Well-drained", "Arid / Semi-Arid"],
    durationDays: "150–180 days (Bahar treatment)",
    durationRange: [150, 180],
    seedRate: 300, // air layered plants per acre
    seedRateUnit: "300 tissue culture / air-layered plants/acre (4.5m x 3m)",
    seedCostPerKg: 85,
    nutrientGuidance: {
      n: 50,
      p: 25,
      k: 50,
      applicationStage: "Regulated fertigation synchronized with Bahar stress treatment and fruit development."
    },
    expectedYieldQuintalPerAcre: "60–90 Quintals (6–9 MT)",
    referenceMspPrice: 8500,
    objectives: ["Maximum profit", "Export opportunities", "Drought tolerant"],
    riskLevel: "Medium",
    commonWarnings: [
      "Bacterial blight (Telya - Xanthomonas axonopodis) requires strict sanitation and copper bactericide sprays.",
      "Fruit cracking occurs if irrigation is irregular during aril maturation."
    ],
    cultivationSummary: "Premier fruit crop of arid Maharashtra (Solapur, Nashik, Sangli). Bhagwa variety features glossy deep red arils with soft seeds and high export demand across Western Europe.",
    source: "ICAR-National Research Centre on Pomegranate (NRCP, Solapur)",
    lastUpdated: "2026-09-20"
  }
];
