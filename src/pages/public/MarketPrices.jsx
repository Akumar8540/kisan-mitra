import React, { useState } from "react";
import { Link } from "react-router-dom";
import { marketService } from "../../services/marketService";
import { PriceTrendChart } from "../../components/charts/PriceTrendChart";
import { MandiComparisonChart } from "../../components/charts/MandiComparisonChart";
import {
  TrendingUp,
  Database,
  Calendar,
  MapPin,
  Search,
  CheckCircle2,
  Globe,
  ArrowRight,
  ShieldCheck,
  Building2
} from "lucide-react";

export const MarketPrices = () => {
  const allStates = ["All States", ...marketService.getStates()];

  const [selectedState, setSelectedState] = useState("All States");
  const [selectedCrop, setSelectedCrop] = useState("Red Onion");
  const [timeWindow, setTimeWindow] = useState("30d");

  const currentPrices = marketService.getMarketPrices({
    state: selectedState === "All States" ? "" : selectedState,
    crop: selectedCrop
  });

  const priceHistory = marketService.getPriceHistory(selectedCrop, timeWindow);
  const mandiComparison = marketService.getMandiComparison(selectedCrop);

  const availableCrops = [
    "Red Onion",
    "Soybean",
    "Wheat",
    "Dry Red Chilli",
    "Cumin Seeds",
    "Garlic",
    "Tomato",
    "Turmeric",
    "Paddy / Rice",
    "Cotton",
    "Mustard",
    "Chickpea / Gram",
    "Maize / Corn",
    "Apple"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Agmarknet & e-NAM Daily Wholesale Terminal Feed (Govt. of India)</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Mandi Market Price Intelligence
            </h1>
            <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
              Track authentic daily minimum, maximum, and modal wholesale auction prices across major Indian APMC trading yards (Lasalgaon, Unjha, Guntur, Azadpur, Indore, Pimpalgaon, Khanna).
            </p>
          </div>

          <Link
            to="/international-demand"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-800 hover:bg-sky-900 text-white font-bold rounded-2xl text-xs transition shadow-sm shrink-0"
          >
            <Globe className="w-4 h-4 text-sky-300" />
            <span>View Global Export Demands</span>
          </Link>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* State */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
              Select State / Territory
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm bg-stone-50/50 font-semibold text-stone-800 focus:ring-2 focus:ring-emerald-600"
            >
              {allStates.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Commodity Crop */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
              Select Commodity / Crop
            </label>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm bg-stone-50/50 font-semibold text-stone-800 focus:ring-2 focus:ring-emerald-600"
            >
              {availableCrops.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Price History Line Chart */}
        <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-stone-900">
                {selectedCrop} Price Trajectory (₹/Quintal)
              </h3>
              <p className="text-xs text-stone-500">Min, Modal, and Max APMC wholesale prices</p>
            </div>
            {/* Time window selector */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setTimeWindow("7d")}
                className={`px-2.5 py-1 rounded-lg transition ${
                  timeWindow === "7d"
                    ? "bg-white text-emerald-800 shadow-xs font-bold"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                7 Days
              </button>
              <button
                onClick={() => setTimeWindow("30d")}
                className={`px-2.5 py-1 rounded-lg transition ${
                  timeWindow === "30d"
                    ? "bg-white text-emerald-800 shadow-xs font-bold"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                30 Days
              </button>
              <button
                onClick={() => setTimeWindow("6m")}
                className={`px-2.5 py-1 rounded-lg transition ${
                  timeWindow === "6m"
                    ? "bg-white text-emerald-800 shadow-xs font-bold"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                6 Months
              </button>
            </div>
          </div>
          <PriceTrendChart data={priceHistory} cropName={selectedCrop} />
        </div>

        {/* Mandi Comparison Bar Chart */}
        <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4">
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Cross-Mandi Wholesale Price Arbitrage
            </h3>
            <p className="text-xs text-stone-500">
              Compare modal prices across benchmark APMC hubs to select optimal sales channels
            </p>
          </div>
          <MandiComparisonChart data={mandiComparison} cropName={selectedCrop} />
        </div>
      </div>

      {/* Live Prices Table */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden space-y-4 p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
          <div>
            <h2 className="text-lg font-bold text-stone-900">
              Live Mandi Price Records ({currentPrices.length} Active Feeds)
            </h2>
            <p className="text-xs text-stone-500">
              Synchronized from State APMC Auction Yards • Date: 20 September 2026
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
            Modal Price Benchmark
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-stone-50 text-stone-500 uppercase tracking-wider text-[11px] font-bold border-b border-stone-200">
              <tr>
                <th className="px-6 py-3.5">Mandi Yard</th>
                <th className="px-6 py-3.5">District / State</th>
                <th className="px-6 py-3.5">Min Price</th>
                <th className="px-6 py-3.5 text-emerald-700">Modal Price</th>
                <th className="px-6 py-3.5">Max Price</th>
                <th className="px-6 py-3.5">Arrival Volume</th>
                <th className="px-6 py-3.5">Trade Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-medium text-stone-800">
              {currentPrices.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-stone-500 text-xs">
                    No active mandi auctions matching the selected filter. Try selecting "All States" to view major national hubs.
                  </td>
                </tr>
              ) : (
                currentPrices.map((record) => (
                  <tr key={record.id} className="hover:bg-stone-50/70 transition">
                    <td className="px-6 py-4 font-bold text-stone-900 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{record.mandi}</span>
                    </td>
                    <td className="px-6 py-4 text-stone-600">
                      {record.district}, {record.state}
                    </td>
                    <td className="px-6 py-4 text-sky-700 font-semibold">
                      ₹{record.minPrice?.toLocaleString("en-IN")}
                    </td>
                    <td className="px-6 py-4 font-extrabold text-emerald-700 text-base">
                      ₹{record.modalPrice?.toLocaleString("en-IN")}
                    </td>
                    <td className="px-6 py-4 text-amber-700 font-semibold">
                      ₹{record.maxPrice?.toLocaleString("en-IN")}
                    </td>
                    <td className="px-6 py-4 text-stone-700 font-medium">
                      {record.arrivalQuantity}
                    </td>
                    <td className="px-6 py-4 text-stone-500 font-mono text-xs">
                      {record.date}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Official Government Mandi Attribution */}
      <div className="bg-gradient-to-r from-stone-900 via-slate-900 to-stone-900 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
              Directorate of Marketing & Inspection (DMI)
            </span>
            <span className="text-stone-400 text-xs hidden sm:inline">• Ministry of Agriculture & Farmers Welfare</span>
          </div>
          <p className="text-xs text-stone-300 max-w-2xl leading-relaxed">
            Market rates and arrival statistics are synchronized with official APMC electronic auction records, e-NAM National Agriculture Market terminals, and Agmarknet daily trade registries.
          </p>
        </div>
        <Link
          to="/international-demand"
          className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-bold shrink-0 transition shadow-xs flex items-center gap-1.5"
        >
          <span>Explore Global Export Demands</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
