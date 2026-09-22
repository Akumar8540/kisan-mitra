# Kisan Mitra — Architecture & Technology Decision Guide

This document clarifies the architectural choices made for the **Smart India Hackathon (SIH) prototype**, distinguishing between what is implemented today, where each technology is used, and how it will evolve into a production agricultural platform.

---

## 1. "Where to Use What" Technology Matrix

| Feature Domain | Current Technology (Prototype) | Future Technology (Production) | Rationale & Trade-offs | Where Implemented in Code | Production Upgrade Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Authentication** | LocalStorage Session + 1-Click Demo Logins | Firebase Authentication (or Supabase Auth) | Allows evaluators to test Farmer, Buyer, and Admin roles without entering passwords or creating fake accounts. | `src/context/AuthContext.jsx`<br/>`src/services/authService.js` | Switch to Firebase Phone Auth (OTP) for farmers, with Google OAuth for enterprise buyers. |
| **Database & Persistence** | Browser LocalStorage Repository | Google Cloud Firestore (NoSQL) | 100% zero-config reliability during SIH presentations; no API quota exhaustion, CORS issues, or network dropouts. | `src/services/storageRepo.js`<br/>`src/services/farmService.js`<br/>`src/services/marketplaceService.js` | Swap `storageRepo.js` read/write calls with Firestore SDK `collection()` and `doc()` functions. The UI remains completely unchanged. |
| **Produce Images** | Hosted Unsplash CDNs with local fallbacks | Firebase Storage / Cloudinary CDN | Eliminates the need for storage bucket credentials during prototype development while maintaining realistic imagery. | `src/data/sampleListingsData.js`<br/>`src/components/cards/ListingCard.jsx` | Implement Firebase Storage upload hook with image compression and EXIF geotag verification. |
| **Charts & Data Viz** | Recharts (SVG-based) | Recharts / Apache ECharts | High performance, responsive container sizing, lightweight bundle, zero canvas memory leaks. | `src/components/charts/PriceTrendChart.jsx`<br/>`src/components/charts/MandiComparisonChart.jsx` | Add volume overlay (candlestick charts) and multi-year cyclical price bands. |
| **Mandi Market Prices** | Benchmark APMC Mock Service | data.gov.in Agmarknet API | Provides clean, guaranteed Indian mandi figures across 7 states without rate-limits or downtime during demos. | `src/data/marketData.js`<br/>`src/services/marketService.js` | Connect `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070` via scheduled cron job caching into Firestore. |
| **Crop Suitability Engine** | 5-Attribute Rule-Based Scoring Engine | Python FastAPI + Random Forest ML Model | Fully explainable, transparent agronomic logic adhering to ICAR rules rather than opaque fake predictions. | `src/services/cropRecommendationService.js`<br/>`src/pages/farmer/CropAdvisor.jsx` | Deploy Python FastAPI microservice trained on ICAR multi-year district crop yield and soil dataset. |
| **Input & Fertilizer Math** | Deterministic Formulas (kg/acre & bag conversions) | Soil Health Card API + Custom Nutrient Model | Simple, verified algebraic formulas for N, P, K, Urea, DAP, and MOP bag conversions. | `src/services/inputCalculatorService.js`<br/>`src/pages/farmer/InputCalculator.jsx` | Ingest digital Soil Health Card N-P-K-pH readings directly via farmer Aadhaar/mobile lookup. |
| **Produce Marketplace** | In-Memory / LocalStorage CRUD Repository | Cloud Firestore with Security Rules | Enables complete harvest listing creation, editing, deletion, and buyer inquiry lifecycles offline. | `src/services/marketplaceService.js`<br/>`src/pages/public/PublicMarketplace.jsx` | Deploy server-side `firestore.rules` (provided in `firestore.rules`) enforcing strict user ownership. |
| **Reporting & CSV** | Client-side RFC-4180 CSV & CSS `@media print` | Node.js PDFKit / Puppeteer Backend PDF Service | Instantaneous browser generation with zero server overhead; opens natively in Excel and Google Sheets. | `src/services/reportService.js`<br/>`src/pages/farmer/Reports.jsx` | Add server-side digital signature and QR-code verification for bank loan eligibility certificates. |

---

## 2. Clear Architectural Boundaries

### A. Where LocalStorage is Acceptable
- **Prototype State:** LocalStorage is the recommended storage engine for this prototype because it guarantees uninterrupted demonstration flow even without an active internet connection or backend credentials.
- **Client Settings:** Selected language, UI theme preferences, and cached filter selections.
- **Demo State Seeding:** Initializing pre-configured farmer profiles (Ramesh Kumar, 3 acres) and sample marketplace lots on the first application launch.

### B. Where Firebase / Cloud Firestore is Needed
- **Multi-device Synchronization:** When a farmer updates a harvest listing on their mobile phone, a buyer in another state must see it immediately on their laptop.
- **Server-side Security:** Enforcing that a buyer cannot modify a farmer's price per quintal, and that a farmer can only accept/reject their own inquiries (see `firestore.rules`).
- **User Authentication:** Managing verified phone numbers, password hashing, and role claims.

### C. Where External APIs are Needed
- **Live Mandi Arrivals:** Government APMC price data fluctuates daily; connecting the Agmarknet API ensures price freshness.
- **Weather & Rain Forecasts:** Live meteorological data from IMD / OpenWeatherMap to alert farmers about impending rainstorms during harvesting or spraying windows.
- **Soil Health Card Database:** Pulling soil test data (nitrogen, organic carbon, electrical conductivity) using national farmer registry tokens.

### D. Where Real AI / ML is Needed
- **Multivariate Yield Prediction:** Estimating yield potential based on nonlinear interactions between temperature anomalies, dry spells, and fertilizer split timing.
- **Computer Vision Pest Diagnosis:** Uploading a photo of a diseased soybean leaf and identifying yellow mosaic virus or spodoptera caterpillars.
- **Predictive Price Forecasting:** Using time-series models (ARIMA / Prophet / LSTM) to forecast whether onion or soybean prices will rise or fall over the next 3 weeks.

---

## 3. The Dual-Mode Repository Pattern

The application abstracts database calls behind uniform asynchronous services in `src/services/`:

```text
               ┌──────────────────────────────┐
               │    React UI Pages & Hooks    │
               │  (CropAdvisor, MarketPrices) │
               └──────────────┬───────────────┘
                              │ Calls service methods
                              ▼
               ┌──────────────────────────────┐
               │   Service Layer Interface    │
               │  (farmService, marketService)│
               └──────────────┬───────────────┘
                              │
               ┌──────────────┴──────────────┐
               ▼                             ▼
   ┌───────────────────────┐     ┌───────────────────────┐
   │ LocalStorage Mode     │     │ Cloud Firestore Mode  │
   │ (Active Prototype)    │     │ (Future Production)   │
   │ - Zero setup          │     │ - Live multi-user     │
   │ - Seeded Indian crops │     │ - Security rules      │
   │ - Fast 1-click test   │     │ - Real-time sync      │
   └───────────────────────┘     └───────────────────────┘
```

Because UI components never directly call `localStorage.setItem` or `firebase.firestore().doc()`, transitioning to a production cloud database requires editing only the service layer files—leaving the 25+ UI views untouched!
