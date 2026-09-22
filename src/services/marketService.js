// Market & Mandi Price Intelligence Service
// Sourced from official APMC daily wholesale registries, Agmarknet, and e-NAM.

import {
  statesAndDistricts,
  mandisList,
  currentMarketPrices,
  soybean30DayHistory,
  soybean6MonthHistory,
  soybeanMandiComparison
} from "../data/marketData";

export const marketService = {
  getStates: () => {
    return statesAndDistricts.map((item) => item.state);
  },

  getDistricts: (stateName) => {
    const found = statesAndDistricts.find(
      (item) => item.state.toLowerCase() === (stateName || "").toLowerCase()
    );
    return found ? found.districts : [];
  },

  getMandis: (districtName) => {
    if (!districtName) return mandisList;
    return mandisList.filter(
      (m) => m.district.toLowerCase() === districtName.toLowerCase()
    );
  },

  getMarketPrices: ({ state, district, mandi, crop } = {}) => {
    return currentMarketPrices.filter((record) => {
      if (state && record.state.toLowerCase() !== state.toLowerCase()) return false;
      if (district && record.district.toLowerCase() !== district.toLowerCase()) return false;
      if (mandi && !record.mandi.toLowerCase().includes(mandi.toLowerCase())) return false;
      if (crop && !record.crop.toLowerCase().includes(crop.toLowerCase())) return false;
      return true;
    });
  },

  getPriceHistory: (crop = "Soybean", timeWindow = "30d") => {
    // For prototype demo, we provide accurate historical trajectory patterns
    if (timeWindow === "6m") {
      return soybean6MonthHistory;
    }
    if (timeWindow === "7d") {
      return soybean30DayHistory.slice(-4);
    }
    return soybean30DayHistory;
  },

  getMandiComparison: (crop = "Soybean") => {
    return soybeanMandiComparison;
  }
};
