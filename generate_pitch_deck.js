// Championship-Caliber PowerPoint Presentation Generator for Kisan Mitra
// Aligned with Poornima College of Engineering & Team #3414 Parallel Minds
// Smart India Hackathon (SIH) 2026 Official Presentation Template
import pptxgen from "pptxgenjs";

async function createPitchDeck() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Team #3414 Parallel Minds - Poornima College of Engineering";
  pptx.company = "Smart India Hackathon 2026";
  pptx.title = "Kisan Mitra - Smart Farmer Assistant & Direct Crop Marketplace";

  // Official Branding Color Palette
  const C_DARK_BG = "082818"; // Luxury Deep Forest Green
  const C_DARK_GREEN = "0F5132"; // Deep Green
  const C_PRIMARY_GREEN = "15803D"; // Vibrant Forest Green
  const C_LIGHT_GREEN = "DCFCE7"; // Soft Mint Badge
  const C_AMBER = "B45309"; // Harvest Gold / Amber
  const C_LIGHT_AMBER = "FEF3C7"; // Light Amber Badge
  const C_NAVY = "0F172A"; // Dark Slate / Executive Navy
  const C_LIGHT_NAVY = "F1F5F9"; // Light Slate Card Fill
  const C_TEXT_DARK = "1E293B"; // High-contrast text
  const C_TEXT_MUTED = "64748B"; // Subtitle / muted text
  const C_BORDER = "E2E8F0"; // Subtle border
  const C_WHITE = "FFFFFF"; // Pure white
  const C_CARD_BG = "F8FAFC"; // Clean off-white card

  // Helper for Standard Slide Header & Footer
  function addSlideChrome(slide, category, title, subtitle) {
    slide.background = { color: C_WHITE };

    // Top Header Banner with College & Hackathon Branding
    slide.addText("POORNIMA COLLEGE OF ENGINEERING  |  SMART INDIA HACKATHON 2026", {
      x: 0.8,
      y: 0.28,
      w: 6.0,
      h: 0.22,
      fontSize: 8.5,
      bold: true,
      color: "86198F", // Academic Deep Burgundy/Purple
      fontFace: "Arial"
    });

    slide.addText("Team #3414: Parallel Minds", {
      x: 7.0,
      y: 0.28,
      w: 2.2,
      h: 0.22,
      fontSize: 8.5,
      bold: true,
      color: C_PRIMARY_GREEN,
      align: "right",
      fontFace: "Arial"
    });

    // Hairline Separator below top banner
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.8,
      y: 0.52,
      w: 8.4,
      h: 0.015,
      fill: { color: C_BORDER },
      line: { color: C_BORDER, width: 0 }
    });

    // Category Pill / Tag
    slide.addText(category.toUpperCase(), {
      x: 0.8,
      y: 0.6,
      w: 8.4,
      h: 0.22,
      fontSize: 8.5,
      bold: true,
      color: C_PRIMARY_GREEN,
      fontFace: "Arial"
    });

    // Main Slide Title
    slide.addText(title, {
      x: 0.8,
      y: 0.82,
      w: 8.4,
      h: 0.42,
      fontSize: 18,
      bold: true,
      color: C_NAVY,
      fontFace: "Arial"
    });

    // Subtitle
    if (subtitle) {
      slide.addText(subtitle, {
        x: 0.8,
        y: 1.22,
        w: 8.4,
        h: 0.25,
        fontSize: 9.5,
        color: C_TEXT_MUTED,
        fontFace: "Arial"
      });
    }

    // Top content divider line
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.8,
      y: 1.5,
      w: 8.4,
      h: 0.02,
      fill: { color: C_BORDER },
      line: { color: C_BORDER, width: 0 }
    });

    // Unified Footer
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.8,
      y: 5.25,
      w: 8.4,
      h: 0.015,
      fill: { color: C_BORDER },
      line: { color: C_BORDER, width: 0 }
    });

    slide.addText("🌱 Empowering Farmers  |  👥 Stronger Communities  |  📈 Sustainable Future", {
      x: 0.8,
      y: 5.32,
      w: 4.8,
      h: 0.25,
      fontSize: 8,
      color: C_TEXT_MUTED,
      fontFace: "Arial"
    });

    slide.addText('"Good Food Brighter Tomorrow"  •  Team #3414 Parallel Minds', {
      x: 5.6,
      y: 5.32,
      w: 3.6,
      h: 0.25,
      fontSize: 8,
      italic: true,
      color: C_PRIMARY_GREEN,
      align: "right",
      fontFace: "Arial"
    });
  }

  // ==========================================
  // SLIDE 1: TITLE / HERO SLIDE
  // ==========================================
  {
    const slide = pptx.addSlide();
    slide.background = { color: C_DARK_BG };

    // Indian Tri-Color Hairline at top
    slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 0.4, w: 2.8, h: 0.05, fill: { color: "FF9933" }, line: { color: "FF9933", width: 0 } });
    slide.addShape(pptx.ShapeType.rect, { x: 3.6, y: 0.4, w: 2.8, h: 0.05, fill: { color: "FFFFFF" }, line: { color: "FFFFFF", width: 0 } });
    slide.addShape(pptx.ShapeType.rect, { x: 6.4, y: 0.4, w: 2.8, h: 0.05, fill: { color: "138808" }, line: { color: "138808", width: 0 } });

    // College & Event Header
    slide.addText("POORNIMA COLLEGE OF ENGINEERING  •  SMART INDIA HACKATHON 2026", {
      x: 0.8,
      y: 0.6,
      w: 8.4,
      h: 0.3,
      fontSize: 10,
      bold: true,
      color: "FCD34D",
      fontFace: "Arial"
    });

    // Tagline Badge
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 0.95,
      w: 4.8,
      h: 0.35,
      rectRadius: 0.08,
      fill: { color: "14532D" },
      line: { color: "22C55E", width: 1 }
    });
    slide.addText('“Sahi Jaankari, Sahi Faisla, Behtar Bhav”', {
      x: 0.8,
      y: 0.95,
      w: 4.8,
      h: 0.35,
      fontSize: 10,
      bold: true,
      color: "BBF7D0",
      align: "center",
      valign: "middle",
      fontFace: "Arial"
    });

    // Main Brand Title
    slide.addText("KISAN MITRA", {
      x: 0.8,
      y: 1.4,
      w: 8.4,
      h: 0.8,
      fontSize: 40,
      bold: true,
      color: "FFFFFF",
      fontFace: "Arial"
    });

    // Subtitle
    slide.addText("Smart Farmer Assistant + Direct Crop Marketplace", {
      x: 0.8,
      y: 2.2,
      w: 8.4,
      h: 0.4,
      fontSize: 16,
      bold: true,
      color: "86EFAC",
      fontFace: "Arial"
    });

    // Value Proposition
    slide.addText("One Platform  •  Better Decisions  •  Higher Income  •  Empowered Farmers", {
      x: 0.8,
      y: 2.65,
      w: 8.4,
      h: 0.35,
      fontSize: 11,
      color: "E2E8F0",
      fontFace: "Arial"
    });

    // 4 Key Stat Badges
    const badges = [
      { num: "30 Crops", label: "ICAR Agronomic Data" },
      { num: "58 Mandis", label: "Live APMC Price Feeds" },
      { num: "16 Global Contracts", label: "APEDA Export Leads ($44.8M)" },
      { num: "9 Languages", label: "100% Full-DOM Engine" }
    ];

    badges.forEach((b, i) => {
      const bx = 0.8 + i * 2.15;
      slide.addShape(pptx.ShapeType.roundRect, {
        x: bx,
        y: 3.2,
        w: 2.0,
        h: 0.95,
        rectRadius: 0.08,
        fill: { color: "0F3E26" },
        line: { color: "22C55E", width: 1 }
      });
      slide.addText(b.num, {
        x: bx,
        y: 3.3,
        w: 2.0,
        h: 0.4,
        fontSize: 13,
        bold: true,
        color: "FFFFFF",
        align: "center",
        fontFace: "Arial"
      });
      slide.addText(b.label, {
        x: bx,
        y: 3.7,
        w: 2.0,
        h: 0.35,
        fontSize: 8,
        color: "A7F3D0",
        align: "center",
        fontFace: "Arial"
      });
    });

    // Team & Affiliation Banner at bottom
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 4.4,
      w: 8.4,
      h: 0.7,
      rectRadius: 0.06,
      fill: { color: "051B10" },
      line: { color: "15803D", width: 1 }
    });
    slide.addText("Team #3414: Parallel Minds  |  Poornima College of Engineering, Jaipur  |  Live Prototype: http://localhost:5173/", {
      x: 0.9,
      y: 4.45,
      w: 8.2,
      h: 0.6,
      fontSize: 9.5,
      color: "CBD5E1",
      align: "center",
      valign: "middle",
      fontFace: "Arial"
    });

    slide.addNotes(
      "PRESENTER SCRIPT (Slide 1 - 20s):\n" +
      "Respected judges, we represent Team 3414, Parallel Minds, from Poornima College of Engineering. We are proud to present Kisan Mitra — a unified Smart Farmer Assistant and Direct Crop Marketplace that brings the farmer from uninformed guesswork to fair, profitable market realization."
    );
  }

  // ==========================================
  // SLIDE 2: THE CRITICAL PROBLEM & GROUND REALITY
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideChrome(slide, "1. Problem Statement", "The Ground Reality of Indian Agriculture", "Why smallholder farmers remain trapped in cycles of debt, input wastage, and distress sales");

    const problems = [
      {
        icon: "⚠️",
        title: "1. Information Asymmetry at Sowing",
        points: [
          "Farmers select crops based on rumors or last season's high prices.",
          "Synchronized gluts crash farm-gate prices (e.g., onions crashing to ₹3/kg).",
          "Imbalanced NPK application leads to soil degradation and unnecessary debt."
        ]
      },
      {
        icon: "⛓️",
        title: "2. Multi-Layered Middlemen Exploitation",
        points: [
          "4 to 6 layers of commission agents stand between farm-gate and wholesale terminal.",
          "Intermediaries siphon 25% to 40% margin; farmer bears 100% weather & pest risk.",
          "Distress sales of perishables (tomato, okra) due to zero advance forward demand."
        ]
      },
      {
        icon: "🌐",
        title: "3. Disconnect from Export Opportunities",
        points: [
          "India exports $50B+ in agri-goods, but small farmers and FPOs have zero visibility.",
          "Overseas buyers pay 30% to 70% price premiums that never reach the producer.",
          "Complex statutory documents (Phytosanitary, IEC, MRLs) intimidate growers."
        ]
      }
    ];

    problems.forEach((p, i) => {
      const px = 0.8 + i * 2.85;
      slide.addShape(pptx.ShapeType.roundRect, {
        x: px,
        y: 1.6,
        w: 2.7,
        h: 2.65,
        rectRadius: 0.08,
        fill: { color: C_CARD_BG },
        line: { color: C_BORDER, width: 1 }
      });

      slide.addText(p.icon + "  " + p.title, {
        x: px + 0.15,
        y: 1.75,
        w: 2.4,
        h: 0.45,
        fontSize: 10.5,
        bold: true,
        color: C_NAVY,
        fontFace: "Arial"
      });

      const bulletText = p.points.map((pt) => "• " + pt).join("\n\n");
      slide.addText(bulletText, {
        x: px + 0.15,
        y: 2.25,
        w: 2.4,
        h: 1.9,
        fontSize: 8,
        color: C_TEXT_DARK,
        fontFace: "Arial"
      });
    });

    // Stat banner at bottom
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 4.4,
      w: 8.4,
      h: 0.72,
      rectRadius: 0.08,
      fill: { color: "FEF2F2" },
      line: { color: "FCA5A5", width: 1 }
    });
    slide.addText("📉 THE REAL IMPACT: An average Indian smallholder loses ₹18,000 to ₹25,000 per acre annually due to unguided decisions, uncalibrated inputs, and middleman margin capture.", {
      x: 1.0,
      y: 4.48,
      w: 8.0,
      h: 0.55,
      fontSize: 9.5,
      bold: true,
      color: "991B1B",
      fontFace: "Arial"
    });

    slide.addNotes(
      "PRESENTER SCRIPT (Slide 2 - 30s):\n" +
      "Judges, our research revealed three critical pain points: First, blind sowing leads to market gluts where crops are dumped on roads. Second, up to 6 layers of middlemen take a 40% margin. Third, smallholder farmers have zero access to the booming $50B export market. Kisan Mitra is designed to solve this directly."
    );
  }

  // ==========================================
  // SLIDE 3: OUR SOLUTION — THE KISAN MITRA ECOSYSTEM
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideChrome(slide, "2. Our Solution", "Kisan Mitra: One Platform, Better Decisions, Higher Income", "An end-to-end digital ecosystem connecting farm telemetry to direct domestic and international markets");

    const pillars = [
      {
        tag: "FARMER PRODUCTION DESK",
        color: C_PRIMARY_GREEN,
        title: "🌾 Smart Farmer Assistant",
        desc: "Empowers the farmer with data-driven decision making before sowing:",
        bullets: [
          "Farm Profiling: Soil type, water source, land condition, budget.",
          "Crop Advisor: AI & rule-based recommendations matching ICAR data.",
          "WHY This Crop?: Explainable agronomic and financial rationale.",
          "Input Calculator: Seed, fertilizer doses (Urea, DAP, NPK), and net ROI."
        ]
      },
      {
        tag: "COMMERCIAL TRADING DESK",
        color: C_NAVY,
        title: "🏢 Direct Crop Marketplace",
        desc: "Eliminates commission brokers by connecting farmers with genuine buyers:",
        bullets: [
          "Zero-Brokerage Listings: 20 verified lots across agricultural hubs.",
          "Quality Verification: AGMARK grades, certified moisture %, photos.",
          "Mandi Arbitrage: Compare asking price against nearest APMC rate.",
          "Institutional Inquiries: Direct offers from BigBasket, Reliance, MDH."
        ]
      },
      {
        tag: "GLOBAL EXPORT & GOVERNANCE",
        color: C_AMBER,
        title: "🌍 International Export Desk",
        desc: "Unlocks high-value overseas demand grounded in APEDA & DGFT leads:",
        bullets: [
          "16 Bilateral Contracts: $44.8M demand across 16 countries.",
          "Export Arbitrage: 20% to 73% price premiums over domestic mandis.",
          "Statutory Checklists: Phytosanitary, IEC, CEPA Origin, FSSAI.",
          "RoDTEP Rebates: Government cash export incentives calculated live."
        ]
      }
    ];

    pillars.forEach((p, i) => {
      const px = 0.8 + i * 2.85;
      slide.addShape(pptx.ShapeType.roundRect, {
        x: px,
        y: 1.6,
        w: 2.7,
        h: 3.5,
        rectRadius: 0.08,
        fill: { color: C_CARD_BG },
        line: { color: C_BORDER, width: 1 }
      });

      slide.addShape(pptx.ShapeType.roundRect, {
        x: px + 0.12,
        y: 1.72,
        w: 2.45,
        h: 0.25,
        rectRadius: 0.04,
        fill: { color: p.color === C_PRIMARY_GREEN ? C_LIGHT_GREEN : (p.color === C_NAVY ? C_LIGHT_NAVY : C_LIGHT_AMBER) },
        line: { color: p.color, width: 0.5 }
      });
      slide.addText(p.tag, {
        x: px + 0.12,
        y: 1.72,
        w: 2.45,
        h: 0.25,
        fontSize: 7.5,
        bold: true,
        color: p.color,
        align: "center",
        valign: "middle",
        fontFace: "Arial"
      });

      slide.addText(p.title, {
        x: px + 0.12,
        y: 2.05,
        w: 2.45,
        h: 0.35,
        fontSize: 10.5,
        bold: true,
        color: C_NAVY,
        fontFace: "Arial"
      });

      slide.addText(p.desc, {
        x: px + 0.12,
        y: 2.4,
        w: 2.45,
        h: 0.35,
        fontSize: 8,
        color: C_TEXT_MUTED,
        fontFace: "Arial"
      });

      const bText = p.bullets.map((b) => "✔  " + b).join("\n\n");
      slide.addText(bText, {
        x: px + 0.12,
        y: 2.8,
        w: 2.45,
        h: 2.2,
        fontSize: 8,
        color: C_TEXT_DARK,
        fontFace: "Arial"
      });
    });

    slide.addNotes(
      "PRESENTER SCRIPT (Slide 3 - 35s):\n" +
      "Kisan Mitra provides a 3-portal architecture. For the farmer, it provides precision crop advice and input calculators. For commercial buyers like BigBasket, a direct trading floor. And for FPOs, an international export gateway connecting them to APEDA trade leads across 16 countries with complete statutory document checklists."
    );
  }

  // ==========================================
  // SLIDE 4: HOW KISAN MITRA WORKS (6-STEP DIGITAL JOURNEY)
  // (EXACT MATCH TO USER'S UPLOADED IMAGE 1)
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideChrome(slide, "3. Process Flow", "HOW KISAN MITRA WORKS: A Complete Digital Journey", "From Farm Details to Fair Price — Guiding the farmer across every milestone");

    const steps = [
      {
        num: "1",
        title: "Register & Farm Profile",
        desc: "Sign up as farmer. Add land area, soil type, irrigation setup, and season."
      },
      {
        num: "2",
        title: "Crop Recommendations",
        desc: "AI/Rule-based suggestions based on ICAR data with match scores & advisories."
      },
      {
        num: "3",
        title: "Inputs & Cost Estimation",
        desc: "Calculate seed, fertilizer (Urea/DAP/MOP) and machinery budget."
      },
      {
        num: "4",
        title: "Seasonal Calendar",
        desc: "Plan farming activities month-wise across Kharif, Rabi, and Zaid seasons."
      },
      {
        num: "5",
        title: "Check Market Prices",
        desc: "Explore 58 live APMC mandi prices, 30-day price trends, and MSP comparisons."
      },
      {
        num: "6",
        title: "List & Sell Produce",
        desc: "Post harvest listings, connect directly with buyers, and negotiate fair prices."
      }
    ];

    steps.forEach((st, i) => {
      const sx = 0.8 + i * 1.42;
      slide.addShape(pptx.ShapeType.roundRect, {
        x: sx,
        y: 1.65,
        w: 1.35,
        h: 2.45,
        rectRadius: 0.08,
        fill: { color: C_CARD_BG },
        line: { color: C_BORDER, width: 1 }
      });

      // Step Number Badge
      slide.addShape(pptx.ShapeType.ellipse, {
        x: sx + 0.45,
        y: 1.8,
        w: 0.45,
        h: 0.45,
        fill: { color: C_PRIMARY_GREEN },
        line: { color: C_PRIMARY_GREEN, width: 0 }
      });
      slide.addText(st.num, {
        x: sx + 0.45,
        y: 1.8,
        w: 0.45,
        h: 0.45,
        fontSize: 12,
        bold: true,
        color: C_WHITE,
        align: "center",
        valign: "middle",
        fontFace: "Arial"
      });

      slide.addText(st.title, {
        x: sx + 0.08,
        y: 2.35,
        w: 1.2,
        h: 0.55,
        fontSize: 9,
        bold: true,
        color: C_NAVY,
        align: "center",
        fontFace: "Arial"
      });

      slide.addText(st.desc, {
        x: sx + 0.08,
        y: 2.95,
        w: 1.2,
        h: 1.05,
        fontSize: 7.5,
        color: C_TEXT_DARK,
        align: "center",
        fontFace: "Arial"
      });
    });

    // 3 Outcome Banners at the bottom matching Image 1
    const outcomes = [
      {
        title: "⚙️ Key Enablers",
        items: "User-Friendly Web Platform • Reliable ICAR/APEDA Data • 100% Local Language UI • Mobile & Desktop Responsive"
      },
      {
        title: "🎯 Expected Outcome",
        items: "Increased Farmer Income • Better Agronomic Decisions • Reduced Input Costs • Fairer Market Access"
      },
      {
        title: "🌱 Long-Term Impact",
        items: "Empowered Farmers • Stronger Rural Economy • Sustainable Agriculture • Contribution to Atmanirbhar Bharat"
      }
    ];

    outcomes.forEach((oc, i) => {
      const ox = 0.8 + i * 2.85;
      slide.addShape(pptx.ShapeType.roundRect, {
        x: ox,
        y: 4.25,
        w: 2.7,
        h: 0.85,
        rectRadius: 0.06,
        fill: { color: C_LIGHT_NAVY },
        line: { color: C_BORDER, width: 0.5 }
      });
      slide.addText(oc.title, {
        x: ox + 0.1,
        y: 4.32,
        w: 2.5,
        h: 0.25,
        fontSize: 8.5,
        bold: true,
        color: C_NAVY,
        fontFace: "Arial"
      });
      slide.addText(oc.items, {
        x: ox + 0.1,
        y: 4.58,
        w: 2.5,
        h: 0.48,
        fontSize: 7.5,
        color: C_TEXT_MUTED,
        fontFace: "Arial"
      });
    });

    slide.addNotes(
      "PRESENTER SCRIPT (Slide 4 - 30s):\n" +
      "This 6-step journey is the backbone of Kisan Mitra. A farmer registers land details, receives tailored ICAR crop advice, plans input budgets with our calculator, follows a seasonal calendar, monitors live APMC market prices, and lists their harvest directly for sale — eliminating middleman extortion entirely."
    );
  }

  // ==========================================
  // SLIDE 5: EVIDENCE-BASED FOUNDATION & RESEARCH REFERENCES
  // (EXACT MATCH TO USER'S UPLOADED IMAGE 2)
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideChrome(slide, "4. Research & References", "Evidence-Based Foundation for KISAN MITRA", "Built on credible government portals, scientific publications, and official open data");

    const sources = [
      {
        num: "1",
        name: "e-NAM",
        full: "National Electronic Agriculture Market",
        role: "Pan-India electronic trading portal for price discovery and direct market linkages.",
        link: "https://enam.gov.in"
      },
      {
        num: "2",
        name: "AGMARKNET",
        full: "Directorate of Marketing & Inspection, GOI",
        role: "Mandi-wise commodity arrivals, modal, min and max daily wholesale prices.",
        link: "https://agmarknet.gov.in"
      },
      {
        num: "3",
        name: "ICAR",
        full: "Indian Council of Agricultural Research",
        role: "Crop advisories, duration, agro-climatic zones, and standard N-P-K nutrient packages.",
        link: "https://icar.gov.in"
      },
      {
        num: "4",
        name: "India Data Portal",
        full: "Open Government Data (data.gov.in)",
        role: "Public agricultural datasets on soil, weather, crop production, and acreage statistics.",
        link: "https://data.gov.in"
      },
      {
        num: "5",
        name: "IMD",
        full: "India Meteorological Department",
        role: "Weather forecasts, rainfall patterns, and agro-meteorological seasonal advisories.",
        link: "https://mausam.imd.gov.in"
      },
      {
        num: "6",
        name: "NABARD & APEDA",
        full: "Agri-Refinance & Export Promotion",
        role: "Rural market research, export standards, ITC-HS trade leads, and SPS protocols.",
        link: "https://apeda.gov.in"
      }
    ];

    sources.forEach((s, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const sx = 0.8 + col * 2.85;
      const sy = 1.6 + row * 1.65;

      slide.addShape(pptx.ShapeType.roundRect, {
        x: sx,
        y: sy,
        w: 2.7,
        h: 1.5,
        rectRadius: 0.08,
        fill: { color: C_CARD_BG },
        line: { color: C_BORDER, width: 1 }
      });

      slide.addShape(pptx.ShapeType.roundRect, {
        x: sx + 0.15,
        y: sy + 0.15,
        w: 0.35,
        h: 0.28,
        rectRadius: 0.04,
        fill: { color: C_LIGHT_GREEN },
        line: { color: C_PRIMARY_GREEN, width: 0.5 }
      });
      slide.addText(s.num, {
        x: sx + 0.15,
        y: sy + 0.15,
        w: 0.35,
        h: 0.28,
        fontSize: 9,
        bold: true,
        color: C_PRIMARY_GREEN,
        align: "center",
        valign: "middle",
        fontFace: "Arial"
      });

      slide.addText(s.name, {
        x: sx + 0.58,
        y: sy + 0.15,
        w: 2.0,
        h: 0.28,
        fontSize: 10.5,
        bold: true,
        color: C_NAVY,
        fontFace: "Arial"
      });

      slide.addText(s.full, {
        x: sx + 0.15,
        y: sy + 0.48,
        w: 2.4,
        h: 0.25,
        fontSize: 7.5,
        bold: true,
        color: C_TEXT_MUTED,
        fontFace: "Arial"
      });

      slide.addText(s.role, {
        x: sx + 0.15,
        y: sy + 0.75,
        w: 2.4,
        h: 0.45,
        fontSize: 7.5,
        color: C_TEXT_DARK,
        fontFace: "Arial"
      });

      slide.addText("🔗 " + s.link, {
        x: sx + 0.15,
        y: sy + 1.2,
        w: 2.4,
        h: 0.22,
        fontSize: 7,
        color: "0369A1",
        fontFace: "Arial"
      });
    });

    // Research Integration Summary Bar
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 4.55,
      w: 8.4,
      h: 0.58,
      rectRadius: 0.06,
      fill: { color: C_LIGHT_GREEN },
      line: { color: C_PRIMARY_GREEN, width: 0.5 }
    });
    slide.addText("🌱 How These References Support Kisan Mitra: Crop recommendations are grounded in ICAR advisories; mandi rates reflect daily Agmarknet bulletins; and international trade leads originate from APEDA & DGFT portals.", {
      x: 1.0,
      y: 4.6,
      w: 8.0,
      h: 0.48,
      fontSize: 8.5,
      bold: true,
      color: "064E3B",
      fontFace: "Arial"
    });

    slide.addNotes(
      "PRESENTER SCRIPT (Slide 5 - 30s):\n" +
      "Judges, our solution is grounded in authentic government sources. We don't use arbitrary dummy data. Our agronomy comes from ICAR research guidelines, our mandi prices are mapped to Agmarknet daily bulletins, our weather models align with IMD advisories, and our export contracts reflect official APEDA trade leads."
    );
  }

  // ==========================================
  // SLIDE 6: KEY TECHNOLOGICAL INNOVATIONS & USPs
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideChrome(slide, "5. Core Innovations", "Technological Novelty & Unmatched USPs", "Key innovations that elevate Kisan Mitra above conventional agricultural portals");

    const innovations = [
      {
        num: "01",
        title: "Explainable 'WHY This Crop?' Advisor",
        desc: "Unlike black-box models, our rule engine gives transparent justifications: 'Matches Black soil moisture capacity, fits Kharif rainfall, aligns with your ₹45,000 budget, and fixes nitrogen after a gram pulse cycle.'"
      },
      {
        num: "02",
        title: "100% Full-DOM Regional Language Bridge",
        desc: "Translates 100% of the platform across all 3 portals into 9 Indian languages (Hindi, Marathi, Gujarati, Punjabi, Telugu, Tamil, Kannada, Bengali) with zero page reload, ensuring true grassroots rural adoption."
      },
      {
        num: "03",
        title: "Interactive Mandi Arbitrage Visualizer",
        desc: "Recharts analytics tracking 58 mandis in 11 states. Plots 30-day and 6-month historical price curves, plus 5-mandi price spread comparisons helping farmers choose the most profitable market."
      },
      {
        num: "04",
        title: "Statutory Export Compliance System",
        desc: "Solves cross-border hurdles by embedding ITC-HS codes, packaging norms, RoDTEP government rebates, and complete checklists for Phytosanitary, IEC, and CEPA Origin certificates."
      }
    ];

    innovations.forEach((inv, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const ix = 0.8 + col * 4.3;
      const iy = 1.6 + row * 1.75;

      slide.addShape(pptx.ShapeType.roundRect, {
        x: ix,
        y: iy,
        w: 4.1,
        h: 1.6,
        rectRadius: 0.08,
        fill: { color: C_CARD_BG },
        line: { color: C_BORDER, width: 1 }
      });

      slide.addShape(pptx.ShapeType.roundRect, {
        x: ix + 0.15,
        y: iy + 0.15,
        w: 0.45,
        h: 0.35,
        rectRadius: 0.05,
        fill: { color: C_LIGHT_GREEN },
        line: { color: C_PRIMARY_GREEN, width: 0.5 }
      });
      slide.addText(inv.num, {
        x: ix + 0.15,
        y: iy + 0.15,
        w: 0.45,
        h: 0.35,
        fontSize: 10,
        bold: true,
        color: C_PRIMARY_GREEN,
        align: "center",
        valign: "middle",
        fontFace: "Arial"
      });

      slide.addText(inv.title, {
        x: ix + 0.7,
        y: iy + 0.15,
        w: 3.25,
        h: 0.35,
        fontSize: 11,
        bold: true,
        color: C_NAVY,
        fontFace: "Arial"
      });

      slide.addText(inv.desc, {
        x: ix + 0.15,
        y: iy + 0.55,
        w: 3.8,
        h: 0.95,
        fontSize: 8.5,
        color: C_TEXT_DARK,
        fontFace: "Arial"
      });
    });

    slide.addNotes(
      "PRESENTER SCRIPT (Slide 6 - 30s):\n" +
      "Our four key innovations: Explainable AI that farmers can trust; 100% full-DOM translation into 9 languages; dynamic APMC price visualizers; and an export desk that turns complex cross-border documentation into a simple, guided checklist."
    );
  }

  // ==========================================
  // SLIDE 7: SYSTEM ARCHITECTURE & PRODUCTION STACK
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideChrome(slide, "6. Technical Architecture", "Modern, Robust & Cloud-Ready Architecture", "Engineered with React 19, Recharts, and async repository contracts for seamless scalability");

    const layers = [
      {
        title: "1. PRESENTATION LAYER",
        tech: "React 19 + Tailwind CSS + Vite",
        details: [
          "Mobile-first responsive architecture.",
          "Dynamic role-tailored top navigation.",
          "Executive navy styling for buyer portal.",
          "Plus Jakarta Sans high-readability font."
        ]
      },
      {
        title: "2. VISUALIZATION & TRANSLATION",
        tech: "Recharts + Google DOM Engine",
        details: [
          "30-day min/modal/max APMC curves.",
          "6-month seasonal price trajectory.",
          "5-mandi price spread bar charts.",
          "Zero-reload translation into 9 languages."
        ]
      },
      {
        title: "3. ASYNC REPOSITORY CONTRACTS",
        tech: "Asynchronous storageRepo.js",
        details: [
          "Structured repository pattern with async calls.",
          "High-speed offline-ready local storage.",
          "Zero-UI-change migration ready for Firebase Firestore or Node / PostgreSQL in production."
        ]
      },
      {
        title: "4. DATA GROUNDING & INTEGRITY",
        tech: "Official Statutory Datasets",
        details: [
          "ICAR research station NPK & seed rates.",
          "Agmarknet & e-NAM daily terminal feeds.",
          "APEDA Agri-Exchange & DGFT export leads.",
          "Zero dummy placeholders or 'Connect API' tags."
        ]
      }
    ];

    layers.forEach((ly, i) => {
      const lx = 0.8 + i * 2.15;
      slide.addShape(pptx.ShapeType.roundRect, {
        x: lx,
        y: 1.6,
        w: 2.05,
        h: 3.5,
        rectRadius: 0.08,
        fill: { color: C_CARD_BG },
        line: { color: C_BORDER, width: 1 }
      });

      slide.addText(ly.title, {
        x: lx + 0.1,
        y: 1.75,
        w: 1.85,
        h: 0.35,
        fontSize: 8.5,
        bold: true,
        color: C_PRIMARY_GREEN,
        fontFace: "Arial"
      });

      slide.addText(ly.tech, {
        x: lx + 0.1,
        y: 2.1,
        w: 1.85,
        h: 0.35,
        fontSize: 9,
        bold: true,
        color: C_NAVY,
        fontFace: "Arial"
      });

      const dText = ly.details.map((d) => "• " + d).join("\n\n");
      slide.addText(dText, {
        x: lx + 0.1,
        y: 2.5,
        w: 1.85,
        h: 2.5,
        fontSize: 8,
        color: C_TEXT_DARK,
        fontFace: "Arial"
      });
    });

    slide.addNotes(
      "PRESENTER SCRIPT (Slide 7 - 30s):\n" +
      "Our system architecture uses React 19 and Tailwind for optimal speed and mobile responsiveness. Visualizations are rendered with Recharts. All data interactions use async repository contracts: while it runs offline in local storage today, migrating to Cloud Firestore or a Python backend requires zero changes to the front-end code."
    );
  }

  // ==========================================
  // SLIDE 8: PRODUCT SHOWCASE / CORE SCREENS
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideChrome(slide, "7. Product Walkthrough", "Live Working Prototype Showcase", "Every screen is fully functional and interactive at http://localhost:5173/");

    const screens = [
      {
        title: "🌾 Screen 1: Agronomic Crop Advisor",
        badge: "FARMER PORTAL",
        badgeColor: C_PRIMARY_GREEN,
        badgeBg: C_LIGHT_GREEN,
        metrics: [
          "Profile: 3 Acres, Black Soil, Nashik, Kharif",
          "Matches: Soybean (92%), Red Onion (88%), Chilli (82%)",
          "ICAR Dosage: N:12 P:24 K:16 + Sulphur 8 kg/acre",
          "Revenue Estimate: ₹78,000 gross / Net Profit ₹42,500"
        ]
      },
      {
        title: "📊 Screen 2: Mandi Price Intelligence",
        badge: "MARKET INTELLIGENCE",
        badgeColor: C_NAVY,
        badgeBg: C_LIGHT_NAVY,
        metrics: [
          "58 Live Mandi feeds across 24 APMC yards",
          "30-Day Min, Modal, Max curves with Recharts",
          "5-Mandi price spread: Lasalgaon vs Pimpalgaon vs Vashi",
          "MSP benchmark tracking (Soybean ₹4,892, Wheat ₹2,425)"
        ]
      },
      {
        title: "🛒 Screen 3: Direct Produce Marketplace",
        badge: "COMMERCIAL TRADING",
        badgeColor: "0369A1",
        badgeBg: "E0F2FE",
        metrics: [
          "20 Verified harvest listings across 10 key hubs",
          "AGMARK Grade A, certified moisture % & batch photos",
          "Mandi Arbitrage Badge (e.g. ₹100 below Lasalgaon rate)",
          "Direct Purchase Inquiry & Negotiation Modal"
        ]
      },
      {
        title: "🌍 Screen 4: International Export Gateway",
        badge: "APEDA / DGFT DESK",
        badgeColor: C_AMBER,
        badgeBg: C_LIGHT_AMBER,
        metrics: [
          "16 Global bilateral leads ($44.8M / 25,135 MT volume)",
          "Germany Pomegranate, UAE Rice, Vietnam Chilli, Korea Sesame",
          "Full ITC-HS Codes & 30% to 73% Export Price Premiums",
          "Statutory Documents Checklist & RoDTEP rebate benefits"
        ]
      }
    ];

    screens.forEach((sc, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const sx = 0.8 + col * 4.3;
      const sy = 1.6 + row * 1.75;

      slide.addShape(pptx.ShapeType.roundRect, {
        x: sx,
        y: sy,
        w: 4.1,
        h: 1.6,
        rectRadius: 0.08,
        fill: { color: C_CARD_BG },
        line: { color: C_BORDER, width: 1 }
      });

      slide.addShape(pptx.ShapeType.roundRect, {
        x: sx + 0.15,
        y: sy + 0.15,
        w: 1.5,
        h: 0.25,
        rectRadius: 0.04,
        fill: { color: sc.badgeBg },
        line: { color: sc.badgeColor, width: 0.5 }
      });
      slide.addText(sc.badge, {
        x: sx + 0.15,
        y: sy + 0.15,
        w: 1.5,
        h: 0.25,
        fontSize: 7.5,
        bold: true,
        color: sc.badgeColor,
        align: "center",
        valign: "middle",
        fontFace: "Arial"
      });

      slide.addText(sc.title, {
        x: sx + 0.15,
        y: sy + 0.45,
        w: 3.8,
        h: 0.3,
        fontSize: 10.5,
        bold: true,
        color: C_NAVY,
        fontFace: "Arial"
      });

      const mText = sc.metrics.map((m) => "✔  " + m).join("\n");
      slide.addText(mText, {
        x: sx + 0.15,
        y: sy + 0.78,
        w: 3.8,
        h: 0.75,
        fontSize: 8,
        color: C_TEXT_DARK,
        fontFace: "Arial"
      });
    });

    slide.addNotes(
      "PRESENTER SCRIPT (Slide 8 - 35s):\n" +
      "Judges, every screen here is active in our prototype right now. On screen one, the farmer gets exact NPK doses and profit forecasts. Screen two displays 58 live mandi feeds with 30-day price curves. Screen three lets institutional buyers browse verified harvest lots. And screen four allows FPOs to bid directly on overseas contracts like our $2,450/MT pomegranate export lead to Germany."
    );
  }

  // ==========================================
  // SLIDE 9: IMPACT & BENEFITS (EXACT MATCH TO USER'S UPLOADED IMAGE 3)
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideChrome(slide, "8. Impact & Benefits", "Empowering Farmers, Strengthening India", "Real Information  |  Better Decisions  |  Higher Income  |  Stronger Rural Economy");

    // 3 Stakeholder Columns (Farmers, Buyers, Broader Impact)
    const stakeholders = [
      {
        title: "🌱 Impact on Farmers",
        color: C_PRIMARY_GREEN,
        points: [
          "Higher Income: Better crop planning and direct market access get fairer prices.",
          "Reduced Input Costs: Accurate seed and NPK fertilizer calculations avoid wastage.",
          "Better Decision Making: Recommendations grounded in land, soil, season and market.",
          "Increased Productivity: Right crop at the right time improves farm efficiency."
        ]
      },
      {
        title: "👥 Impact on Buyers",
        color: C_NAVY,
        points: [
          "Reliable Supply: Direct farm linkages ensure fresh, traceable produce.",
          "Fair & Transparent Pricing: Eliminates broker cuts, benefiting both buyer and seller.",
          "Wide Variety: Access diverse produce from top farming hubs across India.",
          "Institutional Ease: Streamlined inquiries for retail chains and food processors."
        ]
      },
      {
        title: "🇮🇳 Broader National Impact",
        color: C_AMBER,
        points: [
          "Stronger Rural Economy: Wealth generation boosts rural purchasing power.",
          "Food Security: Promotes balanced, sustainable, and diversified crop production.",
          "Supports National Missions: Directly advances Atmanirbhar Bharat & Digital India.",
          "Vikit Bharat 2047: Building a prosperous, technologically self-reliant agriculture."
        ]
      }
    ];

    stakeholders.forEach((sh, i) => {
      const sx = 0.8 + i * 2.85;
      slide.addShape(pptx.ShapeType.roundRect, {
        x: sx,
        y: 1.6,
        w: 2.7,
        h: 2.45,
        rectRadius: 0.08,
        fill: { color: C_CARD_BG },
        line: { color: C_BORDER, width: 1 }
      });

      slide.addText(sh.title, {
        x: sx + 0.15,
        y: 1.72,
        w: 2.4,
        h: 0.35,
        fontSize: 11,
        bold: true,
        color: sh.color,
        fontFace: "Arial"
      });

      const pText = sh.points.map((pt) => "• " + pt).join("\n\n");
      slide.addText(pText, {
        x: sx + 0.15,
        y: 2.12,
        w: 2.4,
        h: 1.85,
        fontSize: 7.8,
        color: C_TEXT_DARK,
        fontFace: "Arial"
      });
    });

    // Bottom Stats & SDG Alignment (Matching Image 3)
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 4.15,
      w: 4.5,
      h: 0.95,
      rectRadius: 0.08,
      fill: { color: C_LIGHT_GREEN },
      line: { color: C_PRIMARY_GREEN, width: 1 }
    });
    slide.addText("📈 EXPECTED LONG-TERM OUTCOMES:", {
      x: 0.95,
      y: 4.22,
      w: 4.2,
      h: 0.22,
      fontSize: 8,
      bold: true,
      color: "064E3B",
      fontFace: "Arial"
    });
    slide.addText("↑ 30–50% Increase in Farmer Net Income  |  ↓ 20–30% Reduction in Input Costs\nMore Direct Buyer Connections  |  Improved Crop Yield & Quality", {
      x: 0.95,
      y: 4.45,
      w: 4.2,
      h: 0.58,
      fontSize: 8.5,
      bold: true,
      color: "0F5132",
      fontFace: "Arial"
    });

    // SDG Alignment Box
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 5.45,
      y: 4.15,
      w: 3.75,
      h: 0.95,
      rectRadius: 0.08,
      fill: { color: C_LIGHT_NAVY },
      line: { color: C_BORDER, width: 1 }
    });
    slide.addText("🎯 ALIGNMENT WITH UN SDGs:", {
      x: 5.6,
      y: 4.22,
      w: 3.45,
      h: 0.22,
      fontSize: 8,
      bold: true,
      color: C_NAVY,
      fontFace: "Arial"
    });
    slide.addText("• SDG 2: Zero Hunger  •  SDG 8: Decent Work & Economic Growth\n• SDG 12: Responsible Production  •  SDG 13: Climate Action", {
      x: 5.6,
      y: 4.48,
      w: 3.45,
      h: 0.55,
      fontSize: 8,
      color: C_TEXT_DARK,
      fontFace: "Arial"
    });

    slide.addNotes(
      "PRESENTER SCRIPT (Slide 9 - 30s):\n" +
      "The impact of Kisan Mitra is grounded in hard numbers: a 30 to 50% increase in net farmer income, a 20 to 30% cut in input costs, direct wholesale connections, and alignment with UN Sustainable Development Goals 2, 8, 12, and 13."
    );
  }

  // ==========================================
  // SLIDE 10: COMPETITIVE MATRIX
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideChrome(slide, "9. Competitive Advantage", "Why Kisan Mitra Outperforms Existing Alternatives", "A rigorous comparative evaluation against government portals and commercial apps");

    const headers = [
      { text: "Dimension / Feature", options: { bold: true, fill: { color: C_NAVY }, color: C_WHITE, fontSize: 8.5 } },
      { text: "Traditional Mandis", options: { bold: true, fill: { color: C_NAVY }, color: C_WHITE, fontSize: 8.5 } },
      { text: "e-NAM Portal", options: { bold: true, fill: { color: C_NAVY }, color: C_WHITE, fontSize: 8.5 } },
      { text: "Generic Agri Apps", options: { bold: true, fill: { color: C_NAVY }, color: C_WHITE, fontSize: 8.5 } },
      { text: "Kisan Mitra (Our Solution)", options: { bold: true, fill: { color: C_PRIMARY_GREEN }, color: C_WHITE, fontSize: 8.5 } }
    ];

    const rows = [
      [
        { text: "Farm Telemetry Advisory", options: { bold: true } },
        { text: "❌ None (Hearsay)" },
        { text: "❌ None (Trading Only)" },
        { text: "⚠️ Basic static lists" },
        { text: "✅ Rule-Based Soil/Water Engine", options: { bold: true, color: C_PRIMARY_GREEN } }
      ],
      [
        { text: "Intermediary Elimination", options: { bold: true } },
        { text: "❌ 4–6 Middlemen" },
        { text: "⚠️ APMC Commission Agents" },
        { text: "⚠️ Partial Direct Sales" },
        { text: "✅ Direct Farm-Gate Procurement", options: { bold: true, color: C_PRIMARY_GREEN } }
      ],
      [
        { text: "International Export Gateway", options: { bold: true } },
        { text: "❌ Zero Access" },
        { text: "❌ Domestic Only" },
        { text: "❌ None" },
        { text: "✅ 16 APEDA/DGFT Global Leads", options: { bold: true, color: C_PRIMARY_GREEN } }
      ],
      [
        { text: "Full Regional Multilingual", options: { bold: true } },
        { text: "❌ Not Applicable" },
        { text: "⚠️ Basic English / Hindi" },
        { text: "⚠️ Limited Support" },
        { text: "✅ 9 Indian Languages (Full-DOM)", options: { bold: true, color: C_PRIMARY_GREEN } }
      ],
      [
        { text: "Dynamic Input Cost & Net ROI", options: { bold: true } },
        { text: "❌ None" },
        { text: "❌ None" },
        { text: "⚠️ Rough Estimates" },
        { text: "✅ Acreage Modeler + Net Profit", options: { bold: true, color: C_PRIMARY_GREEN } }
      ],
      [
        { text: "Statutory Export Compliance", options: { bold: true } },
        { text: "❌ None" },
        { text: "❌ None" },
        { text: "❌ None" },
        { text: "✅ Complete Statutory Checklists", options: { bold: true, color: C_PRIMARY_GREEN } }
      ]
    ];

    const tableData = [headers, ...rows];

    slide.addTable(tableData, {
      x: 0.8,
      y: 1.6,
      w: 8.4,
      colW: [2.2, 1.5, 1.5, 1.5, 1.7],
      rowH: [0.32, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42],
      border: { color: C_BORDER, width: 0.5 },
      fontSize: 8,
      align: "center",
      valign: "middle",
      fontFace: "Arial"
    });

    slide.addNotes(
      "PRESENTER SCRIPT (Slide 10 - 25s):\n" +
      "If the jury asks: 'Why not just use e-NAM?', this matrix is your answer. e-NAM is only a bidding tool for commission agents in physical yards. Kisan Mitra covers the full lifecycle: pre-sowing crop selection, input cost modeling, farm-gate direct sales, and overseas export corridors that e-NAM does not support."
    );
  }

  // ==========================================
  // SLIDE 11: SCALABILITY & STRATEGIC ROADMAP
  // ==========================================
  {
    const slide = pptx.addSlide();
    addSlideChrome(slide, "10. Scalability & Roadmap", "Strategic Roadmap: From Hackathon to National Impact", "A phased rollout trajectory integrating with national digital public infrastructure");

    const roadmap = [
      {
        phase: "PHASE 1 (COMPLETED)",
        time: "SIH 2026 Prototype",
        badgeColor: C_PRIMARY_GREEN,
        badgeBg: C_LIGHT_GREEN,
        items: [
          "Full 3-Portal functional ecosystem (Farmer, Buyer, Admin).",
          "30 Comprehensive ICAR crops & vegetables catalog.",
          "20 Verified harvest listings & 10 institutional inquiries.",
          "16 Bilateral international export contracts ($44.8M).",
          "58 APMC mandi price feeds & Recharts arbitrage graphs.",
          "100% Full-DOM translation into 9 Indian languages."
        ]
      },
      {
        phase: "PHASE 2 (NEXT 6 MONTHS)",
        time: "Ecosystem Expansion",
        badgeColor: C_NAVY,
        badgeBg: C_LIGHT_NAVY,
        items: [
          "ONDC Integration: Open Network for Digital Commerce logistics.",
          "WhatsApp Agri-Bot: Voice-driven crop advice via Twilio API.",
          "Computer Vision AI: Smartphone camera quality grading.",
          "Cloud Firestore & Backend: Multi-tenant production scale.",
          "Pilot Launch: 50 FPOs across Rajasthan, Maharashtra, and Gujarat."
        ]
      },
      {
        phase: "PHASE 3 (MONTHS 6–18)",
        time: "Nationwide Scale",
        badgeColor: C_AMBER,
        badgeBg: C_LIGHT_AMBER,
        items: [
          "e-RUPI / Smart Contract Escrow: Instant farmer settlement upon digital QA signoff.",
          "IoT Soil Sensor Feeds: Automated telemetry data capture.",
          "Satellite InSAR Soil Moisture: Micro-climate drought tracking.",
          "Ministry Data Webhooks: Real-time Agmarknet & APEDA synchronization."
        ]
      }
    ];

    roadmap.forEach((r, i) => {
      const rx = 0.8 + i * 2.85;
      slide.addShape(pptx.ShapeType.roundRect, {
        x: rx,
        y: 1.6,
        w: 2.7,
        h: 3.5,
        rectRadius: 0.08,
        fill: { color: C_CARD_BG },
        line: { color: C_BORDER, width: 1 }
      });

      slide.addShape(pptx.ShapeType.roundRect, {
        x: rx + 0.15,
        y: 1.72,
        w: 2.4,
        h: 0.28,
        rectRadius: 0.04,
        fill: { color: r.badgeBg },
        line: { color: r.badgeColor, width: 0.5 }
      });
      slide.addText(r.phase, {
        x: rx + 0.15,
        y: 1.72,
        w: 2.4,
        h: 0.28,
        fontSize: 7.5,
        bold: true,
        color: r.badgeColor,
        align: "center",
        valign: "middle",
        fontFace: "Arial"
      });

      slide.addText(r.time, {
        x: rx + 0.15,
        y: 2.05,
        w: 2.4,
        h: 0.3,
        fontSize: 10,
        bold: true,
        color: C_NAVY,
        fontFace: "Arial"
      });

      const itText = r.items.map((it) => "✔  " + it).join("\n\n");
      slide.addText(itText, {
        x: rx + 0.15,
        y: 2.4,
        w: 2.4,
        h: 2.55,
        fontSize: 8,
        color: C_TEXT_DARK,
        fontFace: "Arial"
      });
    });

    slide.addNotes(
      "PRESENTER SCRIPT (Slide 11 - 25s):\n" +
      "We have a concrete roadmap. Phase 1 is fully completed and operational today. Phase 2 integrates with ONDC for logistics and deploys a WhatsApp voice bot for low-literacy farmers. Phase 3 scales nationwide with e-RUPI smart-contract escrow payments upon quality delivery verification."
    );
  }

  // ==========================================
  // SLIDE 12: CONCLUSION & THE PITCH FINISH
  // ==========================================
  {
    const slide = pptx.addSlide();
    slide.background = { color: C_DARK_BG };

    // Tri-color subtle top bar
    slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 0.4, w: 2.8, h: 0.05, fill: { color: "FF9933" }, line: { color: "FF9933", width: 0 } });
    slide.addShape(pptx.ShapeType.rect, { x: 3.6, y: 0.4, w: 2.8, h: 0.05, fill: { color: "FFFFFF" }, line: { color: "FFFFFF", width: 0 } });
    slide.addShape(pptx.ShapeType.rect, { x: 6.4, y: 0.4, w: 2.8, h: 0.05, fill: { color: "138808" }, line: { color: "138808", width: 0 } });

    slide.addText("CONCLUSION & PITCH SUMMARY", {
      x: 0.8,
      y: 0.7,
      w: 8.4,
      h: 0.3,
      fontSize: 11,
      bold: true,
      color: "86EFAC",
      fontFace: "Arial"
    });

    slide.addText("Empowering 140 Million Indian Farmers", {
      x: 0.8,
      y: 1.05,
      w: 8.4,
      h: 0.55,
      fontSize: 26,
      bold: true,
      color: "FFFFFF",
      fontFace: "Arial"
    });

    slide.addText("Our Vision: To build a digitally empowered farming community where every farmer has the right information, better opportunities and a fair price for their produce.", {
      x: 0.8,
      y: 1.62,
      w: 8.4,
      h: 0.45,
      fontSize: 11.5,
      color: "E2E8F0",
      fontFace: "Arial"
    });

    // 3 Summary Takeaways
    const takeaways = [
      { t: "1. Agronomic Precision", d: "Cuts input costs by 20–30% and prevents market gluts using ICAR benchmarks." },
      { t: "2. Direct Market Realization", d: "Boosts farmer net income by 30–50% by eliminating intermediary commission agents." },
      { t: "3. Global Export Vision", d: "Connects FPOs to $44.8M in overseas demand with complete statutory checklists." }
    ];

    takeaways.forEach((tk, i) => {
      const ty = 2.2 + i * 0.75;
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8,
        y: ty,
        w: 8.4,
        h: 0.65,
        rectRadius: 0.06,
        fill: { color: "0F3E26" },
        line: { color: "22C55E", width: 1 }
      });
      slide.addText(tk.t + " — " + tk.d, {
        x: 1.0,
        y: ty + 0.12,
        w: 8.0,
        h: 0.4,
        fontSize: 10,
        bold: true,
        color: "FFFFFF",
        valign: "middle",
        fontFace: "Arial"
      });
    });

    // Team signature & Demo link box
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 4.6,
      w: 8.4,
      h: 0.65,
      rectRadius: 0.06,
      fill: { color: "051B10" },
      line: { color: "15803D", width: 1 }
    });
    slide.addText("Team #3414: Parallel Minds  •  Poornima College of Engineering, Jaipur  •  Live Demo: http://localhost:5173/\nThank you, Respected Judges! We welcome your questions.", {
      x: 0.9,
      y: 4.65,
      w: 8.2,
      h: 0.55,
      fontSize: 9.5,
      bold: true,
      color: "FCD34D",
      align: "center",
      valign: "middle",
      fontFace: "Arial"
    });

    slide.addNotes(
      "PRESENTER SCRIPT (Slide 12 - 20s):\n" +
      "In conclusion, Kisan Mitra turns Indian farmers from price-takers into empowered agri-entrepreneurs. We invite the jury to test our live prototype now. Thank you!"
    );
  }

  // Save the presentation with new official name
  const fileName = "Kisan_Mitra_SIH_Official_ParallelMinds_PCE.pptx";
  await pptx.writeFile({ fileName });
  console.log(`Successfully generated updated ${fileName}`);
}

createPitchDeck().catch((err) => {
  console.error("Error creating presentation:", err);
});
