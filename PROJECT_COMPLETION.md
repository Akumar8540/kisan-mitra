# Kisan Mitra — Project Completion & Evolution Roadmap (Remaining 20–30%)

> **Dear Developer & SIH Participant:**  
> Approximately **70–80%** of your functional prototype is fully implemented, verified, and running cleanly with zero build errors.  
> This document maps out the remaining **20–30%** of work, structured specifically so you can research, understand, debug, and implement each upgrade as your project progresses through hackathon rounds and incubation.

---

## Section A: Must Verify & Polish Before SIH Presentation

### 1. Presentation Rehearsal Flow
- **What is missing:** A smooth, memorized 3-minute demonstration script guiding judges through the 5-step journey.
- **Why it is missing:** Software cannot rehearse your presentation delivery.
- **Where it belongs:** Pitch deck / presentation notes.
- **Actionable Steps:**
  1. Open homepage $\rightarrow$ Click *"Find the Right Crop"*.
  2. Point out the transparent 5-attribute scoring breakdown (Season 30%, Soil 25%, Water 25%, Land 10%, Objective 10%).
  3. Click *"Calculate Seed & Fertilizers"* to show the exact Urea/DAP bag formulas.
  4. Jump to *"Mandi Prices"* to show the 30-day Recharts price trajectory and explain how price variances between mandis help farmers avoid distress sales.
  5. Go to *"Marketplace"* $\rightarrow$ Switch to Demo Buyer $\rightarrow$ Submit an inquiry $\rightarrow$ Switch back to Farmer $\rightarrow$ Accept inquiry.
  6. Download the *"Farm Profile Report CSV"* to demonstrate export capabilities.
- **Prerequisites:** None.

### 2. Mobile Responsive Screen Inspection
- **What is missing:** Real physical mobile screen testing on Chrome DevTools (375px iPhone SE and 412px Pixel).
- **Where it belongs:** Browser dev tools.
- **Suggested search terms:** *"Chrome devtools mobile device emulation"*.

---

## Section B: Real Data Integration

