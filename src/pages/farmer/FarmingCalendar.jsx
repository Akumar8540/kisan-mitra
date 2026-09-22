import React, { useState } from "react";
import { cropCatalogData } from "../../data/cropCatalogData";
import {
  Calendar as CalendarIcon,
  Sprout,
  Clock,
  CheckCircle2,
  Droplets,
  Layers,
  ShieldAlert,
  Store
} from "lucide-react";

export const FarmingCalendar = () => {
  const [selectedSeason, setSelectedSeason] = useState("Kharif");
  const [selectedCropId, setSelectedCropId] = useState("soybean");

  const seasonCrops = cropCatalogData.filter((c) =>
    c.seasons.includes(selectedSeason)
  );

  const selectedCrop =
    cropCatalogData.find((c) => c.id === selectedCropId) ||
    seasonCrops[0] ||
    cropCatalogData[0];

  const milestones = [
    {
      stage: "1. Land Preparation & Pre-Monsoon Tilth",
      timeline: "May 25 – June 10",
      icon: Layers,
      color: "stone",
      tasks: [
        "Deep summer ploughing (25 cm) to expose soil-borne insect pupae and weed rhizomes.",
        "Incorporate 2 to 3 tonnes/acre well-decomposed FYM or compost.",
        "Form broad bed and furrows (BBF) or drainage channels in heavy black soils."
      ]
    },
    {
      stage: "2. Seed Treatment & Sowing",
      timeline: "June 15 – June 30 (After 75–100 mm rainfall)",
      icon: Sprout,
      color: "emerald",
      tasks: [
        `Inoculate ${selectedCrop.name} seed with Rhizobium and Trichoderma viride culture.`,
        `Maintain line sowing with ${selectedCrop.seedRate} ${selectedCrop.seedRateUnit} seed rate.`,
        "Calibrate seed-drill depth to 3–4 cm to ensure uniform germination."
      ]
    },
    {
      stage: "3. Weed Control & Vegetative Stage",
      timeline: "Days 15 – 25 After Sowing",
      icon: CheckCircle2,
      color: "sky",
      tasks: [
        "First hand weeding or inter-cultivation with wheel hoe.",
        "Ensure field is completely free of waterlogging during early seedling emergence.",
        "Thinning to ensure ideal plant-to-plant distance."
      ]
    },
    {
      stage: "4. Flowering & Nutrient Top-Dressing",
      timeline: "Days 35 – 50 After Sowing",
      icon: Droplets,
      color: "amber",
      tasks: [
        "Top-dress scheduled nitrogen dose as per crop nutrient plan.",
        "Foliar spray of 19:19:19 or micronutrient mix during flower initiation.",
        "Provide critical supplementary irrigation if rain break exceeds 12 days."
      ]
    },
    {
      stage: "5. Pod / Grain Formation & Pest Monitoring",
      timeline: "Days 60 – 80 After Sowing",
      icon: ShieldAlert,
      color: "rose",
      tasks: [
        "Install pheromone traps (4-5 per acre) to monitor pod borer flight activity.",
        "Spray recommended neem oil (1500 ppm) at early instar larval detection.",
        "Inspect leaf undersides for aphid or whitefly vector buildup."
      ]
    },
    {
      stage: "6. Harvesting, Sun-Drying & Market Dispatch",
      timeline: "Days 95 – 115 After Sowing",
      icon: Store,
      color: "emerald",
      tasks: [
        "Harvest when 85% leaves shed and pods turn golden-brown / straw yellow.",
        "Thresh at lower cylinder speed (350-400 RPM) to prevent seed coat splitting.",
        "Sun-dry produce on tarpaulin sheet until grain moisture drops below 10-11%.",
        "Publish produce on Kisan Mitra Marketplace to connect with direct buyers."
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 mb-1">
          <CalendarIcon className="w-3.5 h-3.5 text-emerald-600" />
          Agronomic Milestone Roadmap
        </div>
        <h1 className="text-3xl font-black text-stone-900 tracking-tight">
          Seasonal Farming Calendar
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          Plan cultivation operations month-by-month to avoid pest outbreaks and distress selling.
        </p>
      </div>

      {/* Season & Crop Selector Toolbar */}
      <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4">
        {/* Season Tabs */}
        <div className="grid grid-cols-3 gap-2">
          {["Kharif", "Rabi", "Zaid"].map((s) => (
            <button
              key={s}
              onClick={() => {
                setSelectedSeason(s);
                const crops = cropCatalogData.filter((c) => c.seasons.includes(s));
                if (crops.length > 0) setSelectedCropId(crops[0].id);
              }}
              className={`py-2.5 px-3 rounded-2xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-1.5 ${
                selectedSeason === s
                  ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                  : "bg-stone-50 text-stone-700 border border-stone-200 hover:bg-stone-100"
              }`}
            >
              <CalendarIcon className="w-4 h-4" />
              <span>{s} Season</span>
            </button>
          ))}
        </div>

        {/* Crop Selector */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <span className="font-bold text-stone-700 uppercase tracking-wider">
            Select Active Crop:
          </span>
          <select
            value={selectedCropId}
            onChange={(e) => setSelectedCropId(e.target.value)}
            className="w-full sm:w-64 px-3.5 py-2 rounded-xl border border-stone-200 bg-white font-bold text-emerald-800 focus:ring-2 focus:ring-emerald-600"
          >
            {seasonCrops.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.durationDays})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Crop Overview Banner */}
      <div className="p-5 bg-gradient-to-r from-emerald-800 to-green-900 text-white rounded-3xl flex items-center justify-between shadow-sm">
        <div>
          <h2 className="text-xl font-bold">{selectedCrop.name} Cultivation Timeline</h2>
          <p className="text-xs text-emerald-200 mt-0.5">
            Season: {selectedSeason} • Estimated Duration: {selectedCrop.durationDays}
          </p>
        </div>
        <span className="px-3 py-1 rounded-xl bg-white/20 text-white text-xs font-bold backdrop-blur-sm">
          {selectedCrop.riskLevel} Risk Profile
        </span>
      </div>

      {/* Chronological Milestones */}
      <div className="space-y-4 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-stone-200 before:hidden sm:before:block">
        {milestones.map((ms, index) => {
          const Icon = ms.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-7 space-y-3 shadow-sm relative sm:ml-12"
            >
              {/* Timeline marker icon */}
              <div className="hidden sm:flex absolute -left-12 top-6 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 border-2 border-white items-center justify-center font-bold text-xs shadow-sm">
                {index + 1}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 border-b border-stone-100 pb-2">
                <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                  <Icon className="w-4 h-4 text-emerald-700" />
                  <span>{ms.stage}</span>
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-stone-100 text-stone-700">
                  {ms.timeline}
                </span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                {ms.tasks.map((task, tIndex) => (
                  <li key={tIndex} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
