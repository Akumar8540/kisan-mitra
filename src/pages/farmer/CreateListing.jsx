import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNotification } from "../../context/NotificationContext";
import { marketplaceService } from "../../services/marketplaceService";
import { cropCatalogData } from "../../data/cropCatalogData";
import { Layers, ArrowLeft, Upload, MapPin, Tag, CheckCircle2 } from "lucide-react";

export const CreateListing = () => {
  const { currentUser } = useAuth();
  const { addToast } = useNotification();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    crop: "Soybean",
    cropId: "soybean",
    variety: "JS-335 (Certified Seed)",
    quantity: 50,
    unit: "Quintals",
    pricePerUnit: 5200,
    qualityGrade: "Grade A",
    harvestDate: new Date().toISOString().split("T")[0],
    state: "Maharashtra",
    district: "Nashik",
    village: "Pimpalgaon Baswant",
    description: "Sun-dried to under 10% moisture. Clean graded grains packed in 50kg standard gunny bags.",
    availabilityDate: "Immediate from farm gate",
    imageUrl: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&auto=format&fit=crop&q=80"
  });

  const [submitting, setSubmitting] = useState(false);

  const handleCropChange = (e) => {
    const cropName = e.target.value;
    const cropObj = cropCatalogData.find((c) => c.name === cropName);
    setFormData((prev) => ({
      ...prev,
      crop: cropName,
      cropId: cropObj?.id || "crop"
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await marketplaceService.createListing({
        ...formData,
        farmerId: currentUser?.uid || "farmer-1",
        farmerName: currentUser?.name || "Ramesh Kumar",
        farmerPhone: currentUser?.phone || "+91 98765 43210"
      });

      addToast("Harvest listing published to marketplace successfully!", "success");
      navigate("/farmer/listings");
    } catch (err) {
      console.error(err);
      addToast("Failed to create listing. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-16">
      <Link
        to="/farmer/listings"
        className="inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-stone-900 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to My Listings</span>
      </Link>

      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <h1 className="text-2xl font-black text-stone-900 tracking-tight">
            Create Harvest Crop Listing
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            List your harvested lot for buyers and commercial processors across India.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Crop selection */}
            <div>
              <label className="block font-bold text-stone-700 mb-1">Crop Commodity *</label>
              <select
                name="crop"
                value={formData.crop}
                onChange={handleCropChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 bg-stone-50/50 font-bold text-emerald-800"
              >
                {cropCatalogData.map((c) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Variety */}
            <div>
              <label className="block font-bold text-stone-700 mb-1">Variety / Cultivar Name *</label>
              <input
                type="text"
                name="variety"
                required
                placeholder="e.g. JS-335 / HD-2967"
                value={formData.variety}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Quantity */}
            <div>
              <label className="block font-bold text-stone-700 mb-1">Total Quantity *</label>
              <input
                type="number"
                min="1"
                required
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Unit */}
            <div>
              <label className="block font-bold text-stone-700 mb-1">Unit of Measurement</label>
              <select
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 bg-stone-50/50 font-semibold"
              >
                <option value="Quintals">Quintals (100 kg)</option>
                <option value="Tons">Metric Tons</option>
                <option value="kg">Kilograms (kg)</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block font-bold text-stone-700 mb-1">Expected Price (₹ / {formData.unit}) *</label>
              <input
                type="number"
                required
                name="pricePerUnit"
                value={formData.pricePerUnit}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 font-extrabold text-emerald-800"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Quality Grade */}
            <div>
              <label className="block font-bold text-stone-700 mb-1">Quality Grade *</label>
              <select
                name="qualityGrade"
                value={formData.qualityGrade}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 bg-stone-50/50"
              >
                <option value="Grade A">Grade A (Export / Premium Cleaned)</option>
                <option value="Grade B">Grade B (Standard Milling Quality)</option>
                <option value="Standard">Standard Commercial</option>
              </select>
            </div>

            {/* Harvest Date */}
            <div>
              <label className="block font-bold text-stone-700 mb-1">Harvest Date *</label>
              <input
                type="date"
                name="harvestDate"
                required
                value={formData.harvestDate}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          {/* Location details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-bold text-stone-700 mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">District</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">Village / Town</label>
              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-bold text-stone-700 mb-1">
              Lot Description & Storage Condition
            </label>
            <textarea
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 leading-relaxed"
              placeholder="Detail moisture level, packaging, vehicle access at farm gate..."
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-bold text-stone-700 mb-1">Produce Sample Photo URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <Link
              to="/farmer/listings"
              className="px-5 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 font-semibold"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold transition shadow-sm disabled:opacity-50"
            >
              {submitting ? "Publishing..." : "Publish Harvest Listing"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
