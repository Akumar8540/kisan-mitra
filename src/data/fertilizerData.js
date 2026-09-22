// Fertilizer & Nutrient Management Dataset (Agronomic Guidance + Reference Product Catalog)
// IMPORTANT: Commercial products are listed strictly as informational reference and do NOT constitute paid endorsements.
// Always verify application rates with local soil test results (Soil Health Card) and agricultural extension officers.

export const agronomicNutrientGuidelines = [
  {
    cropId: "soybean",
    cropName: "Soybean",
    recommendedN: 12, // kg/acre
    recommendedP: 24,
    recommendedK: 16,
    sulphur: 8,
    zinc: 2,
    stageGuidance: "Basal dressing at sowing. As a legume, seed inoculation with Rhizobium japonicum and Phosphate Solubilizing Bacteria (PSB) reduces synthetic nitrogen dependency.",
    organicAlternatives: "Apply 2–3 tonnes/acre well-decomposed Farmyard Manure (FYM) or 1 tonne vermicompost 2 weeks prior to sowing."
  },
  {
    cropId: "wheat",
    cropName: "Wheat",
    recommendedN: 48,
    recommendedP: 24,
    recommendedK: 16,
    sulphur: 6,
    zinc: 4,
    stageGuidance: "Apply 50% N and 100% P & K at sowing time. Top-dress 25% N after first irrigation at Crown Root Initiation (21 DAS) and remaining 25% at late tillering.",
    organicAlternatives: "Incorporate Sesbania (Dhaincha) green manure before wheat sowing or apply 4 tonnes/acre compost."
  },
  {
    cropId: "rice",
    cropName: "Paddy / Rice",
    recommendedN: 40,
    recommendedP: 20,
    recommendedK: 20,
    zinc: 5,
    stageGuidance: "Apply entire P, K and 1/3 N at transplanting. Top-dress 1/3 N at active tillering (3 weeks after transplanting) and 1/3 N at panicle emergence.",
    organicAlternatives: "Incorporate Azolla or blue-green algae in standing water to fix biological nitrogen and increase soil organic matter."
  },
  {
    cropId: "mustard",
    cropName: "Mustard",
    recommendedN: 24,
    recommendedP: 16,
    recommendedK: 8,
    sulphur: 10,
    zinc: 2,
    stageGuidance: "Apply all P, K, Sulphur and half N basal. Apply remaining half N at 30 days after sowing after first light irrigation.",
    organicAlternatives: "Mustard responds exceptionally well to Sulphur; incorporate gypsum or well-rotted cow dung manure."
  },
  {
    cropId: "cotton",
    cropName: "Cotton",
    recommendedN: 40,
    recommendedP: 20,
    recommendedK: 20,
    magnesium: 4,
    stageGuidance: "Basal P & K. Nitrogen split into 3 doses at 30, 60, and 90 days coinciding with vegetative branching and square formation.",
    organicAlternatives: "Castor cake or neem cake applied at 200 kg/acre helps manage soil-borne nematodes while releasing steady nutrients."
  },
  {
    cropId: "onion",
    cropName: "Red Onion",
    recommendedN: 40,
    recommendedP: 20,
    recommendedK: 30,
    sulphur: 15,
    zinc: 3,
    stageGuidance: "Full P & K with 50% N basal. Remaining 50% N top-dressed in two equal splits at 30 and 45 days after transplanting. 15 kg/acre Sulphur mandatory for bulb compactness, pungency, and long shelf life.",
    organicAlternatives: "Apply 4 tonnes/acre well-rotted cow dung manure with 200 kg neem cake during field preparation."
  },
  {
    cropId: "tomato",
    cropName: "Tomato (Hybrid)",
    recommendedN: 48,
    recommendedP: 32,
    recommendedK: 40,
    calcium: 8,
    boron: 1.5,
    stageGuidance: "Basal dressing with FYM, complete P, and 20% N & K. Balance nutrients delivered via drip fertigation (19:19:19 and Calcium Nitrate) weekly during flowering and fruit setting.",
    organicAlternatives: "Foliar spray of Panchagavya (3%) at flowering and fruit set to prevent blossom end rot and enhance fruit firmness."
  },
  {
    cropId: "potato",
    cropName: "Potato",
    recommendedN: 60,
    recommendedP: 40,
    recommendedK: 50,
    sulphur: 12,
    zinc: 4,
    stageGuidance: "Full P & K and half N at planting in furrow ridges. Remaining N applied during earthing-up at 30–35 days after planting.",
    organicAlternatives: "Sesbania green manuring in Kharif followed by vermicompost application at 1.5 tonnes/acre before tuber planting."
  },
  {
    cropId: "chilli",
    cropName: "Dry Red Chilli",
    recommendedN: 48,
    recommendedP: 24,
    recommendedK: 32,
    sulphur: 10,
    boron: 1,
    stageGuidance: "Basal P & K with 1/3 N. Top dress remaining N at 30, 60, and 90 days after transplanting. Foliar spray of 0:52:34 at peak flowering.",
    organicAlternatives: "Seedling root dip in Pseudomonas fluorescens (10g/L) and Azospirillum culture prior to transplanting."
  },
  {
    cropId: "garlic",
    cropName: "Garlic",
    recommendedN: 40,
    recommendedP: 20,
    recommendedK: 30,
    sulphur: 20,
    zinc: 3,
    stageGuidance: "Full P, K, and Sulphur with 1/3 N at clove sowing. Remaining N top-dressed at 30 and 60 days. Withhold nitrogen after 75 days to avoid thick necking.",
    organicAlternatives: "Apply 200 kg/acre mustard oil cake or castor cake along with 3 tonnes/acre FYM during plowing."
  },
  {
    cropId: "cumin",
    cropName: "Cumin Seeds (Jeera)",
    recommendedN: 12,
    recommendedP: 16,
    recommendedK: 12,
    sulphur: 8,
    zinc: 2,
    stageGuidance: "Entire P, K, and half N at sowing. Remaining half N top-dressed after first light weeding irrigation (30 DAS). Avoid excessive nitrogen which induces blight.",
    organicAlternatives: "Seed treatment with Trichoderma viride (5g/kg) and PSB slurry; apply well-rotted goat or sheep manure."
  },
  {
    cropId: "turmeric",
    cropName: "Turmeric (Haldi)",
    recommendedN: 48,
    recommendedP: 24,
    recommendedK: 48,
    iron: 4,
    zinc: 3,
    stageGuidance: "Apply 10 tonnes/acre FYM basal with full P. Nitrogen and Potassium applied in 4 split dressings at 30, 60, 90, and 120 days after planting.",
    organicAlternatives: "Continuous green leaf mulching (Glyricidia or Pongamia leaves, 10–12 tonnes/acre) for soil cooling and biological humus buildup."
  },
  {
    cropId: "banana",
    cropName: "Cavendish Banana (G9)",
    recommendedN: 80,
    recommendedP: 30,
    recommendedK: 120,
    magnesium: 10,
    boron: 2,
    stageGuidance: "Intensive fertigation scheduling. High Potassium requirement during bunch shooting and fruit finger enlargement (months 6 to 10).",
    organicAlternatives: "Incorporate sunn hemp as intercrop during first 3 months and bury into soil; apply 5 kg vermicompost per plant pit."
  },
  {
    cropId: "pomegranate",
    cropName: "Pomegranate (Bhagwa)",
    recommendedN: 50,
    recommendedP: 25,
    recommendedK: 50,
    calcium: 12,
    boron: 2,
    stageGuidance: "Regulated fertigation based on Bahar treatment. Apply Calcium Nitrate and Boron during fruit development to prevent aril cracking.",
    organicAlternatives: "Apply 20 kg farmyard manure, 2 kg neem cake, and 250g Trichoderma harzianum per tree basin at onset of new flushing."
  }
];

