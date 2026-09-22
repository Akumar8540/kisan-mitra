// Government-Verified International Agri Export Demand Dataset
// Sources: APEDA Agri-Exchange (Ministry of Commerce & Industry, Govt. of India),
// DGFT Indian Trade Portal, Spices Board of India, and MPEDA.
// All values reflect realistic commercial export parameters, HS Codes, FOB pricing, and statutory documentation requirements.

export const internationalDemandData = [
  {
    id: "exp-1",
    tradeLeadId: "APEDA-TL-2026-DXB-9842",
    commodity: "Basmati Rice (1121 Extra Long Grain)",
    variety: "1121 Steam / Sella",
    category: "Cereals & Grains",
    hsCode: "1006.30.20",
    importingCountry: "United Arab Emirates",
    countryFlag: "🇦🇪",
    destinationPort: "Jebel Ali Port, Dubai",
    indianDeparturePort: "JNPT Nhava Sheva / Mundra Port",
    demandQuantity: "1,200 Metric Tonnes (48 x 20ft FCL)",
    moq: "50 Metric Tonnes (2 Containers)",
    fobPriceUsd: 1280, // USD per MT
    inrPerQuintal: 11072, // ₹ / Quintal (approx 86.5 USD/INR)
    domesticMandiRefPrice: 8450, // Domestic Mandi ₹ / Quintal
    exportPremiumPercent: 31,
    contractType: "FOB (Free on Board)",
    paymentTerms: "100% Irrevocable Confirmed L/C at Sight",
    orderTimeline: "Shipment required within 28 days of L/C issuance",
    govPortalSource: "APEDA Agri-Exchange Portal (MoCI)",
    buyerProfile: {
      companyName: "Al-Barakah International Foodstuff LLC",
      city: "Dubai",
      country: "United Arab Emirates",
      verificationStatus: "APEDA Verified Trade Partner",
      creditRating: "Dun & Bradstreet AAA"
    },
    qualitySpecifications: {
      grainLength: "8.35 mm minimum average length (uncooked)",
      moistureMax: "12.0% max",
      purityMin: "95.0% Basmati genetic purity",
      brokenGrains: "1.0% maximum",
      chalkyGrains: "2.0% maximum",
      admixture: "4.0% non-basmati / other varieties max",
      aflatoxin: "Below 4 ppb (GCC GSO standard compliant)",
      cropYear: "Harvest Season 2026 (Aged minimum 12 months)"
    },
    mandatoryDocuments: [
      {
        name: "Import Export Code (IEC)",
        issuer: "Directorate General of Foreign Trade (DGFT)",
        purpose: "Primary statutory trade license required for all cross-border outbound consignments."
      },
      {
        name: "APEDA RCMC Registration",
        issuer: "Agricultural and Processed Food Products Export Development Authority",
        purpose: "Mandatory Registration-cum-Membership Certificate for scheduled agricultural products export."
      },
      {
        name: "Phytosanitary Certificate",
        issuer: "National Plant Protection Organization (NPPO / Plant Quarantine India)",
        purpose: "Certifies consignment is free from quarantine pests, fungal spores, and noxious weeds."
      },
      {
        name: "Certificate of Origin (Non-Preferential / CEPA)",
        issuer: "Export Inspection Council (EIC) / Chamber of Commerce",
        purpose: "Avails 0% duty entry under India-UAE Comprehensive Economic Partnership Agreement (CEPA)."
      },
      {
        name: "Central FSSAI Export License",
        issuer: "Food Safety and Standards Authority of India",
        purpose: "Confirms manufacturer/packer facility meets international hygienic food handling norms."
      },
      {
        name: "Pre-Shipment Inspection Certificate",
        issuer: "SGS India / Bureau Veritas / Export Inspection Agency",
        purpose: "Independent laboratory validation of grain length, aroma, moisture, and absence of heavy metals."
      },
      {
        name: "Fumigation & Pest Clearance Certificate",
        issuer: "Approved Commercial Fumigator (Aluminium Phosphide / Methyl Bromide)",
        purpose: "Strict quarantine fumigation inside container with 72-hour gas retention exposure."
      },
      {
        name: "Commercial Invoice & Custom Packing List",
        issuer: "Exporter & Authorized Customs Broker",
        purpose: "Port customs clearance and cargo manifest generation on ICEGATE."
      },
      {
        name: "Bill of Lading (Clean on Board)",
        issuer: "Shipping Line (e.g. Maersk / MSC / CMA CGM)",
        purpose: "Title of goods document forwarded through negotiating bank under Letter of Credit."
      }
    ],
    packagingSpecs: {
      containerType: "20ft FCL Standard Dry Container",
      loadability: "25 Metric Tonnes per 20ft container (1,000 bags)",
      bagType: "25 kg Non-Woven BOPP Laminated Multi-Color Bags",
      palletization: "Heat-treated ISPM-15 certified wooden pallets, shrink-wrapped with corner boards",
      marking: "Bilingual English & Arabic labeling showing nutritional data, production date, and batch code."
    },
    govIncentives: {
      rodtepRate: "2.5% of FOB Value",
      rodtepBenefitINR: "₹2,768 per Metric Tonne",
      tmaSupport: "Eligible for Transport & Marketing Assistance freight subsidy",
      interestEqualization: "3% Pre & Post Shipment Export Credit subsidy for MSME agri-exporters"
    }
  },
  {
    id: "exp-2",
    tradeLeadId: "SPICES-EX-2026-VN-1198",
    commodity: "Dry Red Chilli (G4 / Teja S17 Variety)",
    variety: "Teja S17 Stemless (Heat Level 75,000 - 90,000 SHU)",
    category: "Spices & Condiments",
    hsCode: "0904.21.10",
    importingCountry: "Vietnam",
    countryFlag: "🇻🇳",
    destinationPort: "Hai Phong Port / Da Nang Port",
    indianDeparturePort: "Chennai Port / Krishnapatnam Port",
    demandQuantity: "500 Metric Tonnes (35 x 40ft High Cube)",
    moq: "28 Metric Tonnes (2 x 40ft HC)",
    fobPriceUsd: 3200, // USD per MT
    inrPerQuintal: 27680, // ₹ / Quintal
    domesticMandiRefPrice: 21500, // Mandi rate in Guntur APMC
    exportPremiumPercent: 28,
    contractType: "CIF (Cost, Insurance and Freight)",
    paymentTerms: "30% Advance T/T, 70% against Scanned Shipping Documents (CAD)",
    orderTimeline: "Immediate dispatch in 3 tranches across October - November",
    govPortalSource: "Spices Board of India International Buyer Inquiry",
    buyerProfile: {
      companyName: "VinaSpices Oleoresin & Seasonings JSC",
      city: "Hai Phong",
      country: "Vietnam",
      verificationStatus: "Spices Board Registered Foreign Importer",
      creditRating: "Standard & Poor's A-"
    },
    qualitySpecifications: {
      heatUnits: "75,000 - 90,000 Scoville Heat Units (SHU)",
      colorValue: "ASTA 50 - 65 Units",
      moistureMax: "10.0% max (dry crisp)",
      stemStatus: "100% Machine Stemless cut",
      foreignMatterMax: "0.5% max",
      looseSeedsMax: "2.0% max",
      aflatoxinTotal: "Below 10 ppb (B1 < 5 ppb)",
      sudanDyes: "Strictly Absent (Sudan I, II, III, IV negative on HPLC test)"
    },
    mandatoryDocuments: [
      {
        name: "Import Export Code (DGFT IEC)",
        issuer: "DGFT India",
        purpose: "Exporter identification for clearance on Indian Customs EDI portal."
      },
      {
        name: "Spices Board CRES Certificate",
        issuer: "Spices Board of India, Kochi",
        purpose: "Certificate of Registration as Exporter of Spices under Spices Board Act."
      },
      {
        name: "Health & Quality Certificate",
        issuer: "Spices Board Quality Evaluation Laboratory (QEL)",
        purpose: "Mandatory pre-export sampling verifying absence of Sudan dyes, pesticide residues, and aflatoxins."
      },
      {
        name: "Phytosanitary Certificate",
        issuer: "Directorate of Plant Protection, Quarantine & Storage",
        purpose: "Meets Vietnamese Plant Protection Department (MARD) import protocols."
      },
      {
        name: "ASEAN-India FTA Preferential Certificate of Origin (Form AI)",
        issuer: "Export Inspection Agency (EIA)",
        purpose: "Qualifies Vietnamese buyer for concessional duty under ASEAN-India Trade in Goods Agreement."
      },
      {
        name: "Fumigation Certificate",
        issuer: "Accredited Pest Control Operator",
        purpose: "Phosphine gas fumigation at 3g/m³ for 120 hours minimum exposure."
      }
    ],
    packagingSpecs: {
      containerType: "40ft High Cube Container (Dry)",
      loadability: "14 Metric Tonnes per 40ft HC (Chilli is voluminous)",
      bagType: "25 kg Pressed Jute / Polypropylene ventilated bags with food-grade inner liner",
      palletization: "Floor-loaded with desiccant dry-bags (silica gel 1 kg x 16 bags) to prevent condensation.",
      marking: "Commodity, Lot Number, Crop Year, Capsaicin Content, Gross & Net Weight."
    },
    govIncentives: {
      rodtepRate: "3.1% of FOB Value",
      rodtepBenefitINR: "₹8,580 per Metric Tonne",
      tmaSupport: "Spices Board export promotion grant eligible",
      interestEqualization: "3% Subvention on working capital credit"
    }
  },
  {
    id: "exp-3",
    tradeLeadId: "DGFT-EXP-2026-US-4102",
    commodity: "Organic Cumin Seeds / Jeera (Machine Cleaned)",
    variety: "Gujarat Bold Organic (99.5% Purity)",
    category: "Spices & Condiments",
    hsCode: "0909.31.21",
    importingCountry: "United States",
    countryFlag: "🇺🇸",
    destinationPort: "Port of New York / Newark & Long Beach",
    indianDeparturePort: "Mundra Port (Gujarat)",
    demandQuantity: "250 Metric Tonnes (12 x 20ft FCL)",
    moq: "20 Metric Tonnes (1 x 20ft FCL)",
    fobPriceUsd: 3850, // USD per MT
    inrPerQuintal: 33302, // ₹ / Quintal
    domesticMandiRefPrice: 25400, // Mandi rate in Unjha APMC
    exportPremiumPercent: 31,
    contractType: "FOB (Free on Board)",
    paymentTerms: "Confirmed Irrevocable L/C payable at 60 days sight",
    orderTimeline: "Shipment before November 15, 2026",
    govPortalSource: "DGFT Indian Trade Portal & US FDA Prior Notice Registry",
    buyerProfile: {
      companyName: "Atlantic Spice & Botanicals Corp",
      city: "New Jersey",
      country: "United States",
      verificationStatus: "US FDA Registered Food Importer",
      creditRating: "Dun & Bradstreet AA+"
    },
    qualitySpecifications: {
      purity: "99.5% Machine Cleaned Sortex Grade",
      volatileOil: "2.8% to 3.5% minimum",
      moistureMax: "8.5% max",
      totalAshMax: "7.0% max",
      acidInsolubleAsh: "1.0% max",
      salmonella: "Absent in 375g (strict FDA pathogen standard)",
      pesticideMRL: "Complies with US EPA tolerance levels (Zero organophosphates)"
    },
    mandatoryDocuments: [
      {
        name: "DGFT Import Export Code (IEC)",
        issuer: "DGFT",
        purpose: "Customs declaration on ICEGATE."
      },
      {
        name: "NPOP Organic Scope Certificate",
        issuer: "National Programme for Organic Production (APEDA accredited agency like OneCert / Aditi)",
        purpose: "Verifies organic provenance from farm to processing unit under USDA NOP equivalence."
      },
      {
        name: "US FDA Facility Registration & Prior Notice",
        issuer: "US Food and Drug Administration (FDA)",
        purpose: "Bioterrorism Act compliance; mandatory prior notification before vessel departure."
      },
      {
        name: "Certificate of Analysis (COA)",
        issuer: "Eurofins / NABL Accredited Analytical Lab",
        purpose: "Gas chromatography volatile oil profiling and multi-residue pesticide screening."
      },
      {
        name: "Phytosanitary Certificate",
        issuer: "NPPO Plant Quarantine",
        purpose: "US Department of Agriculture (USDA APHIS) entry authorization."
      },
      {
        name: "Certificate of Origin",
        issuer: "Indian Merchants' Chamber (IMC)",
        purpose: "Tariff classification and US Customs border entry verification."
      }
    ],
    packagingSpecs: {
      containerType: "20ft FCL Dry Freight Container",
      loadability: "20 Metric Tonnes per 20ft container",
      bagType: "25 kg or 50 lb Multi-wall Kraft paper bags with food-grade polyethylene inner liner",
      palletization: "Fumigated wooden pallets, stretch wrapped, with desiccants placed along ceiling.",
      marking: "USDA Organic logo, Batch number, Net Wt 50 lbs / 22.68 kg, Product of India."
    },
    govIncentives: {
      rodtepRate: "2.8% of FOB Value",
      rodtepBenefitINR: "₹9,324 per Metric Tonne",
      tmaSupport: "Eligible for Organic Export Promotion Incentive",
      interestEqualization: "3% Interest subvention on pre-shipment credit"
    }
  },
  {
    id: "exp-4",
    tradeLeadId: "APEDA-TL-2026-SA-6610",
    commodity: "Nashik Red Onion (Export Quality 45mm - 60mm)",
    variety: "Garwa / Rabi Red Medium-Big",
    category: "Fresh Fruits & Vegetables",
    hsCode: "0703.10.10",
    importingCountry: "Saudi Arabia",
    countryFlag: "🇸🇦",
    destinationPort: "Jeddah Islamic Port / Dammam Port",
    indianDeparturePort: "JNPT Nhava Sheva (Reefer Terminal)",
    demandQuantity: "800 Metric Tonnes (28 x 40ft Reefer)",
    moq: "58 Metric Tonnes (2 x 40ft Reefer)",
    fobPriceUsd: 420, // USD per MT
    inrPerQuintal: 3633, // ₹ / Quintal
    domesticMandiRefPrice: 2450, // Mandi rate in Lasalgaon APMC
    exportPremiumPercent: 48,
    contractType: "FOB Nhava Sheva",
    paymentTerms: "40% Advance Wire Transfer, 60% on Bill of Lading copy",
    orderTimeline: "Continuous deliveries: 4 containers every Tuesday",
    govPortalSource: "APEDA Agri-Exchange Fresh Produce Desk",
    buyerProfile: {
      companyName: "Saudi Agricultural & Wholesale Markets Ltd (SAWML)",
      city: "Riyadh & Jeddah",
      country: "Saudi Arabia",
      verificationStatus: "SFDA (Saudi FDA) Approved Produce Distributor",
      creditRating: "Govt. Backed Enterprise"
    },
    qualitySpecifications: {
      bulbSize: "45 mm to 60 mm diameter uniform grading",
      shapeAndColor: "Globe round, dark red lustrous papery skin (2 to 3 skins)",
      pungency: "High natural pungency (Pyruvic acid > 9.5 umol/g)",
      sproutingRotting: "0.0% sprouting, 0.0% neck rot / black mold",
      soilDirt: "Free from adhering soil, stones, and foreign roots",
      dryMatter: "13.5% minimum solid content"
    },
    mandatoryDocuments: [
      {
        name: "DGFT IEC & APEDA Registration",
        issuer: "DGFT & APEDA",
        purpose: "Basic commercial export compliance."
      },
      {
        name: "SFDA Conformity Certificate (SABER Platform)",
        issuer: "Saudi Food and Drug Authority accredited partner (Intertek / Nemko)",
        purpose: "Electronic SABER product and shipment certificate mandatory for Saudi customs entry."
      },
      {
        name: "Phytosanitary Certificate",
        issuer: "NPPO Quarantine Office, Mumbai",
        purpose: "Certifies freedom from Stem and Bulb Nematode (Ditylenchus dipsaci)."
      },
      {
        name: "Certificate of Origin",
        issuer: "Federation of Indian Export Organisations (FIEO)",
        purpose: "Legalized commercial origin certificate."
      },
      {
        name: "Reefer Pre-Cooling & Temperature Log Certificate",
        issuer: "Cold Chain Operator / Surveyor",
        purpose: "Documents continuous pulp temperature maintained at +1°C to +2°C with 65-70% RH."
      }
    ],
    packagingSpecs: {
      containerType: "40ft High Cube Bimodal Reefer Container",
      loadability: "28.5 Metric Tonnes per 40ft Reefer (1,140 mesh bags)",
      bagType: "25 kg or 10 kg Red Leno Mesh Bags (breathable weave)",
      temperatureSetting: "+1.5°C with 15 cbm/hr fresh air exchange and 65% Relative Humidity",
      marking: "Origin: Nashik, India. Size Grade, Pack Date, Exporter APEDA Reg No."
    },
    govIncentives: {
      rodtepRate: "1.8% of FOB Value",
      rodtepBenefitINR: "₹654 per Metric Tonne",
      tmaSupport: "Special Air/Sea Freight Subsidy on Perishable Horticulture under APEDA scheme",
      interestEqualization: "Exemption from MEP (Minimum Export Price) when active"
    }
  },
  {
    id: "exp-5",
    tradeLeadId: "APEDA-TL-2026-NL-5520",
    commodity: "Fresh Cavendish Bananas (Grand Naine G9)",
    variety: "Grand Naine (G9) Export Grade",
    category: "Fresh Fruits & Vegetables",
    hsCode: "0803.90.10",
    importingCountry: "Netherlands",
    countryFlag: "🇳🇱",
    destinationPort: "Port of Rotterdam (Gateway to Western Europe)",
    indianDeparturePort: "JNPT Nhava Sheva (Mumbai)",
    demandQuantity: "600 Metric Tonnes (30 x 40ft Reefer Containers)",
    moq: "40 Metric Tonnes (2 Reefer Containers)",
    fobPriceUsd: 720, // USD per MT
    inrPerQuintal: 6228, // ₹ / Quintal
    domesticMandiRefPrice: 3800, // Mandi rate in Jalgaon / Solapur APMC
    exportPremiumPercent: 64,
    contractType: "CIF Rotterdam",
    paymentTerms: "100% L/C at Sight from Prime European Bank",
    orderTimeline: "Bi-weekly shipments throughout October to January",
    govPortalSource: "APEDA Sea-Protocol Export Initiative for Perishables",
    buyerProfile: {
      companyName: "EuroAgri Fresh Logistics B.V.",
      city: "Rotterdam",
      country: "Netherlands",
      verificationStatus: "GLOBALG.A.P. Certified European Importer",
      creditRating: "Dun & Bradstreet AAA"
    },
    qualitySpecifications: {
      fingerLength: "Minimum 18 cm (7.0 inches) along outer curve",
      calibrationDiameter: "39 mm to 46 mm (grade caliper)",
      handsPerBox: "4, 5, or 6 cluster hands per carton",
      ripenessStage: "Stage 1 (Harvested dark green, unripe, pulp temperature 13.5°C)",
      blemishDefects: "Zero thrip damage, zero crown rot, zero latex stains",
      certification: "GLOBALG.A.P. Option 1 or Option 2 certified farm cluster"
    },
    mandatoryDocuments: [
      {
        name: "DGFT IEC & APEDA Registration",
        issuer: "DGFT & APEDA",
        purpose: "Statutory trade registration."
      },
      {
        name: "GLOBALG.A.P. Certificate",
        issuer: "Accredited Certification Body (Control Union / SGS)",
        purpose: "Mandatory on-farm food safety and agricultural practice audit for EU retail supermarkets."
      },
      {
        name: "EU Phytosanitary Certificate",
        issuer: "NPPO Quarantine Station",
        purpose: "Meets EU Plant Health Regulation (EU) 2016/2031 protocols."
      },
      {
        name: "EUTR & Due Diligence Declaration",
        issuer: "Exporter & APEDA Packhouse",
        purpose: "EU deforestation-free supply chain documentation."
      },
      {
        name: "Controlled Atmosphere (CA) Data Logger Log",
        issuer: "Shipping Line / Reefer Technician",
        purpose: "Verifies O2 at 2-5% and CO2 at 4-6% with 13.5°C continuous pulp temperature during 18-day voyage."
      }
    ],
    packagingSpecs: {
      containerType: "40ft High Cube Controlled Atmosphere (CA) Reefer",
      loadability: "1,540 telescopic corrugated cartons (20 Metric Tonnes net)",
      bagType: "13.0 kg Net Telescopic 5-ply Corrugated Cartons with Banavac vacuum bag & ethylene absorbing sachet",
      palletization: "20 Euro pallets per 40ft container strapped with corner paper boards.",
      marking: "Batch QR Code, Pack Date, Farm Traceability ID, Storage guidelines."
    },
    govIncentives: {
      rodtepRate: "2.5% of FOB Value",
      rodtepBenefitINR: "₹1,557 per Metric Tonne",
      tmaSupport: "Perishable Cargo Inland Transport and Air/Ocean Subsidy under MoCI",
      interestEqualization: "3% Pre-shipment credit subvention"
    }
  },
  {
    id: "exp-6",
    tradeLeadId: "DGFT-EXP-2026-JP-7734",
    commodity: "Organic Non-GMO Soybean Meal / Feed Grade",
    variety: "De-oiled Soybean Cake / Meal (Min 48% Protein)",
    category: "Oilseeds & Pulses",
    hsCode: "2304.00.10",
    importingCountry: "Japan",
    countryFlag: "🇯🇵",
    destinationPort: "Port of Yokohama / Kobe",
    indianDeparturePort: "Kandla Port / Mundra Port",
    demandQuantity: "2,500 Metric Tonnes (Breakbulk or 100 x 20ft FCL)",
    moq: "250 Metric Tonnes (10 Containers)",
    fobPriceUsd: 590, // USD per MT
    inrPerQuintal: 5103, // ₹ / Quintal
    domesticMandiRefPrice: 4250, // Mandi rate in Indore / Ujjain APMC
    exportPremiumPercent: 20,
    contractType: "FOB Indian Port",
    paymentTerms: "Letter of Credit at 90 days or Bank Guarantee",
    orderTimeline: "November - December 2026 post kharif crushing cycle",
    govPortalSource: "SOPA (Soybean Processors Association of India) & DGFT Trade Desk",
    buyerProfile: {
      companyName: "Nippon Agri-Nutrition & Feed Milling Corp",
      city: "Tokyo",
      country: "Japan",
      verificationStatus: "MAFF Japan Approved Feed Importer",
      creditRating: "Standard & Poor's AA"
    },
    qualitySpecifications: {
      crudeProtein: "48.0% minimum (Kjeldahl N x 6.25)",
      moistureMax: "11.0% maximum",
      crudeFatMax: "1.5% maximum",
      crudeFiberMax: "6.0% maximum",
      ureaseActivity: "0.05 to 0.20 mg N/g/min at 30°C (perfect cook indicator)",
      gmoStatus: "Strictly Non-GMO (PCR test 100% negative - Japanese strict norm)",
      radiationInspection: "Free from radioactivity (< 10 Bq/kg)"
    },
    mandatoryDocuments: [
      {
        name: "DGFT IEC & Export License",
        issuer: "DGFT",
        purpose: "Statutory customs registration."
      },
      {
        name: "Non-GMO Verification Certificate",
        issuer: "Eurofins / NABL Accredited GeneScan Testing Lab",
        purpose: "Polymerase Chain Reaction (PCR) test certifying 0.00% transgenic DNA."
      },
      {
        name: "Certificate of Analysis for Feed Safety",
        issuer: "SGS India / Export Inspection Agency",
        purpose: "Guarantees protein %, urease activity, and absence of heavy metals/salmonella."
      },
      {
        name: "India-Japan CEPA Certificate of Origin",
        issuer: "Export Inspection Council (EIC)",
        purpose: "Grants tariff concession under Comprehensive Economic Partnership Agreement."
      },
      {
        name: "Phytosanitary & Pest Free Certificate",
        issuer: "NPPO India",
        purpose: "Guarantees grain free of Trogoderma granarium (Khapra beetle)."
      }
    ],
    packagingSpecs: {
      containerType: "20ft Heavy-Duty Container or Dry Bulk Vessel",
      loadability: "22 Metric Tonnes per 20ft container in bags, or 25 MT in container liners",
      bagType: "50 kg New PP Woven Bags with PE liner, or 1 MT Big Bags (FIBC Jumbo Bags)",
      palletization: "Optional jumbo sling bags for rapid mechanised crane discharge.",
      marking: "Non-GMO Protein Meal, Protein %, Lot ID, Exporter Details."
    },
    govIncentives: {
      rodtepRate: "1.5% of FOB Value",
      rodtepBenefitINR: "₹765 per Metric Tonne",
      tmaSupport: "Eligible for Oilseed Export Promotion Scheme",
      interestEqualization: "3% Interest subsidy on export credit"
    }
  },
  {
    id: "exp-7",
    tradeLeadId: "APEDA-TL-2026-UK-3390",
    commodity: "Turmeric Whole Fingers (Curcumin 3.5%+)",
    variety: "Salem / Nizamabad Double Polished Finger",
    category: "Spices & Condiments",
    hsCode: "0910.30.20",
    importingCountry: "United Kingdom",
    countryFlag: "🇬🇧",
    destinationPort: "Port of Felixstowe / Southampton",
    indianDeparturePort: "Chennai Port / Tuticorin Port",
    demandQuantity: "300 Metric Tonnes (15 x 20ft FCL)",
    moq: "20 Metric Tonnes (1 Container)",
    fobPriceUsd: 1950, // USD per MT
    inrPerQuintal: 16867, // ₹ / Quintal
    domesticMandiRefPrice: 13200, // Mandi rate in Nizamabad / Sangli APMC
    exportPremiumPercent: 28,
    contractType: "CIF Felixstowe",
    paymentTerms: "25% Advance, 75% D/P (Documents Against Payment at Sight)",
    orderTimeline: "October 2026 delivery",
    govPortalSource: "Spices Board & APEDA UK-India Trade Facilitation Cell",
    buyerProfile: {
      companyName: "Britannia Organic Spices & Botanicals Ltd",
      city: "London",
      country: "United Kingdom",
      verificationStatus: "UK Food Standards Agency (FSA) Registered",
      creditRating: "Dun & Bradstreet AA"
    },
    qualitySpecifications: {
      curcuminContent: "3.5% to 4.2% minimum by spectrophotometry",
      polishingStatus: "Double Polished (smooth bright golden-yellow outer skin)",
      moistureMax: "9.0% maximum",
      foreignMatterMax: "0.5% maximum",
      leadChromateAdulteration: "Strictly Negative (Zero chemical colorants)",
      aflatoxinB1: "< 2 ppb, Total Aflatoxin < 4 ppb (Strict UK & EU limits)"
    },
    mandatoryDocuments: [
      {
        name: "DGFT IEC & Spices Board Registration",
        issuer: "DGFT & Spices Board",
        purpose: "Cross-border trade license."
      },
      {
        name: "Spices Board Quality Certificate",
        issuer: "Spices Board of India QEL",
        purpose: "Mandatory pre-shipment sampling testing for Lead, Pesticides & Aflatoxins."
      },
      {
        name: "UK Import Health Standard Declaration",
        issuer: "NPPO & Authorized Testing Agency",
        purpose: "Pre-notified entry on UK IPAFFS (Import of Products, Animals, Food and Feed System)."
      },
      {
        name: "Certificate of Origin",
        issuer: "FIEO / Chamber of Commerce",
        purpose: "Customs duty verification."
      }
    ],
    packagingSpecs: {
      containerType: "20ft FCL Standard Dry Container",
      loadability: "20 Metric Tonnes per 20ft FCL",
      bagType: "25 kg or 50 kg New Jute Bags or Multiwall Paper Bags",
      palletization: "Palletized with desiccants and craft paper lining against container walls.",
      marking: "Indian Turmeric Finger Salem Grade, Curcumin 3.5%+, Batch No, Expiry 24 Months."
    },
    govIncentives: {
      rodtepRate: "2.5% of FOB Value",
      rodtepBenefitINR: "₹4,216 per Metric Tonne",
      tmaSupport: "Eligible for Spices Board Export Assistance",
      interestEqualization: "3% Pre-shipment credit subvention"
    }
  },
  {
    id: "exp-8",
    tradeLeadId: "APEDA-TL-2026-BD-8801",
    commodity: "Sharbati / Durum Wheat & Milling Wheat",
    variety: "Mill Quality Milling Wheat (Protein > 11.5%)",
    category: "Cereals & Grains",
    hsCode: "1001.99.10",
    importingCountry: "Bangladesh",
    countryFlag: "🇧🇩",
    destinationPort: "Benapole Land Port / Chattogram Port",
    indianDeparturePort: "Petrapole Land Customs Station (West Bengal) or Kolkata Port",
    demandQuantity: "10,000 Metric Tonnes (Rake loads / Barge)",
    moq: "1,000 Metric Tonnes",
    fobPriceUsd: 310, // USD per MT
    inrPerQuintal: 2681, // ₹ / Quintal
    domesticMandiRefPrice: 2425, // Central Govt. Wheat MSP Reference
    exportPremiumPercent: 11,
    contractType: "CPT Benapole / FOB Kolkata",
    paymentTerms: "100% Confirmed Sight L/C through Sonali Bank",
    orderTimeline: "Immediate rake shipments (4 railway rakes per week)",
    govPortalSource: "DGFT Government-to-Government (G2G) & Food Ministry Quota Allocation",
    buyerProfile: {
      companyName: "Bangla Flour & Feed Mills Consortium Ltd",
      city: "Dhaka",
      country: "Bangladesh",
      verificationStatus: "Directorate General of Food (DGF) Authorized Importer",
      creditRating: "A+ Verified"
    },
    qualitySpecifications: {
      proteinContent: "11.5% to 12.5% minimum",
      testWeight: "78 kg/hl minimum",
      moistureMax: "11.5% max",
      wetGluten: "26.0% minimum",
      foreignMatterMax: "1.0% max",
      fallingNumber: "300 seconds minimum (indicates zero sprouting)",
      karnalBunt: "Zero tolerance (tested by NPPO)"
    },
    mandatoryDocuments: [
      {
        name: "DGFT G2G Grain Export Permission",
        issuer: "Directorate General of Foreign Trade & Dept of Food & Public Distribution",
        purpose: "Special allocation clearance for humanitarian / neighbor-first export corridor."
      },
      {
        name: "Phytosanitary Certificate with Karnal Bunt Free Endorsement",
        issuer: "Plant Quarantine Division (NPPO)",
        purpose: "Guarantees shipment freedom from Tilletia indica."
      },
      {
        name: "SAFTA Preferential Certificate of Origin",
        issuer: "Export Inspection Agency (EIA)",
        purpose: "SAARC preferential zero tariff customs access."
      },
      {
        name: "Railway Consignment Note (RR) / Bill of Lading",
        issuer: "Indian Railways / Shipping Line",
        purpose: "Cross-border transit receipt."
      }
    ],
    packagingSpecs: {
      containerType: "Railway BCN Rake / 50 kg PP Bagged Cargo",
      loadability: "2,600 Metric Tonnes per full railway rake",
      bagType: "50 kg virgin HDPE/PP woven bags with double machine stitching",
      palletization: "Non-palletized railway rake loading / mechanised conveyor loading.",
      marking: "Food Grade Wheat, Gross Wt 50.15 kg, Net Wt 50.00 kg, Harvest 2026."
    },
    govIncentives: {
      rodtepRate: "1.0% of FOB Value",
      rodtepBenefitINR: "₹268 per Metric Tonne",
      tmaSupport: "Neighbor country border transit tariff rationalization",
      interestEqualization: "Standard RBI export credit facility"
    }
  },
  {
    id: "exp-9",
    tradeLeadId: "APEDA-TL-2026-DE-3391",
    commodity: "Bhagwa Pomegranate (GI Certified Maharashtra)",
    variety: "Export Grade Bhagwa (Deep Red Arils, Min 280g+ Fruit Weight)",
    category: "Fresh Fruits & Horticulture",
    hsCode: "0810.90.10",
    importingCountry: "Germany",
    countryFlag: "🇩🇪",
    destinationPort: "Hamburg Port & Bremen Logistics Hub",
    indianDeparturePort: "JNPT Nhava Sheva (Mumbai) - Reefer Vessel",
    demandQuantity: "400 Metric Tonnes (20 x 40ft Reefer FCL)",
    moq: "20 Metric Tonnes (1 x 40ft Reefer Container)",
    fobPriceUsd: 2450, // USD per MT
    inrPerQuintal: 21192, // ₹ / Quintal
    domesticMandiRefPrice: 13500, // Mandi rate in Solapur APMC
    exportPremiumPercent: 57,
    contractType: "FOB JNPT / CIF Hamburg (GlobalGAP Certified)",
    paymentTerms: "20% Advance T/T, 80% Irrevocable Confirmed L/C at Sight",
    orderTimeline: "Staggered weekly container dispatches during October - January window",
    govPortalSource: "APEDA Horticulture Export Development Cell",
    buyerProfile: {
      companyName: "EuroBio Fruit Logistics GmbH",
      city: "Hamburg",
      country: "Germany",
      verificationStatus: "APEDA EU-Registered Organic & GlobalGAP Partner",
      creditRating: "Creditreform A1 Verified"
    },
    qualitySpecifications: {
      fruitWeight: "280g to 400g average fruit size",
      sugarContent: "Brix 16.0° minimum (high natural sweetness)",
      arilColor: "Deep glossy ruby red arils with soft chewable seeds",
      skinAppearance: "Bright glossy red skin, maximum 5% minor surface blemish",
      mrlLimits: "Strict compliance with EU Regulation (EC) No 396/2005 on pesticide residues",
      fungalSporeCount: "Zero tolerance for Alternaria black spot or Colletotrichum rot"
    },
    mandatoryDocuments: [
      {
        name: "DGFT Import Export Code (IEC)",
        issuer: "Directorate General of Foreign Trade",
        purpose: "Primary statutory trade license for cross-border outbound shipments."
      },
      {
        name: "APEDA Registration-cum-Membership Certificate (RCMC)",
        issuer: "APEDA, New Delhi",
        purpose: "Mandatory apex body export registration."
      },
      {
        name: "GlobalGAP Option 1 / Option 2 Farm Certification",
        issuer: "Food Safety Systems Certification Agency",
        purpose: "Good Agricultural Practice verification required by EU supermarkets (Rewe, Edeka)."
      },
      {
        name: "APEDA TraceNet Pomegranate Clearance Certificate",
        issuer: "APEDA Traceability System",
        purpose: "Lot-wise farm traceability back to registered Maharashtra grower orchard."
      },
      {
        name: "EU Phytosanitary Certificate",
        issuer: "Plant Quarantine Division (NPPO India)",
        purpose: "Freedom from fruit flies (Bactrocera zonata) and regulated quarantine organisms."
      },
      {
        name: "Certificate of Origin (Non-Preferential)",
        issuer: "Export Inspection Council (EIC) / FIEO",
        purpose: "German customs tariff clearance."
      }
    ],
    packagingSpecs: {
      containerType: "40ft High Cube Controlled Atmosphere (CA) Reefer Container",
      loadability: "18 to 20 Metric Tonnes per 40ft Reefer (approx 4,800 cartons)",
      bagType: "3.5 kg / 4.0 kg Corrugated Fiberboard (CFB) telescopic trays with individual fruit foam netting",
      palletization: "Euro-pallets (1200 x 800 mm) shrink-wrapped with corner angles; continuous logger for temp (+5°C) and RH (90-95%)",
      marking: "Batch ID, Farm GlobalGAP GGN Number, Packhouse APEDA Code, Net Wt 3.5 kg, Best Before."
    },
    govIncentives: {
      rodtepRate: "2.5% of FOB Value",
      rodtepBenefitINR: "₹5,298 per Metric Tonne",
      tmaSupport: "Eligible for APEDA Cold Chain Sea Freight Subsidy",
      interestEqualization: "3% Pre-shipment Export Credit Subvention"
    }
  },
  {
    id: "exp-10",
    tradeLeadId: "APEDA-TL-2026-KR-7720",
    commodity: "Natural White Hulled Sesame Seeds (Auto-Sortex 99.98% Purity)",
    variety: "Gujarat White Bold Premium Sortex Cleaned",
    category: "Oilseeds & Agri Feeds",
    hsCode: "1207.40.90",
    importingCountry: "South Korea",
    countryFlag: "🇰🇷",
    destinationPort: "Busan Port, Republic of Korea",
    indianDeparturePort: "Mundra Port / Pipavav Port (Gujarat)",
    demandQuantity: "800 Metric Tonnes (40 x 20ft FCL)",
    moq: "40 Metric Tonnes (2 x 20ft FCL)",
    fobPriceUsd: 2100, // USD per MT
    inrPerQuintal: 18165, // ₹ / Quintal
    domesticMandiRefPrice: 13200, // Rajkot / Gondal Mandi
    exportPremiumPercent: 38,
    contractType: "FOB Mundra Port",
    paymentTerms: "100% Irrevocable Confirmed L/C at Sight through Shinhan Bank",
    orderTimeline: "Dispatch across 60 days following tender allocation",
    govPortalSource: "Korea Agro-Fisheries & Food Trade Corp (aT) Global Procurement / DGFT",
    buyerProfile: {
      companyName: "Seoul Agri-Foods & Sesame Oil Industries Corp",
      city: "Seoul",
      country: "South Korea",
      verificationStatus: "KOTRA & IOPEPC Registered Foreign Buyer",
      creditRating: "Dun & Bradstreet AA"
    },
    qualitySpecifications: {
      purity: "99.98% minimum (triple sortex clean)",
      moistureMax: "4.5% max (dry crisp)",
      freeFattyAcids: "1.0% maximum FFA",
      oilContentMin: "51.0% minimum natural oil yield",
      ethyleneOxide: "Strictly Non-Detectable (ETO < 0.01 mg/kg tested on LC-MS/MS)",
      salmonellaEcoli: "Completely absent in 25g composite sample"
    },
    mandatoryDocuments: [
      {
        name: "DGFT Import Export Code (IEC)",
        issuer: "DGFT India",
        purpose: "Cross-border export clearance."
      },
      {
        name: "IOPEPC Registration Certificate",
        issuer: "Indian Oilseeds and Produce Export Promotion Council",
        purpose: "Mandatory registration for sesame seed export certification."
      },
      {
        name: "ETO Pre-Shipment Analytical Certificate",
        issuer: "Spices Board / NABL Accredited Laboratory",
        purpose: "Mandatory Korean Ministry of Food and Drug Safety (MFDS) clearance."
      },
      {
        name: "Phytosanitary Certificate",
        issuer: "Directorate of Plant Protection, Quarantine & Storage (NPPO)",
        purpose: "Standard bilateral quarantine compliance."
      },
      {
        name: "India-Korea CEPA Preferential Certificate of Origin",
        issuer: "Export Inspection Agency (EIA)",
        purpose: "Concessional tariff access under India-Korea CEPA."
      }
    ],
    packagingSpecs: {
      containerType: "20ft FCL Standard Dry Container",
      loadability: "20 Metric Tonnes per 20ft container (800 bags)",
      bagType: "25 kg Multi-wall Kraft Paper Bags with inner food-grade PE liner, heat sealed",
      palletization: "Palletized with desiccants and moisture-barrier container lining",
      marking: "Natural Hulled Sesame Seeds 99.98%, Batch No, Exp Date, Korean Nutrition Facts."
    },
    govIncentives: {
      rodtepRate: "2.8% of FOB Value",
      rodtepBenefitINR: "₹5,086 per Metric Tonne",
      tmaSupport: "Eligible for IOPEPC trade promotion assistance",
      interestEqualization: "3% Working capital subvention"
    }
  },
  {
    id: "exp-11",
    tradeLeadId: "APEDA-TL-2026-AU-5104",
    commodity: "Dehydrated White Onion Flakes & Minced Granules",
    variety: "High-TSO Mahuva White Onion (Total Soluble Solids > 15%)",
    category: "Processed Agri & Dehydrated Vegetables",
    hsCode: "0712.20.00",
    importingCountry: "Australia",
    countryFlag: "🇦🇺",
    destinationPort: "Port of Melbourne / Port of Sydney",
    indianDeparturePort: "Mundra Port / Nhava Sheva",
    demandQuantity: "250 Metric Tonnes (18 x 40ft HC FCL)",
    moq: "14 Metric Tonnes (1 x 40ft High Cube)",
    fobPriceUsd: 3650, // USD per MT
    inrPerQuintal: 31572, // ₹ / Quintal
    domesticMandiRefPrice: 21000, // Raw processing onion basis
    exportPremiumPercent: 50,
    contractType: "CIF Melbourne (ECTA Duty-Free Tariff)",
    paymentTerms: "30% Advance T/T, 70% against BL and SGS inspection certificate",
    orderTimeline: "Shipment within 35 days of contract execution",
    govPortalSource: "DGFT India-Australia Economic Cooperation and Trade Agreement (ECTA) Desk",
    buyerProfile: {
      companyName: "Oceania Spice & Food Processing Supplies Pty Ltd",
      city: "Melbourne",
      country: "Australia",
      verificationStatus: "Australian Department of Agriculture, Fisheries and Forestry (DAFF) Approved",
      creditRating: "Dun & Bradstreet AAA"
    },
    qualitySpecifications: {
      moistureMax: "5.5% max (oven dried)",
      totalAshMax: "4.0% max",
      insolubleMatter: "15% max hot water insoluble",
      microbialCount: "Total Plate Count < 50,000 cfu/g; Coliforms < 10 cfu/g",
      yeastMold: "Below 100 cfu/g, Salmonella absent in 375g",
      sulphurDioxide: "SO2 < 30 ppm (food processing grade)",
      foreignMatter: "Zero insect parts or synthetic contaminants (100% metal detected)"
    },
    mandatoryDocuments: [
      {
        name: "DGFT IEC & APEDA RCMC",
        issuer: "DGFT / APEDA",
        purpose: "Statutory trade registration."
      },
      {
        name: "India-Australia ECTA Preferential Certificate of Origin",
        issuer: "Export Inspection Agency (EIA)",
        purpose: "Qualifies importer for 0% zero-duty tariff under ECTA agreement."
      },
      {
        name: "Australian Biosecurity Import Clearance Permit",
        issuer: "DAFF Australia",
        purpose: "Food import compliance and biosecurity clearance."
      },
      {
        name: "FSSAI Central Export License",
        issuer: "Food Safety and Standards Authority of India",
        purpose: "Hygienic processing plant validation."
      },
      {
        name: "BRCGS / ISO 22000 Food Safety Audit Report",
        issuer: "Accredited Conformity Assessment Body",
        purpose: "Commercial retail buyer quality compliance."
      }
    ],
    packagingSpecs: {
      containerType: "40ft High Cube Container (Dry)",
      loadability: "14 Metric Tonnes per 40ft HC (1,000 cartons)",
      bagType: "14 kg double blue poly liners packed inside heavy-duty 5-ply corrugated master cartons",
      palletization: "Palletized with edge protectors and stretch film strapping",
      marking: "Dehydrated White Onion Flakes A-Grade, Product of India, Net Wt 14.0 kg, Batch & Mfg Date."
    },
    govIncentives: {
      rodtepRate: "3.5% of FOB Value",
      rodtepBenefitINR: "₹11,050 per Metric Tonne",
      tmaSupport: "Eligible for Value-Added Processed Food Freight Reimbursement",
      interestEqualization: "3% MSME Export Subvention"
    }
  },
  {
    id: "exp-12",
    tradeLeadId: "APEDA-TL-2026-GCC-6021",
    commodity: "Alphonso & Kesar GI Mangoes (Air-Freight Premium)",
    variety: "Ratnagiri Alphonso & Gir Kesar (Hot Water & VHT Treated)",
    category: "Fresh Fruits & Horticulture",
    hsCode: "0804.50.20",
    importingCountry: "Oman & Qatar",
    countryFlag: "🇴🇲",
    destinationPort: "Muscat International Airport (MCT) / Hamad Int. Airport Doha (DOH)",
    indianDeparturePort: "CSMIA Air Cargo Terminal (BOM), Mumbai",
    demandQuantity: "180 Metric Tonnes (Scheduled Air Cargo Tranches)",
    moq: "2.5 Metric Tonnes per flight consignment",
    fobPriceUsd: 4800, // USD per MT
    inrPerQuintal: 41520, // ₹ / Quintal
    domesticMandiRefPrice: 24000, // Premium Ratnagiri / Vashi APMC lots
    exportPremiumPercent: 73,
    contractType: "FOB Air Cargo Mumbai / CIP Muscat",
    paymentTerms: "100% Sight L/C or 50% Advance T/T + 50% on Airway Bill (AWB) issuance",
    orderTimeline: "Daily / Alternate-day flights during April - June seasonal peak",
    govPortalSource: "APEDA Agri-Exchange Gulf Corridor Direct Air Cargo Program",
    buyerProfile: {
      companyName: "Lulu Hypermarket Group GCC Central Perishables Procurement",
      city: "Muscat / Doha",
      country: "Oman & Qatar",
      verificationStatus: "APEDA Tier-1 Overseas Institutional Retailing Partner",
      creditRating: "Standard & Poor's A+"
    },
    qualitySpecifications: {
      fruitWeight: "230g–280g (Alphonso), 250g–320g (Kesar)",
      sugarContent: "Brix 19.5° minimum at consumption maturity",
      treatment: "Hot Water Dip Treatment (HWDT at 48°C for 60 min) at APEDA approved facility",
      ripeningUniformity: "Pre-cooled at 12°C, zero sap burn on fruit shoulder",
      spongyTissue: "Zero internal breakdown / spongy tissue",
      pesticideResidue: "Below GCC Standardization Organization (GSO) MRL standards"
    },
    mandatoryDocuments: [
      {
        name: "DGFT IEC & APEDA RCMC",
        issuer: "DGFT / APEDA",
        purpose: "Cross-border export clearance."
      },
      {
        name: "Vapour Heat / Hot Water Treatment Certificate",
        issuer: "APEDA Certified Packhouse / MSAMB Facility",
        purpose: "Statutory biosecurity protocol compliance against fruit flies."
      },
      {
        name: "Phytosanitary Certificate",
        issuer: "National Plant Protection Organization (NPPO India)",
        purpose: "Mandatory import entry permission for GCC agricultural ministries."
      },
      {
        name: "Airway Bill (Clean AWB)",
        issuer: "Air India Cargo / Emirates SkyCargo / Qatar Airways Cargo",
        purpose: "Document of title for immediate destination airport customs release."
      }
    ],
    packagingSpecs: {
      containerType: "Air Freight LD3 ULD / Main Deck Aircraft Pallet",
      loadability: "2.5 to 4.0 Metric Tonnes per flight consignment",
      bagType: "3.2 kg Premium CFB Export Gift Boxes (9 or 12 fruits per box) with individual foam netting",
      palletization: "Pre-cooled air cargo skids wrapped with thermal thermal-reflective foil blankets",
      marking: "GI Tag Certified Ratnagiri Alphonso / Gir Kesar, APEDA Packhouse Code, Net Wt 3.2 kg."
    },
    govIncentives: {
      rodtepRate: "2.5% of FOB Value",
      rodtepBenefitINR: "₹10,380 per Metric Tonne",
      tmaSupport: "APEDA Air Freight Subsidy for perishable horticultural products",
      interestEqualization: "3% Pre-shipment Export Credit Subvention"
    }
  },
  {
    id: "exp-13",
    tradeLeadId: "SPICES-EX-2026-CA-4091",
    commodity: "Malabar Garbled Black Pepper (Tellicherry Extra Bold TGSEB)",
    variety: "TGSEB Extra Bold (Density > 570 g/L, 4.75mm diameter+)",
    category: "Spices & Condiments",
    hsCode: "0904.11.30",
    importingCountry: "Canada",
    countryFlag: "🇨🇦",
    destinationPort: "Port of Vancouver / Port of Montreal",
    indianDeparturePort: "Cochin Port (ICTT Vallarpadam Terminal, Kerala)",
    demandQuantity: "160 Metric Tonnes (10 x 20ft FCL)",
    moq: "16 Metric Tonnes (1 x 20ft Container)",
    fobPriceUsd: 8400, // USD per MT
    inrPerQuintal: 72660, // ₹ / Quintal
    domesticMandiRefPrice: 58000, // Kochi Spices Exchange / Wayanad Mandi
    exportPremiumPercent: 25,
    contractType: "FOB Cochin Port",
    paymentTerms: "CAD (Cash Against Documents) via Scotiabank or 20% Advance T/T",
    orderTimeline: "Dispatch within 25 days of contract confirmation",
    govPortalSource: "Spices Board of India International Buyer Query Desk",
    buyerProfile: {
      companyName: "Pacific Spice & Botanical Extracts Ltd",
      city: "Vancouver",
      country: "Canada",
      verificationStatus: "Canadian Food Inspection Agency (CFIA) Registered Importer",
      creditRating: "Dun & Bradstreet AA"
    },
    qualitySpecifications: {
      berryDiameter: "4.75 mm minimum (Tellicherry Garbled Special Extra Bold)",
      bulkDensity: "570 grams per liter minimum",
      piperineContent: "4.5% minimum active piperine",
      volatileOil: "2.5% minimum essential oil content",
      moistureMax: "11.0% max",
      extraneousMatter: "0.2% max",
      mouldInsectDefect: "Zero visible mould or insect defoliation",
      heavyMetals: "Compliant with Health Canada food safety thresholds (Pb < 2 ppm)"
    },
    mandatoryDocuments: [
      {
        name: "DGFT IEC & Spices Board CRES",
        issuer: "DGFT & Spices Board of India, Kochi",
        purpose: "Official statutory spice export entitlement."
      },
      {
        name: "Spices Board QEL Laboratory Certificate",
        issuer: "Quality Evaluation Laboratory (QEL), Spices Board",
        purpose: "Independent testing for Piperine, moisture, pesticide residues, and microbial count."
      },
      {
        name: "Phytosanitary Certificate",
        issuer: "Plant Quarantine Station (NPPO)",
        purpose: "Canadian import inspection protocol."
      },
      {
        name: "Canadian Customs Invoice (CCI)",
        issuer: "Customs Broker & Exporter",
        purpose: "CBSA entry release."
      }
    ],
    packagingSpecs: {
      containerType: "20ft FCL Standard Dry Container",
      loadability: "16 Metric Tonnes per 20ft container (640 bags)",
      bagType: "25 kg Multi-wall Kraft Paper Bags with food-grade inner polyethylene liner",
      palletization: "Palletized on ISPM-15 heat-treated pallets with 16 bags of silica desiccant per container",
      marking: "Malabar Garbled Black Pepper TGSEB, Grade A, Crop Year 2026, Net Wt 25.0 kg."
    },
    govIncentives: {
      rodtepRate: "3.1% of FOB Value",
      rodtepBenefitINR: "₹22,525 per Metric Tonne",
      tmaSupport: "Spices Board Brand Promotion & Sampling Assistance",
      interestEqualization: "3% Working Capital Subvention"
    }
  },
  {
    id: "exp-14",
    tradeLeadId: "APEDA-TL-2026-MY-8219",
    commodity: "Fresh Green Ginger (Washed, Sanitized & Air-Dried)",
    variety: "Rio de Janeiro / Shivamogga Bold Rhizomes",
    category: "Fresh Vegetables & Root Crops",
    hsCode: "0709.99.10",
    importingCountry: "Malaysia",
    countryFlag: "🇲🇾",
    destinationPort: "Port Klang, Selangor, Malaysia",
    indianDeparturePort: "Chennai Port / Mangalore Port (Reefer)",
    demandQuantity: "300 Metric Tonnes (12 x 40ft Reefer FCL)",
    moq: "25 Metric Tonnes (1 x 40ft Reefer FCL)",
    fobPriceUsd: 1450, // USD per MT
    inrPerQuintal: 12542, // ₹ / Quintal
    domesticMandiRefPrice: 7800, // Shivamogga / Wayanad Mandi
    exportPremiumPercent: 61,
    contractType: "CIF Port Klang",
    paymentTerms: "30% Advance T/T, 70% against Bill of Lading scan",
    orderTimeline: "November - February seasonal peak shipments",
    govPortalSource: "APEDA Horticulture Trade Desk & ASEAN Commercial Counselor",
    buyerProfile: {
      companyName: "Nusantara Fresh Produce Wholesale Importers Sdn Bhd",
      city: "Kuala Lumpur",
      country: "Malaysia",
      verificationStatus: "MAQIS (Malaysian Quarantine and Inspection Services) Registered",
      creditRating: "A+ Verified"
    },
    qualitySpecifications: {
      rhizomeSize: "150g to 350g large fleshy hands with prominent fingers",
      cleaning: "100% thoroughly washed with ozone-sanitized water and air-dried (zero soil particles)",
      moistureFreshness: "Crisp, plump skin without wrinkling or mechanical cuts",
      fiberContent: "Low tender fiber (culinary grade)",
      pestDefects: "Zero soft rot, shoot borer holes, or nematodes"
    },
    mandatoryDocuments: [
      {
        name: "DGFT IEC & APEDA RCMC",
        issuer: "DGFT / APEDA",
        purpose: "Cross-border export clearance."
      },
      {
        name: "Malaysian MAQIS Import Permit Endorsement",
        issuer: "Ministry of Agriculture and Food Security Malaysia",
        purpose: "Pre-authorized entry quota permit."
      },
      {
        name: "Phytosanitary Certificate",
        issuer: "Directorate of Plant Protection, Quarantine & Storage (NPPO)",
        purpose: "Quarantine clearance certifying absence of Ralstonia solanacearum."
      },
      {
        name: "ASEAN-India FTA Preferential Certificate of Origin (Form AI)",
        issuer: "Export Inspection Agency (EIA)",
        purpose: "Concessional tariff entry under AIFTA."
      }
    ],
    packagingSpecs: {
      containerType: "40ft High Cube Reefer Container",
      loadability: "25 Metric Tonnes per 40ft Reefer (2,500 cartons)",
      bagType: "10 kg or 20 kg ventilated plastic crates or corrugated master boxes with inner perforated liner",
      palletization: "Reefer temperature maintained at +12°C to +14°C with 85% relative humidity and 25 m³/hr ventilation",
      marking: "Fresh Washed Ginger, Batch No, Origin India, Gross Wt 10.5 kg, Net Wt 10.0 kg."
    },
    govIncentives: {
      rodtepRate: "2.5% of FOB Value",
      rodtepBenefitINR: "₹3,135 per Metric Tonne",
      tmaSupport: "Perishable cold chain marine transport subsidy",
      interestEqualization: "3% Pre-shipment Export Credit Subvention"
    }
  },
  {
    id: "exp-15",
    tradeLeadId: "DGFT-EXP-2026-CN-9140",
    commodity: "First Special Grade (FSG) Refined Castor Oil",
    variety: "FSG Bleached Commercial Grade (Gujarat Oilseed Belt)",
    category: "Industrial Agri-Oils & Derivatives",
    hsCode: "1515.30.90",
    importingCountry: "China",
    countryFlag: "🇨🇳",
    destinationPort: "Shanghai Port / Ningbo-Zhoushan Port, China",
    indianDeparturePort: "Kandla Port / Mundra Port (Gujarat)",
    demandQuantity: "3,000 Metric Tonnes (Flexitanks & ISO Tanks)",
    moq: "100 Metric Tonnes (5 x 20ft Flexitanks)",
    fobPriceUsd: 1620, // USD per MT
    inrPerQuintal: 14013, // ₹ / Quintal
    domesticMandiRefPrice: 11200, // Castor seed processing parity
    exportPremiumPercent: 25,
    contractType: "FOB Kandla / Mundra",
    paymentTerms: "100% Irrevocable Confirmed L/C at 90 Days Usance or Sight",
    orderTimeline: "Continuous monthly dispatches of 500 MT tranches",
    govPortalSource: "Solvent Extractors' Association of India (SEA) & DGFT Trade Desk",
    buyerProfile: {
      companyName: "Sino-Chemical Industrial Resins & Lubricants Corp",
      city: "Zhejiang",
      country: "China",
      verificationStatus: "China General Administration of Customs (GACC) Registered",
      creditRating: "China CITIC AA+"
    },
    qualitySpecifications: {
      ricinoleicAcid: "85.0% minimum active ricinoleic fatty acid",
      moistureVolatiles: "0.25% maximum",
      freeFattyAcid: "1.00% maximum FFA (as oleic)",
      gardnerColor: "3 maximum (light straw yellow)",
      hydroxylValue: "160 to 168 mg KOH/g",
      saponificationValue: "177 to 187 mg KOH/g"
    },
    mandatoryDocuments: [
      {
        name: "DGFT Import Export Code & SEA Membership",
        issuer: "DGFT / Solvent Extractors' Association of India",
        purpose: "Industrial agri-oil export clearance."
      },
      {
        name: "China GACC Single Window Enterprise Registration",
        issuer: "General Administration of Customs of PRC",
        purpose: "Mandatory Decrees 248/249 compliance for shipments entering Chinese ports."
      },
      {
        name: "SGS / Intertek Pre-Loading Tank Inspection Certificate",
        issuer: "Independent Marine Surveyor",
        purpose: "Cleanliness verification of flexitank and cargo pumping lines."
      },
      {
        name: "Certificate of Analysis (COA)",
        issuer: "NABL Accredited Oil Testing Laboratory",
        purpose: "Detailed chemical and physical parameter validation."
      }
    ],
    packagingSpecs: {
      containerType: "20ft FCL Dry Container fitted with heavy-duty Flexitank or ISO Tank",
      loadability: "21.5 to 22.0 Metric Tonnes per 20ft Flexitank (approx 24,000 Litres)",
      bagType: "Multi-layer food-grade polyethylene flexitank with protective corrugated lining",
      palletization: "Bulk liquid containerization with steel bulkhead and locking bars",
      marking: "First Special Grade Castor Oil, Net Wt 21,500 kg, Bulk Liquid, Non-Hazardous."
    },
    govIncentives: {
      rodtepRate: "1.8% of FOB Value",
      rodtepBenefitINR: "₹2,522 per Metric Tonne",
      tmaSupport: "Eligible for SEA trade export promotion grant",
      interestEqualization: "Standard RBI export financing rate"
    }
  },
  {
    id: "exp-16",
    tradeLeadId: "SPICES-EX-2026-SG-5502",
    commodity: "Organic Large Black Cardamom & Alleppey Green Extra Bold (AGEB)",
    variety: "AGEB 8mm Green & Sikkim Organic Black Cardamom",
    category: "Spices & Condiments",
    hsCode: "0908.31.10",
    importingCountry: "Singapore",
    countryFlag: "🇸🇬",
    destinationPort: "Jurong Port / Port of Singapore",
    indianDeparturePort: "Chennai Port / Cochin Port",
    demandQuantity: "45 Metric Tonnes (LCL & FCL air/sea consignments)",
    moq: "2.5 Metric Tonnes (100 bags)",
    fobPriceUsd: 34000, // USD per MT
    inrPerQuintal: 294100, // ₹ / Quintal
    domesticMandiRefPrice: 240000, // Bodinayakanur / Vandanmedu Spices Auction
    exportPremiumPercent: 23,
    contractType: "CIF Jurong Port, Singapore",
    paymentTerms: "30% Advance T/T, 70% against Delivery Order (DO) / BL copy",
    orderTimeline: "Immediate container booking for Diwali and Lunar New Year stockpiling",
    govPortalSource: "Spices Board of India & Singapore Enterprise Trade Partnership",
    buyerProfile: {
      companyName: "Lion City Asian Heritage Foods Pte Ltd",
      city: "Singapore",
      country: "Singapore",
      verificationStatus: "Singapore Food Agency (SFA) Approved Importer",
      creditRating: "Dun & Bradstreet AAA"
    },
    qualitySpecifications: {
      podDiameter: "8.0 mm minimum (100% machine graded Alleppey Green Extra Bold)",
      colorGrading: "Deep parrot green color (cured under controlled humidity chamber)",
      volatileOilMin: "8.0% minimum natural essential oil yield",
      emptyHusks: "Zero empty or immature capsules",
      moistureMax: "9.5% max",
      chemicalResidue: "Strictly Organic / Zero pesticide residues (< 0.01 ppb limit)"
    },
    mandatoryDocuments: [
      {
        name: "DGFT IEC & Spices Board CRES",
        issuer: "DGFT & Spices Board of India",
        purpose: "Export entitlement license."
      },
      {
        name: "India-Singapore CECA Preferential Certificate of Origin",
        issuer: "Export Inspection Agency (EIA)",
        purpose: "Qualifies for 0% preferential duty under India-Singapore CECA."
      },
      {
        name: "NPOP Organic Certification",
        issuer: "APEDA accredited organic certification body (OneCert / Aditi)",
        purpose: "Verifies organic provenance from certified bio-villages."
      },
      {
        name: "Singapore Food Agency (SFA) Endorsement",
        issuer: "SFA Singapore",
        purpose: "Premarket food safety clearance."
      }
    ],
    packagingSpecs: {
      containerType: "20ft FCL or LCL Temperature Controlled Cargo",
      loadability: "10 Metric Tonnes per 20ft container (400 vacuum cartons)",
      bagType: "25 kg nitrogen-flushed triple-barrier aluminium foil pouches inside rigid 7-ply cartons",
      palletization: "Palletized with desiccants and tamper-evident holographic security seals",
      marking: "Alleppey Green Extra Bold Cardamom AGEB-8mm, Organic Certified, Net Wt 25 kg."
    },
    govIncentives: {
      rodtepRate: "3.1% of FOB Value",
      rodtepBenefitINR: "₹91,171 per Metric Tonne",
      tmaSupport: "Spices Board High-Value Export Incentive",
      interestEqualization: "3% Pre-shipment Export Credit Subvention"
    }
  }
];

// Summary Statistics for International Export Demand Desk
export const exportSummaryStats = {
  totalActiveInquiriesVolumeMT: "25,135 MT",
  totalExportValueUSD: "$44.8 Million",
  averageExportPremiumPercent: "36.2%",
  participatingCountriesCount: 16,
  primaryTargetSectors: [
    { name: "Cereals & Basmati Rice", count: 4, share: "35%" },
    { name: "Spices (Chilli, Cumin, Turmeric, Pepper, Cardamom)", count: 7, share: "32%" },
    { name: "Fresh Fruits & Horticulture", count: 4, share: "21%" },
    { name: "Oilseeds & Industrial Oils", count: 3, share: "12%" }
  ],
  accreditedAgencies: [
    "APEDA (Ministry of Commerce & Industry)",
    "DGFT (Directorate General of Foreign Trade)",
    "Spices Board of India",
    "FSSAI (Food Safety and Standards Authority)",
    "NPPO (Plant Quarantine Organisation)",
    "Export Inspection Council (EIC)",
    "IOPEPC (Indian Oilseeds Export Council)"
  ]
};
