import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNotification } from "../../context/NotificationContext";
import { Building2, User, Phone, Mail, MapPin, Save, ShieldCheck } from "lucide-react";

export const BuyerProfile = () => {
  const { currentUser } = useAuth();
  const { addToast } = useNotification();

  const [formData, setFormData] = useState({
    companyName: currentUser?.companyName || "Pooja Agro Trading Co.",
    contactPerson: currentUser?.name || "Pooja Sharma",
    email: currentUser?.email || "contact@poojaagro.in",
    phone: currentUser?.phone || "+91 98900 12345",
    businessType: "Wholesale Mandi Merchant & Dal Mill Operator",
    gstin: "27AABCP1234F1Z8",
    mandiLicense: "MH-PUN-APMC-882",
    state: "Maharashtra",
    district: "Pune",
    preferredCrops: "Soybean, Wheat, Chickpea / Gram, Mustard"
  });

  const [saving, setSaving] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      addToast("Buyer commercial profile updated successfully!", "success");
    }, 400);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-16">
      <div>
        <h1 className="text-3xl font-black text-stone-900 tracking-tight">
          Buyer & Enterprise Profile
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          Your verified commercial credentials visible to farmers when receiving trade inquiries.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-sm text-xs">
        <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
          <Building2 className="w-5 h-5 text-sky-700" />
          <h2 className="text-base font-bold text-stone-900">Commercial Business Credentials</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-bold text-stone-700 mb-1">Company / Firm Name *</label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-sky-600"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">Authorized Contact Person *</label>
            <input
              type="text"
              required
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-sky-600"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">Business Mobile *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-sky-600"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">Business Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-sky-600"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">GSTIN Number</label>
            <input
              type="text"
              value={formData.gstin}
              onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-sky-600"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">APMC Trader License</label>
            <input
              type="text"
              value={formData.mandiLicense}
              onChange={(e) => setFormData({ ...formData, mandiLicense: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-sky-600"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">State</label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">District</label>
            <input
              type="text"
              value={formData.district}
              onChange={(e) => setFormData({ ...formData, district: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200"
            />
          </div>
        </div>

        <div>
          <label className="block font-bold text-stone-700 mb-1">
            Primary Target Commodities / Procurement Focus
          </label>
          <input
            type="text"
            value={formData.preferredCrops}
            onChange={(e) => setFormData({ ...formData, preferredCrops: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-sky-600"
            placeholder="e.g. Soybean, Wheat, Cotton, Mustard"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold transition shadow-sm disabled:opacity-50 flex items-center gap-1.5"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? "Saving..." : "Update Business Profile"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
