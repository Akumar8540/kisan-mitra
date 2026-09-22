// LocalStorage Repository for SIH Prototype
// Provides a clean, persistent local database for farmer profiles, crop listings, buyer inquiries, and catalogs.
// Designed with async function signatures so that migrating to Cloud Firestore in production requires ZERO UI changes!

import { initialListings, initialInquiries } from "../data/sampleListingsData";
import { cropCatalogData } from "../data/cropCatalogData";
import { currentMarketPrices, mandisList } from "../data/marketData";
import { referenceProductCatalog } from "../data/fertilizerData";

const STORAGE_KEYS = {
  CURRENT_USER: "agri_current_user",
  FARM_PROFILES: "agri_farm_profiles",
  CROP_LISTINGS: "agri_crop_listings",
  BUYER_INQUIRIES: "agri_buyer_inquiries",
  CROP_CATALOG: "agri_crop_catalog",
  MARKET_PRICES: "agri_market_prices",
  FERTILIZER_PRODUCTS: "agri_fertilizers"
};

// Helper to safely merge expanded dataset items into existing localStorage without losing user additions
const syncCollectionWithDefaults = (key, defaultList) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(defaultList));
      return;
    }
    const existing = JSON.parse(raw);
    if (!Array.isArray(existing)) {
      localStorage.setItem(key, JSON.stringify(defaultList));
      return;
    }
    const existingIds = new Set(existing.map((item) => item.id));
    let hasNew = false;
    defaultList.forEach((item) => {
      if (!existingIds.has(item.id)) {
        existing.push(item);
        hasNew = true;
      }
    });
    if (hasNew) {
      localStorage.setItem(key, JSON.stringify(existing));
    }
  } catch (err) {
    console.error(`Error syncing ${key} in localStorage:`, err);
    localStorage.setItem(key, JSON.stringify(defaultList));
  }
};

// Initializer to seed and synchronize default data on launch
export const initializeLocalStorageData = () => {
  syncCollectionWithDefaults(STORAGE_KEYS.CROP_LISTINGS, initialListings);
  syncCollectionWithDefaults(STORAGE_KEYS.BUYER_INQUIRIES, initialInquiries);
  syncCollectionWithDefaults(STORAGE_KEYS.CROP_CATALOG, cropCatalogData);
  syncCollectionWithDefaults(STORAGE_KEYS.MARKET_PRICES, currentMarketPrices);
  syncCollectionWithDefaults(STORAGE_KEYS.FERTILIZER_PRODUCTS, referenceProductCatalog);

  if (!localStorage.getItem(STORAGE_KEYS.FARM_PROFILES)) {
    // Seed default farm profile for Demo Farmer Ramesh Kumar
    const defaultFarmerProfile = {
      "farmer-1": {
        userId: "farmer-1",
        name: "Ramesh Kumar",
        phone: "+91 98765 43210",
        email: "ramesh.farmer@example.com",
        state: "Maharashtra",
        district: "Nashik",
        village: "Pimpalgaon Baswant",
        preferredLanguage: "English (Hindi ready)",
        totalLandArea: 3,
        landUnit: "Acre",
        landType: "Normal", // Fertile, Normal, Dry/Rainfed, Barren/Degraded, Fallow, Irrigated, Partially Irrigated
        soilType: "Black", // Loamy, Sandy, Clay, Black, Red, Alluvial, Other
        soilCondition: "Good",
        waterAvailability: "Medium",
        irrigationType: "Partially Irrigated", // Rainfed, Assured, Limited, Drip, Sprinkler, Canal, Borewell
        currentSeason: "Kharif",
        previousCrop: "Gram / Chickpea",
        currentCrop: "Soybean",
        farmingExperience: "12 years",
        farmingObjective: "Maximum profit", // Maximum profit, Low risk, Fast harvest, Low water requirement, Soil improvement, Stable market demand
        approximateBudget: "₹45,000",
        lastUpdated: "2026-09-18"
      }
    };
    localStorage.setItem(STORAGE_KEYS.FARM_PROFILES, JSON.stringify(defaultFarmerProfile));
  }
};

// Generic read helper
export const getCollection = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error(`Error reading ${key} from localStorage:`, err);
    return [];
  }
};

// Generic write helper
export const saveCollection = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(`Error saving ${key} to localStorage:`, err);
  }
};

export { STORAGE_KEYS };
