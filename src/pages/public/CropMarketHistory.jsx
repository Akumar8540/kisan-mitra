import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { marketService } from "../../services/marketService";
import { PriceTrendChart } from "../../components/charts/PriceTrendChart";
import { MandiComparisonChart } from "../../components/charts/MandiComparisonChart";
import { ArrowLeft, TrendingUp, ShieldCheck } from "lucide-react";

export const CropMarketHistory = () => {
  const { crop } = useParams();
  const cropName = crop ? crop.charAt(0).toUpperCase() + crop.slice(1) : "Soybean";
  const [timeWindow, setTimeWindow] = useState("30d");

  const priceHistory = marketService.getPriceHistory(cropName, timeWindow);
  const mandiComparison = marketService.getMandiComparison(cropName);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Link
        to="/market-prices"
        className="inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-stone-900 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Market Prices</span>
      </Link>

      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-stone-900 tracking-tight">
              {cropName} Historical Market Performance
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              APMC Mandi Wholesale Arrival Trends and Multi-Market Comparison
            </p>
          </div>

          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setTimeWindow("7d")}
              className={`px-3 py-1.5 rounded-lg transition ${
                timeWindow === "7d" ? "bg-white text-emerald-800 shadow-sm" : "text-stone-600"
              }`}
            >
              7 Days
            </button>
            <button
              onClick={() => setTimeWindow("30d")}
              className={`px-3 py-1.5 rounded-lg transition ${
                timeWindow === "30d" ? "bg-white text-emerald-800 shadow-sm" : "text-stone-600"
              }`}
            >
              30 Days
            </button>
            <button
              onClick={() => setTimeWindow("6m")}
              className={`px-3 py-1.5 rounded-lg transition ${
                timeWindow === "6m" ? "bg-white text-emerald-800 shadow-sm" : "text-stone-600"
              }`}
            >
              6 Months
            </button>
          </div>
        </div>

        <div className="pt-2">
          <PriceTrendChart data={priceHistory} cropName={cropName} />
        </div>
      </div>

      {/* Cross-Mandi Comparison */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-4 shadow-sm">
        <h3 className="text-lg font-bold text-stone-900">
          Regional APMC Comparison for {cropName}
        </h3>
        <p className="text-xs text-stone-500">
          Analyze price differentials between local mandis to calculate transport feasibility.
        </p>
        <MandiComparisonChart data={mandiComparison} cropName={cropName} />
      </div>
    </div>
  );
};
