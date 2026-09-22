import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { cropCatalogData } from "../../data/cropCatalogData";
import { inputCalculatorService } from "../../services/inputCalculatorService";
import { reportService } from "../../services/reportService";
import { useAuth } from "../../context/AuthContext";
import { useNotification } from "../../context/NotificationContext";
import {
  Calculator,
  Download,
  Sprout,
  Layers,
  FlaskConical,
  ShieldAlert,
  Calendar,
  ArrowRight
} from "lucide-react";

export const InputCalculator = () => {
  const [searchParams] = useSearchParams();
  const { currentUser } = useAuth();
  const { addToast } = useNotification();

  const [selectedCropId, setSelectedCropId] = useState(
    searchParams.get("crop") || "soybean"
  );
  const [landArea, setLandArea] = useState(
    Number(searchParams.get("area")) || 3
  );
  const [unit, setUnit] = useState("Acre");

  const selectedCrop =
    cropCatalogData.find((c) => c.id === selectedCropId) || cropCatalogData[0];

  const calculation = inputCalculatorService.calculateInputs({
    crop: selectedCrop,
    landArea,
    unit
  });

  const handleDownloadCsv = () => {
    if (calculation) {
      reportService.exportInputRequirementCsv(calculation, currentUser?.name || "Farmer");
      addToast("Input requirement plan downloaded as CSV!", "success");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-200 mb-1">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            Agronomic Formulation Engine
          </div>
          <h1 className="text-3xl font-black text-stone-900 tracking-tight">
            Seed & Fertilizer Input Calculator
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Calculate precise seed rates and commercial fertilizer bags tailored to your exact acreage.
          </p>
        </div>

        <button
          onClick={handleDownloadCsv}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-sm transition shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Export Plan CSV</span>
        </button>
      </div>

      {/* Calculator Inputs Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
          Select Crop & Land Size
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* Crop Selector */}
          <div>
            <label className="block font-bold text-stone-700 mb-1.5">Crop to Cultivate</label>
            <select
              value={selectedCropId}
              onChange={(e) => setSelectedCropId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 font-bold text-emerald-800 focus:ring-2 focus:ring-emerald-600"
            >
              {cropCatalogData.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.seasons.join("/")})
                </option>
              ))}
            </select>
          </div>

          {/* Land Area */}
          <div>
            <label className="block font-bold text-stone-700 mb-1.5">Land Area</label>
            <input
              type="number"
              step="0.1"
              min="0.1"
              value={landArea}
              onChange={(e) => setLandArea(Number(e.target.value))}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 font-bold text-stone-900 focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          {/* Unit */}
          <div>
            <label className="block font-bold text-stone-700 mb-1.5">Measurement Unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 font-bold text-stone-700 focus:ring-2 focus:ring-emerald-600"
            >
              <option value="Acre">Acre</option>
              <option value="Hectare">Hectare (1 Ha = 2.47 Acres)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Prominent Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Mandatory Notice:</strong> {calculation.disclaimer}
        </p>
      </div>

      {/* Results: Seed Requirements */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center gap-2">
            <Sprout className="w-5 h-5 text-emerald-700" />
            <h3 className="text-base font-bold text-stone-900">
              1. Estimated Seed Requirements ({selectedCrop.name})
            </h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800">
            Certified Seed Standards
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 space-y-1">
            <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider block">
              Total Seed Needed
            </span>
            <p className="text-3xl font-black text-emerald-900">
              {calculation.seed.totalSeedKg} <span className="text-sm font-semibold">kg</span>
            </p>
            <p className="text-xs text-emerald-700">For {landArea} {unit}</p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-1">
            <span className="text-xs text-stone-500 font-bold uppercase tracking-wider block">
              Verified Seed Rate
            </span>
            <p className="text-xl font-extrabold text-stone-800">
              {calculation.seed.seedRatePerAcre} {calculation.seed.seedRateUnit}
            </p>
            <p className="text-xs text-stone-400">ICAR Package of Practices</p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 space-y-1">
            <span className="text-xs text-stone-500 font-bold uppercase tracking-wider block">
              Estimated Seed Cost
            </span>
            <p className="text-xl font-extrabold text-stone-800">
              {calculation.seed.estimatedCostRange}
            </p>
            <p className="text-xs text-stone-400">Certified market seed range</p>
          </div>
        </div>

        <p className="text-xs text-stone-500 bg-stone-50 p-3 rounded-xl">
          <strong>Spacing Guidance:</strong> {calculation.seed.spacingGuidance}
        </p>
      </div>

      {/* Results: Fertilizer & Commercial Bags */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-emerald-700" />
            <h3 className="text-base font-bold text-stone-900">
              2. Commercial Fertilizer Bag Conversion (Approximate)
            </h3>
          </div>
          <span className="text-xs text-stone-400">Basal & Top-Dressing Plan</span>
        </div>

        {/* Pure NPK Pills */}
        <div>
          <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
            Pure Elemental Nutrient Requirement for {landArea} {unit}:
          </p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
              <p className="text-2xl font-black text-stone-900">{calculation.nutrients.nitrogenKg} kg</p>
              <p className="text-[11px] font-bold text-emerald-700">Nitrogen (N)</p>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
              <p className="text-2xl font-black text-stone-900">{calculation.nutrients.phosphorusKg} kg</p>
              <p className="text-[11px] font-bold text-emerald-700">Phosphorus (P2O5)</p>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
              <p className="text-2xl font-black text-stone-900">{calculation.nutrients.potassiumKg} kg</p>
              <p className="text-[11px] font-bold text-emerald-700">Potassium (K2O)</p>
            </div>
          </div>
        </div>

        {/* Commercial Bags Calculation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
            <span className="text-xs font-bold text-stone-500 uppercase">Urea (46% N)</span>
            <p className="text-2xl font-black text-stone-900">
              {calculation.commercialFertilizerEquivalent.ureaBags} <span className="text-sm font-semibold">Bags</span>
            </p>
            <p className="text-xs text-stone-600">
              Total {calculation.commercialFertilizerEquivalent.ureaKg} kg (45 kg bags)
            </p>
            <p className="text-[11px] text-stone-400">Split into basal & CRI stages</p>
          </div>

          <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
            <span className="text-xs font-bold text-stone-500 uppercase">DAP (18-46-0)</span>
            <p className="text-2xl font-black text-stone-900">
              {calculation.commercialFertilizerEquivalent.dapBags} <span className="text-sm font-semibold">Bags</span>
            </p>
            <p className="text-xs text-stone-600">
              Total {calculation.commercialFertilizerEquivalent.dapKg} kg (50 kg bags)
            </p>
            <p className="text-[11px] text-stone-400">Basal placement with drill</p>
          </div>

          <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
            <span className="text-xs font-bold text-stone-500 uppercase">MOP Potash (60% K)</span>
            <p className="text-2xl font-black text-stone-900">
              {calculation.commercialFertilizerEquivalent.mopBags} <span className="text-sm font-semibold">Bags</span>
            </p>
            <p className="text-xs text-stone-600">
              Total {calculation.commercialFertilizerEquivalent.mopKg} kg (50 kg bags)
            </p>
            <p className="text-[11px] text-stone-400">Apply at sowing</p>
          </div>
        </div>

        <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-xs text-emerald-900 space-y-1">
          <p className="font-bold">Agronomic Application Schedule:</p>
          <p className="leading-relaxed">
            {calculation.commercialFertilizerEquivalent.applicationTiming}
          </p>
        </div>
      </div>

      {/* Bottom Shortcuts */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <Link
          to={`/crops/${selectedCrop.id}`}
          className="text-stone-600 hover:text-stone-900 font-bold flex items-center gap-1"
        >
          <span>View {selectedCrop.name} Cultivation Guide</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          to="/fertilizers"
          className="text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-1"
        >
          <span>Explore Fertilizer Product Specifications</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
