import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { marketplaceService } from "../../services/marketplaceService";
import { useNotification } from "../../context/NotificationContext";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import { ArrowLeft, Save } from "lucide-react";

export const EditListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToast } = useNotification();

  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadListing();
  }, [id]);

  const loadListing = async () => {
    setLoading(true);
    try {
      const item = await marketplaceService.getListingById(id);
      if (item) {
        setFormData(item);
      } else {
        addToast("Listing not found", "error");
        navigate("/farmer/listings");
      }
    } catch (err) {
      console.error(err);
      addToast("Failed to load listing details", "error");
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
    setSubmitting(true);
    try {
      await marketplaceService.updateListing(id, formData);
      addToast("Listing updated successfully!", "success");
      navigate("/farmer/listings");
    } catch (err) {
      addToast("Failed to update listing", "error");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <LoadingSpinner label="Loading listing data..." />;
  }

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
        <h1 className="text-2xl font-black text-stone-900 tracking-tight">
          Edit Harvest Listing — {formData.crop}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-stone-700 mb-1">Crop</label>
              <input
                type="text"
                disabled
                value={formData.crop}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-100 font-bold text-stone-600"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Variety</label>
              <input
                type="text"
                name="variety"
                value={formData.variety}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-bold text-stone-700 mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Unit</label>
              <select
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200"
              >
                <option value="Quintals">Quintals</option>
                <option value="Tons">Tons</option>
                <option value="kg">kg</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Price (₹ / {formData.unit})</label>
              <input
                type="number"
                name="pricePerUnit"
                value={formData.pricePerUnit}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 font-bold text-emerald-800"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">Listing Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 font-bold"
            >
              <option value="Active">Active (Visible to Buyers)</option>
              <option value="Pending">Pending Sale</option>
              <option value="Sold">Sold Out</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">Description</label>
            <textarea
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200"
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
              {submitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
