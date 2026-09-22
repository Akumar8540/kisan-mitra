import React from "react";
import { Link } from "react-router-dom";
import { Clock, Droplets, ArrowRight, Sprout, Tag, IndianRupee, TrendingUp } from "lucide-react";

export const CropCard = ({ crop, onAskAI }) => {
  // Category badge color mapping
  const getCategoryColor = (cat = "") => {
    switch (cat) {
      case "Vegetables":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Fruits & Orchards":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "Cereals & Millets":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "Pulses & Legumes":
        return "bg-orange-50 text-orange-800 border-orange-200";
      case "Oilseeds":
        return "bg-yellow-50 text-yellow-800 border-yellow-200";
      case "Spices & Cash Crops":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Root & Leafy":
        return "bg-teal-50 text-teal-700 border-teal-200";
      default:
        return "bg-stone-50 text-stone-700 border-stone-200";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group">
      <div className="p-5">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getCategoryColor(
              crop.category
            )}`}
          >
            {crop.category || "Crop"}
          </span>

          <span
            className={`px-2 py-0.5 rounded text-[11px] font-bold ${
              crop.riskLevel === "Low"
                ? "bg-teal-50 text-teal-700 border border-teal-200"
                : crop.riskLevel === "Medium"
                ? "bg-amber-50 text-amber-700 border border-amber-200"
                : "bg-rose-50 text-rose-700 border border-rose-200"
            }`}
          >
            {crop.riskLevel} Risk
          </span>
        </div>

        {/* Title & Scientific Name */}
        <div className="mb-2.5">
          <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition">
            {crop.name}{" "}
            {crop.hindiName && (
              <span className="text-sm font-medium text-emerald-800 font-sans">
                ({crop.hindiName})
              </span>
            )}
          </h3>
          <p className="text-xs italic text-stone-400">{crop.scientificName}</p>
        </div>

        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
          {crop.cultivationSummary}
        </p>

        {/* Agronomic Snapshot Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 bg-stone-50/80 p-3 rounded-xl border border-stone-100">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">{crop.durationDays}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Droplets className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>{crop.waterRequirement} Water</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span className="truncate">{crop.expectedYieldQuintalPerAcre}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <IndianRupee className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="font-semibold text-stone-800">
              ₹{crop.referenceMspPrice?.toLocaleString()}/Qtl
            </span>
          </div>
        </div>
      </div>

      {/* Footer Link & Action */}
      <div className="px-5 py-3 bg-stone-50/70 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
        <span className="text-stone-600 font-normal">
          Seed: <strong className="text-stone-800 font-semibold">{crop.seedRate} {crop.seedRateUnit}</strong>
        </span>
        <div className="flex items-center gap-3">
          <Link
            to={`/crops/${crop.id}`}
            className="inline-flex items-center gap-1 hover:text-emerald-900 transition"
          >
            <span>Full ICAR Guide</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
          </Link>
        </div>
      </div>
    </div>
  );
};
