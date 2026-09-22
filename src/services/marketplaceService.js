// Direct Crop Marketplace & Buyer Inquiry Service (Persistent LocalStorage Database)
import { STORAGE_KEYS, getCollection, saveCollection } from "./storageRepo";

export const marketplaceService = {
  // Get all listings with optional multi-filter query
  getListings: async ({ crop, district, quality, maxPrice, minPrice, status } = {}) => {
    let listings = getCollection(STORAGE_KEYS.CROP_LISTINGS);
    
    if (crop && crop !== "all") {
      listings = listings.filter((l) => l.crop.toLowerCase().includes(crop.toLowerCase()));
    }
    if (district && district !== "all") {
      listings = listings.filter((l) => l.district.toLowerCase() === district.toLowerCase());
    }
    if (quality && quality !== "all") {
      listings = listings.filter((l) => l.qualityGrade.toLowerCase() === quality.toLowerCase());
    }
    if (status) {
      listings = listings.filter((l) => l.status.toLowerCase() === status.toLowerCase());
    }
    if (minPrice) {
      listings = listings.filter((l) => l.pricePerUnit >= Number(minPrice));
    }
    if (maxPrice) {
      listings = listings.filter((l) => l.pricePerUnit <= Number(maxPrice));
    }

    return listings;
  },

  // Retrieve single listing by ID
  getListingById: async (id) => {
    const listings = getCollection(STORAGE_KEYS.CROP_LISTINGS);
    return listings.find((l) => l.id === id) || null;
  },

  // Create new harvest listing (Farmer action)
  createListing: async (listingData) => {
    const listings = getCollection(STORAGE_KEYS.CROP_LISTINGS);
    const newListing = {
      ...listingData,
      id: `list-${Date.now()}`,
      status: "Active",
      createdAt: new Date().toISOString().split("T")[0],
      imageUrl: listingData.imageUrl || "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&auto=format&fit=crop&q=80"
    };

    listings.unshift(newListing);
    saveCollection(STORAGE_KEYS.CROP_LISTINGS, listings);
    return { success: true, listing: newListing };
  },

  // Update existing listing
  updateListing: async (id, updatedFields) => {
    const listings = getCollection(STORAGE_KEYS.CROP_LISTINGS);
    const index = listings.findIndex((l) => l.id === id);
    if (index === -1) throw new Error("Listing not found.");

    listings[index] = { ...listings[index], ...updatedFields, updatedAt: new Date().toISOString() };
    saveCollection(STORAGE_KEYS.CROP_LISTINGS, listings);
    return { success: true, listing: listings[index] };
  },

  // Delete / deactivate listing
  deleteListing: async (id) => {
    let listings = getCollection(STORAGE_KEYS.CROP_LISTINGS);
    listings = listings.filter((l) => l.id !== id);
    saveCollection(STORAGE_KEYS.CROP_LISTINGS, listings);
    return { success: true };
  },

  // ==========================================
  // BUYER INQUIRIES
  // ==========================================

  // Submit direct buyer inquiry
  createInquiry: async ({ listingId, crop, buyerId, buyerName, buyerPhone, farmerId, requestedQuantity, targetPrice, message, preferredDeliveryDate }) => {
    const inquiries = getCollection(STORAGE_KEYS.BUYER_INQUIRIES);
    const newInquiry = {
      id: `inq-${Date.now()}`,
      listingId,
      crop,
      buyerId: buyerId || "buyer-1",
      buyerName: buyerName || "Pooja Agro Traders",
      buyerPhone: buyerPhone || "+91 98900 12345",
      farmerId: farmerId || "farmer-1",
      requestedQuantity: Number(requestedQuantity),
      unit: "Quintals",
      targetPrice: Number(targetPrice),
      message: message || "Interested in procuring this harvest. Please contact.",
      preferredDeliveryDate: preferredDeliveryDate || new Date().toISOString().split("T")[0],
      status: "Pending", // Pending, Accepted, Rejected, Completed
      createdAt: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      updatedAt: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
    };

    inquiries.unshift(newInquiry);
    saveCollection(STORAGE_KEYS.BUYER_INQUIRIES, inquiries);
    return { success: true, inquiry: newInquiry };
  },

  // Get inquiries received by farmer
  getInquiriesForFarmer: async (farmerId = "farmer-1") => {
    const inquiries = getCollection(STORAGE_KEYS.BUYER_INQUIRIES);
    return inquiries.filter((inq) => inq.farmerId === farmerId);
  },

  // Get inquiries sent by buyer
  getInquiriesForBuyer: async (buyerId = "buyer-1") => {
    const inquiries = getCollection(STORAGE_KEYS.BUYER_INQUIRIES);
    return inquiries.filter((inq) => inq.buyerId === buyerId);
  },

  // Farmer accepts or rejects buyer inquiry
  updateInquiryStatus: async (inquiryId, newStatus) => {
    const inquiries = getCollection(STORAGE_KEYS.BUYER_INQUIRIES);
    const index = inquiries.findIndex((i) => i.id === inquiryId);
    if (index === -1) throw new Error("Inquiry not found.");

    inquiries[index].status = newStatus;
    inquiries[index].updatedAt = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });
    saveCollection(STORAGE_KEYS.BUYER_INQUIRIES, inquiries);
    return { success: true, inquiry: inquiries[index] };
  }
};
