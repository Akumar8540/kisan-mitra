import React, { useState, useMemo } from "react";
import { cropCatalogData, cropCategories } from "../../data/cropCatalogData";
import { CropCard } from "../../components/cards/CropCard";
import {
  Search,
  Filter,
  Sprout,
  Droplets,
  Compass,
  ArrowUpDown,
  Layers,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  Calendar
} from "lucide-react";

export const CropCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSeason, setSelectedSeason] = useState("all");
  const [selectedSoil, setSelectedSoil] = useState("all");
  const [selectedWater, setSelectedWater] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  // Compute category counts for tab pills
  const categoryCounts = useMemo(() => {
    const counts = { All: cropCatalogData.length };
    cropCatalogData.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter crops
  const filteredCrops = useMemo(() => {
    return cropCatalogData
      .filter((crop) => {
        // Search
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          crop.name.toLowerCase().includes(q) ||
          (crop.hindiName && crop.hindiName.includes(q)) ||
          crop.scientificName.toLowerCase().includes(q) ||
          crop.category.toLowerCase().includes(q);

        // Category
        const matchesCategory =
          selectedCategory === "All" || crop.category === selectedCategory;

        // Season
        const matchesSeason =
          selectedSeason === "all" ||
          crop.seasons.some((s) => s.toLowerCase().includes(selectedSeason.toLowerCase()));

        // Soil
        const matchesSoil =
          selectedSoil === "all" ||
          crop.soilTypes.some((s) => s.toLowerCase().includes(selectedSoil.toLowerCase()));

        // Water
        const matchesWater =
          selectedWater === "all" ||
          crop.waterRequirement.toLowerCase().includes(selectedWater.toLowerCase());

        return matchesSearch && matchesCategory && matchesSeason && matchesSoil && matchesWater;
      })
      .sort((a, b) => {
        if (sortBy === "price_desc") {
          return (b.referenceMspPrice || 0) - (a.referenceMspPrice || 0);
        }
        if (sortBy === "duration_asc") {
          const durA = a.durationRange ? a.durationRange[0] : 100;
          const durB = b.durationRange ? b.durationRange[0] : 100;
          return durA - durB;
        }
        if (sortBy === "duration_desc") {
          const durA = a.durationRange ? a.durationRange[1] : 100;
          const durB = b.durationRange ? b.durationRange[1] : 100;
          return durB - durA;
        }
        if (sortBy === "name_asc") {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedSeason, selectedSoil, selectedWater, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedSeason("all");
    setSelectedSoil("all");
    setSelectedWater("all");
    setSortBy("default");
  };

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== "All" ||
    selectedSeason !== "all" ||
    selectedSoil !== "all" ||
    selectedWater !== "all" ||
    sortBy !== "default";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Hero Banner */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 -mt-10 -mr-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-800/80 text-emerald-200 border border-emerald-700/60 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>National Agricultural Knowledge Registry (ICAR & APEDA)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Comprehensive Indian Crop & Vegetable Catalog
            </h1>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              Curated database of 62+ field crops, commercial vegetables, fruits, pulses, and cash crops with ICAR NPK dosages, duration, seed rates, and reference mandi prices.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 text-center">
              <p className="text-2xl font-black text-emerald-300">{cropCatalogData.length}</p>
              <p className="text-[11px] text-emerald-200 font-medium">Verified Crops</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 text-center">
              <p className="text-2xl font-black text-amber-300">7</p>
              <p className="text-[11px] text-emerald-200 font-medium">Agro Sectors</p>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 text-center">
              <p className="text-2xl font-black text-sky-300">100%</p>
              <p className="text-[11px] text-emerald-200 font-medium">ICAR Aligned</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills Bar (Horizontally Scrollable) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>Select Agricultural Sector</span>
          </h2>
          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-stone-200">
          {cropCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                  isSelected
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-[1.02]"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50 hover:border-emerald-300"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                    isSelected
                      ? "bg-emerald-800 text-emerald-100"
                      : "bg-stone-100 text-stone-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Search */}
          <div className="relative lg:col-span-2">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by crop, vegetable, Hindi name, or scientific name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-200 text-sm focus:ring-2 focus:ring-emerald-600 bg-stone-50/50"
            />
          </div>

          {/* Season Filter */}
          <select
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-stone-200 text-sm bg-white text-stone-700 focus:ring-2 focus:ring-emerald-600"
          >
            <option value="all">All Cropping Seasons</option>
            <option value="kharif">Kharif (Monsoon)</option>
            <option value="rabi">Rabi (Winter)</option>
            <option value="zaid">Zaid (Summer)</option>
            <option value="all season">Perennial / All Season</option>
          </select>

          {/* Soil Filter */}
          <select
            value={selectedSoil}
            onChange={(e) => setSelectedSoil(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-stone-200 text-sm bg-white text-stone-700 focus:ring-2 focus:ring-emerald-600"
          >
            <option value="all">All Soil Types</option>
            <option value="black">Black Cotton Soil</option>
            <option value="loam">Loamy Soil</option>
            <option value="alluvial">Alluvial Soil</option>
            <option value="clay">Clay Soil</option>
            <option value="sandy">Sandy Loam</option>
            <option value="red">Red Soil</option>
          </select>

          {/* Sort Option */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-stone-200 text-sm bg-white text-stone-700 focus:ring-2 focus:ring-emerald-600"
          >
            <option value="default">Sort: Default (Recommended)</option>
            <option value="price_desc">Price / MSP: High to Low</option>
            <option value="duration_asc">Duration: Shortest First</option>
            <option value="duration_desc">Duration: Longest First</option>
            <option value="name_asc">Alphabetical (A to Z)</option>
          </select>
        </div>

        {/* Results Bar */}
        <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-100">
          <span>
            Showing <strong className="text-stone-900 font-bold">{filteredCrops.length}</strong> of{" "}
            <strong className="text-stone-900 font-bold">{cropCatalogData.length}</strong> registered crops
          </span>
          {hasActiveFilters && (
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Filters Applied</span>
            </span>
          )}
        </div>
      </div>

      {/* Grid */}
      {filteredCrops.length === 0 ? (
        <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <Sprout className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900">No matching crops or vegetables found</h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              We couldn't find any crop matching your search criteria. Try adjusting the category or clearing the filters.
            </p>
          </div>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-xs font-bold text-white shadow-sm transition"
          >
            Reset All Filters
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
