import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCollection, saveCollection, STORAGE_KEYS } from "../../services/storageRepo";
import { useNotification } from "../../context/NotificationContext";
import { Modal } from "../../components/common/Modal";
import { Sprout, Plus, Trash2, ArrowLeft, Clock, Droplets } from "lucide-react";

export const ManageCrops = () => {
  const { addToast } = useNotification();
  const [crops, setCrops] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const [newCrop, setNewCrop] = useState({
    name: "",
    hindiName: "",
    scientificName: "",
    seasons: "Kharif",
    durationDays: "100–120 days",
    seedRate: 20,
    seedRateUnit: "kg/acre",
    waterRequirement: "Medium",
    riskLevel: "Low",
    cultivationSummary: ""
  });

  useEffect(() => {
    loadCrops();
  }, []);

  const loadCrops = () => {
    const data = getCollection(STORAGE_KEYS.CROP_CATALOG);
    setCrops(data);
  };

  const handleAddCrop = (e) => {
    e.preventDefault();
    const id = newCrop.name.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const cropObj = {
      ...newCrop,
      id,
      seasons: [newCrop.seasons],
      soilTypes: ["Loamy", "Black", "Alluvial"],
      landTypes: ["Normal", "Fertile"],
      nutrientGuidance: { n: 20, p: 20, k: 20, applicationStage: "Basal dressing at sowing" },
      expectedYieldQuintalPerAcre: "12–16 Quintals",
      referenceMspPrice: 3500,
      objectives: ["Maximum profit", "Low risk"],
      commonWarnings: ["Ensure proper drainage; monitor early pests."],
      source: "ICAR Reference Standards",
      lastUpdated: new Date().toISOString().split("T")[0]
    };

    const updated = [cropObj, ...crops];
    saveCollection(STORAGE_KEYS.CROP_CATALOG, updated);
    setCrops(updated);
    setIsAddOpen(false);
    addToast(`${newCrop.name} added to crop database!`, "success");
    setNewCrop({
      name: "",
      hindiName: "",
      scientificName: "",
      seasons: "Kharif",
      durationDays: "100–120 days",
      seedRate: 20,
      seedRateUnit: "kg/acre",
      waterRequirement: "Medium",
      riskLevel: "Low",
      cultivationSummary: ""
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this crop from the catalog?")) {
      const updated = crops.filter((c) => c.id !== id);
      saveCollection(STORAGE_KEYS.CROP_CATALOG, updated);
      setCrops(updated);
      addToast("Crop removed from catalog.", "success");
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
            Curate Crop Catalog
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Maintain crop packages of practices, duration standards, and seed rates.
          </p>
        </div>

        <button
          onClick={() => setIsAddOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Crop</span>
        </button>
      </div>

      {/* Crops Table */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-stone-50 font-bold uppercase text-[11px] text-stone-600 border-b border-stone-200">
              <tr>
                <th className="px-6 py-4">Crop Name</th>
                <th className="px-6 py-4">Scientific Name</th>
                <th className="px-6 py-4">Seasons</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Seed Rate</th>
                <th className="px-6 py-4">Risk</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-medium text-stone-800">
              {crops.map((c) => (
                <tr key={c.id} className="hover:bg-stone-50 transition">
                  <td className="px-6 py-4 font-bold text-stone-900">
                    {c.name} {c.hindiName && <span className="text-xs text-stone-400">({c.hindiName})</span>}
                  </td>
                  <td className="px-6 py-4 italic text-stone-500">{c.scientificName}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800">
                      {c.seasons.join(", ")}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-stone-600">{c.durationDays}</td>
                  <td className="px-6 py-4 text-stone-700">{c.seedRate} {c.seedRateUnit}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-stone-100 text-stone-700">
                      {c.riskLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                      title="Delete Crop"
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

      {/* Add Crop Modal */}
      {isAddOpen && (
        <Modal
          isOpen={isAddOpen}
          onClose={() => setIsAddOpen(false)}
          title="Add New Agronomic Crop to Catalog"
        >
          <form onSubmit={handleAddCrop} className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Crop Name (English) *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Barley"
                  value={newCrop.name}
                  onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Hindi Name</label>
                <input
                  type="text"
                  placeholder="e.g. जौ"
                  value={newCrop.hindiName}
                  onChange={(e) => setNewCrop({ ...newCrop, hindiName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Scientific Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Hordeum vulgare"
                value={newCrop.scientificName}
                onChange={(e) => setNewCrop({ ...newCrop, scientificName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-200"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Season</label>
                <select
                  value={newCrop.seasons}
                  onChange={(e) => setNewCrop({ ...newCrop, seasons: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200"
                >
                  <option value="Kharif">Kharif</option>
                  <option value="Rabi">Rabi</option>
                  <option value="Zaid">Zaid</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Duration</label>
                <input
                  type="text"
                  value={newCrop.durationDays}
                  onChange={(e) => setNewCrop({ ...newCrop, durationDays: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Seed Rate (kg/acre)</label>
                <input
                  type="number"
                  value={newCrop.seedRate}
                  onChange={(e) => setNewCrop({ ...newCrop, seedRate: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Cultivation Summary</label>
              <textarea
                rows={2}
                value={newCrop.cultivationSummary}
                onChange={(e) => setNewCrop({ ...newCrop, cultivationSummary: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-200"
                placeholder="Brief agronomic description..."
              />
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
                Save to Database
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
