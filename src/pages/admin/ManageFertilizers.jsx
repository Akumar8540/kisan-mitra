import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCollection, saveCollection, STORAGE_KEYS } from "../../services/storageRepo";
import { useNotification } from "../../context/NotificationContext";
import { Modal } from "../../components/common/Modal";
import { FlaskConical, Plus, Trash2, ArrowLeft, ShieldAlert } from "lucide-react";

export const ManageFertilizers = () => {
  const { addToast } = useNotification();
  const [products, setProducts] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const [newProd, setNewProd] = useState({
    productName: "",
    manufacturer: "",
    category: "Nitrogenous Fertilizer",
    nutrientComposition: "",
    packaging: "50 kg Bag",
    subsidizedMaturity: "",
    usageCaution: ""
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    const data = getCollection(STORAGE_KEYS.FERTILIZER_PRODUCTS);
    setProducts(data);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const entry = {
      ...newProd,
      id: `prod-${Date.now()}`,
      cropApplicability: "General Field Crops",
      isApproved: true,
      source: "Manual Entry (Admin Curation)"
    };

    const updated = [entry, ...products];
    saveCollection(STORAGE_KEYS.FERTILIZER_PRODUCTS, updated);
    setProducts(updated);
    setIsAddOpen(false);
    addToast("New fertilizer reference added!", "success");
  };

  const handleDelete = (id) => {
    if (window.confirm("Remove this fertilizer product entry?")) {
      const updated = products.filter((p) => p.id !== id);
      saveCollection(STORAGE_KEYS.FERTILIZER_PRODUCTS, updated);
      setProducts(updated);
      addToast("Product removed", "success");
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
            Manage Fertilizer Reference Catalog
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Curate standard commercial fertilizers and organic amendments.
          </p>
        </div>

        <button
          onClick={() => setIsAddOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Add Fertilizer Product</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-stone-50 font-bold uppercase text-[11px] text-stone-600 border-b border-stone-200">
              <tr>
                <th className="px-6 py-4">Product Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Manufacturer</th>
                <th className="px-6 py-4">Nutrient Composition</th>
                <th className="px-6 py-4">Packaging & Price</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-medium text-stone-800">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-stone-50 transition">
                  <td className="px-6 py-4 font-bold text-stone-900">{p.productName}</td>
                  <td className="px-6 py-4 text-stone-600">{p.category}</td>
                  <td className="px-6 py-4 text-stone-500">{p.manufacturer}</td>
                  <td className="px-6 py-4 font-semibold text-emerald-800">{p.nutrientComposition}</td>
                  <td className="px-6 py-4 text-stone-600">{p.subsidizedMaturity}</td>
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
          title="Add Reference Fertilizer Product"
        >
          <form onSubmit={handleAdd} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-stone-700 mb-1">Product Name *</label>
              <input
                type="text"
                required
                value={newProd.productName}
                onChange={(e) => setNewProd({ ...newProd, productName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-200"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Manufacturer *</label>
                <input
                  type="text"
                  required
                  value={newProd.manufacturer}
                  onChange={(e) => setNewProd({ ...newProd, manufacturer: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Category</label>
                <input
                  type="text"
                  value={newProd.category}
                  onChange={(e) => setNewProd({ ...newProd, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Nutrient Composition *</label>
              <input
                type="text"
                required
                placeholder="e.g. 18% N, 46% P2O5"
                value={newProd.nutrientComposition}
                onChange={(e) => setNewProd({ ...newProd, nutrientComposition: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-200"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Price / Packaging Reference</label>
              <input
                type="text"
                placeholder="e.g. Govt MRP ~ ₹1,350 / 50kg"
                value={newProd.subsidizedMaturity}
                onChange={(e) => setNewProd({ ...newProd, subsidizedMaturity: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-200"
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
                Save Product
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
