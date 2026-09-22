import React from "react";
import { Link } from "react-router-dom";
import { Clock, Droplets, ArrowRight, ShieldCheck, Sprout } from "lucide-react";

export const CropCard = ({ crop }) => {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group">
      <div className="p-5">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            {crop.seasons.map((s) => (
              <span
                key={s}
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"
              >
                {s}
              </span>
            ))}
          </div>
          <span
            className={`px-2 py-0.5 rounded text-[11px] font-bold ${
              crop.riskLevel === "Low"
                ? "bg-teal-50 text-teal-700"
                : crop.riskLevel === "Medium"
                ? "bg-amber-50 text-amber-700"
                : "bg-rose-50 text-rose-700"
            }`}
          >
            {crop.riskLevel} Risk
          </span>
        </div>

        {/* Title & Scientific Name */}
        <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition">
          {crop.name}{" "}
          {crop.hindiName && (
            <span className="text-sm font-normal text-stone-500">({crop.hindiName})</span>
          )}
        </h3>
        <p className="text-xs italic text-stone-400 mb-3">{crop.scientificName}</p>

        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
          {crop.cultivationSummary}
        </p>

        {/* Agronomic Snapshot Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-100">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{crop.durationDays}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Droplets className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>{crop.waterRequirement} Water</span>
          </div>
          <div className="col-span-2 flex items-center gap-1.5">
            <Sprout className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="truncate">Soils: {crop.soilTypes.slice(0, 2).join(", ")}...</span>
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="px-5 py-3 bg-stone-50/70 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
        <span>Seed Rate: {crop.seedRate} {crop.seedRateUnit}</span>
        <Link
          to={`/crops/${crop.id}`}
          className="inline-flex items-center gap-1 hover:text-emerald-900 transition"
        >
          <span>Full Guide</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
        </Link>
      </div>
    </div>
  );
};
