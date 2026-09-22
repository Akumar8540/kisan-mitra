import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { marketplaceService } from "../../services/marketplaceService";
import { useNotification } from "../../context/NotificationContext";
import { useAuth } from "../../context/AuthContext";
import { ListingCard } from "../../components/cards/ListingCard";
import { Modal } from "../../components/common/Modal";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import { Search, Filter, SlidersHorizontal, MapPin, Calendar, ShieldCheck, MessageSquare } from "lucide-react";

export const PublicMarketplace = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToast } = useNotification();
  const { currentUser } = useAuth();

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedQuality, setSelectedQuality] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Modals state
  const [selectedListing, setSelectedListing] = useState(null);
  const [inquiryListing, setInquiryListing] = useState(null);

  // Inquiry form state
  const [inquiryForm, setInquiryForm] = useState({
    requestedQuantity: "",
    targetPrice: "",
    deliveryDate: "",
    message: ""
  });
  const [submittingInquiry, setSubmittingInquiry] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  // Handle URL query params (e.g. ?inquire=list-101 or ?view=list-101)
  useEffect(() => {
    if (listings.length > 0) {
      const viewId = searchParams.get("view");
      const inqId = searchParams.get("inquire");
      if (viewId) {
        const found = listings.find((l) => l.id === viewId);
        if (found) setSelectedListing(found);
      }
      if (inqId) {
        const found = listings.find((l) => l.id === inqId);
        if (found) handleOpenInquiry(found);
      }
    }
  }, [searchParams, listings]);

  const loadListings = async () => {
    setLoading(true);
    try {
      const data = await marketplaceService.getListings();
      setListings(data);
    } catch (err) {
      console.error(err);
      addToast("Failed to load listings", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenInquiry = (listing) => {
    setInquiryListing(listing);
    setInquiryForm({
      requestedQuantity: listing.quantity || 10,
      targetPrice: listing.pricePerUnit || 5000,
      deliveryDate: new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0],
      message: `Hello ${listing.farmerName}, we are interested in procuring your ${listing.crop} (${listing.variety}). Please confirm availability.`
    });
  };

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    if (!inquiryListing) return;

    setSubmittingInquiry(true);
    try {
      await marketplaceService.createInquiry({
        listingId: inquiryListing.id,
        crop: inquiryListing.crop,
        buyerId: currentUser?.uid || "buyer-1",
        buyerName: currentUser?.name || "Pooja Agro Traders (Pune)",
        buyerPhone: currentUser?.phone || "+91 98900 12345",
        farmerId: inquiryListing.farmerId || "farmer-1",
        requestedQuantity: inquiryForm.requestedQuantity,
        targetPrice: inquiryForm.targetPrice,
        preferredDeliveryDate: inquiryForm.deliveryDate,
        message: inquiryForm.message
      });

      addToast("Inquiry sent successfully to farmer!", "success");
      setInquiryListing(null);
    } catch (err) {
      console.error(err);
      addToast("Failed to submit inquiry. Please try again.", "error");
    } finally {
      setSubmittingInquiry(false);
    }
  };

  // Filter & Sort listings
  const filteredListings = listings
    .filter((item) => {
      const matchesSearch =
        item.crop.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.variety.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.district.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDistrict = selectedDistrict === "all" || item.district === selectedDistrict;
      const matchesQuality = selectedQuality === "all" || item.qualityGrade === selectedQuality;
      return matchesSearch && matchesDistrict && matchesQuality;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.pricePerUnit - b.pricePerUnit;
      if (sortBy === "price-high") return b.pricePerUnit - a.pricePerUnit;
      if (sortBy === "quantity") return b.quantity - a.quantity;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  const uniqueDistricts = Array.from(new Set(listings.map((l) => l.district)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black text-stone-900 tracking-tight">
          Direct Farmer Harvest Marketplace
        </h1>
        <p className="text-stone-600 text-sm">
          Procure quality-graded agricultural produce directly from verified farmers without middleman commissions.
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by crop (Soybean, Wheat...), variety, or district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-stone-50/50"
            />
          </div>

          {/* District Filter */}
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm bg-white text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            <option value="all">All Districts</option>
            {uniqueDistricts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          {/* Quality Grade Filter */}
          <select
            value={selectedQuality}
            onChange={(e) => setSelectedQuality(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm bg-white text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            <option value="all">All Quality Grades</option>
            <option value="Grade A">Grade A (Premium)</option>
            <option value="Grade B">Grade B (Standard)</option>
            <option value="Standard">Standard Commercial</option>
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm bg-white text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            <option value="newest">Sort: Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="quantity">Largest Quantity</option>
          </select>
        </div>
      </div>

      {/* Content Grid */}
      {loading ? (
        <LoadingSpinner label="Loading harvest listings..." />
      ) : filteredListings.length === 0 ? (
        <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center space-y-3">
          <p className="text-base font-bold text-stone-800">No active listings match your filters.</p>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Try adjusting your search query, selecting "All Districts", or clearing quality grade filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedDistrict("all");
              setSelectedQuality("all");
            }}
            className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              onInquire={() => handleOpenInquiry(listing)}
              onViewDetails={() => setSelectedListing(listing)}
            />
          ))}
        </div>
      )}

      {/* View Details Modal */}
      {selectedListing && (
        <Modal
          isOpen={Boolean(selectedListing)}
          onClose={() => setSelectedListing(null)}
          title={`${selectedListing.crop} — ${selectedListing.variety}`}
        >
          <div className="space-y-4 text-sm">
            <div className="relative h-48 rounded-xl overflow-hidden bg-stone-100">
              <img
                src={selectedListing.imageUrl}
                alt={selectedListing.crop}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-white px-2.5 py-1 rounded-full text-xs font-bold text-emerald-800">
                {selectedListing.qualityGrade}
              </div>
            </div>

            <div className="flex items-baseline justify-between pt-2">
              <span className="text-2xl font-black text-emerald-800">
                ₹{selectedListing.pricePerUnit?.toLocaleString("en-IN")}{" "}
                <span className="text-xs font-normal text-stone-500">/ {selectedListing.unit}</span>
              </span>
              <span className="px-3 py-1 bg-stone-100 rounded-lg text-xs font-bold text-stone-700">
                Available: {selectedListing.quantity} {selectedListing.unit}
              </span>
            </div>

            <div className="p-3 bg-stone-50 rounded-xl space-y-1.5 text-xs text-stone-600">
              <p><strong>Location:</strong> {selectedListing.village}, {selectedListing.district}, {selectedListing.state}</p>
              <p><strong>Harvest Date:</strong> {selectedListing.harvestDate}</p>
              <p><strong>Farmer:</strong> {selectedListing.farmerName} ({selectedListing.farmerPhone})</p>
              <p><strong>Delivery Availability:</strong> {selectedListing.availabilityDate}</p>
            </div>

            <div>
              <h4 className="font-bold text-stone-800 mb-1 text-xs uppercase tracking-wider">Lot Description</h4>
              <p className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-3 rounded-xl">
                {selectedListing.description}
              </p>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  setSelectedListing(null);
                  handleOpenInquiry(selectedListing);
                }}
                className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition shadow-sm"
              >
                Proceed to Send Inquiry
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Send Inquiry Modal */}
      {inquiryListing && (
        <Modal
          isOpen={Boolean(inquiryListing)}
          onClose={() => setInquiryListing(null)}
          title={`Send Purchase Inquiry — ${inquiryListing.crop}`}
        >
          <form onSubmit={handleSubmitInquiry} className="space-y-4 text-xs">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between text-emerald-900">
              <div>
                <p className="font-bold">{inquiryListing.crop} ({inquiryListing.variety})</p>
                <p className="text-[11px] text-emerald-700">
                  Seller: {inquiryListing.farmerName} • {inquiryListing.district}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold">₹{inquiryListing.pricePerUnit} / {inquiryListing.unit}</p>
                <p className="text-[11px] text-emerald-700">Available: {inquiryListing.quantity} {inquiryListing.unit}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  Requested Quantity ({inquiryListing.unit}) *
                </label>
                <input
                  type="number"
                  min="1"
                  max={inquiryListing.quantity}
                  required
                  value={inquiryForm.requestedQuantity}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, requestedQuantity: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  Target Offer Price (₹ / {inquiryListing.unit}) *
                </label>
                <input
                  type="number"
                  required
                  value={inquiryForm.targetPrice}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, targetPrice: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">
                Preferred Delivery / Lift Date *
              </label>
              <input
                type="date"
                required
                value={inquiryForm.deliveryDate}
                onChange={(e) => setInquiryForm({ ...inquiryForm, deliveryDate: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">
                Message to Farmer *
              </label>
              <textarea
                rows={3}
                required
                value={inquiryForm.message}
                onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 leading-relaxed"
                placeholder="Detail packaging requirements, vehicle arrangement, or payment terms..."
              />
            </div>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-[11px] text-stone-500 leading-relaxed">
              <strong>Notice:</strong> Your contact information ({currentUser?.name || "Demo Buyer"}) will be shared with the farmer to arrange physical inspection and dispatch.
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setInquiryListing(null)}
                className="px-4 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submittingInquiry}
                className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold transition disabled:opacity-50"
              >
                {submittingInquiry ? "Sending..." : "Submit Inquiry"}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
