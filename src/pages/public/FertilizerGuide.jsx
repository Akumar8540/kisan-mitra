import React, { useState } from "react";
import { agronomicNutrientGuidelines, referenceProductCatalog } from "../../data/fertilizerData";
import { FlaskConical, ShieldAlert, Sparkles, Layers, Info, CheckCircle2 } from "lucide-react";

export const FertilizerGuide = () => {
  const [activeTab, setActiveTab] = useState("agronomic"); // 'agronomic' or 'products'

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <FlaskConical className="w-3.5 h-3.5 text-emerald-600" />
          Nutrient Management & Soil Health Advisory
        </div>
        <h1 className="text-3xl font-black text-stone-900 tracking-tight">
          Crop Nutrition & Fertilizer Reference System
        </h1>
        <p className="text-stone-600 text-sm max-w-2xl">
          Scientific nutrient recommendations (N-P-K) calibrated per acre, coupled with standard commercial input references.
        </p>
      </div>

      {/* Prominent Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-amber-900">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold">Agronomic Non-Endorsement Notice</p>
          <p className="leading-relaxed">
            All fertilizer products, manufacturers, and prices listed below are published solely for informational reference and do NOT constitute paid sponsorships or endorsements. Always perform periodic soil testing (Soil Health Card) and verify application dosage with your local Krishi Vigyan Kendra (KVK) or block agricultural extension officer before application.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-stone-200">
        <button
          onClick={() => setActiveTab("agronomic")}
          className={`pb-3 px-4 font-bold text-sm border-b-2 transition flex items-center gap-2 ${
            activeTab === "agronomic"
              ? "border-emerald-700 text-emerald-800"
              : "border-transparent text-stone-500 hover:text-stone-800"
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Agronomic Nutrient Guidance</span>
        </button>
        <button
          onClick={() => setActiveTab("products")}
          className={`pb-3 px-4 font-bold text-sm border-b-2 transition flex items-center gap-2 ${
            activeTab === "products"
              ? "border-emerald-700 text-emerald-800"
              : "border-transparent text-stone-500 hover:text-stone-800"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Reference Input Products</span>
        </button>
      </div>

      {/* Tab 1: Agronomic Guidance */}
      {activeTab === "agronomic" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agronomicNutrientGuidelines.map((guideline) => (
              <div
                key={guideline.cropId}
                className="bg-white rounded-3xl border border-stone-200 p-6 space-y-4 shadow-sm"
              >
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <h3 className="text-xl font-black text-stone-900">{guideline.cropName}</h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800">
                    Recommended / Acre
                  </span>
                </div>

                {/* NPK Pills */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <p className="text-xl font-black text-emerald-800">{guideline.recommendedN} kg</p>
                    <p className="text-[11px] font-bold text-stone-500">Nitrogen (N)</p>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <p className="text-xl font-black text-emerald-800">{guideline.recommendedP} kg</p>
                    <p className="text-[11px] font-bold text-stone-500">Phosphorus (P)</p>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <p className="text-xl font-black text-emerald-800">{guideline.recommendedK} kg</p>
                    <p className="text-[11px] font-bold text-stone-500">Potassium (K)</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-stone-600 leading-relaxed">
                  <p>
                    <strong className="text-stone-800">Application Timing:</strong> {guideline.stageGuidance}
                  </p>
                  <p>
                    <strong className="text-stone-800">Organic Alternatives:</strong> {guideline.organicAlternatives}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Commercial Products Catalog */}
      {activeTab === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {referenceProductCatalog.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-stone-200 p-6 flex flex-col justify-between shadow-sm space-y-4"
            >
              <div className="space-y-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-stone-100 text-stone-700">
                  {product.category}
                </span>
                <h3 className="text-base font-bold text-stone-900 leading-tight">
                  {product.productName}
                </h3>
                <p className="text-xs text-stone-500">
                  Manufacturer / Co-op: <span className="text-stone-700 font-semibold">{product.manufacturer}</span>
                </p>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 space-y-1 text-xs text-stone-600">
                  <p><strong>Composition:</strong> {product.nutrientComposition}</p>
                  <p><strong>Standard Packaging:</strong> {product.packaging}</p>
                  <p className="text-emerald-700 font-semibold">
                    {product.subsidizedMaturity}
                  </p>
                </div>

                <p className="text-xs text-stone-500 leading-relaxed">
                  <strong className="text-amber-800">Usage Caution:</strong> {product.usageCaution}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-400 flex items-center justify-between">
                <span>{product.source}</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Approved Standard
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
