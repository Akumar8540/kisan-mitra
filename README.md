# Kisan Mitra — Smart Farmer Assistant & Direct Crop Marketplace

> **Smart India Hackathon (SIH) Prototype**  
> *Empowering Indian farmers through data-driven crop suitability guidance, transparent APMC mandi price trends, and direct middleman-free produce trade.*

---

## 1. Project Overview

Smallholder farmers in India (operating < 2 hectares) face three acute structural bottlenecks:
1. **Agronomic Uncertainty:** Lack of tailored guidance on which crop to sow based on their specific land topography, soil health, and seasonal irrigation constraints.
2. **Input Miscalculation:** Imbalanced application of high-cost chemical fertilizers (Urea/DAP) leading to soil degradation and inflated input expenses.
3. **Information Asymmetry & Middlemen:** Inability to track real mandi market price trends, leaving farmers vulnerable to local village brokers who extract 20–35% in commissions.

**Kisan Mitra** resolves these challenges through a unified, 5-stage digital journey:
```text
Farm Profile Entry
       ↓
Rule-Based Crop Suitability Advisor
       ↓
Seed & N-P-K Input Calculator
       ↓
Mandi Price Trends & Market Comparison
       ↓
Direct Harvest Listing & Buyer Inquiries
```

---

## 2. Technology Stack

- **Frontend:** React 19, Vite, JavaScript (ES6+), React Router DOM v7
- **Styling:** Tailwind CSS v3 (Agricultural color palette, mobile-first responsive layout, print styles)
- **Data Visualizations:** Recharts (Mandi price trajectories & multi-mandi comparisons)
- **Icons:** Lucide React
- **Database & Persistence:** Dual-Mode Architecture:
  - **Mode A (Prototype Default):** Persistent LocalStorage Repository with pre-seeded Indian agricultural datasets (zero configuration needed).
  - **Mode B (Production Ready):** Cloud Firestore & Firebase Auth ready via drop-in `.env` configuration.
- **Reporting:** Client-side RFC-4180 CSV export and printable agricultural dossiers.

---

## 3. Project Directory Structure

```text
agri-smart-assistant/
├── .env.example                     # Environment variables template
├── ARCHITECTURE_GUIDE.md            # "Where to use what" technology decision guide
├── PROJECT_COMPLETION.md            # Roadmap for the remaining 20–30% of work
├── firestore.rules                  # Server-side Firebase Firestore security rules
├── index.html                       # HTML5 entry with Plus Jakarta Sans & leaf icon
├── package.json                     # Dependencies and scripts
├── tailwind.config.js               # Agricultural custom color scheme
└── src/
    ├── main.jsx                     # React root mount
    ├── App.jsx                      # Comprehensive routing with role guards
    ├── index.css                    # Tailwind directives & print media rules
    ├── context/
    │   ├── AuthContext.jsx          # Role authentication & 1-click demo switcher
    │   └── NotificationContext.jsx  # Toast notification system
    ├── data/
    │   ├── cropCatalogData.js       # 15+ curated Indian crops (Kharif, Rabi, Zaid)
    │   ├── marketData.js            # APMC mandis, historical trajectories & prices
    │   ├── fertilizerData.js        # Agronomic NPK guide & commercial products
    │   └── sampleListingsData.js    # Pre-seeded marketplace harvest lots & inquiries
    ├── services/
    │   ├── storageRepo.js           # LocalStorage database engine with seeding
    │   ├── firebase.js              # Future Cloud Firestore integration point
    │   ├── authService.js           # Role authentication & demo accounts
    │   ├── farmService.js           # Farm onboarding & land parameters CRUD
    │   ├── cropRecommendationService.js # Explainable 5-criteria decision support engine
    │   ├── inputCalculatorService.js # Seed rate & NPK bag calculation formulas
    │   ├── marketService.js         # Mandi query helper & price trend service
    │   ├── marketplaceService.js    # Harvest listings & direct buyer inquiry CRUD
    │   └── reportService.js         # 5 reports & RFC-4180 CSV download engine
    ├── components/
    │   ├── common/                  # Navbar, Sidebar, Footer, DemoBanner, Modal, Toast
    │   ├── cards/                   # CropCard, ListingCard, StatCard
    │   └── charts/                  # Recharts PriceTrendChart & MandiComparisonChart
    ├── layouts/                     # PublicLayout, DashboardLayout, ProtectedRoute
    └── pages/
        ├── public/                  # Home, About, HowItWorks, Marketplace, Crops, MandiPrices...
        ├── farmer/                  # Dashboard, Profile, Advisor, Calculator, Calendar, Listings, Inquiries, Reports
        ├── buyer/                   # Dashboard, Marketplace, Inquiries, Profile
        └── admin/                   # Dashboard, ManageCrops, ManageMarketData, ManageFertilizers, ManageUsers
```

---

## 4. Running the Project Locally

### Prerequisites
- Node.js LTS (v18, v20, or v24)
- npm or pnpm

### Quick Start
```bash
# 1. Navigate to the project folder
cd C:\Users\abhis\.gemini\antigravity\scratch\agri-smart-assistant

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the local development server
npm run dev
```

Open your browser at `http://localhost:5173`.

### Production Build
```bash
npm run build
npm run preview
```

---

## 5. Instant 1-Click Evaluation Accounts

To facilitate rapid, hassle-free evaluation by hackathon judges, Kisan Mitra includes **1-Click Demo Logins** on the login page and top banner:

