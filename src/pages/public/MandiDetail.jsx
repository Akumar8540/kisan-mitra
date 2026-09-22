import React from "react";
import { useParams, Link } from "react-router-dom";
import { mandisList, currentMarketPrices } from "../../data/marketData";
import { ArrowLeft, MapPin, Building2, TrendingUp } from "lucide-react";

export const MandiDetail = () => {
  const { id } = useParams();
  const mandi = mandisList.find((m) => m.id === id) || mandisList[0];
  const mandiPrices = currentMarketPrices.filter((p) => p.mandiId === mandi.id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Link
        to="/market-prices"
        className="inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-stone-900 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Market Prices</span>
      </Link>

      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-stone-900">{mandi.name}</h1>
            <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{mandi.district}, {mandi.state}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden p-6 space-y-4">
        <h3 className="text-base font-bold text-stone-900">Current Commodities Traded</h3>
        {mandiPrices.length === 0 ? (
          <p className="text-xs text-stone-500">No active trades recorded today for this mandi.</p>
        ) : (
          <div className="divide-y divide-stone-100">
            {mandiPrices.map((p) => (
              <div key={p.id} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <p className="font-bold text-stone-900">{p.crop}</p>
                  <p className="text-xs text-stone-500">Arrivals: {p.arrivalQuantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-extrabold text-emerald-700 text-base">₹{p.modalPrice} / Qtl</p>
                  <p className="text-[11px] text-stone-400">Range: ₹{p.minPrice} - ₹{p.maxPrice}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
