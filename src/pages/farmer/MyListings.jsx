import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNotification } from "../../context/NotificationContext";
import { marketplaceService } from "../../services/marketplaceService";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import { Plus, Edit2, Trash2, Eye, MapPin, Calendar, Layers, CheckCircle2 } from "lucide-react";

export const MyListings = () => {
  const { currentUser } = useAuth();
  const { addToast } = useNotification();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadListings();
  }, [currentUser]);

  const loadListings = async () => {
    setLoading(true);
    try {
      const farmerId = currentUser?.uid || "farmer-1";
      const allListings = await marketplaceService.getListings();
      const myItems = allListings.filter((l) => l.farmerId === farmerId);
      setListings(myItems);
    } catch (err) {
      console.error(err);
      addToast("Failed to load listings", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    const nextStatus = currentStatus === "Active" ? "Sold" : "Active";
    try {
      await marketplaceService.updateListing(id, { status: nextStatus });
      addToast(`Listing status updated to ${nextStatus}`, "success");
      loadListings();
    } catch (err) {
      addToast("Failed to update status", "error");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to remove this harvest listing?")) {
      try {
        await marketplaceService.deleteListing(id);
        addToast("Harvest listing deleted successfully", "success");
        loadListings();
      } catch (err) {
        addToast("Failed to delete listing", "error");
      }
    }
  };

  if (loading) {
    return <LoadingSpinner label="Loading your crop listings..." />;
  }

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-stone-900 tracking-tight">
            My Harvest Listings
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Manage your produce lots listed on the direct buyer marketplace.
          </p>
        </div>

        <Link
          to="/farmer/listings/create"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Harvest Listing</span>
        </Link>
      </div>

      {/* Listings Table / Cards */}
      {listings.length === 0 ? (
        <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-stone-900">No active harvest listings yet.</h3>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            Create your first crop listing to allow millers, wholesale traders, and food processors to discover your produce directly.
          </p>
          <Link
            to="/farmer/listings/create"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Create Harvest Listing Now</span>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-emerald-200 transition"
            >
              <div className="flex items-start gap-4">
                <img
                  src={listing.imageUrl}
                  alt={listing.crop}
                  className="w-20 h-20 rounded-xl object-cover bg-stone-100 shrink-0"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=300&auto=format&fit=crop&q=80";
                  }}
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-stone-900">
                      {listing.crop} ({listing.variety})
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        listing.status === "Active"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-stone-200 text-stone-700"
                      }`}
                    >
                      {listing.status}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-stone-100 text-stone-600">
                      {listing.qualityGrade}
                    </span>
                  </div>

                  <p className="text-xs text-stone-500 line-clamp-1">
                    {listing.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 pt-1">
                    <span className="font-bold text-emerald-800 text-sm">
                      ₹{listing.pricePerUnit?.toLocaleString("en-IN")} / {listing.unit}
                    </span>
                    <span>•</span>
                    <span>Quantity: {listing.quantity} {listing.unit}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      {listing.village}, {listing.district}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                <button
                  onClick={() => handleToggleStatus(listing.id, listing.status)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                    listing.status === "Active"
                      ? "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100"
                      : "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100"
                  }`}
                >
                  {listing.status === "Active" ? "Mark as Sold" : "Mark as Active"}
                </button>

                <Link
                  to={`/farmer/listings/${listing.id}/edit`}
                  className="p-2 text-stone-600 hover:text-emerald-700 hover:bg-stone-100 rounded-xl transition"
                  title="Edit Listing"
                >
                  <Edit2 className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => handleDelete(listing.id)}
                  className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition"
                  title="Delete Listing"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