export const referenceProductCatalog = [
  {
    id: "prod-urea",
    productName: "Prilled / Neem Coated Urea",
    manufacturer: "National Fertilizers Limited / IFFCO",
    category: "Nitrogenous Fertilizer",
    nutrientComposition: "46% Nitrogen (N)",
    cropApplicability: "All cereals, oilseeds, commercial crops",
    packaging: "45 kg Bag",
    subsidizedMaturity: "Government Subsidized MRP ~ ₹266.50 / 45kg",
    usageCaution: "Overuse leads to succulent growth, pest infestation, and lodging. Always apply in splits.",
    isApproved: true,
    source: "Department of Fertilizers, Govt. of India (Demo Reference)"
  },
  {
    id: "prod-dap",
    productName: "Di-Ammonium Phosphate (DAP)",
    manufacturer: "IFFCO / Coromandel / GSFC",
    category: "Phosphatic Fertilizer",
    nutrientComposition: "18% Nitrogen (N), 46% Phosphorus (P2O5)",
    cropApplicability: "Basal application for Wheat, Soybean, Mustard, Pulses",
    packaging: "50 kg Bag",
    subsidizedMaturity: "Government Subsidized MRP ~ ₹1,350 / 50kg",
    usageCaution: "Apply with seed-cum-fertilizer drill 3-5 cm below the seed; do not place directly in contact with seeds.",
    isApproved: true,
    source: "Govt. Subsidized Fertilizer Schedule (Demo Reference)"
  },
  {
    id: "prod-mop",
    productName: "Muriate of Potash (MOP)",
    manufacturer: "IPL (Indian Potash Limited)",
    category: "Potassic Fertilizer",
    nutrientComposition: "60% Potassium (K2O)",
    cropApplicability: "Sugarcane, Cotton, Cereals, Pulses",
    packaging: "50 kg Bag",
    subsidizedMaturity: "Reference Price ~ ₹1,650 / 50kg",
    usageCaution: "Improves disease resistance and grain filling. Avoid in chloride-sensitive crops like tobacco and potato.",
    isApproved: true,
    source: "Potash Promotion Guidelines (Demo Reference)"
  },
  {
    id: "prod-ssp",
    productName: "Single Super Phosphate (SSP)",
    manufacturer: "Khaitan / Rama Phosphates",
    category: "Phosphatic & Sulphur Fertilizer",
    nutrientComposition: "16% P2O5, 11% Sulphur, 19% Calcium",
    cropApplicability: "Oilseeds (Soybean, Mustard, Groundnut) and Pulses",
    packaging: "50 kg Bag",
    subsidizedMaturity: "Reference Price ~ ₹550 / 50kg",
    usageCaution: "High Sulphur content makes SSP superior to DAP specifically for oilseed crops to boost oil content.",
    isApproved: true,
    source: "ICAR Oilseed Directives (Demo Reference)"
  },
  {
    id: "prod-npk-19",
    productName: "100% Water Soluble NPK (19:19:19)",
    manufacturer: "Mahadhan / Yara / GSFC",
    category: "Water Soluble Foliar & Fertigation Fertilizer",
    nutrientComposition: "19% N, 19% P, 19% K",
    cropApplicability: "Vegetables, Fruits, Cotton, Drip Fertigation",
    packaging: "1 kg & 25 kg Bag",
    subsidizedMaturity: "Commercial ~ ₹150 / kg",
    usageCaution: "For foliar spray at 5g/liter or drip systems during vegetative and early flowering stages.",
    isApproved: true,
    source: "Horticulture Department Guidance (Demo Reference)"
  },
  {
    id: "prod-mkp-0-52-34",
    productName: "Mono Potassium Phosphate (0:52:34 MKP)",
    manufacturer: "Mahadhan / Haifa / Coromandel",
    category: "Water Soluble Fertigation Grade",
    nutrientComposition: "0% N, 52% P2O5, 34% K2O",
    cropApplicability: "Tomato, Chilli, Pomegranate, Banana, Grapes",
    packaging: "1 kg & 25 kg Bag",
    subsidizedMaturity: "Commercial ~ ₹210 / kg",
    usageCaution: "Apply during flower initiation and fruit development to prevent drop and enhance brix sweetness.",
    isApproved: true,
    source: "ICAR-IIHR Fertigation Manual"
  },
  {
    id: "prod-kno3-13-0-45",
    productName: "Potassium Nitrate (13:0:45)",
    manufacturer: "IFFCO / Yara / SQM",
    category: "Water Soluble Fruit Finisher",
    nutrientComposition: "13% Nitrate Nitrogen, 45% K2O",
    cropApplicability: "Banana bunch filling, Onion bulb sizing, Pomegranate, Mango",
    packaging: "1 kg & 25 kg Bag",
    subsidizedMaturity: "Commercial ~ ₹180 / kg",
    usageCaution: "Ideal for final 30-40 days of fruit bulking. Imparts bright color, weight, and luster.",
    isApproved: true,
    source: "Horticultural Nutrition Bulletin"
  },
  {
    id: "prod-calcium-nitrate",
    productName: "Calcium Nitrate (15.5% N, 18.8% Ca)",
    manufacturer: "YaraLiva / Mahadhan / GSFC",
    category: "Cell Wall Strengthener & Fruit Firmness",
    nutrientComposition: "15.5% N, 18.8% Water Soluble Calcium",
    cropApplicability: "Tomato, Apple, Pomegranate, Capsicum, Potato",
    packaging: "25 kg Bag",
    subsidizedMaturity: "Commercial ~ ₹75 / kg",
    usageCaution: "Prevents blossom end rot in tomato and fruit cracking in pomegranate. Never mix with sulphates or phosphates.",
    isApproved: true,
    source: "National Horticulture Board"
  },
  {
    id: "prod-zinc-33",
    productName: "Zinc Sulphate Monohydrate (33% Zn, 15% S)",
    manufacturer: "IFFCO / RCF / Aries Agro",
    category: "Micronutrient",
    nutrientComposition: "33% Zinc (Zn), 15% Sulphur (S)",
    cropApplicability: "Paddy, Wheat, Maize, Cotton, Onion",
    packaging: "5 kg & 10 kg Pack",
    subsidizedMaturity: "Reference ~ ₹95 / kg",
    usageCaution: "More concentrated than 21% heptahydrate. Apply 5–7 kg/acre soil application at field preparation.",
    isApproved: true,
    source: "ICAR Micronutrient Bulletin"
  },
  {
    id: "prod-boron-20",
    productName: "Boron 20% (Disodium Octaborate Tetrahydrate)",
    manufacturer: "Aries Agro / Coromandel / Multiplex",
    category: "Micronutrient (100% Water Soluble)",
    nutrientComposition: "20% Elemental Boron (B)",
    cropApplicability: "Cauliflower (curd browning), Mustard, Tomato, Fruit orchards",
    packaging: "250g, 500g & 1 kg Pack",
    subsidizedMaturity: "Commercial ~ ₹280 / kg",
    usageCaution: "Essential for pollen tube germination and flower fruit set. Apply 1g to 1.5g per liter foliar spray.",
    isApproved: true,
    source: "ICAR-IIVR Nutrition Manual"
  },
  {
    id: "prod-chelated-micro",
    productName: "Chelated Multi-Micronutrient Grade IV (EDTA)",
    manufacturer: "Multiplex / Aries Chelamin / Bio-Stad",
    category: "Chelated Foliar Micronutrients",
    nutrientComposition: "Zn 5.0%, Fe 4.0%, Mn 2.5%, Cu 1.0%, B 0.5%, Mo 0.1%",
    cropApplicability: "All vegetables, Cotton, Fruit crops, Pulses",
    packaging: "500g & 1 kg Pack",
    subsidizedMaturity: "Commercial ~ ₹340 / kg",
    usageCaution: "Fully chelated EDTA molecules prevent soil fixation; provides instantaneous foliar correction of yellowing.",
    isApproved: true,
    source: "State Agriculture University Foliar Standards"
  },
  {
    id: "prod-bio-consortium",
    productName: "Liquid Biofertilizer Consortium (Rhizobium + PSB + KMB)",
    manufacturer: "National Biofertilizer Development Centre / IFFCO",
    category: "Microbial Soil Inoculant",
    nutrientComposition: "Viable bacterial count > 1 x 10^8 CFU/ml",
    cropApplicability: "Soybean, Chickpea, Groundnut, Pulses, Cereals",
    packaging: "500 ml & 1 Litre Bottle",
    subsidizedMaturity: "Subsidized ~ ₹150 / Litre",
    usageCaution: "Seed inoculation at 10 ml/kg seed or soil drenching. Fixes up to 25 kg atmospheric Nitrogen and mobilizes 15 kg soil Phosphorus.",
    isApproved: true,
    source: "National Centre of Organic Farming (NCOF)"
  },
  {
    id: "prod-prom",
    productName: "Phosphate Rich Organic Manure (PROM)",
    manufacturer: "Rajasthan State Mines & Minerals / Agro-Organic",
    category: "Organic Phosphorus Conditioner",
    nutrientComposition: "10.4% Total P2O5, Organic Carbon > 18%, C:N ratio < 20:1",
    cropApplicability: "Organic farming, high-value vegetables, pulses",
    packaging: "50 kg Bag",
    subsidizedMaturity: "Reference ~ ₹650 / 50kg",
    usageCaution: "Eco-friendly alternative to DAP; releases continuous phosphorus without causing soil compaction or salt toxicity.",
    isApproved: true,
    source: "Bureau of Indian Standards (BIS) & FCO 1985"
  },
  {
    id: "prod-neem-cake",
    productName: "De-oiled Neem Cake Organic Manure",
    manufacturer: "Bio-Agro Organics",
    category: "Organic Soil Conditioner & Bio-pesticide",
    nutrientComposition: "5% N, 1% P, 1.5% K + Azadirachtin alkaloids",
    cropApplicability: "All organic farming, vegetables, pulses",
    packaging: "50 kg Bag",
    subsidizedMaturity: "Commercial ~ ₹900 / 50kg",
    usageCaution: "Acts as a nitrification inhibitor, reducing nitrogen loss when mixed with Urea in 1:5 ratio.",
    isApproved: true,
    source: "National Centre of Organic Farming (Demo Reference)"
  }
];