| Role | Account Name | Pre-loaded Context | Dashboard Link |
| :--- | :--- | :--- | :--- |
| **Farmer** | Ramesh Kumar | 3 Acres, Black Soil, Rainfed, Nashik, Maharashtra | `/farmer/dashboard` |
| **Buyer** | Pooja Agro Traders | Wholesale Mandi Merchant & Dal Miller, Pune | `/buyer/dashboard` |
| **Admin** | Kisan Mitra Admin | Agronomic Data & System Operations Lead | `/admin/dashboard` |

---

## 6. Dual-Mode Database Architecture (LocalStorage vs. Firebase)

### Mode A: LocalStorage Database (Current Prototype State)
- The application automatically initializes with persistent sample data in the browser's `localStorage`.
- All modifications (updating farm profile, adding harvest lots, sending inquiries, changing inquiry status, curating crops) persist across page reloads.
- A yellow banner prominently displays: `Prototype Demo Mode — Using Local Storage Repository`.
- **Zero setup or external credentials required.**

### Mode B: Cloud Firestore (Future Production State)
When ready to connect live Google Cloud Firestore:
1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com).
2. Enable **Authentication** (Email/Password) and **Cloud Firestore**.
3. Copy `.env.example` to `.env` and fill in your client configuration keys.
4. Deploy the production security rules using:
   ```bash
   firebase deploy --only firestore:rules
   ```

---

## 7. Key Modules & Technical Implementation

### Module 1: The Multi-Criteria Crop Suitability Advisor
- **Location:** `src/services/cropRecommendationService.js` & `src/pages/farmer/CropAdvisor.jsx`
- **Scoring Weights:**
  - Season Compatibility (30%)
  - Soil Compatibility (25%)
  - Water / Irrigation Capacity (25%)
  - Land Condition / Topography (10%)
  - Farmer Objective (10%)
- **Explainability:** Generates positive match reasons (e.g. `✓ Optimal fit for Kharif season`) and actionable agronomic warnings (e.g. `⚠ Sensitive to waterlogging`).

### Module 2: Seed & Nutrient Formulation Engine
- **Location:** `src/services/inputCalculatorService.js` & `src/pages/farmer/InputCalculator.jsx`
- **Formulas:**
  - $\text{Total Seed} = \text{Land Area (Acres)} \times \text{Verified Seed Rate (kg/acre)}$
  - Calculates pure N-P-K demand and converts to standard commercial fertilizer bags:
    - **Urea (46% N):** 45 kg bags
    - **DAP (18-46-0):** 50 kg bags
    - **MOP Potash (60% K):** 50 kg bags

### Module 3: APMC Mandi Market Intelligence
- **Location:** `src/services/marketService.js` & `src/pages/public/MarketPrices.jsx`
- **Features:** 
  - Tracks Minimum, Modal, and Maximum wholesale prices across 13 APMCs in 7 states.
  - Interactive Recharts visualization with 7-day, 30-day, and 6-month historical trajectories.
  - Multi-mandi price comparison bar chart.

### Module 4: Direct Produce Marketplace & Inquiry System
- **Location:** `src/services/marketplaceService.js`, `PublicMarketplace.jsx`, `InquiriesReceived.jsx`
- **Flow:**
  - Farmers publish lot specifications (crop, variety, quantity, quality grade, expected price).
  - Buyers filter produce and submit structured purchase inquiries (quantity, target offer, delivery date, message).
  - Farmers review, accept, or reject inquiries. When accepted, direct contact coordinates physical inspection and dispatch.

### Module 5: Agricultural Reporting & CSV Export
- **Location:** `src/services/reportService.js` & `src/pages/farmer/Reports.jsx`
- **Generated Reports:**
  1. *Farm Profile & Land Assessment Report*
  2. *Crop Suitability & Recommendation Advisory*
  3. *Estimated Seed & Fertilizer Requirement Report*
  4. *Mandi Market Price Intelligence Report*
  5. *Harvest Marketplace Listings Report*
- All reports feature a clean print layout (`window.print()`) and one-click RFC-4180 compliant CSV export.

---

## 8. External API & Future AI/ML Integration Points

### Market Prices API
- **File:** `src/services/marketService.js`
- **Target Endpoint:** [data.gov.in Agmarknet API](https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070)
- **Status:** Marked with `// TODO: CONNECT VERIFIED MARKET DATA API HERE`.

### Future AI/ML Recommendation Service
- **Architecture:**
  ```text
  React Frontend
         ↓ (Async HTTP POST)
  Python FastAPI Microservice
         ↓ (Feature Vector: N, P, K, pH, Rainfall, Temp, Soil)
  Trained Random Forest / LightGBM Model
         ↓
  Confidence-Scored Crop Predictions
  ```
- **Roadmap:** Documented comprehensively in [`PROJECT_COMPLETION.md`](./PROJECT_COMPLETION.md).

---

## 9. SIH Prototype Limitations & Honesty Disclosures

1. **Demonstration Market Data:** Market prices represent benchmark APMC datasets rather than real-time live auction feeds.
2. **Rule-Based Decision Support:** Crop recommendations are rule-calibrated expert systems, not deep neural networks.
3. **Local Agricultural Corroboration:** Recommendations are advisory in nature and must always be verified with local Krishi Vigyan Kendras (KVKs) and official Soil Health Cards.
4. **No Direct In-App Payments:** Financial transactions are conducted offline between buyer and farmer following quality verification.

---

## 10. License & Attribution
Developed as an educational prototype for the **Smart India Hackathon (SIH)**.  
Package of practices references adapted from ICAR, State Agricultural Universities, and Directorate of Economics & Statistics benchmarks.