### 1. Live Agmarknet APMC Mandi Rates
- **What is missing:** Daily automated fetch of live wholesale prices from official government APMC yards.
- **Why it is missing:** Public government APIs require individual API key registration and can be subject to rate limits and intermittent downtime during live judging.
- **Where it belongs:** `src/services/marketService.js`
- **File to modify:** `src/services/marketService.js`
- **What you need to learn:** Asynchronous HTTP fetch requests, JSON response normalization, error retries.
- **Suggested search terms:** *"data gov in agmarknet api integration react"*, *"fetch apmc daily mandi prices javascript"*.
- **Requires External API:** Yes (Free API key from [data.gov.in](https://data.gov.in)).
- **Requires Firebase:** No (or Firebase Cloud Functions if caching server-side).
- **Requires Python/ML:** No.
- **Requires Paid Service:** No (Government open data is free).

### 2. Weather & Monsoon Rain Alerts
- **What is missing:** Real-time 7-day rainfall forecast and weather alerts on the farmer dashboard.
- **Why it is missing:** Requires geocoding the farmer's village and connecting a weather provider.
- **Where it belongs:** `src/services/weatherService.js` (new file) $\rightarrow$ consumed in `src/pages/farmer/Dashboard.jsx`.
- **What you need to learn:** Geolocation API, OpenWeatherMap 5-day forecast API.
- **Suggested search terms:** *"OpenWeatherMap One Call API react hook"*, *"Indian Meteorological Department open weather data"*.
- **Requires External API:** Yes (OpenWeatherMap / WeatherAPI free tier).
- **Requires Paid Service:** Free tier is sufficient (1,000 calls/day).

### 3. Digital Soil Health Card (SHC) Ingestion
- **What is missing:** Automatic population of nitrogen, phosphorus, potassium, and pH by entering a 12-digit Soil Health Card number.
- **Where it belongs:** `src/services/farmService.js`
- **Suggested search terms:** *"Soil Health Card portal API integration India"*.
- **Requires External API:** Yes (National Soil Health Card Portal).

---

## Section C: Security & Production Database Migration

### 1. Cloud Firestore Migration
- **What is missing:** Storing farm profiles and marketplace listings in Cloud Firestore instead of the browser's LocalStorage.
- **Why it is missing:** You explicitly directed the prototype to run on LocalStorage for zero-config reliability.
- **Where it belongs:** `src/services/firebase.js`, `src/services/farmService.js`, `src/services/marketplaceService.js`.
- **What you need to learn:** Firebase Web SDK v10/v11 modular syntax (`getFirestore`, `collection`, `addDoc`, `getDocs`, `query`, `where`, `onSnapshot`).
- **Suggested search terms:** *"Firebase modular SDK v10 firestore CRUD react"*, *"Cloud Firestore security rules testing"*.
- **Requires Firebase:** Yes.
- **Requires Paid Service:** No (Firebase Spark Free Tier is generous).

### 2. Firebase Phone Authentication (SMS OTP)
- **What is missing:** Real SMS OTP verification on Indian mobile numbers (+91).
- **Why it is missing:** Requires Firebase Blaze plan or reCAPTCHA invisible verification.
- **Where it belongs:** `src/services/authService.js` $\rightarrow$ `src/pages/public/Login.jsx`.
- **What you need to learn:** `RecaptchaVerifier`, `signInWithPhoneNumber`, SMS confirmation result handling.
- **Suggested search terms:** *"Firebase phone auth OTP react vite"*.
- **Requires Firebase:** Yes.

---

## Section D: Real AI / Machine Learning Evolution

### 1. Python FastAPI Crop Recommendation Microservice
- **What is missing:** Replacing the weighted rule engine with a machine learning model (e.g. Random Forest Classifier) trained on agricultural datasets.
- **Why it is missing:** The prototype strictly avoids fake AI claims and uses transparent agronomic scoring. A true ML model requires dataset curation and Python backend deployment.
- **Where it belongs:** A separate backend repository: `backend/main.py` + `backend/model.pkl`.
- **File to connect:** `src/services/cropRecommendationService.js` (replace internal scoring with `fetch(VITE_ML_SERVICE_URL + '/predict')`).
- **What dataset is needed:** Kaggle Crop Recommendation Dataset (`N, P, K, temperature, humidity, ph, rainfall, label`) or ICAR District-Level Crop Yield Datasets.
- **Model Architecture:**
  - Algorithm: Random Forest Classifier / LightGBM
  - Features: Soil Nitrogen, Phosphorus, Potassium, Soil pH, Average Annual Rainfall, Mean Temperature, Soil Texture Class.
  - Evaluation: Stratified 5-Fold Cross Validation, Accuracy & F1-Score metrics.
- **What you need to learn:** Python, scikit-learn, joblib, FastAPI, Uvicorn, CORS middleware.
- **Suggested search terms:** *"Crop recommendation dataset random forest fastapi"*, *"Deploy scikit learn model with fastapi on Render"*.
- **Requires Python/ML:** Yes.
- **Requires Paid Service:** No (can be hosted on free tiers like Render or Hugging Face Spaces).

### 2. Computer Vision Crop Disease Detection
- **What is missing:** A tool where a farmer uploads a photo of a sick leaf and receives disease diagnosis and biological treatment advice.
- **Where it belongs:** `src/pages/farmer/DiseaseDetector.jsx`
- **What you need to learn:** Transfer Learning with MobileNetV2 / EfficientNet trained on the PlantVillage dataset.
- **Suggested search terms:** *"Plant disease detection tensorflow js webapp"*, *"PlantVillage dataset pytorch mobilenet"*.
- **Requires Python/ML:** Yes (or TensorFlow.js for in-browser client inference).

---

## Section E: Production Deployment & DevOps

### 1. Hosting on Firebase Hosting / Vercel
- **What is missing:** Public live URL for the application.
- **Actionable Steps:**
  - **Option 1 (Vercel - Recommended for beginners):**
    1. Push code to GitHub.
    2. Import repository on [Vercel](https://vercel.com).
    3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
  - **Option 2 (Firebase Hosting):**
    1. Run `npx -y firebase-tools login`
    2. Run `npx -y firebase-tools init hosting` (set public directory to `dist`, single-page app to `yes`).
    3. Run `npm run build && npx -y firebase-tools deploy --only hosting`
- **Suggested search terms:** *"Deploy vite react app to vercel"*, *"Firebase hosting single page app rewrite rules"*.
- **Requires Paid Service:** Free.

---

## Section F: Optional High-Impact Extensions for Subsequent Rounds

1. **Multilingual Support (Hindi / Marathi / Regional Languages):**
   - Use `react-i18next` to externalize UI strings. The UI components were structured with semantic labels specifically to make translation straightforward.
2. **WhatsApp Bot & SMS Gateway:**
   - Integrate Twilio / Gupshup API so farmers without smartphones can receive daily mandi price SMS alerts.
3. **Escrow Payment & Logistics Integration:**
   - Integrate Razorpay Route (marketplace splits) and Indian truck aggregator APIs (e.g. Wheelseye / Vahak) for automated freight booking once an inquiry is accepted.
4. **Government Subsidy & Scheme Matcher:**
   - Add a module matching farmer acreage and crop choice with relevant Central & State schemes (PM-Kisan, PM Fasal Bima Yojana, Soil Health Card scheme, Sub-Mission on Agricultural Mechanization).
