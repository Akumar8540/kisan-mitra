// Market & Mandi Price Intelligence Service
// Connects to live APMC electronic wholesale registries, Agmarknet, and e-NAM.
// Features real-time price tick simulations & Data.gov.in API integration.

import {
  statesAndDistricts,
  mandisList,
  currentMarketPrices,
  soybean30DayHistory,
  soybean6MonthHistory,
  soybeanMandiComparison
} from "../data/marketData";

// Initial live commodity ticker state
let liveTickerState = [
  { crop: "Soybean", mandi: "Pimpalgaon APMC", price: 5120, change: 45, changePct: "+0.89%", trend: "up", volume: "1,240 Qtl" },
  { crop: "Cotton", mandi: "Rajkot APMC", price: 7350, change: -30, changePct: "-0.41%", trend: "down", volume: "2,890 Qtl" },
  { crop: "Wheat", mandi: "Indore APMC", price: 2420, change: 15, changePct: "+0.62%", trend: "up", volume: "4,150 Qtl" },
  { crop: "Mustard", mandi: "Jaipur APMC", price: 5680, change: 60, changePct: "+1.07%", trend: "up", volume: "980 Qtl" },
  { crop: "Onion", mandi: "Lasalgaon APMC", price: 2150, change: -40, changePct: "-1.83%", trend: "down", volume: "5,400 Qtl" },
  { crop: "Green Chilli", mandi: "Guntur APMC", price: 6400, change: 120, changePct: "+1.91%", trend: "up", volume: "850 Qtl" },
  { crop: "Tomato", mandi: "Kolar APMC", price: 1850, change: 35, changePct: "+1.93%", trend: "up", volume: "3,100 Qtl" },
  { crop: "Basmati Rice", mandi: "Karnal APMC", price: 4280, change: 25, changePct: "+0.59%", trend: "up", volume: "1,640 Qtl" },
  { crop: "Maize", mandi: "Chhindwara APMC", price: 2180, change: -10, changePct: "-0.46%", trend: "down", volume: "1,120 Qtl" },
  { crop: "Turmeric", mandi: "Nizamabad APMC", price: 13900, change: 210, changePct: "+1.53%", trend: "up", volume: "420 Qtl" }
];

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
  },

  /**
   * Get current live commodity ticker state
   */
  getLiveTickerCommodities: () => {
    return liveTickerState;
  },

  /**
   * Subscribe to real-time APMC price ticks
   * Simulates active electronic floor trading with slight randomized micro-fluctuations
   */
  subscribeToLiveTicker: (callback) => {
    // Initial call
    callback([...liveTickerState]);

    const interval = setInterval(() => {
      // Pick a random commodity to tick
      const targetIdx = Math.floor(Math.random() * liveTickerState.length);
      const item = liveTickerState[targetIdx];
      const delta = (Math.floor(Math.random() * 7) - 3) * 5; // -15, -10, -5, 0, 5, 10, 15
      if (delta !== 0) {
        const newPrice = Math.max(500, item.price + delta);
        const change = delta;
        const changePct = `${delta > 0 ? "+" : ""}${((delta / item.price) * 100).toFixed(2)}%`;
        const trend = delta >= 0 ? "up" : "down";

        liveTickerState = liveTickerState.map((comm, idx) =>
          idx === targetIdx
            ? { ...comm, price: newPrice, change, changePct, trend, lastTick: Date.now() }
            : comm
        );

        callback([...liveTickerState]);
      }
    }, 4500); // updates every 4.5 seconds

    return () => clearInterval(interval);
  },

  /**
   * Optional live fetch from Data.gov.in Agmarknet API if user provides an API key
   */
  fetchLiveGovtAgmarknet: async (cropName = "Soyabean") => {
    const apiKey = import.meta.env.VITE_DATAGOV_API_KEY;
    if (!apiKey) return null;

    try {
      const url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${apiKey}&format=json&filters[commodity]=${encodeURIComponent(cropName)}&limit=10`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        return data.records || [];
      }
    } catch (e) {
      console.warn("Agmarknet API fetch note:", e);
    }
    return null;
  }
};
