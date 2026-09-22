import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { cropCatalogData } from "../../data/cropCatalogData";
import {
  Clock,
  Droplets,
  Layers,
  Sprout,
  AlertTriangle,
  Calculator,
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
  Bookmark
} from "lucide-react";

export const CropDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const crop = cropCatalogData.find((c) => c.id.toLowerCase() === id?.toLowerCase());

  if (!crop) {
    return (
      <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-stone-900">Crop Not Found</h2>
        <p className="text-sm text-stone-600">The crop you requested is not currently in our database catalog.</p>
        <Link
          to="/crops"
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 text-white rounded-xl text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Crop Guide</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-stone-900 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      {/* Main Header Card */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            {crop.seasons.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200"
              >
                {s} Season
              </span>
            ))}
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-800">
              {crop.waterRequirement} Water Need
            </span>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              crop.riskLevel === "Low"
                ? "bg-teal-50 text-teal-800 border border-teal-200"
                : crop.riskLevel === "Medium"
                ? "bg-amber-50 text-amber-800 border border-amber-200"
                : "bg-rose-50 text-rose-800 border border-rose-200"
            }`}
          >
            {crop.riskLevel} Agronomic Risk
          </span>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            {crop.name}{" "}
            {crop.hindiName && (
              <span className="text-2xl font-normal text-stone-500">({crop.hindiName})</span>
            )}
          </h1>
          <p className="text-sm italic text-stone-500 mt-1">
            Botanical name: {crop.scientificName}
          </p>
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed pt-2">
          {crop.cultivationSummary}
        </p>

        {/* Quick Action Button */}
        <div className="pt-4 flex flex-wrap gap-3">
          <Link
            to={`/farmer/input-calculator?crop=${crop.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition"
          >
            <Calculator className="w-4 h-4" />
            <span>Calculate Seed & Fertilizer for My Farm</span>
          </Link>
          <Link
            to={`/market-prices/${crop.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition"
          >
            <TrendingUp className="w-4 h-4" />
            <span>View Mandi Price Trends</span>
          </Link>
        </div>
      </div>

      {/* Grid: Agronomic Parameters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>Typical Duration</span>
          </div>
          <p className="text-lg font-bold text-stone-900">{crop.durationDays}</p>
          <p className="text-xs text-stone-500">Sowing to physiological maturity</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-4 h-4" />
            <span>Verified Seed Rate</span>
          </div>
          <p className="text-lg font-bold text-stone-900">
            {crop.seedRate} {crop.seedRateUnit}
          </p>
          <p className="text-xs text-stone-500">Benchmark ~ ₹{crop.seedCostPerKg} / kg</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>Expected Yield</span>
          </div>
          <p className="text-lg font-bold text-stone-900">{crop.expectedYieldQuintalPerAcre}</p>
          <p className="text-xs text-stone-500">MSP Ref: ₹{crop.referenceMspPrice?.toLocaleString('en-IN')} / Qtl</p>
        </div>
      </div>

      {/* Soil & Water Compatibility */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 space-y-4 shadow-sm">
        <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
          <Droplets className="w-5 h-5 text-sky-600" />
          <span>Soil & Water Requirements</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
          <div className="p-4 bg-stone-50 rounded-xl space-y-1">
            <p className="font-bold text-stone-900">Compatible Soils:</p>
            <p>{crop.soilTypes.join(", ")}</p>
          </div>
          <div className="p-4 bg-stone-50 rounded-xl space-y-1">
            <p className="font-bold text-stone-900">Irrigation Regimes:</p>
            <p>{crop.irrigationNeeded.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* Nutrient / NPK Management */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 space-y-4 shadow-sm">
        <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-600" />
          <span>Agronomic Nutrient Guidance (Per Acre)</span>
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <p className="text-2xl font-black text-emerald-800">{crop.nutrientGuidance?.n} kg</p>
            <p className="text-xs font-bold text-emerald-950 uppercase mt-1">Nitrogen (N)</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <p className="text-2xl font-black text-emerald-800">{crop.nutrientGuidance?.p} kg</p>
            <p className="text-xs font-bold text-emerald-950 uppercase mt-1">Phosphorus (P)</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <p className="text-2xl font-black text-emerald-800">{crop.nutrientGuidance?.k} kg</p>
            <p className="text-xs font-bold text-emerald-950 uppercase mt-1">Potassium (K)</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-stone-600 bg-stone-50 p-4 rounded-xl leading-relaxed">
          <strong>Application Protocol:</strong> {crop.nutrientGuidance?.applicationStage}
        </p>
      </div>

      {/* Common Warnings / Watch Out */}
      <div className="bg-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200 space-y-3">
        <h3 className="text-lg font-bold text-amber-950 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-700" />
          <span>Cultivation Considerations & Disease Alerts</span>
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-amber-900">
          {crop.commonWarnings.map((warn, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-amber-700 font-bold">•</span>
              <span>{warn}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Source Citation */}
      <div className="text-xs text-stone-400 text-center space-y-1">
        <p>Source Attribution: {crop.source}</p>
        <p>Last Package of Practices Revision: {crop.lastUpdated}</p>
      </div>
    </div>
  );
};
