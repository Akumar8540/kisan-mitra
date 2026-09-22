import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { farmService } from "../../services/farmService";
import { cropRecommendationService } from "../../services/cropRecommendationService";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import {
  Compass,
  CheckCircle2,
  AlertTriangle,
  Calculator,
  ArrowRight,
  TrendingUp,
  Info,
  Layers,
  Sparkles,
  Droplets,
  Sprout,
  ShieldCheck
} from "lucide-react";

export const CropAdvisor = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);

  // Form parameters initialized from Farm Profile
  const [params, setParams] = useState({
    season: "Kharif",
    soilType: "Black",
    waterAvailability: "Medium",
    irrigationType: "Partially Irrigated",
    landType: "Normal",
    farmingObjective: "Maximum profit",
    landArea: 3
  });

  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    loadSavedFarmData();
  }, [currentUser]);

  const loadSavedFarmData = async () => {
    setLoading(true);
    try {
      const farmerId = currentUser?.uid || "farmer-1";
      const profile = await farmService.getFarmProfile(farmerId);
      if (profile) {
        const initialParams = {
          season: profile.currentSeason || "Kharif",
          soilType: profile.soilType || "Black",
          waterAvailability: profile.waterAvailability || "Medium",
          irrigationType: profile.irrigationType || "Partially Irrigated",
          landType: profile.landType || "Normal",
          farmingObjective: profile.farmingObjective || "Maximum profit",
          landArea: Number(profile.totalLandArea) || 3
        };
        setParams(initialParams);
        // Run recommendation engine
        const results = cropRecommendationService.recommendCrops(initialParams);
        setRecommendations(results);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Re-run evaluation whenever farmer tweaks parameters in the advisor
  const handleParamChange = (name, value) => {
    const updated = { ...params, [name]: value };
    setParams(updated);
    const results = cropRecommendationService.recommendCrops(updated);
    setRecommendations(results);
  };

  if (loading) {
    return <LoadingSpinner label="Evaluating agronomic parameters..." />;
  }

  return (
    <div className="space-y-8 pb-16">
      {/* Title & Introduction */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <Compass className="w-3.5 h-3.5 text-emerald-600" />
          Explainable Multi-Criteria Decision Support
        </div>
        <h1 className="text-3xl font-black text-stone-900 tracking-tight">
          Crop Suitability Advisor
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-2xl">
          Evaluate crop compatibility based on your farm's soil, season, water capacity, and financial objectives with full transparent scoring.
        </p>
      </div>

      {/* Transparent Evaluation Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
        <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold">SIH Prototype Decision-Support Disclaimer</p>
          <p className="mt-0.5">
            This tool provides rule-based decision-support guidance for prototype demonstration.
            Scores are calculated across 5 weighted agronomic rules: Season (30%), Soil (25%), Water (25%), Land Topography (10%), and Farmer Objective (10%).
            Actual crop success depends on micro-climate weather, local soil health test results, and expert extension advice.
          </p>
        </div>
      </div>

      {/* Interactive Condition Controller */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <h3 className="text-sm font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Farm Evaluation Parameters (Modify to see score changes)</span>
          </h3>
          <span className="text-xs text-stone-400">Values synchronized with Farm Profile</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block font-bold text-stone-700 mb-1">Cropping Season (30% Weight)</label>
            <select
              value={params.season}
              onChange={(e) => handleParamChange("season", e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50/50 font-semibold text-emerald-800"
            >
              <option value="Kharif">Kharif Season (Monsoon)</option>
              <option value="Rabi">Rabi Season (Winter)</option>
              <option value="Zaid">Zaid Season (Summer)</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">Soil Texture (25% Weight)</label>
            <select
              value={params.soilType}
              onChange={(e) => handleParamChange("soilType", e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50/50 font-medium"
            >
              <option value="Black">Black Cotton Soil</option>
              <option value="Loamy">Loamy Soil</option>
              <option value="Alluvial">Alluvial Soil</option>
              <option value="Clay">Clay Soil</option>
              <option value="Sandy loam">Sandy Loam</option>
              <option value="Red">Red Soil</option>
              <option value="Sandy">Sandy Soil</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">Water Capacity (25% Weight)</label>
            <select
              value={params.waterAvailability}
              onChange={(e) => handleParamChange("waterAvailability", e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50/50 font-medium"
            >
              <option value="Low">Low (Rain-dependent / Limited)</option>
              <option value="Medium">Medium (Seasonal irrigation)</option>
              <option value="High">High (Perennial canal/well)</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">Land Topography (10% Weight)</label>
            <select
              value={params.landType}
              onChange={(e) => handleParamChange("landType", e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50/50 font-medium"
            >
              <option value="Fertile">Fertile / Deep</option>
              <option value="Normal">Normal Arable Land</option>
              <option value="Dry/Rainfed">Dry / Rainfed</option>
              <option value="Barren/Degraded">Degraded / Saline</option>
              <option value="Fallow">Fallow / Resting</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">Farming Objective (10% Weight)</label>
            <select
              value={params.farmingObjective}
              onChange={(e) => handleParamChange("farmingObjective", e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50/50 font-medium"
            >
              <option value="Maximum profit">Maximum Profit</option>
              <option value="Low risk">Low Risk</option>
              <option value="Fast harvest">Fast Harvest</option>
              <option value="Low water requirement">Low Water Need</option>
              <option value="Soil improvement">Soil Improvement (Legumes)</option>
              <option value="Stable market demand">Stable Market Demand</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">Acreage for Calculations</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0.5"
                step="0.5"
                value={params.landArea}
                onChange={(e) => handleParamChange("landArea", Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50/50 font-semibold"
              />
              <span className="text-stone-500 font-bold">Acres</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Crop Result Cards */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-stone-900 tracking-tight">
          Recommended Crop Options ({recommendations.length} Evaluated)
        </h2>

        <div className="space-y-6">
          {recommendations.slice(0, 5).map((rec, index) => (
            <div
              key={rec.crop.id}
              className={`bg-white rounded-3xl border p-6 sm:p-8 space-y-6 shadow-sm transition ${
                index === 0 ? "border-emerald-500 ring-2 ring-emerald-500/20" : "border-stone-200"
              }`}
            >
              {/* Header: Name, Match Pill & Score */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      Rank #{index + 1}
                    </span>
                    <span className="text-xs text-stone-400 italic">
                      {rec.crop.scientificName}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-stone-900">
                    {rec.crop.name}{" "}
                    {rec.crop.hindiName && (
                      <span className="text-lg font-normal text-stone-500">
                        ({rec.crop.hindiName})
                      </span>
                    )}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-3xl font-black text-emerald-700">
                      {rec.matchScore}%
                    </span>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      Suitability Score
                    </span>
                  </div>
                </div>
              </div>

              {/* Transparent Score Breakdown Bar */}
              <div className="p-3 bg-stone-50 rounded-2xl border border-stone-100 space-y-2">
                <p className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                  Transparent Score Breakdown:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                  <div className="p-2 bg-white rounded-xl border border-stone-100">
                    <p className="font-extrabold text-stone-900">{rec.scoreBreakdown.season.score}/30</p>
                    <p className="text-[10px] text-stone-500">Season (30%)</p>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-stone-100">
                    <p className="font-extrabold text-stone-900">{rec.scoreBreakdown.soil.score}/25</p>
                    <p className="text-[10px] text-stone-500">Soil (25%)</p>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-stone-100">
                    <p className="font-extrabold text-stone-900">{rec.scoreBreakdown.water.score}/25</p>
                    <p className="text-[10px] text-stone-500">Water (25%)</p>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-stone-100">
                    <p className="font-extrabold text-stone-900">{rec.scoreBreakdown.land.score}/10</p>
                    <p className="text-[10px] text-stone-500">Land (10%)</p>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-stone-100">
                    <p className="font-extrabold text-stone-900">{rec.scoreBreakdown.objective.score}/10</p>
                    <p className="text-[10px] text-stone-500">Objective (10%)</p>
                  </div>
                </div>
              </div>

              {/* Why Recommended vs Watch Out */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl space-y-2">
                  <h4 className="font-bold text-emerald-950 flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Why this crop fits your farm:</span>
                  </h4>
                  <ul className="space-y-1.5 text-emerald-900">
                    {rec.whyReasons.map((reason, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2">
                  <h4 className="font-bold text-amber-950 flex items-center gap-1.5 text-xs">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                    <span>Agronomic watch-outs & risks:</span>
                  </h4>
                  <ul className="space-y-1.5 text-amber-900">
                    {rec.warnings.slice(0, 2).map((warn, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-700 font-bold">⚠</span>
                        <span>{warn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Agronomic Snapshot For Entered Land Area */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-stone-50 p-4 rounded-2xl border border-stone-100">
                <div>
                  <span className="text-stone-400 block">Cultivation Duration:</span>
                  <span className="font-bold text-stone-800">{rec.crop.durationDays}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Seed Needed for {params.landArea} Acres:</span>
                  <span className="font-bold text-emerald-800">{rec.totalSeedNeeded} kg ({rec.crop.seedRate} kg/acre)</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Estimated Seed Cost:</span>
                  <span className="font-bold text-stone-800">~ ₹{rec.estSeedCost.toLocaleString('en-IN')}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Yield Potential:</span>
                  <span className="font-bold text-stone-800">{rec.crop.expectedYieldQuintalPerAcre}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <Link
                  to={`/crops/${rec.crop.id}`}
                  className="text-xs font-bold text-stone-600 hover:text-stone-900 flex items-center gap-1"
                >
                  <span>View Complete Agronomic Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  <Link
                    to={`/market-prices/${rec.crop.id}`}
                    className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition"
                  >
                    Check Mandi Prices
                  </Link>
                  <Link
                    to={`/farmer/input-calculator?crop=${rec.crop.id}&area=${params.landArea}`}
                    className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Calculate Seed & Fertilizers</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
