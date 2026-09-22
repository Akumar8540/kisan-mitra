// Curated Indian Agricultural Crop Catalog Dataset
// Comprehensive 62-Crop Multi-Category Agricultural Registry
// ICAR, State Agricultural Universities, APMC and APEDA Standards Aligned

export const cropCategories = [
  "All",
  "Cereals & Millets",
  "Pulses & Legumes",
  "Oilseeds",
  "Vegetables",
  "Root & Leafy",
  "Spices & Cash Crops",
  "Fruits & Orchards"
];

export const cropCatalogData = [
  {
    "id": "soybean",
    "name": "Soybean",
    "hindiName": "सोयाबीन",
    "category": "Oilseeds",
    "scientificName": "Glycine max",
    "seasons": [
      "Kharif"
    ],
    "soilTypes": [
      "Black",
      "Loamy",
      "Clay",
      "Alluvial"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Rainfed",
      "Limited",
      "Assured"
    ],
    "landTypes": [
      "Normal",
      "Fertile",
      "Dry/Rainfed",
      "Partially Irrigated"
    ],
    "durationDays": "95–115 days",
    "durationRange": [
      95,
      115
    ],
    "seedRate": 25,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 85,
    "nutrientGuidance": {
      "n": 12,
      "p": 24,
      "k": 16,
      "applicationStage": "Basal application at sowing. Inoculate with Rhizobium japonicum culture."
    },
    "expectedYieldQuintalPerAcre": "8–12 Quintals",
    "referenceMspPrice": 4892,
    "objectives": [
      "Maximum profit",
      "Low water requirement",
      "Soil improvement",
      "Stable market demand"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Extremely sensitive to waterlogging during germination and flowering stages.",
      "Susceptible to yellow mosaic virus transmitted by whitefly.",
      "Ensure proper row spacing (45 cm) and drainage channels in black soils."
    ],
    "cultivationSummary": "Soybean is a premier oilseed and pulse crop of central India. It fixes atmospheric nitrogen into soil, improving fertility for subsequent Rabi crops.",
    "source": "ICAR-Indian Institute of Soybean Research, Indore"
  },
  {
    "id": "wheat",
    "name": "Wheat (Sharbati)",
    "hindiName": "शरबती गेहूं",
    "category": "Cereals & Millets",
    "scientificName": "Triticum aestivum",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Loamy",
      "Alluvial",
      "Clay",
      "Black"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Assured",
      "Limited",
      "Canal",
      "Borewell",
      "Sprinkler"
    ],
    "landTypes": [
      "Fertile",
      "Normal",
      "Irrigated",
      "Partially Irrigated"
    ],
    "durationDays": "120–135 days",
    "durationRange": [
      120,
      135
    ],
    "seedRate": 40,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 45,
    "nutrientGuidance": {
      "n": 48,
      "p": 24,
      "k": 16,
      "applicationStage": "Full P & K and 1/3 Nitrogen at basal. Remaining Nitrogen in two split doses at CRI (21 DAS) and flowering."
    },
    "expectedYieldQuintalPerAcre": "18–24 Quintals",
    "referenceMspPrice": 2425,
    "objectives": [
      "Food security",
      "Maximum profit",
      "Stable market demand",
      "Cold season fit"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "First irrigation at Crown Root Initiation (CRI) stage at 20-25 days is critical.",
      "Late sowing after Nov 25 causes terminal heat stress, reducing 1000-grain test weight.",
      "Monitor for yellow and brown rust during prolonged foggy morning periods."
    ],
    "cultivationSummary": "Wheat is the primary staple grain of the Indian Rabi season. Sharbati premium varieties command ₹300-₹600/qtl market premium over generic milling wheat.",
    "source": "ICAR-Indian Institute of Wheat & Barley Research, Karnal"
  },
  {
    "id": "wheat-durum",
    "name": "Durum Wheat (Malavraj)",
    "hindiName": "मालवी / कठिया गेहूं",
    "category": "Cereals & Millets",
    "scientificName": "Triticum durum",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Black",
      "Clay Loam",
      "Deep Black"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Limited",
      "Rainfed",
      "Borewell"
    ],
    "landTypes": [
      "Normal",
      "Dry/Rainfed",
      "Partially Irrigated"
    ],
    "durationDays": "115–125 days",
    "durationRange": [
      115,
      125
    ],
    "seedRate": 45,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 52,
    "nutrientGuidance": {
      "n": 36,
      "p": 20,
      "k": 12,
      "applicationStage": "Basal dose of DAP and MOP. Urea split at tillering stage."
    },
    "expectedYieldQuintalPerAcre": "15–20 Quintals",
    "referenceMspPrice": 2550,
    "objectives": [
      "Drought tolerance",
      "Pasta & Semolina export",
      "Low water requirement"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "High gluten and beta-carotene content makes it ideal for pasta and suji processing.",
      "Thrives well under limited irrigation (2 to 3 irrigations sufficient).",
      "Avoid excessive nitrogen which causes lodging in tall varieties."
    ],
    "cultivationSummary": "Durum wheat is drought-hardy and widely grown across the Malwa plateau and central peninsular India for semolina (suji) and international export.",
    "source": "ICAR-IARI Regional Station, Indore"
  },
  {
    "id": "paddy-basmati",
    "name": "Basmati Paddy (Pusa 1121)",
    "hindiName": "बासमती धान (1121)",
    "category": "Cereals & Millets",
    "scientificName": "Oryza sativa var. basmati",
    "seasons": [
      "Kharif"
    ],
    "soilTypes": [
      "Clay",
      "Clay Loam",
      "Alluvial"
    ],
    "waterRequirement": "High",
    "irrigationNeeded": [
      "Assured",
      "Canal",
      "Submerged"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated",
      "Lowland"
    ],
    "durationDays": "135–145 days",
    "durationRange": [
      135,
      145
    ],
    "seedRate": 8,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 140,
    "nutrientGuidance": {
      "n": 40,
      "p": 20,
      "k": 20,
      "applicationStage": "Basal P, K and Zinc Sulphate 10kg/acre. Nitrogen split into 3 doses."
    },
    "expectedYieldQuintalPerAcre": "16–22 Quintals",
    "referenceMspPrice": 4200,
    "objectives": [
      "High export value",
      "Maximum profit",
      "Global demand"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Maintain standing water (2-3 cm) during vegetative and panicle initiation stages.",
      "Apply Cartap Hydrochloride or Chlorantraniliprole for yellow stem borer control.",
      "Adhere to zero pesticide residue (MRL) protocols for EU and Middle East export compliance."
    ],
    "cultivationSummary": "Pusa 1121 Basmati is the world's longest grain rice, generating over $4.5 Billion in annual export realizations for Indian growers.",
    "source": "ICAR-Indian Agricultural Research Institute, New Delhi"
  },
  {
    "id": "paddy-non-basmati",
    "name": "Paddy (Non-Basmati Hybrid)",
    "hindiName": "धान / चावल (हाइब्रिड)",
    "category": "Cereals & Millets",
    "scientificName": "Oryza sativa",
    "seasons": [
      "Kharif",
      "Rabi"
    ],
    "soilTypes": [
      "Clay",
      "Alluvial",
      "Loamy"
    ],
    "waterRequirement": "High",
    "irrigationNeeded": [
      "Assured",
      "Canal",
      "Submerged"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated",
      "Lowland"
    ],
    "durationDays": "120–135 days",
    "durationRange": [
      120,
      135
    ],
    "seedRate": 10,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 95,
    "nutrientGuidance": {
      "n": 45,
      "p": 20,
      "k": 20,
      "applicationStage": "Apply DAP at transplanting. Top dress Urea at active tillering and panicle initiation."
    },
    "expectedYieldQuintalPerAcre": "25–32 Quintals",
    "referenceMspPrice": 2320,
    "objectives": [
      "High tonnage yield",
      "Food security",
      "Government procurement at MSP"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Prevent blast and bacterial leaf blight with seed treatment using Carbendazim.",
      "Drain field 10 days prior to harvest for uniform grain hardening.",
      "Zinc deficiency causes Khaira disease; apply Zinc Sulphate 21% @ 10 kg/acre."
    ],
    "cultivationSummary": "Hybrid non-basmati paddy produces massive grain biomass and is heavily supported by government FCI MSP procurement centers.",
    "source": "ICAR-National Rice Research Institute, Cuttack"
  },
  {
    "id": "maize",
    "name": "Yellow Maize (Corn)",
    "hindiName": "मक्का (पीला)",
    "category": "Cereals & Millets",
    "scientificName": "Zea mays",
    "seasons": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "soilTypes": [
      "Loamy",
      "Alluvial",
      "Black",
      "Sandy Loam"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Limited",
      "Assured",
      "Drip",
      "Sprinkler"
    ],
    "landTypes": [
      "Normal",
      "Fertile",
      "Partially Irrigated"
    ],
    "durationDays": "95–110 days",
    "durationRange": [
      95,
      110
    ],
    "seedRate": 8,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 180,
    "nutrientGuidance": {
      "n": 48,
      "p": 24,
      "k": 20,
      "applicationStage": "Apply NPK at basal. Side dress Urea at knee-high and tasseling stages."
    },
    "expectedYieldQuintalPerAcre": "22–30 Quintals",
    "referenceMspPrice": 2225,
    "objectives": [
      "Feed & starch industry demand",
      "Maximum profit",
      "Quick turnaround"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Extremely vulnerable to Fall Armyworm (Spodoptera frugiperda); monitor leaf whorls early.",
      "Requires well-drained fertile loam; cannot tolerate standing water for >12 hours.",
      "Silking and grain development are critical moisture stress periods."
    ],
    "cultivationSummary": "Maize is an industrial powerhouse with round-the-year demand from poultry feed manufacturers, starch refineries, and ethanol distilleries.",
    "source": "ICAR-Indian Institute of Maize Research, Ludhiana"
  },
  {
    "id": "cotton",
    "name": "Bt Cotton (Long Staple)",
    "hindiName": "कपास (बीटी कॉटन)",
    "category": "Cereals & Millets",
    "scientificName": "Gossypium hirsutum",
    "seasons": [
      "Kharif"
    ],
    "soilTypes": [
      "Deep Black",
      "Clay Loam",
      "Alluvial"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Limited",
      "Rainfed",
      "Drip"
    ],
    "landTypes": [
      "Fertile",
      "Normal",
      "Partially Irrigated"
    ],
    "durationDays": "150–180 days",
    "durationRange": [
      150,
      180
    ],
    "seedRate": 1.8,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 950,
    "nutrientGuidance": {
      "n": 45,
      "p": 20,
      "k": 25,
      "applicationStage": "Basal NPK with Sulphur. Regular foliar spray of 00:52:34 and Boron during boll development."
    },
    "expectedYieldQuintalPerAcre": "10–16 Quintals",
    "referenceMspPrice": 7521,
    "objectives": [
      "Maximum cash realization",
      "Textile mill procurement",
      "High market price"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Install pheromone traps (5/acre) to monitor Pink Bollworm (Pectinophora gossypiella).",
      "Avoid excess nitrogen in humid weather which causes vegetative overgrowth without bolls.",
      "Clean pick bolls after dew evaporates to prevent moisture discoloration and lint degrade."
    ],
    "cultivationSummary": "Bt Cotton ('White Gold') is India's leading commercial fiber crop, dominating Maharashtra, Gujarat, Telangana, and Madhya Pradesh.",
    "source": "ICAR-Central Institute for Cotton Research, Nagpur"
  },
  {
    "id": "bajra",
    "name": "Pearl Millet (Bajra)",
    "hindiName": "बाजरा",
    "category": "Cereals & Millets",
    "scientificName": "Pennisetum glaucum",
    "seasons": [
      "Kharif",
      "Zaid"
    ],
    "soilTypes": [
      "Sandy",
      "Sandy Loam",
      "Light Red",
      "Loamy"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Rainfed",
      "Limited"
    ],
    "landTypes": [
      "Dry/Rainfed",
      "Normal",
      "Sandy Arid"
    ],
    "durationDays": "75–90 days",
    "durationRange": [
      75,
      90
    ],
    "seedRate": 2,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 120,
    "nutrientGuidance": {
      "n": 24,
      "p": 12,
      "k": 10,
      "applicationStage": "Basal application of NPK. Nitrogen split at tillering."
    },
    "expectedYieldQuintalPerAcre": "12–18 Quintals",
    "referenceMspPrice": 2625,
    "objectives": [
      "Drought tolerance",
      "Nutri-cereal demand",
      "Low input cost"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "High drought and heat tolerance; thrives in arid Rajasthan and Gujarat soils.",
      "Monitor for downy mildew (green ear disease) during overcast humid monsoon days.",
      "Harvest when grain moisture drops to 14% to prevent field earhead mold."
    ],
    "cultivationSummary": "Bajra is a climate-resilient super-grain loaded with iron, zinc, and dietary fiber, experiencing surging demand under the National Millets Mission.",
    "source": "ICAR-All India Coordinated Research Project on Pearl Millet, Jodhpur"
  },
  {
    "id": "jowar",
    "name": "Sorghum (Jowar / Maldandi)",
    "hindiName": "ज्वार (मालदांडी)",
    "category": "Cereals & Millets",
    "scientificName": "Sorghum bicolor",
    "seasons": [
      "Kharif",
      "Rabi"
    ],
    "soilTypes": [
      "Medium Black",
      "Loamy",
      "Clay Loam"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Rainfed",
      "Limited"
    ],
    "landTypes": [
      "Normal",
      "Dry/Rainfed",
      "Black Soil"
    ],
    "durationDays": "105–125 days",
    "durationRange": [
      105,
      125
    ],
    "seedRate": 4,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 80,
    "nutrientGuidance": {
      "n": 32,
      "p": 16,
      "k": 12,
      "applicationStage": "Basal application of DAP. Urea top dress at 30 days."
    },
    "expectedYieldQuintalPerAcre": "10–15 Quintals",
    "referenceMspPrice": 3371,
    "objectives": [
      "Nutri-cereal health food",
      "Drought resilience",
      "Dual purpose grain & fodder"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Maldandi M35-1 is the gold standard for Rabi jowar producing sweet, pearly grains.",
      "Susceptible to shoot fly during early 4-leaf stage; use carbofuran or seed treatment.",
      "Dry fodder (karbi) is exceptionally nutritious for cattle and dairy livestock."
    ],
    "cultivationSummary": "Jowar is a gluten-free ancient grain celebrated for drought resistance, providing both premium human food grains and valuable livestock fodder.",
    "source": "ICAR-Indian Institute of Millets Research, Hyderabad"
  },
  {
    "id": "ragi",
    "name": "Finger Millet (Ragi)",
    "hindiName": "रागी / मंडुआ",
    "category": "Cereals & Millets",
    "scientificName": "Eleusine coracana",
    "seasons": [
      "Kharif"
    ],
    "soilTypes": [
      "Red Loam",
      "Sandy Loam",
      "Laterite"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Rainfed",
      "Limited"
    ],
    "landTypes": [
      "Normal",
      "Dry/Rainfed",
      "Hilly / Sloping"
    ],
    "durationDays": "100–120 days",
    "durationRange": [
      100,
      120
    ],
    "seedRate": 2,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 110,
    "nutrientGuidance": {
      "n": 24,
      "p": 16,
      "k": 12,
      "applicationStage": "Apply FYM 5 tons/acre + basal NPK."
    },
    "expectedYieldQuintalPerAcre": "10–14 Quintals",
    "referenceMspPrice": 4290,
    "objectives": [
      "Calcium superfood",
      "High MSP realization",
      "Organic suitability"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Rich in calcium (344mg/100g), ragi commands rising urban consumer demand.",
      "Blast disease (Pyricularia grisea) can affect neck and finger; use Trichoderma seed coat.",
      "Highly adaptable to poor soils and rainfed upland conditions."
    ],
    "cultivationSummary": "Ragi is India's leading calcium-rich millet, fetching exceptionally high MSP and retail consumer prices across southern and eastern states.",
    "source": "University of Agricultural Sciences, Bengaluru / ICAR"
  },
  {
    "id": "chana-desi",
    "name": "Chickpea (Desi Chana)",
    "hindiName": "चना (देसी)",
    "category": "Pulses & Legumes",
    "scientificName": "Cicer arietinum",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Black",
      "Loamy",
      "Clay Loam",
      "Alluvial"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Rainfed",
      "Limited",
      "Sprinkler"
    ],
    "landTypes": [
      "Dry/Rainfed",
      "Normal",
      "Residual Moisture"
    ],
    "durationDays": "105–120 days",
    "durationRange": [
      105,
      120
    ],
    "seedRate": 30,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 75,
    "nutrientGuidance": {
      "n": 8,
      "p": 20,
      "k": 10,
      "applicationStage": "Basal DAP 40 kg/acre + Sulphur 10 kg/acre. Inoculate with Rhizobium."
    },
    "expectedYieldQuintalPerAcre": "8–12 Quintals",
    "referenceMspPrice": 5440,
    "objectives": [
      "Pulse MSP guarantee",
      "Low water requirement",
      "Soil nitrogen fixation"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Pod borer (Helicoverpa armigera) is the main pest; spray Emamectin Benzoate 5% SG at flowering.",
      "Do NOT irrigate during peak flowering as it triggers vegetative shedding of flowers.",
      "Prone to Fusarium wilt in warm soil; ensure seed treatment with Trichoderma viride."
    ],
    "cultivationSummary": "Desi Chana is the cornerstone pulse crop of the Indian Rabi season, thriving on conserved residual soil moisture across MP, Rajasthan, and Maharashtra.",
    "source": "ICAR-Indian Institute of Pulses Research, Kanpur"
  },
  {
    "id": "chana-kabuli",
    "name": "Kabuli Chana (Dollar Chickpea)",
    "hindiName": "काबुली चना (डॉलर चना)",
    "category": "Pulses & Legumes",
    "scientificName": "Cicer arietinum var. kabuli",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Deep Black",
      "Well-drained Loam"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Limited",
      "Assured",
      "Sprinkler"
    ],
    "landTypes": [
      "Fertile",
      "Normal",
      "Irrigated"
    ],
    "durationDays": "100–115 days",
    "durationRange": [
      100,
      115
    ],
    "seedRate": 45,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 130,
    "nutrientGuidance": {
      "n": 10,
      "p": 24,
      "k": 12,
      "applicationStage": "Basal DAP and Potash. Foliar 19:19:19 spray prior to flowering."
    },
    "expectedYieldQuintalPerAcre": "9–14 Quintals",
    "referenceMspPrice": 7200,
    "objectives": [
      "High market price",
      "Export grade produce",
      "Maximum profit"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Bold grain dollar varieties (PKV-2, Dollar) fetch premium rates of ₹8,000-₹11,000/qtl in APMCs.",
      "Seed coat is thinner than desi chana, making it more vulnerable to soil damping-off.",
      "Maintain strict moisture management; avoid heavy flood irrigation."
    ],
    "cultivationSummary": "Kabuli Chana features large, cream-colored bold grains destined for domestic restaurants, canning, and high-margin Middle Eastern export.",
    "source": "ICAR-IIPR Regional Station, Bhopal"
  },
  {
    "id": "tur-pigeonpea",
    "name": "Pigeon Pea (Tur / Arhar)",
    "hindiName": "अरहर / तुअर दाल",
    "category": "Pulses & Legumes",
    "scientificName": "Cajanus cajan",
    "seasons": [
      "Kharif"
    ],
    "soilTypes": [
      "Black",
      "Loamy",
      "Deep Alluvial"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Rainfed",
      "Limited"
    ],
    "landTypes": [
      "Normal",
      "Dry/Rainfed",
      "Partially Irrigated"
    ],
    "durationDays": "150–180 days",
    "durationRange": [
      150,
      180
    ],
    "seedRate": 5,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 140,
    "nutrientGuidance": {
      "n": 10,
      "p": 25,
      "k": 10,
      "applicationStage": "Basal DAP + Gypsum 50 kg/acre for sulfur enrichment."
    },
    "expectedYieldQuintalPerAcre": "7–11 Quintals",
    "referenceMspPrice": 7550,
    "objectives": [
      "High pulse value",
      "Drought tolerance",
      "Substantial market demand"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Deep taproot penetrates up to 2 meters, providing unmatched drought endurance.",
      "Prone to pod borer and pod fly; spray Chlorantraniliprole 18.5% SC at 50% pod formation.",
      "Intercrop with soybean or cotton (1:3 or 1:4 ratio) for maximized acre profit."
    ],
    "cultivationSummary": "Tur is India's most beloved dal, maintaining high market realizations throughout the year across Maharashtra, Karnataka, and MP.",
    "source": "ICAR-IIPR, Kanpur & ICRISAT"
  },
  {
    "id": "moong",
    "name": "Green Gram (Moong Dal)",
    "hindiName": "मूंग",
    "category": "Pulses & Legumes",
    "scientificName": "Vigna radiata",
    "seasons": [
      "Kharif",
      "Zaid"
    ],
    "soilTypes": [
      "Loamy",
      "Sandy Loam",
      "Alluvial"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Rainfed",
      "Limited",
      "Sprinkler"
    ],
    "landTypes": [
      "Normal",
      "Dry/Rainfed",
      "Catch Crop"
    ],
    "durationDays": "60–70 days",
    "durationRange": [
      60,
      70
    ],
    "seedRate": 8,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 120,
    "nutrientGuidance": {
      "n": 8,
      "p": 16,
      "k": 8,
      "applicationStage": "Basal DAP 30 kg/acre. Seed treatment with Rhizobium."
    },
    "expectedYieldQuintalPerAcre": "5–8 Quintals",
    "referenceMspPrice": 8682,
    "objectives": [
      "Ultra-fast 60-day turnaround",
      "Highest pulse MSP",
      "Soil fertility booster"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Ultra-short duration (60-65 days) makes it the ideal summer catch crop after wheat or mustard.",
      "Yellow Mosaic Virus is transmitted by whitefly; plant YMV-tolerant varieties like IPM 205-7 (Virat).",
      "Harvest promptly when 80% pods turn dark brown to prevent pod shattering."
    ],
    "cultivationSummary": "Moong matures in just 60 days, fixing high atmospheric nitrogen and commanding the highest MSP among all major Indian pulses at ₹8,682/qtl.",
    "source": "ICAR-Indian Institute of Pulses Research, Kanpur"
  },
  {
    "id": "urad",
    "name": "Black Gram (Urad Dal)",
    "hindiName": "उड़द",
    "category": "Pulses & Legumes",
    "scientificName": "Vigna mungo",
    "seasons": [
      "Kharif",
      "Zaid"
    ],
    "soilTypes": [
      "Black",
      "Loamy",
      "Clay Loam"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Rainfed",
      "Limited"
    ],
    "landTypes": [
      "Normal",
      "Dry/Rainfed"
    ],
    "durationDays": "70–85 days",
    "durationRange": [
      70,
      85
    ],
    "seedRate": 8,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 110,
    "nutrientGuidance": {
      "n": 8,
      "p": 16,
      "k": 8,
      "applicationStage": "Basal DAP 30 kg/acre. Seed inoculation with Rhizobium."
    },
    "expectedYieldQuintalPerAcre": "5–8 Quintals",
    "referenceMspPrice": 7400,
    "objectives": [
      "Short duration pulse",
      "High market demand",
      "Soil improvement"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Essential ingredient for papad, dal makhani, and South Indian idli/dosa fermentation batter.",
      "Susceptible to powdery mildew in cloudy weather; spray Hexaconazole 5% EC.",
      "Avoid poorly drained soils with prolonged water stagnation."
    ],
    "cultivationSummary": "Black Gram is an essential culinary pulse across India, delivering dependable market prices and significant soil restorative benefits.",
    "source": "ICAR-IIPR, Kanpur"
  },
  {
    "id": "masoor",
    "name": "Lentil (Masoor Dal)",
    "hindiName": "मसूर",
    "category": "Pulses & Legumes",
    "scientificName": "Lens culinaris",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Alluvial",
      "Clay Loam",
      "Light Black"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Rainfed",
      "Limited"
    ],
    "landTypes": [
      "Normal",
      "Dry/Rainfed",
      "Residual Moisture"
    ],
    "durationDays": "110–125 days",
    "durationRange": [
      110,
      125
    ],
    "seedRate": 15,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 85,
    "nutrientGuidance": {
      "n": 8,
      "p": 16,
      "k": 8,
      "applicationStage": "Basal DAP 35 kg/acre + Zinc Sulphate 5 kg/acre."
    },
    "expectedYieldQuintalPerAcre": "6–10 Quintals",
    "referenceMspPrice": 6700,
    "objectives": [
      "Cold hardy Rabi pulse",
      "Low water consumption",
      "Stable MSP"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Extremely cold tolerant; thrives in UP, MP, Bihar, and West Bengal winter conditions.",
      "Requires only 1-2 light protective irrigations during dry winters.",
      "Rust and wilt can be prevented with seed treatment using Thiram + Carbendazim."
    ],
    "cultivationSummary": "Masoor is a staple red pulse known for exceptional iron and protein content, performing reliably in low-input winter farming systems.",
    "source": "ICAR-IIPR, Kanpur"
  },
  {
    "id": "matar-pea",
    "name": "Field Pea (Dry Matar)",
    "hindiName": "मटर (फील्ड पी)",
    "category": "Pulses & Legumes",
    "scientificName": "Pisum sativum var. arvense",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Loamy",
      "Alluvial",
      "Clay Loam"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Limited",
      "Assured"
    ],
    "landTypes": [
      "Normal",
      "Irrigated",
      "Partially Irrigated"
    ],
    "durationDays": "100–120 days",
    "durationRange": [
      100,
      120
    ],
    "seedRate": 35,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 70,
    "nutrientGuidance": {
      "n": 10,
      "p": 20,
      "k": 10,
      "applicationStage": "Basal DAP 40 kg/acre. Seed inoculation with Rhizobium leguminosarum."
    },
    "expectedYieldQuintalPerAcre": "8–14 Quintals",
    "referenceMspPrice": 5650,
    "objectives": [
      "Dual market (Fresh pod / Dry grain)",
      "Fast cash flow",
      "Soil conditioning"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Harvest early for lucrative green pods (fresh table pea) or let dry for pulse split peas.",
      "Highly prone to powdery mildew (Erysiphe pisi); spray wettable sulfur 2g/L.",
      "Sensitive to frost during flowering; apply light evening sprinkler irrigation during cold waves."
    ],
    "cultivationSummary": "Field Pea serves dual culinary markets as fresh green pods and dried yellow/green split peas, popular in rotation with paddy.",
    "source": "ICAR-IIPR, Kanpur"
  },
  {
    "id": "lobia",
    "name": "Cowpea (Lobia / Chawli)",
    "hindiName": "लोबिया / चंवली",
    "category": "Pulses & Legumes",
    "scientificName": "Vigna unguiculata",
    "seasons": [
      "Kharif",
      "Zaid"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Loamy",
      "Red Soil"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Rainfed",
      "Limited"
    ],
    "landTypes": [
      "Normal",
      "Dry/Rainfed",
      "Poor Soil"
    ],
    "durationDays": "65–80 days",
    "durationRange": [
      65,
      80
    ],
    "seedRate": 10,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 95,
    "nutrientGuidance": {
      "n": 8,
      "p": 16,
      "k": 8,
      "applicationStage": "Basal NPK with FYM. Highly efficient nitrogen fixer."
    },
    "expectedYieldQuintalPerAcre": "6–9 Quintals",
    "referenceMspPrice": 6200,
    "objectives": [
      "Fast growing catch crop",
      "High protein vegetable & grain",
      "Green manuring"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Can be harvested as tender green pods at 45 days or dried grains at 70 days.",
      "Excellent cover crop that suppresses weeds and prevents monsoon soil erosion.",
      "Controls aphids with Neem oil 1500 ppm or Thiamethoxam spray."
    ],
    "cultivationSummary": "Cowpea is an exceptionally hardy, drought-tolerant legume providing nutritious green vegetable pods, dried beans, and rich fodder.",
    "source": "ICAR-Indian Agricultural Research Institute, New Delhi"
  },
  {
    "id": "mustard",
    "name": "Mustard / Rapeseed (Sarson)",
    "hindiName": "सरसों / राई",
    "category": "Oilseeds",
    "scientificName": "Brassica juncea",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Loamy",
      "Sandy Loam",
      "Alluvial",
      "Clay Loam"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Limited",
      "Assured",
      "Sprinkler"
    ],
    "landTypes": [
      "Normal",
      "Fertile",
      "Partially Irrigated",
      "Dry/Rainfed"
    ],
    "durationDays": "115–130 days",
    "durationRange": [
      115,
      130
    ],
    "seedRate": 1.5,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 160,
    "nutrientGuidance": {
      "n": 32,
      "p": 16,
      "k": 12,
      "applicationStage": "Basal DAP + Elemental Sulphur 10 kg/acre (crucial for 40%+ oil content). Urea top dress at 30 DAS."
    },
    "expectedYieldQuintalPerAcre": "8–12 Quintals",
    "referenceMspPrice": 5950,
    "objectives": [
      "High oil content",
      "Low irrigation requirement",
      "High market return"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Mustard Aphids (Lipaphis erysimi) attack in cloudy Jan/Feb weather; spray Thiamethoxam 25% WG.",
      "Sulphur application is non-negotiable; increases oil recovery by 2.5% to 4.0%.",
      "First irrigation at 28-32 DAS (flowering initiation) dramatically boosts siliqua branching."
    ],
    "cultivationSummary": "Mustard is India's premier edible winter oilseed, producing pungent, golden cooking oil across Rajasthan, Haryana, UP, and MP.",
    "source": "ICAR-Directorate of Rapeseed-Mustard Research, Bharatpur"
  },
  {
    "id": "groundnut",
    "name": "Groundnut (Peanut / Mungfali)",
    "hindiName": "मूंगफली",
    "category": "Oilseeds",
    "scientificName": "Arachis hypogaea",
    "seasons": [
      "Kharif",
      "Zaid"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Loamy",
      "Well-drained Red"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Limited",
      "Assured",
      "Sprinkler"
    ],
    "landTypes": [
      "Normal",
      "Fertile",
      "Sandy Soil"
    ],
    "durationDays": "110–125 days",
    "durationRange": [
      110,
      125
    ],
    "seedRate": 40,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 105,
    "nutrientGuidance": {
      "n": 10,
      "p": 20,
      "k": 15,
      "applicationStage": "Basal application with Gypsum 150 kg/acre at pegging stage (calcium ensures bold pods)."
    },
    "expectedYieldQuintalPerAcre": "10–16 Quintals",
    "referenceMspPrice": 6783,
    "objectives": [
      "High edible oil realization",
      "Export bold peanut grade",
      "Rich cattle feed haulms"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Gypsum application at 45 days (pegging stage) is essential to prevent 'pops' (empty pods).",
      "Avoid heavy compacted clay soils which obstruct subterranean peg penetration.",
      "Tikka leaf spot is common; spray Mancozeb or Tebuconazole upon first spotting."
    ],
    "cultivationSummary": "Groundnut is an invaluable oilseed and confectionery snack crop, yielding rich edible oil and high-protein defatted cake across Gujarat and Andhra.",
    "source": "ICAR-Directorate of Groundnut Research, Junagadh"
  },
  {
    "id": "sunflower",
    "name": "Sunflower",
    "hindiName": "सूरजमुखी",
    "category": "Oilseeds",
    "scientificName": "Helianthus annuus",
    "seasons": [
      "Rabi",
      "Zaid",
      "Kharif"
    ],
    "soilTypes": [
      "Black",
      "Loamy",
      "Alluvial"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Limited",
      "Assured"
    ],
    "landTypes": [
      "Normal",
      "Fertile",
      "Partially Irrigated"
    ],
    "durationDays": "90–105 days",
    "durationRange": [
      90,
      105
    ],
    "seedRate": 2.5,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 350,
    "nutrientGuidance": {
      "n": 24,
      "p": 24,
      "k": 12,
      "applicationStage": "Basal NPK with Boron 2 kg/acre to ensure complete seed filling in head center."
    },
    "expectedYieldQuintalPerAcre": "7–11 Quintals",
    "referenceMspPrice": 7280,
    "objectives": [
      "Heart-healthy PUFA oil",
      "Photo-insensitive (grows in any season)",
      "High MSP"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Photo-insensitive; can be cultivated in Rabi, Kharif, or summer Zaid seasons.",
      "Boron spray (0.2% Solubor) at star bud stage prevents central head seed hollowness.",
      "Parrot bird damage during maturity can cause 20%+ grain losses; install reflective ribbons."
    ],
    "cultivationSummary": "Sunflower yields premium heart-healthy edible oil rich in linoleic polyunsaturated fatty acids (PUFA), popular in Karnataka and Maharashtra.",
    "source": "ICAR-Indian Institute of Oilseeds Research, Hyderabad"
  },
  {
    "id": "sesame",
    "name": "Sesame (White Til)",
    "hindiName": "सफेद तिल",
    "category": "Oilseeds",
    "scientificName": "Sesamum indicum",
    "seasons": [
      "Kharif",
      "Zaid"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Loamy",
      "Light Alluvial"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Rainfed",
      "Limited"
    ],
    "landTypes": [
      "Dry/Rainfed",
      "Normal"
    ],
    "durationDays": "80–95 days",
    "durationRange": [
      80,
      95
    ],
    "seedRate": 1.5,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 280,
    "nutrientGuidance": {
      "n": 16,
      "p": 10,
      "k": 10,
      "applicationStage": "Basal NPK with FYM. Light feeder crop."
    },
    "expectedYieldQuintalPerAcre": "3–5 Quintals",
    "referenceMspPrice": 9267,
    "objectives": [
      "Premium export commodity",
      "Highest oilseed MSP",
      "Very low water consumption"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Natural 99.9% purity hulled white sesame commands premium prices of ₹12,000-₹16,000/qtl in global trade.",
      "Extremely small seeds; mix with dry sand (1:4 ratio) for uniform shallow broadcasting.",
      "Phyllody disease (transmitted by leafhoppers) turns flowers into green leafy masses; manage vectors early."
    ],
    "cultivationSummary": "Sesame ('Queen of Oilseeds') features 50%+ oil content and natural sesamol antioxidants, enjoying sky-high domestic and export market prices.",
    "source": "ICAR-IIOR & Gujarat Agricultural University"
  },
  {
    "id": "safflower",
    "name": "Safflower (Kusum)",
    "hindiName": "कुसुम / करड़ी",
    "category": "Oilseeds",
    "scientificName": "Carthamus tinctorius",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Deep Black",
      "Clay Loam"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Rainfed",
      "Limited"
    ],
    "landTypes": [
      "Dry/Rainfed",
      "Residual Moisture"
    ],
    "durationDays": "125–140 days",
    "durationRange": [
      125,
      140
    ],
    "seedRate": 6,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 110,
    "nutrientGuidance": {
      "n": 16,
      "p": 12,
      "k": 8,
      "applicationStage": "Basal application of NPK in deep moisture zone."
    },
    "expectedYieldQuintalPerAcre": "6–10 Quintals",
    "referenceMspPrice": 5800,
    "objectives": [
      "Deep root drought tolerance",
      "Cold-pressed healthy oil",
      "Wildlife deer-resistant"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Spiny leaves make it naturally resistant to stray cattle and wild boar grazing.",
      "Deep taproot draws moisture from deep black soil layers up to 3 meters.",
      "Safflower aphids are the sole major pest; control with Dimethoate 30% EC."
    ],
    "cultivationSummary": "Safflower is a traditional spiny oilseed of the Deccan Plateau prized for light polyunsaturated cooking oil that lowers blood cholesterol.",
    "source": "ICAR-Indian Institute of Oilseeds Research, Hyderabad"
  },
  {
    "id": "linseed",
    "name": "Linseed / Flaxseed (Alsi)",
    "hindiName": "अलसी",
    "category": "Oilseeds",
    "scientificName": "Linum usitatissimum",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Black",
      "Alluvial",
      "Clay Loam"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Rainfed",
      "Limited"
    ],
    "landTypes": [
      "Dry/Rainfed",
      "Normal"
    ],
    "durationDays": "115–130 days",
    "durationRange": [
      115,
      130
    ],
    "seedRate": 12,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 90,
    "nutrientGuidance": {
      "n": 20,
      "p": 12,
      "k": 8,
      "applicationStage": "Basal NPK application."
    },
    "expectedYieldQuintalPerAcre": "5–8 Quintals",
    "referenceMspPrice": 6100,
    "objectives": [
      "Omega-3 superfood demand",
      "Industrial & medicinal oil",
      "Low input cost"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "World's richest plant source of Omega-3 alpha-linolenic acid (ALA); surging nutraceutical market.",
      "Excellent intercrop with wheat, chickpea, or mustard.",
      "Rust and wilt resistant varieties like JLS-67 and Ruchi should be preferred."
    ],
    "cultivationSummary": "Flaxseed / Alsi is experiencing a global wellness revolution as an Omega-3 superfood while providing high-grade industrial linseed oil.",
    "source": "ICAR-All India Coordinated Research Project on Linseed, Kanpur"
  },
  {
    "id": "castor",
    "name": "Castor (Arandi)",
    "hindiName": "अरंडी",
    "category": "Oilseeds",
    "scientificName": "Ricinus communis",
    "seasons": [
      "Kharif"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Loamy",
      "Red Loam"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Limited",
      "Drip",
      "Rainfed"
    ],
    "landTypes": [
      "Normal",
      "Dry/Rainfed",
      "Semi-Arid"
    ],
    "durationDays": "150–210 days",
    "durationRange": [
      150,
      210
    ],
    "seedRate": 2.5,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 220,
    "nutrientGuidance": {
      "n": 32,
      "p": 16,
      "k": 12,
      "applicationStage": "Basal NPK followed by Urea top dress after successive raceme flushes."
    },
    "expectedYieldQuintalPerAcre": "12–18 Quintals",
    "referenceMspPrice": 6800,
    "objectives": [
      "Global industrial oil export",
      "Drought resistance",
      "Multi-picking cash flow"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "India produces over 85% of the world's castor oil, primarily in Gujarat and Rajasthan.",
      "Castor semilooper and capsule borer require regular scouting during raceme formation.",
      "Seeds are toxic if ingested by humans/cattle due to ricin; handle with standard gloves."
    ],
    "cultivationSummary": "Castor is an industrial export giant producing high-viscosity ricinoleic oil used in aerospace lubricants, cosmetics, and specialty polymers.",
    "source": "Sardarkrushinagar Dantiwada Agricultural University / ICAR"
  },
  {
    "id": "onion-red",
    "name": "Red Onion (Nashik Garwa)",
    "hindiName": "लाल प्याज (नासिक गरवा)",
    "category": "Vegetables",
    "scientificName": "Allium cepa",
    "seasons": [
      "Rabi",
      "Kharif",
      "Late Kharif"
    ],
    "soilTypes": [
      "Loamy",
      "Alluvial",
      "Sandy Loam",
      "Medium Black"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip",
      "Sprinkler",
      "Assured",
      "Limited"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated",
      "Well-drained"
    ],
    "durationDays": "115–130 days",
    "durationRange": [
      115,
      130
    ],
    "seedRate": 4,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 1200,
    "nutrientGuidance": {
      "n": 40,
      "p": 20,
      "k": 30,
      "applicationStage": "Basal NPK + Sulphur 15 kg/acre. Foliar 00:52:34 and Micronutrients during bulb swelling."
    },
    "expectedYieldQuintalPerAcre": "120–160 Quintals",
    "referenceMspPrice": 2200,
    "objectives": [
      "Maximum cash return",
      "Long storage shelf-life",
      "Export to Gulf & SE Asia"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Thrips tabaci attack during dry spells; spray Fipronil 5% SC or spinetoram.",
      "Purple blotch fungus develops in humid fog; spray Mancozeb + Carbendazim.",
      "Stop irrigation 15 days prior to harvest; cure bulbs under shade for 4 days before storage."
    ],
    "cultivationSummary": "Nashik Red Garwa Onion has an exceptional 5-6 month shelf-life due to thick dry scales, driving trade at Lasalgaon APMC and direct export to UAE and Malaysia.",
    "source": "ICAR-Directorate of Onion & Garlic Research, Rajgurunagar, Pune"
  },
  {
    "id": "onion-white",
    "name": "White Onion (Mahuva Dehydration)",
    "hindiName": "सफेद प्याज (डिहाइड्रेशन)",
    "category": "Vegetables",
    "scientificName": "Allium cepa var. album",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Loamy",
      "Well-drained Black"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip",
      "Sprinkler",
      "Assured"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated"
    ],
    "durationDays": "120–135 days",
    "durationRange": [
      120,
      135
    ],
    "seedRate": 4,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 1400,
    "nutrientGuidance": {
      "n": 40,
      "p": 20,
      "k": 30,
      "applicationStage": "High potassium and sulfur inputs boost Total Soluble Solids (TSS 14-16° Brix)."
    },
    "expectedYieldQuintalPerAcre": "130–170 Quintals",
    "referenceMspPrice": 2400,
    "objectives": [
      "Contract farming with processing plants",
      "Export of dehydrated flakes",
      "Price stability"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Bred for high dry matter (TSS > 15%), making it the #1 choice for onion powder factories.",
      "Mahuva and Bhavnagar (Gujarat) dehydration clusters offer long-term advance buyback contracts.",
      "Keep soil weed-free during initial 45 days using Pendimethalin pre-emergence."
    ],
    "cultivationSummary": "White onion is grown primarily under contract for dehydration into export flakes, powder, and kibbled onion shipped to Europe and North America.",
    "source": "ICAR-DOGR, Pune & Junagadh Agricultural University"
  },
  {
    "id": "tomato",
    "name": "Hybrid Tomato (Abhinav / Shivam)",
    "hindiName": "हाइब्रिड टमाटर",
    "category": "Vegetables",
    "scientificName": "Solanum lycopersicum",
    "seasons": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "soilTypes": [
      "Loamy",
      "Sandy Loam",
      "Red Loam",
      "Black"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip with Mulching",
      "Assured"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated"
    ],
    "durationDays": "120–150 days",
    "durationRange": [
      120,
      150
    ],
    "seedRate": 0.08,
    "seedRateUnit": "kg/acre (4,500 saplings)",
    "seedCostPerKg": 28000,
    "nutrientGuidance": {
      "n": 50,
      "p": 30,
      "k": 45,
      "applicationStage": "Fertigation via drip with 19:19:19, 12:61:00, and Calcium Nitrate + Boron."
    },
    "expectedYieldQuintalPerAcre": "250–350 Quintals",
    "referenceMspPrice": 1800,
    "objectives": [
      "Massive yield per acre",
      "High cash turnover",
      "Continuous 90-day harvesting"
    ],
    "riskLevel": "High",
    "commonWarnings": [
      "Staking with bamboo poles and trellising wires increases marketable Grade-A yield by 40%.",
      "Tomato Leaf Curl Virus (ToLCV) transmitted by whitefly is devastating; use insect-proof net nurseries.",
      "Early & Late Blight require preventive preventive sprays of Cymoxanil + Mancozeb."
    ],
    "cultivationSummary": "Commercial hybrid tomato yields phenomenal tonnages (30-35 tons/acre) with drip fertigation and silver-black plastic mulch.",
    "source": "ICAR-Indian Institute of Vegetable Research, Varanasi"
  },
  {
    "id": "potato",
    "name": "Table Potato (Kufri Jyoti / Pukhraj)",
    "hindiName": "आलू (कुफरी पुखराज)",
    "category": "Vegetables",
    "scientificName": "Solanum tuberosum",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Alluvial",
      "Loamy"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Furrow",
      "Sprinkler",
      "Drip"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated",
      "Loose friable soil"
    ],
    "durationDays": "80–100 days",
    "durationRange": [
      80,
      100
    ],
    "seedRate": 1200,
    "seedRateUnit": "kg tubers/acre",
    "seedCostPerKg": 25,
    "nutrientGuidance": {
      "n": 60,
      "p": 30,
      "k": 40,
      "applicationStage": "Full P & K and half N at planting. Remaining N at earthing-up (30 DAP)."
    },
    "expectedYieldQuintalPerAcre": "120–180 Quintals",
    "referenceMspPrice": 1400,
    "objectives": [
      "Massive bulk harvest",
      "Cold storage appreciation",
      "Short 90-day duration"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Earthing up at 30-35 days prevents tuber exposure to sunlight, avoiding greening (solanine).",
      "Late blight (Phytophthora infestans) strikes during cold foggy spells; spray Ridomil Gold.",
      "Use certified seed tubers treated with Boric acid 3% to eliminate common scab."
    ],
    "cultivationSummary": "Kufri Pukhraj and Jyoti are India's staple table potatoes, producing high tuber tonnages for fresh vegetable markets and long-term cold store holding.",
    "source": "ICAR-Central Potato Research Institute, Shimla"
  },
  {
    "id": "potato-chipsona",
    "name": "Processing Potato (Kufri Chipsona 1/3)",
    "hindiName": "चिप्सोना आलू (चिप्स ग्रेड)",
    "category": "Vegetables",
    "scientificName": "Solanum tuberosum var. chipsona",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Alluvial"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Sprinkler",
      "Drip",
      "Assured"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated"
    ],
    "durationDays": "95–110 days",
    "durationRange": [
      95,
      110
    ],
    "seedRate": 1400,
    "seedRateUnit": "kg tubers/acre",
    "seedCostPerKg": 32,
    "nutrientGuidance": {
      "n": 60,
      "p": 30,
      "k": 50,
      "applicationStage": "Higher Potassium (MOP/SOP) reduces reducing sugars (<0.1%) preventing dark chips."
    },
    "expectedYieldQuintalPerAcre": "130–170 Quintals",
    "referenceMspPrice": 1900,
    "objectives": [
      "Contract buyback with PepsiCo/Balaji",
      "Price certainty",
      "Premium price over table potato"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Bred specifically with high dry matter (>21%) and low reducing sugars to prevent chip browning.",
      "Contracted directly by snack food giants (Lay's, Balaji, Haldiram) with assured floor rates.",
      "Withhold irrigation 12-15 days before harvest to strengthen tuber skin."
    ],
    "cultivationSummary": "Chipsona potatoes are grown under institutional contract farming for commercial potato chips and french fries manufacturing.",
    "source": "ICAR-CPRI, Shimla / Modipuram Campus"
  },
  {
    "id": "garlic",
    "name": "Garlic (Amleta / Ooty G2)",
    "hindiName": "लहसुन",
    "category": "Vegetables",
    "scientificName": "Allium sativum",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Loamy",
      "Clay Loam",
      "Fertile Alluvial",
      "Black"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip",
      "Sprinkler",
      "Limited"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated"
    ],
    "durationDays": "130–150 days",
    "durationRange": [
      130,
      150
    ],
    "seedRate": 200,
    "seedRateUnit": "kg cloves/acre",
    "seedCostPerKg": 180,
    "nutrientGuidance": {
      "n": 40,
      "p": 20,
      "k": 25,
      "applicationStage": "Basal NPK + Sulphur 20 kg/acre (essential for pungent allicin compound formation)."
    },
    "expectedYieldQuintalPerAcre": "35–50 Quintals",
    "referenceMspPrice": 9500,
    "objectives": [
      "Extremely high cash value",
      "Long storage life",
      "High medicinal & export demand"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Market prices frequently surge to ₹10,000-₹18,000/quintal in Mandsaur & Neemuch APMC.",
      "Purple blotch and stemphylium blight require preventive spray of Tebuconazole.",
      "Stop irrigation 2 weeks before harvesting to ensure firm bulb wrappers and prevent bulb rot."
    ],
    "cultivationSummary": "Garlic is a high-value commercial spice-vegetable famous for its high allicin pungency, delivering exceptional profits across MP, Rajasthan, and Gujarat.",
    "source": "ICAR-Directorate of Onion & Garlic Research, Pune"
  },
  {
    "id": "brinjal",
    "name": "Brinjal / Eggplant (Hybrid Baingan)",
    "hindiName": "बैंगन",
    "category": "Vegetables",
    "scientificName": "Solanum melongena",
    "seasons": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "soilTypes": [
      "Loamy",
      "Silt Loam",
      "Clay Loam"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip",
      "Furrow"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated"
    ],
    "durationDays": "130–160 days",
    "durationRange": [
      130,
      160
    ],
    "seedRate": 0.15,
    "seedRateUnit": "kg/acre (5,000 saplings)",
    "seedCostPerKg": 12000,
    "nutrientGuidance": {
      "n": 40,
      "p": 24,
      "k": 20,
      "applicationStage": "Basal NPK. Regular Urea top dress after every 3rd fruit picking."
    },
    "expectedYieldQuintalPerAcre": "150–220 Quintals",
    "referenceMspPrice": 1600,
    "objectives": [
      "Continuous picking for 5 months",
      "Daily cash revenue",
      "High local demand"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Shoot and Fruit Borer (Leucinodes orbonalis) is destructive; prune drooping shoots and spray Coragen.",
      "Phomopsis blight causes fruit rot; apply copper oxychloride 3g/L.",
      "Mulching with 25-micron silver-black film saves 40% water and eliminates weed labor."
    ],
    "cultivationSummary": "Brinjal is a workhorse vegetable producing continuous fruit flushes every 4-5 days, supplying reliable cash flow to smallholders.",
    "source": "ICAR-Indian Institute of Vegetable Research, Varanasi"
  },
  {
    "id": "cauliflower",
    "name": "Cauliflower (Snowball / Hybrid)",
    "hindiName": "फूलगोभी",
    "category": "Vegetables",
    "scientificName": "Brassica oleracea var. botrytis",
    "seasons": [
      "Rabi",
      "Early Kharif"
    ],
    "soilTypes": [
      "Loamy",
      "Sandy Loam",
      "Alluvial"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip",
      "Furrow",
      "Sprinkler"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated"
    ],
    "durationDays": "75–95 days",
    "durationRange": [
      75,
      95
    ],
    "seedRate": 0.2,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 15000,
    "nutrientGuidance": {
      "n": 48,
      "p": 24,
      "k": 24,
      "applicationStage": "Apply Borax 4 kg/acre + Ammonium Molybdate 500g/acre (prevents browning and whiptail)."
    },
    "expectedYieldQuintalPerAcre": "100–140 Quintals",
    "referenceMspPrice": 1800,
    "objectives": [
      "Fast winter crop",
      "High wholesale demand",
      "Clean white curds"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Boron deficiency causes brown hollow curds; spray Solubor 1g/L at curd initiation.",
      "Blanching (covering curd with inner leaves) keeps heads pure white and prevents sun-yellowing.",
      "Diamondback Moth (DBM) attacks leaves; use Spinosad or Bacillus thuringiensis (Bt)."
    ],
    "cultivationSummary": "Cauliflower produces crisp, compact snow-white curds that command strong seasonal pricing across wholesale urban terminals.",
    "source": "ICAR-IIVR, Varanasi & IARI Regional Station, Katrain"
  },
  {
    "id": "cabbage",
    "name": "Cabbage (Golden Acre / Hybrid)",
    "hindiName": "पत्तागोभी",
    "category": "Vegetables",
    "scientificName": "Brassica oleracea var. capitata",
    "seasons": [
      "Rabi",
      "Kharif"
    ],
    "soilTypes": [
      "Loamy",
      "Clay Loam",
      "Alluvial"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip",
      "Furrow",
      "Sprinkler"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated"
    ],
    "durationDays": "75–90 days",
    "durationRange": [
      75,
      90
    ],
    "seedRate": 0.2,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 11000,
    "nutrientGuidance": {
      "n": 40,
      "p": 20,
      "k": 20,
      "applicationStage": "Basal NPK with FYM. Top dress Urea at head formation stage."
    },
    "expectedYieldQuintalPerAcre": "120–160 Quintals",
    "referenceMspPrice": 1400,
    "objectives": [
      "Compact firm heads",
      "Fast turnover",
      "High ton yield"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Irregular irrigation causes head splitting; maintain uniform soil moisture.",
      "Control cutworms and cabbage caterpillars with Emamectin Benzoate 5% SG.",
      "Harvest heads when solid and firm to the touch before secondary growth begins."
    ],
    "cultivationSummary": "Cabbage is an easy-to-grow, dependable cole crop producing firm, heavy green heads with consistent demand in street food and retail markets.",
    "source": "ICAR-IIVR, Varanasi"
  },
  {
    "id": "broccoli",
    "name": "Broccoli (Exotic Green Magic)",
    "hindiName": "ब्रोकोली (हरी गोभी)",
    "category": "Vegetables",
    "scientificName": "Brassica oleracea var. italica",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Rich Loam",
      "Sandy Loam",
      "Well-drained Fertile"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip with Mulch",
      "Sprinkler"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated"
    ],
    "durationDays": "65–80 days",
    "durationRange": [
      65,
      80
    ],
    "seedRate": 0.15,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 35000,
    "nutrientGuidance": {
      "n": 48,
      "p": 24,
      "k": 24,
      "applicationStage": "Basal NPK with Boron and Magnesium. Water soluble 19:19:19 foliar spray."
    },
    "expectedYieldQuintalPerAcre": "60–90 Quintals",
    "referenceMspPrice": 4500,
    "objectives": [
      "Exotic vegetable premium",
      "High urban & supermarket price",
      "Short duration"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Commands ₹40-₹90/kg wholesale at metro terminals (Delhi, Mumbai, Bengaluru).",
      "Cut central head before flower buds open/turn yellow; secondary side shoots produce second flush.",
      "Sensitive to heat above 28°C which causes loose, leafy, bitter heads."
    ],
    "cultivationSummary": "Broccoli is an exotic cruciferous superfood packed with sulforaphane, offering superior profit margins for peri-urban growers.",
    "source": "ICAR-IARI, New Delhi"
  },
  {
    "id": "capsicum",
    "name": "Green Capsicum (Bell Pepper / Shimla Mirch)",
    "hindiName": "शिमला मिर्च",
    "category": "Vegetables",
    "scientificName": "Capsicum annuum var. grossum",
    "seasons": [
      "Kharif",
      "Rabi"
    ],
    "soilTypes": [
      "Loamy",
      "Sandy Loam",
      "Red Soil"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip with Shade Net / Polyhouse",
      "Assured"
    ],
    "landTypes": [
      "Fertile",
      "Protected / Irrigated"
    ],
    "durationDays": "120–150 days",
    "durationRange": [
      120,
      150
    ],
    "seedRate": 0.1,
    "seedRateUnit": "kg/acre (6,000 plants)",
    "seedCostPerKg": 42000,
    "nutrientGuidance": {
      "n": 45,
      "p": 30,
      "k": 40,
      "applicationStage": "Drip fertigation. Calcium Nitrate + Boron prevents Blossom End Rot (BER)."
    },
    "expectedYieldQuintalPerAcre": "120–180 Quintals (Open) / 300+ Qtl (Polyhouse)",
    "referenceMspPrice": 3200,
    "objectives": [
      "High value culinary crop",
      "Shade net cultivation",
      "Hotel & restaurant demand"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Thrips and mites cause severe leaf curl; spray Abamectin 1.9% EC and Diafenthiuron.",
      "Blossom End Rot (black patch at bottom) is caused by Calcium deficiency; spray Chelated Calcium.",
      "Shade net (50% green) reduces sunscald and boosts blocky 4-lobe fruit grade."
    ],
    "cultivationSummary": "Capsicum is a premier vegetable favored by QSR pizza chains and hotels, yielding huge profits in polyhouse and shaded open-field setups.",
    "source": "ICAR-Indian Institute of Horticultural Research, Bengaluru"
  },
  {
    "id": "chilli-green",
    "name": "Green Chilli (G4 / Teja Hybrid)",
    "hindiName": "हरी मिर्च",
    "category": "Vegetables",
    "scientificName": "Capsicum annuum",
    "seasons": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "soilTypes": [
      "Well-drained Black",
      "Loamy",
      "Sandy Loam"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip",
      "Limited",
      "Assured"
    ],
    "landTypes": [
      "Fertile",
      "Normal",
      "Partially Irrigated"
    ],
    "durationDays": "150–180 days",
    "durationRange": [
      150,
      180
    ],
    "seedRate": 0.2,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 22000,
    "nutrientGuidance": {
      "n": 40,
      "p": 24,
      "k": 25,
      "applicationStage": "Basal NPK. Potassium top-dressing enhances fruit pungency, gloss, and capsaicin."
    },
    "expectedYieldQuintalPerAcre": "80–120 Quintals (Fresh) / 20–25 Qtl (Dry)",
    "referenceMspPrice": 4200,
    "objectives": [
      "Continuous cash flushes",
      "Export demand to Gulf/Europe",
      "Dual use (Fresh green / Dry red)"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Chilli Leaf Curl Virus (Murda disease) is transmitted by thrips/whitefly; maintain sticky traps.",
      "Anthracnose / Dieback causes black spots on pods; spray Azoxystrobin + Difenoconazole.",
      "Avoid excess nitrogen during early flowering which causes flower drop."
    ],
    "cultivationSummary": "Green chilli delivers 8-10 successive pickings across 5 months, providing continuous high income in Andhra, Karnataka, and MP.",
    "source": "ICAR-IIHR, Bengaluru & Guntur Chilli Research Station"
  },
  {
    "id": "bottle-gourd",
    "name": "Bottle Gourd (Lauki / Ghiya)",
    "hindiName": "लौकी / घीया",
    "category": "Vegetables",
    "scientificName": "Lagenaria siceraria",
    "seasons": [
      "Zaid",
      "Kharif"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Loamy",
      "Riverbed"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip on Mandap / Trellis",
      "Furrow"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated"
    ],
    "durationDays": "65–85 days",
    "durationRange": [
      65,
      85
    ],
    "seedRate": 1.5,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 1800,
    "nutrientGuidance": {
      "n": 30,
      "p": 18,
      "k": 15,
      "applicationStage": "Basal application with FYM. Spray Ethrel 100 ppm at 4-leaf stage to boost female flowers."
    },
    "expectedYieldQuintalPerAcre": "140–200 Quintals",
    "referenceMspPrice": 1500,
    "objectives": [
      "Fast summer income",
      "Massive fruit biomass",
      "Continuous vine harvest"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Trellising on bower / mandap keeps fruits straight, spot-free, and fetches 30% higher market price.",
      "Fruit fly (Bactrocera cucurbitae) punctures tender gourds; install cue-lure pheromone traps.",
      "Downy mildew attacks in humid monsoons; spray Metalaxyl + Mancozeb 2g/L."
    ],
    "cultivationSummary": "Bottle gourd produces vigorous vines with heavy fruit set, serving round-the-year demand for curries, juices, and sweets.",
    "source": "ICAR-IIVR, Varanasi"
  },
  {
    "id": "bitter-gourd",
    "name": "Bitter Gourd (Karela)",
    "hindiName": "करेला",
    "category": "Vegetables",
    "scientificName": "Momordica charantia",
    "seasons": [
      "Zaid",
      "Kharif"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Loamy",
      "Well-drained Alluvial"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Trellis Drip",
      "Furrow"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated"
    ],
    "durationDays": "70–90 days",
    "durationRange": [
      70,
      90
    ],
    "seedRate": 1.5,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 3200,
    "nutrientGuidance": {
      "n": 32,
      "p": 20,
      "k": 20,
      "applicationStage": "Basal NPK. Potassium promotes dark green color and prominent spines."
    },
    "expectedYieldQuintalPerAcre": "60–90 Quintals",
    "referenceMspPrice": 3200,
    "objectives": [
      "High market price",
      "Medicinal diabetic demand",
      "Export to UK & Middle East"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Dark green spiny varieties (Chaman, US 6214) command premium market prices.",
      "Soak seeds in warm water for 12 hours before sowing to soften hard seed coats.",
      "Use cue-lure traps to eliminate fruit fly damage without chemical sprays."
    ],
    "cultivationSummary": "Bitter gourd is celebrated for its blood sugar regulating properties (charantin), ensuring steady premium pricing throughout summer and monsoon.",
    "source": "ICAR-IIVR, Varanasi"
  },
  {
    "id": "cucumber",
    "name": "Cucumber (Kheera / Parthenocarpic)",
    "hindiName": "खीरा",
    "category": "Vegetables",
    "scientificName": "Cucumis sativus",
    "seasons": [
      "Zaid",
      "Kharif",
      "Rabi"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Loamy"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip with Mulch",
      "Trellis"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated"
    ],
    "durationDays": "50–65 days",
    "durationRange": [
      50,
      65
    ],
    "seedRate": 0.8,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 6500,
    "nutrientGuidance": {
      "n": 30,
      "p": 20,
      "k": 25,
      "applicationStage": "Frequent light fertigation with 19:19:19 and Calcium Nitrate."
    },
    "expectedYieldQuintalPerAcre": "120–180 Quintals",
    "referenceMspPrice": 2000,
    "objectives": [
      "Ultra fast 50-day harvest",
      "Summer salad demand",
      "High cash turnover"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Harvest starts within 45-50 days, making it one of the fastest cash crops available.",
      "Pick cucumbers every alternate day before seeds harden or skin turns yellowish.",
      "Powdery mildew and red pumpkin beetle are primary pests; spray wettable sulfur."
    ],
    "cultivationSummary": "Cucumber offers rapid 50-day cash turnaround, serving massive urban salad and catering demand throughout the summer months.",
    "source": "ICAR-IIVR, Varanasi"
  },
  {
    "id": "watermelon",
    "name": "Watermelon (Hybrid Tarbooz)",
    "hindiName": "तरबूज",
    "category": "Vegetables",
    "scientificName": "Citrullus lanatus",
    "seasons": [
      "Zaid / Summer"
    ],
    "soilTypes": [
      "Sandy",
      "Sandy Loam",
      "Riverbed Alluvial"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip with Mulch",
      "Furrow"
    ],
    "landTypes": [
      "Normal",
      "Sandy",
      "Irrigated"
    ],
    "durationDays": "75–90 days",
    "durationRange": [
      75,
      90
    ],
    "seedRate": 0.6,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 8500,
    "nutrientGuidance": {
      "n": 35,
      "p": 25,
      "k": 35,
      "applicationStage": "Potash and Boron are vital during fruit development to achieve 12+ Brix sweetness."
    },
    "expectedYieldQuintalPerAcre": "180–260 Quintals",
    "referenceMspPrice": 1200,
    "objectives": [
      "High summer tonnage",
      "Fast 80-day turnover",
      "Massive consumer demand"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Drip irrigation under 25-micron silver-black plastic mulch produces 25+ tons/acre.",
      "Stop irrigation 5-7 days before harvest to concentrate sugar sweetness (Brix) and avoid cracking.",
      "Fruit is ripe when the ground spot turns creamy yellow and the curly tendril opposite dries out."
    ],
    "cultivationSummary": "Watermelon is the undisputed king of summer fruit-vegetables, generating huge tonnage yields and quick cash returns within 80 days.",
    "source": "ICAR-Central Institute for Arid Horticulture, Bikaner"
  },
  {
    "id": "okra",
    "name": "Ladyfinger / Okra (Bhindi Radhika)",
    "hindiName": "भिंडी",
    "category": "Vegetables",
    "scientificName": "Abelmoschus esculentus",
    "seasons": [
      "Kharif",
      "Zaid"
    ],
    "soilTypes": [
      "Loamy",
      "Clay Loam",
      "Sandy Loam"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip",
      "Furrow"
    ],
    "landTypes": [
      "Fertile",
      "Normal",
      "Irrigated"
    ],
    "durationDays": "90–120 days",
    "durationRange": [
      90,
      120
    ],
    "seedRate": 4,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 1800,
    "nutrientGuidance": {
      "n": 35,
      "p": 20,
      "k": 20,
      "applicationStage": "Basal NPK. Urea top dress every 15 days after first picking."
    },
    "expectedYieldQuintalPerAcre": "50–80 Quintals",
    "referenceMspPrice": 2800,
    "objectives": [
      "Daily harvesting revenue",
      "Long productive window",
      "Export to UK & Middle East"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Yellow Vein Mosaic Virus (YVMV) is the #1 danger; select YVMV-resistant hybrids like Advanta Radhika.",
      "Pick tender green pods every 48 hours; delayed picking makes pods fibrous and unmarketable.",
      "Jassids and shoot borers attack early; spray Imidacloprid 17.8% SL."
    ],
    "cultivationSummary": "Okra is a popular daily-harvest vegetable offering high wholesale liquidity and strong export demand in Gulf air-cargo shipments.",
    "source": "ICAR-IIVR, Varanasi"
  },
  {
    "id": "ginger",
    "name": "Ginger (Adrak / Rio-de-Janeiro)",
    "hindiName": "अदरक",
    "category": "Root & Leafy",
    "scientificName": "Zingiber officinale",
    "seasons": [
      "Kharif"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Red Loam",
      "Laterite",
      "Humus Rich"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Sprinkler",
      "Drip",
      "Rainfed with Mulch"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated",
      "Well-drained Sloping"
    ],
    "durationDays": "210–240 days",
    "durationRange": [
      210,
      240
    ],
    "seedRate": 600,
    "seedRateUnit": "kg rhizomes/acre",
    "seedCostPerKg": 75,
    "nutrientGuidance": {
      "n": 40,
      "p": 20,
      "k": 40,
      "applicationStage": "Heavy organic FYM 10 tons/acre. Heavy green leaf mulching (3 times) is mandatory."
    },
    "expectedYieldQuintalPerAcre": "80–120 Quintals",
    "referenceMspPrice": 6500,
    "objectives": [
      "Massive profit potential",
      "High export & processing value",
      "Intercropping in orchards"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Bacterial wilt (Ralstonia) and soft rot (Pythium) are lethal; treat seed rhizomes with Trichoderma.",
      "Heavy mulching with tree leaves (6-8 tons/acre) is essential for moisture conservation and weed control.",
      "Thrives in partial shade; excellent intercrop in coconut, arecanut, and banana plantations."
    ],
    "cultivationSummary": "Ginger is an elite commercial spice-rhizome generating profits of ₹2 to ₹4 Lakhs per acre across Karnataka, Kerala, Assam, and Odisha.",
    "source": "ICAR-Indian Institute of Spices Research, Kozhikode"
  },
  {
    "id": "turmeric",
    "name": "Turmeric (Salem / Pragati)",
    "hindiName": "हल्दी (सलेम)",
    "category": "Root & Leafy",
    "scientificName": "Curcuma longa",
    "seasons": [
      "Kharif"
    ],
    "soilTypes": [
      "Loamy",
      "Alluvial",
      "Red Loam",
      "Well-drained Black"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip",
      "Furrow",
      "Rainfed with Mulch"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated",
      "Raised Bed"
    ],
    "durationDays": "240–270 days",
    "durationRange": [
      240,
      270
    ],
    "seedRate": 800,
    "seedRateUnit": "kg mother rhizomes/acre",
    "seedCostPerKg": 55,
    "nutrientGuidance": {
      "n": 45,
      "p": 25,
      "k": 45,
      "applicationStage": "Basal FYM + NPK. Split Potassium applications maximize curcumin percentage."
    },
    "expectedYieldQuintalPerAcre": "100–140 Quintals (Fresh) / 20–28 Qtl (Cured)",
    "referenceMspPrice": 13800,
    "objectives": [
      "Curcumin pharma demand",
      "Long-term dry storage",
      "Global export dominance"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Salem and Pragati varieties offer high curcumin (4.5% to 5.2%), commanding top auction prices at Nizamabad APMC.",
      "Rhizome rot is prevented by planting on raised broad beds (RBF) with efficient drainage.",
      "Boiling and solar drying on clean tarpaulins preserves bright golden-yellow color."
    ],
    "cultivationSummary": "India produces 78% of global turmeric ('Golden Spice'), with strong domestic spice demand and worldwide pharmaceutical exports.",
    "source": "ICAR-Indian Institute of Spices Research, Kozhikode"
  },
  {
    "id": "carrot",
    "name": "Carrot (Pusa Kesar / Kuroda)",
    "hindiName": "गाजर",
    "category": "Root & Leafy",
    "scientificName": "Daucus carota",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Deep Sandy Loam",
      "Alluvial",
      "Friable Light Soil"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Sprinkler",
      "Ridge & Furrow"
    ],
    "landTypes": [
      "Fertile",
      "Deep worked soil without stones"
    ],
    "durationDays": "85–100 days",
    "durationRange": [
      85,
      100
    ],
    "seedRate": 3,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 650,
    "nutrientGuidance": {
      "n": 30,
      "p": 20,
      "k": 30,
      "applicationStage": "Apply well-decomposed FYM (undecomposed manure causes root forking)."
    },
    "expectedYieldQuintalPerAcre": "100–150 Quintals",
    "referenceMspPrice": 1600,
    "objectives": [
      "Winter salad market",
      "Deep red carotene roots",
      "High ton yield"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Soil must be deep plowed and pulverized to 30 cm depth; stones cause root forking and splitting.",
      "High Potassium (MOP) ensures straight, uniform roots with deep red internal core.",
      "Thin seedlings to 6-8 cm spacing at 20 days to allow full root thickening."
    ],
    "cultivationSummary": "Carrots thrive in cool northern and central Indian winters, yielding uniform sweet red roots packed with provitamin A beta-carotene.",
    "source": "ICAR-IARI, New Delhi"
  },
  {
    "id": "spinach",
    "name": "Spinach (All Green Palak)",
    "hindiName": "पालक",
    "category": "Root & Leafy",
    "scientificName": "Spinacia oleracea",
    "seasons": [
      "Rabi",
      "Kharif",
      "Zaid"
    ],
    "soilTypes": [
      "Loamy",
      "Alluvial",
      "Clay Loam"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Sprinkler",
      "Furrow"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated"
    ],
    "durationDays": "45–60 days",
    "durationRange": [
      45,
      60
    ],
    "seedRate": 10,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 180,
    "nutrientGuidance": {
      "n": 35,
      "p": 15,
      "k": 15,
      "applicationStage": "Apply Urea after every cutting to stimulate fast lush leaf regrowth."
    },
    "expectedYieldQuintalPerAcre": "60–90 Quintals (Across 4-5 cuttings)",
    "referenceMspPrice": 1400,
    "objectives": [
      "Quick 30-day first harvest",
      "Multiple leaf cuttings",
      "Daily urban market demand"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "First cutting is ready within 28-30 days; subsequently cut every 12-15 days for 4 flushes.",
      "Cercospora leaf spot causes reddish spots; avoid overhead evening irrigation.",
      "Iron-rich leafy green providing instant daily cash liquidity for peri-urban farmers."
    ],
    "cultivationSummary": "Palak is the fastest-growing leafy vegetable in India, offering multi-cut harvests every fortnight with guaranteed daily urban market sales.",
    "source": "ICAR-IARI, New Delhi"
  },
  {
    "id": "fenugreek-leaves",
    "name": "Fenugreek Leaves (Kasuri Methi)",
    "hindiName": "मेथी (हरी पत्ती)",
    "category": "Root & Leafy",
    "scientificName": "Trigonella foenum-graecum",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Loamy",
      "Clay Loam",
      "Alluvial"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Sprinkler",
      "Flood"
    ],
    "landTypes": [
      "Normal",
      "Irrigated"
    ],
    "durationDays": "35–50 days",
    "durationRange": [
      35,
      50
    ],
    "seedRate": 12,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 110,
    "nutrientGuidance": {
      "n": 20,
      "p": 15,
      "k": 10,
      "applicationStage": "Light basal NPK. Nitrogen fixer."
    },
    "expectedYieldQuintalPerAcre": "40–60 Quintals",
    "referenceMspPrice": 2200,
    "objectives": [
      "Ultra fast 30-day cash",
      "Kasuri dried leaf processing",
      "Soil nitrogen fixation"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Nagaur (Rajasthan) Kasuri Methi carries unique aroma and commands ₹150-₹300/kg when shade dried.",
      "Harvest early morning to preserve crisp green leaf texture and volatile aroma.",
      "Downy mildew occurs in dense cloudy plantings; spray wettable sulfur."
    ],
    "cultivationSummary": "Methi produces fragrant tender green leaves in 30 days and dries into lucrative 'Kasuri Methi', celebrated in culinary seasoning across the globe.",
    "source": "ICAR-National Research Centre on Seed Spices, Ajmer"
  },
  {
    "id": "cumin",
    "name": "Cumin Seeds (Unjha Jeera)",
    "hindiName": "जीरा (उंझा)",
    "category": "Spices & Cash Crops",
    "scientificName": "Cuminum cyminum",
    "seasons": [
      "Rabi"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Loamy",
      "Well-drained Light Alluvial"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Sprinkler",
      "Light Furrow",
      "Limited"
    ],
    "landTypes": [
      "Normal",
      "Dry Arid",
      "Unjha Agro-Climate"
    ],
    "durationDays": "105–120 days",
    "durationRange": [
      105,
      120
    ],
    "seedRate": 5,
    "seedRateUnit": "kg/acre",
    "seedCostPerKg": 450,
    "nutrientGuidance": {
      "n": 16,
      "p": 10,
      "k": 8,
      "applicationStage": "Light fertilizer inputs. Excessive nitrogen causes blight and lodging."
    },
    "expectedYieldQuintalPerAcre": "4–6 Quintals",
    "referenceMspPrice": 24500,
    "objectives": [
      "Sky-high market realizations",
      "Global export monopoly",
      "Low water consumption"
    ],
    "riskLevel": "High",
    "commonWarnings": [
      "Extremely sensitive to cloudy weather and unseasonal winter drizzle which triggers Blight (Alternaria burnsii).",
      "Unjha APMC (Gujarat) is the world capital, trading ₹22,000-₹32,000/quintal.",
      "Avoid heavy irrigation; only 3-4 light irrigations required throughout entire lifecycle."
    ],
    "cultivationSummary": "India supplies over 70% of the world's cumin seeds. Grown in western Gujarat and Rajasthan, jeera delivers fortunes in dry winter climates.",
    "source": "ICAR-National Research Centre on Seed Spices, Ajmer"
  },
  {
    "id": "sugarcane",
    "name": "Sugarcane (Co 0238 / Co 86032)",
    "hindiName": "गन्ना (कैश क्रॉप)",
    "category": "Spices & Cash Crops",
    "scientificName": "Saccharum officinarum",
    "seasons": [
      "Spring",
      "Autumn",
      "Eksali"
    ],
    "soilTypes": [
      "Deep Clay Loam",
      "Heavy Black",
      "Alluvial"
    ],
    "waterRequirement": "High",
    "irrigationNeeded": [
      "Drip with Fertigation",
      "Furrow",
      "Canal"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated",
      "Heavy Soil"
    ],
    "durationDays": "330–365 days",
    "durationRange": [
      330,
      365
    ],
    "seedRate": 25,
    "seedRateUnit": "Quintals setts/acre",
    "seedCostPerKg": 3.5,
    "nutrientGuidance": {
      "n": 100,
      "p": 35,
      "k": 50,
      "applicationStage": "Heavy feeder. Split Nitrogen into 4 applications with regular Earthing-up."
    },
    "expectedYieldQuintalPerAcre": "350–500 Quintals (35–50 Tons)",
    "referenceMspPrice": 340,
    "objectives": [
      "Guaranteed sugar mill FRP price",
      "High gross revenue",
      "Ratoon crop potential for 3 years"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Statutory Fair & Remunerative Price (FRP) of ₹340+/quintal provides guaranteed government buyback.",
      "Early Shoot Borer and Top Borer require Trichogramma egg parasitoids or Chlorantraniliprole.",
      "Drip fertigation saves 50% water while increasing sucrose recovery and cane tonnage."
    ],
    "cultivationSummary": "Sugarcane is India's premier commercial crop, underpinning the sugar, jaggery, ethanol, and bio-electricity sectors in UP and Maharashtra.",
    "source": "ICAR-Indian Institute of Sugarcane Research, Lucknow"
  },
  {
    "id": "mango-alphonso",
    "name": "Alphonso Mango (Hapus)",
    "hindiName": "हापुस आम (अल्फांसो)",
    "category": "Fruits & Orchards",
    "scientificName": "Mangifera indica var. alphonso",
    "seasons": [
      "Perennial Orchard"
    ],
    "soilTypes": [
      "Laterite",
      "Red Loam",
      "Rocky Sloping"
    ],
    "waterRequirement": "Low to Medium",
    "irrigationNeeded": [
      "Drip Irrigation",
      "Rainfed"
    ],
    "landTypes": [
      "Sloping Coastal",
      "Fertile Orchard"
    ],
    "durationDays": "Perennial (Harvest in Mar-May)",
    "durationRange": [
      90,
      120
    ],
    "seedRate": 60,
    "seedRateUnit": "Grafted trees/acre (7m x 7m)",
    "seedCostPerKg": 250,
    "nutrientGuidance": {
      "n": 50,
      "p": 25,
      "k": 50,
      "applicationStage": "Apply FYM 50kg/tree + Paclobutrazol (Cultar) in Sept to trigger uniform flowering."
    },
    "expectedYieldQuintalPerAcre": "40–60 Quintals",
    "referenceMspPrice": 12000,
    "objectives": [
      "Global GI Tag export",
      "King of Mangoes luxury price",
      "Decades of orchard yield"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "GI-tagged Konkan Alphonso commands ₹800-₹1500 per dozen in Mumbai and Gulf export markets.",
      "Mango Hopper and powdery mildew strike during flowering; spray Imidacloprid + Hexaconazole.",
      "Vapor Heat Treatment (VHT) is mandatory for air-freight export to Japan, USA, and South Korea."
    ],
    "cultivationSummary": "Alphonso ('Hapus') is the undisputed King of Indian fruits, famous for its rich saffron pulp, thin skin, and unparalleled aroma.",
    "source": "Dr. BSKKV Dapoli / ICAR-CISH Lucknow"
  },
  {
    "id": "banana-g9",
    "name": "Cavendish Banana (Grand Naine G9)",
    "hindiName": "केला (ग्रैंड नैन G9)",
    "category": "Fruits & Orchards",
    "scientificName": "Musa acuminata var. Grand Naine",
    "seasons": [
      "Annual Plantation"
    ],
    "soilTypes": [
      "Deep Clay Loam",
      "Rich Alluvial",
      "Black Soil"
    ],
    "waterRequirement": "High",
    "irrigationNeeded": [
      "Inline Drip Fertigation",
      "Assured"
    ],
    "landTypes": [
      "Fertile",
      "Flat Irrigated"
    ],
    "durationDays": "330–360 days",
    "durationRange": [
      330,
      360
    ],
    "seedRate": 1200,
    "seedRateUnit": "Tissue culture plantlets/acre",
    "seedCostPerKg": 18,
    "nutrientGuidance": {
      "n": 80,
      "p": 25,
      "k": 120,
      "applicationStage": "Massive Potassium feeder. Weekly drip fertigation with SOP (00:00:50) during bunch development."
    },
    "expectedYieldQuintalPerAcre": "300–420 Quintals (30–42 Tons)",
    "referenceMspPrice": 1850,
    "objectives": [
      "Staggering biomass yield",
      "Reefer export to Middle East",
      "Fast 11-month crop turnaround"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Jalgaon (Maharashtra) and Theni (Tamil Nadu) are major clusters shipping 40ft reefer containers to Dubai.",
      "Sigatoka leaf spot causes premature fruit ripening; spray Propiconazole 1ml/L.",
      "Bunch sleeving with blue poly bags and foam separators protects fruit from export blemishes."
    ],
    "cultivationSummary": "Grand Naine G9 is India's export flagship banana, producing massive 25-35 kg bunches with uniform cylindrical green fingers.",
    "source": "ICAR-National Research Centre for Banana, Tiruchirappalli"
  },
  {
    "id": "pomegranate",
    "name": "Pomegranate (Bhagwa GI)",
    "hindiName": "अनार (भगवा सिंदूरी)",
    "category": "Fruits & Orchards",
    "scientificName": "Punica granatum var. bhagwa",
    "seasons": [
      "Perennial Orchard (Mrig/Hasta Bahar)"
    ],
    "soilTypes": [
      "Light Loamy",
      "Sandy Loam",
      "Medium Black with Drainage"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Drip Irrigation with Stress Regulation"
    ],
    "landTypes": [
      "Semi-Arid",
      "Well-drained"
    ],
    "durationDays": "160–180 days after fruit set",
    "durationRange": [
      160,
      180
    ],
    "seedRate": 300,
    "seedRateUnit": "Air-layered plants/acre",
    "seedCostPerKg": 85,
    "nutrientGuidance": {
      "n": 40,
      "p": 20,
      "k": 50,
      "applicationStage": "Regulated water withholding (Bahar treatment) followed by drip fertigation."
    },
    "expectedYieldQuintalPerAcre": "50–80 Quintals (5–8 Tons)",
    "referenceMspPrice": 8500,
    "objectives": [
      "GI-tagged premium export",
      "Soft edible arils",
      "Drought hardy orchard"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Bhagwa features glossy deep-red rinds and soft, sweet dark-red edible seeds (arils).",
      "Bacterial oily spot (Xanthomonas axonopodis) requires strict sanitation and Streptocycline sprays.",
      "Solapur & Nashik Bhagwa pomegranates are exported to Netherlands, Switzerland, and UAE."
    ],
    "cultivationSummary": "Bhagwa is India's crown-jewel pomegranate, holding geographical indication (GI) status and dominating European supermarket shelves.",
    "source": "ICAR-National Research Centre on Pomegranate, Solapur"
  },
  {
    "id": "papaya",
    "name": "Papaya (Taiwan Red Lady 786)",
    "hindiName": "पपीता (रेड लेडी 786)",
    "category": "Fruits & Orchards",
    "scientificName": "Carica papaya",
    "seasons": [
      "Year-round Planting"
    ],
    "soilTypes": [
      "Well-drained Loam",
      "Sandy Loam",
      "Alluvial"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip Irrigation on Ridges"
    ],
    "landTypes": [
      "Fertile",
      "Well-drained Elevated"
    ],
    "durationDays": "240–300 days (Harvest for 1.5 yrs)",
    "durationRange": [
      240,
      300
    ],
    "seedRate": 1000,
    "seedRateUnit": "Gynodioecious plants/acre",
    "seedCostPerKg": 35,
    "nutrientGuidance": {
      "n": 50,
      "p": 30,
      "k": 60,
      "applicationStage": "Regular monthly NPK fertigation. Boron spray prevents fruit latex dripping."
    },
    "expectedYieldQuintalPerAcre": "250–350 Quintals (25–35 Tons)",
    "referenceMspPrice": 1600,
    "objectives": [
      "Fastest fruit tree returns (8 months)",
      "Heavy continuous production",
      "High sweetness 13° Brix"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Taiwan 786 is gynodioecious; 100% of trees bear heavy, thick-fleshed oblong fruits.",
      "Extremely sensitive to waterlogging; 24 hours of flooded rootzone causes collar rot and plant death.",
      "Papaya Ring Spot Virus (PRSV) is spread by aphids; grow border crops like maize."
    ],
    "cultivationSummary": "Red Lady 786 starts bearing within 8 months of planting, yielding over 40-60 kg per tree with deep red aromatic flesh and 13° Brix sweetness.",
    "source": "ICAR-Indian Institute of Horticultural Research, Bengaluru"
  },
  {
    "id": "guava",
    "name": "Guava (Taiwan Pink / VNR Bihi)",
    "hindiName": "अमरूद (ताइवान पिंक)",
    "category": "Fruits & Orchards",
    "scientificName": "Psidium guajava",
    "seasons": [
      "Perennial (Mridu / Winter Crop)"
    ],
    "soilTypes": [
      "Alluvial",
      "Loamy",
      "Clay Loam",
      "Slightly Saline"
    ],
    "waterRequirement": "Low to Medium",
    "irrigationNeeded": [
      "Drip with Meadow Orchard Training"
    ],
    "landTypes": [
      "Normal",
      "Semi-Arid",
      "High-Density Meadow"
    ],
    "durationDays": "120–140 days after flowering",
    "durationRange": [
      120,
      140
    ],
    "seedRate": 500,
    "seedRateUnit": "Grafted plants/acre (Ultra High Density)",
    "seedCostPerKg": 95,
    "nutrientGuidance": {
      "n": 40,
      "p": 20,
      "k": 35,
      "applicationStage": "Canopy pruning twice yearly triggers massive flowering flushes."
    },
    "expectedYieldQuintalPerAcre": "120–180 Quintals",
    "referenceMspPrice": 2800,
    "objectives": [
      "Jumbo 400g-800g fruits",
      "Crisp seedless texture",
      "High density meadow orchard"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "VNR Bihi and Taiwan Pink produce massive 400g-800g jumbo guavas with crisp white/pink flesh.",
      "Individual fruit bagging with foam net and poly bag at marble stage produces spotless export fruits.",
      "High density meadow planting (3m x 1.5m) delivers commercial yields from the second year onwards."
    ],
    "cultivationSummary": "Jumbo Guava is revolutionizing Indian horticulture, producing apple-like crisp fruits with long shelf-life and unmatched returns.",
    "source": "ICAR-Central Institute for Subtropical Horticulture, Lucknow"
  },
  {
    "id": "dragon-fruit",
    "name": "Dragon Fruit (Pitaya / Kamalam)",
    "hindiName": "ड्रैगन फ्रूट (कमलम)",
    "category": "Fruits & Orchards",
    "scientificName": "Selenicereus undatus",
    "seasons": [
      "Perennial Cactus (May to Nov flushes)"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Rocky Gravel",
      "Well-drained Arid"
    ],
    "waterRequirement": "Very Low",
    "irrigationNeeded": [
      "Drip with Trellis Pole Ring"
    ],
    "landTypes": [
      "Barren / Arid",
      "Degraded Land",
      "Well-drained"
    ],
    "durationDays": "30–35 days from flower to fruit",
    "durationRange": [
      30,
      35
    ],
    "seedRate": 1800,
    "seedRateUnit": "Cuttings/acre (450 concrete poles)",
    "seedCostPerKg": 65,
    "nutrientGuidance": {
      "n": 25,
      "p": 15,
      "k": 30,
      "applicationStage": "FYM, Neem cake, and organic biofertilizers on elevated pole beds."
    },
    "expectedYieldQuintalPerAcre": "40–70 Quintals",
    "referenceMspPrice": 14000,
    "objectives": [
      "Ultra-high profit (₹100-₹200/kg)",
      "25-year plantation life",
      "Zero pest damage"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Commands ₹100 to ₹200 per kg wholesale across supermarkets and metropolitan fruit markets.",
      "Requires concrete trellis poles with top circular rings to support 150 kg cactus vine canopy.",
      "Immune to drought; cactus biology thrives with minimal water in Gujarat, Rajasthan, and Deccan soils."
    ],
    "cultivationSummary": "Kamalam (Dragon Fruit) is an exotic super-crop requiring very little water, generating phenomenal net profits of ₹4 to ₹8 Lakhs/acre for 20+ continuous years.",
    "source": "ICAR-Central Institute for Arid Horticulture / Gujarat State Mission"
  },
  {
    "id": "grapes",
    "name": "Grapes (Thompson Seedless / Sonaka)",
    "hindiName": "अंगूर (सोनाका / थॉम्पसन)",
    "category": "Fruits & Orchards",
    "scientificName": "Vitis vinifera",
    "seasons": [
      "Perennial Vine (April & October Pruning)"
    ],
    "soilTypes": [
      "Medium Black",
      "Loamy",
      "Well-drained Gravelly"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip Irrigation with Y-Trellis"
    ],
    "landTypes": [
      "Fertile",
      "Nashik Climate Zone"
    ],
    "durationDays": "120–135 days post-October pruning",
    "durationRange": [
      120,
      135
    ],
    "seedRate": 750,
    "seedRateUnit": "Rootstock vines/acre",
    "seedCostPerKg": 120,
    "nutrientGuidance": {
      "n": 45,
      "p": 30,
      "k": 60,
      "applicationStage": "Precision fertigation with Gibberellic Acid (GA3) and CPPU for berry elongation."
    },
    "expectedYieldQuintalPerAcre": "100–150 Quintals",
    "referenceMspPrice": 6500,
    "objectives": [
      "Global Euro-retail export",
      "Table grape premium",
      "Nashik Wine Capital status"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Nashik is the Grape Capital of India, exporting 10,000+ refrigerated maritime containers to the European Union annually.",
      "Downy mildew (Plasmopara viticola) strikes during unseasonal rain; strictly follow GrapeNet export advisory.",
      "Berry thinning and dipping in GA3 ensures uniform 18mm+ export berry diameter."
    ],
    "cultivationSummary": "Indian table grapes dominate international trade with APEDA GrapeNet traceability, generating massive farm-gate realizations across Maharashtra.",
    "source": "ICAR-National Research Centre for Grapes, Pune"
  },
  {
    "id": "turmeric",
    "name": "Turmeric (Salem / Waigaon)",
    "hindiName": "हल्दी (सलेम / वायगांव)",
    "category": "Spices & Cash Crops",
    "scientificName": "Curcuma longa",
    "seasons": [
      "Kharif"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Clay Loam",
      "Well-drained Alluvial"
    ],
    "waterRequirement": "High",
    "irrigationNeeded": [
      "Drip",
      "Flood / Ridge-and-furrow"
    ],
    "landTypes": [
      "Fertile",
      "Irrigated"
    ],
    "durationDays": "240–270 days (8–9 months)",
    "durationRange": [
      240,
      270
    ],
    "seedRate": 1000,
    "seedRateUnit": "kg rhizomes/acre",
    "seedCostPerKg": 45,
    "nutrientGuidance": {
      "n": 50,
      "p": 25,
      "k": 50,
      "applicationStage": "Basal FYM 10 tons + Neem cake. Split N and K at 30, 60, and 90 days after planting with micronutrient spray (Zinc & Iron)."
    },
    "expectedYieldQuintalPerAcre": "80–120 Quintals (Wet rhizome)",
    "referenceMspPrice": 13500,
    "objectives": [
      "Export grade curcumin > 5%",
      "Massive profitability",
      "GI-tagged Waigaon turmeric"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Rhizome rot (Pythium aphanidermatum) is the most destructive disease during monsoon waterlogging.",
      "Soil solarization and seed rhizome treatment with Trichoderma viride (10g/kg) is mandatory.",
      "Curcumin content peaks when leaves dry and lodge naturally in winter."
    ],
    "cultivationSummary": "Turmeric is India's golden spice with soaring medicinal and export demand. Waigaon and Salem cultivars deliver world-class curcumin levels and multi-lakh returns per acre.",
    "source": "ICAR-Indian Institute of Spices Research (IISR), Calicut"
  },
  {
    "id": "ginger",
    "name": "Ginger (Rio-de-Janeiro / Maran)",
    "hindiName": "अदरक (रियो डी जनेरो / मारन)",
    "category": "Spices & Cash Crops",
    "scientificName": "Zingiber officinale",
    "seasons": [
      "Kharif"
    ],
    "soilTypes": [
      "Rich Sandy Loam",
      "Humus-rich Loam",
      "Well-drained Red Loam"
    ],
    "waterRequirement": "High",
    "irrigationNeeded": [
      "Sprinkler",
      "Drip",
      "Shade Intercrop"
    ],
    "landTypes": [
      "Fertile",
      "Raised Beds"
    ],
    "durationDays": "210–240 days",
    "durationRange": [
      210,
      240
    ],
    "seedRate": 600,
    "seedRateUnit": "kg rhizomes/acre",
    "seedCostPerKg": 75,
    "nutrientGuidance": {
      "n": 40,
      "p": 20,
      "k": 40,
      "applicationStage": "Heavy organic manuring (FYM 12 tons). Apply Trichoderma-enriched compost on raised beds."
    },
    "expectedYieldQuintalPerAcre": "60–90 Quintals (Fresh ginger)",
    "referenceMspPrice": 8500,
    "objectives": [
      "High market value (₹40-₹90/kg)",
      "Intercrop in coconut/arecanut",
      "Direct culinary and processing demand"
    ],
    "riskLevel": "High",
    "commonWarnings": [
      "Soft rot / Bacterial wilt wipe out crop in stagnant water; always cultivate on raised beds (15 cm high).",
      "Treat seed rhizomes with Mancozeb (3g/L) + Streptocycline (0.5g/L) for 30 minutes before planting.",
      "Earthing up and mulching with green leaves (3 times) is essential to protect growing rhizomes from sunburn."
    ],
    "cultivationSummary": "Ginger is an intensive commercial cash crop that yields remarkable profits when managed with strict drainage, mulching, and biological disease control.",
    "source": "ICAR-Indian Institute of Spices Research (IISR), Calicut"
  },
  {
    "id": "coriander-seed",
    "name": "Coriander / Dhaniya (Rabi Seed & Leaves)",
    "hindiName": "धनिया (बीज एवं पत्ती)",
    "category": "Spices & Cash Crops",
    "scientificName": "Coriandrum sativum",
    "seasons": [
      "Rabi",
      "Late Kharif"
    ],
    "soilTypes": [
      "Loamy",
      "Black Cotton Soil",
      "Alluvial"
    ],
    "waterRequirement": "Low",
    "irrigationNeeded": [
      "Sprinkler",
      "Limited Flooding"
    ],
    "landTypes": [
      "Normal",
      "Partially Irrigated"
    ],
    "durationDays": "90–110 days (Seed), 40 days (Green leaf)",
    "durationRange": [
      90,
      110
    ],
    "seedRate": 10,
    "seedRateUnit": "kg/acre (crushed split seeds)",
    "seedCostPerKg": 120,
    "nutrientGuidance": {
      "n": 20,
      "p": 15,
      "k": 10,
      "applicationStage": "Basal application of NPK. Foliar spray of urea (1%) at 35 DAS enhances vigorous vegetative green foliage."
    },
    "expectedYieldQuintalPerAcre": "6–10 Quintals (Dry seed)",
    "referenceMspPrice": 7500,
    "objectives": [
      "Dual purpose (leaves + seeds)",
      "Low water consumption",
      "Fast market turnaround in Hadoti/Kumbhraj"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Powdery mildew (Erysiphe polygoni) strikes during cloudy weather; spray wettable sulfur (2g/L).",
      "Gently crush seeds into two halves before sowing to ensure quick and uniform germination.",
      "Kumbhraj and Kota APMC mandis are world-leading trading hubs for aromatic Indian coriander."
    ],
    "cultivationSummary": "Coriander is a resilient short-duration spice crop grown extensively across Rajasthan and Madhya Pradesh, giving dependable cash flow from green foliage and dry aromatic seed.",
    "source": "ICAR-National Research Centre on Seed Spices (NRCSS), Ajmer"
  },
  {
    "id": "papaya",
    "name": "Papaya (Taiwan Red Lady 786)",
    "hindiName": "पपीता (ताइवान रेड लेडी 786)",
    "category": "Fruits & Orchards",
    "scientificName": "Carica papaya",
    "seasons": [
      "All Season (Transplanting in July/Feb)"
    ],
    "soilTypes": [
      "Rich Well-drained Loam",
      "Alluvial",
      "Sandy Loam"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip Irrigation with Ring Method"
    ],
    "landTypes": [
      "Fertile",
      "Elevated / No Waterlogging"
    ],
    "durationDays": "8–9 months to first harvest; productive for 2 years",
    "durationRange": [
      240,
      270
    ],
    "seedRate": 900,
    "seedRateUnit": "Plants/acre (7x7 ft spacing)",
    "seedCostPerKg": 35,
    "nutrientGuidance": {
      "n": 80,
      "p": 80,
      "k": 100,
      "applicationStage": "Split 200g Urea, 500g SSP, 250g MOP per plant in 6 bimonthly applications. Boron spray prevents bumpy fruit."
    },
    "expectedYieldQuintalPerAcre": "300–450 Quintals (30–45 Tons/acre)",
    "referenceMspPrice": 2200,
    "objectives": [
      "Rapid fruiting in 8 months",
      "Immense yield (50-80 kg/tree)",
      "High consumer demand for sweet red pulp"
    ],
    "riskLevel": "Medium",
    "commonWarnings": [
      "Papaya Ring Spot Virus (PRSV) spread by aphids is devastating; install yellow sticky traps and barrier maize crops.",
      "Extremely intolerant to water stagnation; root rot kills plants within 24 hours of flooded roots.",
      "Red Lady 786 is gynodioecious (100% productive female and hermaphrodite plants)."
    ],
    "cultivationSummary": "Taiwan Red Lady 786 is the golden standard for commercial papaya orchards in India, yielding up to 40 tons per acre with thick, transport-friendly sweet aromatic fruit.",
    "source": "ICAR-Indian Agricultural Research Institute (IARI), New Delhi"
  },
  {
    "id": "watermelon",
    "name": "Watermelon (Icebox Sugar Queen / Kiran)",
    "hindiName": "तरबूज (किरण / शुगर क्वीन)",
    "category": "Fruits & Orchards",
    "scientificName": "Citrullus lanatus",
    "seasons": [
      "Zaid (Summer)",
      "Late Kharif in South"
    ],
    "soilTypes": [
      "Sandy Loam",
      "Riverbed Alluvial",
      "Well-drained Black"
    ],
    "waterRequirement": "Medium",
    "irrigationNeeded": [
      "Drip with Silver-Black Mulch"
    ],
    "landTypes": [
      "Flat / Riverbed",
      "Mulched Beds"
    ],
    "durationDays": "70–85 days",
    "durationRange": [
      70,
      85
    ],
    "seedRate": 350,
    "seedRateUnit": "grams/acre",
    "seedCostPerKg": 28000,
    "nutrientGuidance": {
      "n": 40,
      "p": 30,
      "k": 50,
      "applicationStage": "Fertigation via drip: High N in vegetative stage, high K and Calcium nitrate during fruit bulking and sugar accumulation."
    },
    "expectedYieldQuintalPerAcre": "200–300 Quintals (20–30 Tons/acre)",
    "referenceMspPrice": 1400,
    "objectives": [
      "Ultra-fast 75-day turnaround",
      "High summer harvest profits",
      "Ideal for river basins and drip mulching"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Stop irrigation 4–5 days before harvest to maximize Brix sugar percentage and prevent fruit splitting.",
      "Use 25-micron silver-black plastic mulch to suppress weeds, retain moisture, and repel aphid vectors.",
      "Fruit fly (Bactrocera cucurbitae) attacks tender fruits; deploy pheromone traps @ 8 traps/acre."
    ],
    "cultivationSummary": "Watermelon cultivation with silver mulch and drip irrigation delivers lightning-fast returns in 75 days, turning summer fallow land into high-profit cash yields.",
    "source": "ICAR-Indian Institute of Horticultural Research (IIHR), Bengaluru"
  },
  {
    "id": "custard-apple",
    "name": "Custard Apple / Sitaphal (Balanagar / NMK-1 Golden)",
    "hindiName": "सीताफल / शरीफा (बालानगर / NMK-1 गोल्डन)",
    "category": "Fruits & Orchards",
    "scientificName": "Annona squamosa",
    "seasons": [
      "Monsoon to Autumn (Aug–Nov harvest)"
    ],
    "soilTypes": [
      "Rocky Gravel",
      "Shallow Black",
      "Arid Stony Soil"
    ],
    "waterRequirement": "Very Low",
    "irrigationNeeded": [
      "Rainfed",
      "Protective Drip"
    ],
    "landTypes": [
      "Wasteland / Sloping / Arid"
    ],
    "durationDays": "110–125 days post-monsoon flowering",
    "durationRange": [
      110,
      125
    ],
    "seedRate": 200,
    "seedRateUnit": "Grafted plants/acre (15x15 ft spacing)",
    "seedCostPerKg": 70,
    "nutrientGuidance": {
      "n": 30,
      "p": 20,
      "k": 30,
      "applicationStage": "FYM 20 kg per plant before monsoon. Micronutrient foliar spray (Zinc, Boron) during flower set."
    },
    "expectedYieldQuintalPerAcre": "40–60 Quintals",
    "referenceMspPrice": 5500,
    "objectives": [
      "Thrives in rocky arid soils",
      "Cattle and deer do not eat leaves",
      "Massive ice-cream pulp industry demand"
    ],
    "riskLevel": "Low",
    "commonWarnings": [
      "Pruning during defoliation in late winter stimulates heavy flush of synchronous commercial flowers.",
      "Mealybugs (Ferrisia virgata) suck sap from fruits and secrete honeydew; spray Verticillium lecanii bio-agent.",
      "NMK-1 Golden variety has less seeds, thick aromatic flakes, and exceptional 400g+ fruit weight."
    ],
    "cultivationSummary": "Sitaphal is a climate-resilient miracle orchard crop requiring zero pesticide protection from grazing cattle, producing valuable pulp sought after by commercial dairy and dessert brands.",
    "source": "ICAR-Central Institute for Arid Horticulture (CIAH), Bikaner"
  }
];
