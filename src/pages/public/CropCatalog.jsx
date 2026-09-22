import React, { useState } from "react";
import { cropCatalogData } from "../../data/cropCatalogData";
import { CropCard } from "../../components/cards/CropCard";
import { Search, Filter, Sprout, Droplets, Compass } from "lucide-react";

export const CropCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("all");
  const [selectedSoil, setSelectedSoil] = useState("all");
  const [selectedWater, setSelectedWater] = useState("all");

  const filteredCrops = cropCatalogData.filter((crop) => {
    const matchesSearch =
      crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (crop.hindiName && crop.hindiName.includes(searchQuery)) ||
      crop.scientificName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSeason =
      selectedSeason === "all" || crop.seasons.includes(selectedSeason);

    const matchesSoil =
      selectedSoil === "all" ||
      crop.soilTypes.some((s) => s.toLowerCase().includes(selectedSoil.toLowerCase()));

    const matchesWater =
      selectedWater === "all" ||
      crop.waterRequirement.toLowerCase() === selectedWater.toLowerCase();

    return matchesSearch && matchesSeason && matchesSoil && matchesWater;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black text-stone-900 tracking-tight">
          Indian Crop Agronomic Guide & Catalog
        </h1>
        <p className="text-stone-600 text-sm">
          Detailed cultivation requirements, duration, seed rates, and nutrient management for major field crops.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search crop (e.g. Wheat, धान)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-200 text-sm focus:ring-2 focus:ring-emerald-600 bg-stone-50/50"
            />
          </div>

          {/* Season Filter */}
          <select
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            className="px-3 py-2 rounded-xl border border-stone-200 text-sm bg-white text-stone-700 focus:ring-2 focus:ring-emerald-600"
          >
            <option value="all">All Cropping Seasons</option>
            <option value="Kharif">Kharif (Monsoon)</option>
            <option value="Rabi">Rabi (Winter)</option>
            <option value="Zaid">Zaid (Summer)</option>
          </select>

          {/* Soil Filter */}
          <select
            value={selectedSoil}
            onChange={(e) => setSelectedSoil(e.target.value)}
            className="px-3 py-2 rounded-xl border border-stone-200 text-sm bg-white text-stone-700 focus:ring-2 focus:ring-emerald-600"
          >
            <option value="all">All Soil Types</option>
            <option value="Black">Black Cotton Soil</option>
            <option value="Loamy">Loamy Soil</option>
            <option value="Alluvial">Alluvial Soil</option>
            <option value="Clay">Clay Soil</option>
            <option value="Sandy loam">Sandy Loam</option>
            <option value="Red">Red Soil</option>
          </select>

          {/* Water Demand */}
          <select
            value={selectedWater}
            onChange={(e) => setSelectedWater(e.target.value)}
            className="px-3 py-2 rounded-xl border border-stone-200 text-sm bg-white text-stone-700 focus:ring-2 focus:ring-emerald-600"
          >
            <option value="all">All Water Levels</option>
            <option value="low">Low Water Need</option>
            <option value="medium">Medium Water Need</option>
            <option value="high">High Water Need</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {filteredCrops.length === 0 ? (
        <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center space-y-3">
          <p className="text-base font-bold text-stone-800">No crops match your filter criteria.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedSeason("all");
              setSelectedSoil("all");
              setSelectedWater("all");
            }}
            className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCrops.map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      )}
    </div>
  );
};
