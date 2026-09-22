// Authentication Service (Role-based authentication with 1-Click Demo Logins & LocalStorage Persistence)
import { STORAGE_KEYS } from "./storageRepo";

export const DEMO_ACCOUNTS = {
  FARMER: {
    uid: "farmer-1",
    name: "Ramesh Kumar",
    email: "ramesh.farmer@kisanmitra.in",
    phone: "+91 98765 43210",
    role: "farmer",
    state: "Maharashtra",
    district: "Nashik",
    village: "Pimpalgaon Baswant",
    totalLand: "3 Acres",
    createdAt: "2026-01-15"
  },
  BUYER: {
    uid: "buyer-1",
    name: "Pooja Agro Traders",
    companyName: "Pooja Agro Trading Co.",
    email: "contact@poojaagro.in",
    phone: "+91 98900 12345",
    role: "buyer",
    state: "Maharashtra",
    district: "Pune",
    businessType: "Wholesale Mandi Trader & Grain Processor",
    createdAt: "2026-02-10"
  },
  ADMIN: {
    uid: "admin-1",
    name: "Kisan Mitra Administrator",
    email: "admin@kisanmitra.gov.in",
    phone: "+91 11 2338 0000",
    role: "admin",
    designation: "Agronomic Data & System Operations Lead",
    createdAt: "2025-11-01"
  }
};

export const authService = {
  // Get current logged-in user from storage
  getCurrentUser: () => {
    try {
      const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      return user ? JSON.parse(user) : DEMO_ACCOUNTS.FARMER; // Default to Demo Farmer for seamless testing
    } catch {
      return DEMO_ACCOUNTS.FARMER;
    }
  },

  // 1-Click login as Demo account
  loginAsDemoRole: async (roleKey) => {
    const roleUpper = roleKey.toUpperCase();
    const account = DEMO_ACCOUNTS[roleUpper];
    if (account) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(account));
      return { success: true, user: account };
    }
    throw new Error(`Demo account for role '${roleKey}' not found.`);
  },

  // Standard email login
  loginWithEmailPassword: async (email, password) => {
    // Check against demo accounts first
    const foundDemo = Object.values(DEMO_ACCOUNTS).find(
      (acc) => acc.email.toLowerCase() === email.toLowerCase()
    );

    if (foundDemo) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(foundDemo));
      return { success: true, user: foundDemo };
    }

    // Check custom registered users
    const registeredUsers = JSON.parse(localStorage.getItem("agri_registered_users") || "[]");
    const foundUser = registeredUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (foundUser) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(foundUser));
      return { success: true, user: foundUser };
    }

    // In demo mode, provide friendly simulated login if password length >= 6
    if (password && password.length >= 6) {
      const newUser = {
        uid: `user-${Date.now()}`,
        name: email.split("@")[0],
        email,
        phone: "+91 99999 00000",
        role: "farmer",
        createdAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(newUser));
      return { success: true, user: newUser };
    }

    throw new Error("Invalid email or password. Password must be at least 6 characters.");
  },

  // Register new user (Farmer or Buyer only; Admin is restricted)
  registerUser: async ({ name, email, phone, role, password, state, district }) => {
    if (!name || !email || !role) {
      throw new Error("Name, email, and role are required.");
    }
    if (role === "admin") {
      throw new Error("Administrative accounts cannot be registered via public registration.");
    }

    const newUser = {
      uid: `user-${Date.now()}`,
      name,
      email,
      phone: phone || "+91 98765 00000",
      role: role.toLowerCase(),
      state: state || "Maharashtra",
      district: district || "Nashik",
      createdAt: new Date().toISOString()
    };

    const registeredUsers = JSON.parse(localStorage.getItem("agri_registered_users") || "[]");
    registeredUsers.push({ ...newUser, password });
    localStorage.setItem("agri_registered_users", JSON.stringify(registeredUsers));

    // Automatically log in the newly registered user
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(newUser));
    return { success: true, user: newUser };
  },

  // Logout
  logout: async () => {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    return { success: true };
  }
};
