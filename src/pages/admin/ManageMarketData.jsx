import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCollection, saveCollection, STORAGE_KEYS } from "../../services/storageRepo";
import { useNotification } from "../../context/NotificationContext";
import { Modal } from "../../components/common/Modal";
import { Database, Plus, Trash2, ArrowLeft, MapPin } from "lucide-react";

export const ManageMarketData = () => {
  const { addToast } = useNotification();
  const [prices, setPrices] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const [newRecord, setNewRecord] = useState({
    crop: "Soybean",
    mandi: "Pimpalgaon APMC",
    district: "Nashik",
    state: "Maharashtra",
    minPrice: 4800,
    modalPrice: 5150,
    maxPrice: 5400,
    arrivalQuantity: "1,500 Quintals"
  });

  useEffect(() => {
    loadPrices();
  }, []);

  const loadPrices = () => {
    const data = getCollection(STORAGE_KEYS.MARKET_PRICES);
    setPrices(data);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newEntry = {
      ...newRecord,
      id: `mp-${Date.now()}`,
      unit: "₹ / Quintal",
      date: new Date().toISOString().split("T")[0],
      source: "Manual APMC Entry (Admin)"
    };

    const updated = [newEntry, ...prices];
    saveCollection(STORAGE_KEYS.MARKET_PRICES, updated);
    setPrices(updated);
    setIsAddOpen(false);
    addToast("New APMC market price record logged!", "success");
  };

  const handleDelete = (id) => {
    if (window.confirm("Remove this price entry?")) {
      const updated = prices.filter((p) => p.id !== id);
      saveCollection(STORAGE_KEYS.MARKET_PRICES, updated);
      setPrices(updated);
      addToast("Record deleted", "success");
    }
  };

  return (
    <div className="space-y-8 pb-16">
      <Link
        to="/admin/dashboard"
        className="inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-stone-900 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Admin Overview</span>
      </Link>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-stone-900 tracking-tight">
            Manage Mandi Market Records
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Update wholesale price arrivals and APMC benchmarks.
          </p>
        </div>

        <button
          onClick={() => setIsAddOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Add Price Record</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-stone-50 font-bold uppercase text-[11px] text-stone-600 border-b border-stone-200">
              <tr>
                <th className="px-6 py-4">Commodity</th>
                <th className="px-6 py-4">Mandi Yard</th>
                <th className="px-6 py-4">District & State</th>
                <th className="px-6 py-4">Min / Modal / Max</th>
                <th className="px-6 py-4">Arrivals</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-medium text-stone-800">
              {prices.map((p) => (
                <tr key={p.id} className="hover:bg-stone-50 transition">
                  <td className="px-6 py-4 font-bold text-stone-900">{p.crop}</td>
                  <td className="px-6 py-4 font-semibold">{p.mandi}</td>
                  <td className="px-6 py-4 text-stone-500">{p.district}, {p.state}</td>
                  <td className="px-6 py-4">
                    ₹{p.minPrice} / <strong className="text-emerald-800">₹{p.modalPrice}</strong> / ₹{p.maxPrice}
                  </td>
                  <td className="px-6 py-4 text-stone-600">{p.arrivalQuantity || "N/A"}</td>
                  <td className="px-6 py-4 text-stone-400">{p.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isAddOpen && (
        <Modal
          isOpen={isAddOpen}
          onClose={() => setIsAddOpen(false)}
          title="Log APMC Daily Price Benchmark"
        >
          <form onSubmit={handleAdd} className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Commodity *</label>
                <input
                  type="text"
                  required
                  value={newRecord.crop}
                  onChange={(e) => setNewRecord({ ...newRecord, crop: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Mandi Name *</label>
                <input
                  type="text"
                  required
                  value={newRecord.mandi}
                  onChange={(e) => setNewRecord({ ...newRecord, mandi: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-700 mb-1">District</label>
                <input
                  type="text"
                  value={newRecord.district}
                  onChange={(e) => setNewRecord({ ...newRecord, district: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">State</label>
                <input
                  type="text"
                  value={newRecord.state}
                  onChange={(e) => setNewRecord({ ...newRecord, state: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Min Price (₹)</label>
                <input
                  type="number"
                  value={newRecord.minPrice}
                  onChange={(e) => setNewRecord({ ...newRecord, minPrice: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Modal Price (₹)</label>
                <input
                  type="number"
                  value={newRecord.modalPrice}
                  onChange={(e) => setNewRecord({ ...newRecord, modalPrice: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 font-bold text-emerald-800"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Max Price (₹)</label>
                <input
                  type="number"
                  value={newRecord.maxPrice}
                  onChange={(e) => setNewRecord({ ...newRecord, maxPrice: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsAddOpen(false)}
                className="px-4 py-2 rounded-xl border border-stone-200 text-stone-600 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold"
              >
                Save Price Record
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
