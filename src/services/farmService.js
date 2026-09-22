// Farm Profile Service (Handles farmer onboarding, land information, and agronomic parameters)
import { STORAGE_KEYS, getCollection, saveCollection } from "./storageRepo";

export const farmService = {
  // Retrieve farm profile for a given farmer
  getFarmProfile: async (userId = "farmer-1") => {
    try {
      const profiles = getCollection(STORAGE_KEYS.FARM_PROFILES) || {};
      if (profiles[userId]) {
        return profiles[userId];
      }

      // Default fallback profile for new farmer
      return {
        userId,
        name: "Ramesh Kumar",
        phone: "+91 98765 43210",
        email: "ramesh.farmer@kisanmitra.in",
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
        approximateBudget: "₹45,000",
        lastUpdated: new Date().toISOString().split("T")[0]
      };
    } catch (err) {
      console.error("Error retrieving farm profile:", err);
      throw new Error("Unable to load farm profile data.");
    }
  },

  // Save or update farm profile
  saveFarmProfile: async (userId, profileData) => {
    try {
      const profiles = getCollection(STORAGE_KEYS.FARM_PROFILES) || {};
      const updatedProfile = {
        ...profiles[userId],
        ...profileData,
        userId,
        lastUpdated: new Date().toISOString().split("T")[0]
      };

      profiles[userId] = updatedProfile;
      saveCollection(STORAGE_KEYS.FARM_PROFILES, profiles);
      return { success: true, profile: updatedProfile };
    } catch (err) {
      console.error("Error saving farm profile:", err);
      throw new Error("Failed to save farm profile. Please try again.");
    }
  }
};
