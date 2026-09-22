import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNotification } from "../../context/NotificationContext";
import { farmService } from "../../services/farmService";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import { Sprout, Compass, CheckCircle2, User, MapPin, Layers, Droplets, Target, Save } from "lucide-react";

export const FarmProfile = () => {
  const { currentUser } = useAuth();
  const { addToast } = useNotification();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "Maharashtra",
    district: "Nashik",
    village: "Pimpalgaon Baswant",
    preferredLanguage: "English",
    totalLandArea: 3,
    landUnit: "Acre",
    landType: "Normal",
    soilType: "Black",
    soilCondition: "Good",
    waterAvailability: "Medium",
    irrigationType: "Partially Irrigated",
    currentSeason: "Kharif",
    previousCrop: "Gram / Chickpea",
    currentCrop: "Soybean",
    farmingExperience: "12 years",
    farmingObjective: "Maximum profit",
    approximateBudget: "₹45,000"
  });

  useEffect(() => {
    loadProfile();
  }, [currentUser]);

  const loadProfile = async () => {
    setLoading(true);
    try {
      const farmerId = currentUser?.uid || "farmer-1";
      const profile = await farmService.getFarmProfile(farmerId);
      if (profile) {
        setFormData(profile);
      }
    } catch (err) {
      console.error(err);
      addToast("Failed to load profile", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const farmerId = currentUser?.uid || "farmer-1";
      await farmService.saveFarmProfile(farmerId, formData);
      addToast("Farm profile updated successfully!", "success");
    } catch (err) {
      console.error(err);
      addToast("Failed to save farm profile. Please try again.", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <LoadingSpinner label="Loading farm profile details..." />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-stone-900 tracking-tight">
            Farm Profile & Land Onboarding
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Keep your acreage, soil, and irrigation parameters updated for precise crop recommendations.
          </p>
        </div>

        <Link
          to="/farmer/advisor"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition"
        >
          <Compass className="w-4 h-4" />
          <span>Find Suitable Crops</span>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: Farmer Personal & Contact Information */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3">
            <User className="w-5 h-5 text-emerald-700" />
            <h2 className="text-base font-bold text-stone-900">Personal & Contact Details</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-stone-700 mb-1">Farmer Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Mobile Phone *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">State *</label>
              <input
                type="text"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">District *</label>
              <input
                type="text"
                name="district"
                required
                value={formData.district}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Village / Taluka *</label>
              <input
                type="text"
                name="village"
                required
                value={formData.village}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Land & Soil Characteristics */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3">
            <Layers className="w-5 h-5 text-emerald-700" />
            <h2 className="text-base font-bold text-stone-900">Land Topography & Soil Health</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-stone-700 mb-1">Total Cultivable Area *</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  required
                  name="totalLandArea"
                  value={formData.totalLandArea}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
                />
                <select
                  name="landUnit"
                  value={formData.landUnit}
                  onChange={handleChange}
                  className="px-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 font-bold"
                >
                  <option value="Acre">Acre</option>
                  <option value="Hectare">Hectare</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Land Condition / Topography *</label>
              <select
                name="landType"
                value={formData.landType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 bg-white"
              >
                <option value="Fertile">Fertile (High Organic Matter)</option>
                <option value="Normal">Normal Arable Land</option>
                <option value="Dry/Rainfed">Dry / Rainfed</option>
                <option value="Barren/Degraded">Degraded / Saline / Shallow</option>
                <option value="Fallow">Fallow (Resting Field)</option>
                <option value="Irrigated">Fully Irrigated Command Area</option>
                <option value="Partially Irrigated">Partially Irrigated</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Primary Soil Type *</label>
              <select
                name="soilType"
                value={formData.soilType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 bg-white"
              >
                <option value="Black">Black Cotton Soil (Regur)</option>
                <option value="Loamy">Loamy Soil (Ideal Balance)</option>
                <option value="Clay">Clay Soil (High Water Retention)</option>
                <option value="Sandy loam">Sandy Loam</option>
                <option value="Red">Red Soil</option>
                <option value="Alluvial">Alluvial Plains Soil</option>
                <option value="Sandy">Sandy Soil (Arid)</option>
                <option value="Other">Other / Mixed</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Soil Fertility Condition</label>
              <select
                name="soilCondition"
                value={formData.soilCondition}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 bg-white"
              >
                <option value="Good">Good (Tested Soil Health Card)</option>
                <option value="Medium">Medium</option>
                <option value="Poor">Poor (Nutrient Deficient)</option>
                <option value="Unknown">Unknown (Not tested recently)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Farming Experience</label>
              <input
                type="text"
                name="farmingExperience"
                placeholder="e.g. 10 years"
                value={formData.farmingExperience}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Approximate Working Budget</label>
              <input
                type="text"
                name="approximateBudget"
                placeholder="e.g. ₹50,000"
                value={formData.approximateBudget}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Water, Season & Cropping History */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3">
            <Droplets className="w-5 h-5 text-sky-600" />
            <h2 className="text-base font-bold text-stone-900">Irrigation & Season Parameters</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-stone-700 mb-1">Water Availability Level *</label>
              <select
                name="waterAvailability"
                value={formData.waterAvailability}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 bg-white"
              >
                <option value="Low">Low (Rain-dependent, dry spells frequent)</option>
                <option value="Medium">Medium (Seasonal borewell/tank backup)</option>
                <option value="High">High (Perennial canal / abundant groundwater)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Primary Irrigation System *</label>
              <select
                name="irrigationType"
                value={formData.irrigationType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 bg-white"
              >
                <option value="Rainfed">Rainfed Only (Zero Irrigation)</option>
                <option value="Partially Irrigated">Partially Irrigated</option>
                <option value="Drip">Drip Fertigation System</option>
                <option value="Sprinkler">Sprinkler Irrigation</option>
                <option value="Borewell">Deep Tube Well / Borewell</option>
                <option value="Canal">Govt. Canal Flow</option>
                <option value="Assured">Assured Multi-Source</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Current Planning Season *</label>
              <select
                name="currentSeason"
                value={formData.currentSeason}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 bg-white"
              >
                <option value="Kharif">Kharif Season (Monsoon: June – Oct)</option>
                <option value="Rabi">Rabi Season (Winter: Oct – March)</option>
                <option value="Zaid">Zaid Season (Summer: March – June)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Previous Crop Grown</label>
              <input
                type="text"
                name="previousCrop"
                placeholder="e.g. Chickpea / Gram"
                value={formData.previousCrop}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Current Crop</label>
              <input
                type="text"
                name="currentCrop"
                placeholder="e.g. Soybean"
                value={formData.currentCrop}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Primary Farming Objective *</label>
              <select
                name="farmingObjective"
                value={formData.farmingObjective}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 bg-white font-semibold text-emerald-800"
              >
                <option value="Maximum profit">Maximum Profit (Higher Return Cash Crops)</option>
                <option value="Low risk">Low Risk (Drought/Pest Resilient)</option>
                <option value="Fast harvest">Fast Harvest (Quick Short Duration 60–75 Days)</option>
                <option value="Low water requirement">Low Water Requirement</option>
                <option value="Soil improvement">Soil Fertility Improvement (Nitrogen Fixing Legumes)</option>
                <option value="Stable market demand">Stable Market Demand (MSP Assured Cereals)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Bar */}
        <div className="flex items-center justify-between p-4 bg-stone-100 rounded-2xl">
          <p className="text-xs text-stone-500">
            Data is persisted in LocalStorage. Instant updates across all advisory tools.
          </p>
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? "Saving Changes..." : "Save Farm Profile"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
