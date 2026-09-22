import React, { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/authService";
import { initializeLocalStorageData } from "../services/storageRepo";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Seed default datasets on startup
    initializeLocalStorageData();
    // Load current session from localStorage
    const savedUser = authService.getCurrentUser();
    setCurrentUser(savedUser);
    setLoading(false);
  }, []);

  const loginWithEmail = async (email, password) => {
    setLoading(true);
    try {
      const res = await authService.loginWithEmailPassword(email, password);
      setCurrentUser(res.user);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const loginDemo = async (role) => {
    setLoading(true);
    try {
      const res = await authService.loginAsDemoRole(role);
      setCurrentUser(res.user);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      const res = await authService.registerUser(userData);
      setCurrentUser(res.user);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await authService.logout();
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    loading,
    loginWithEmail,
    loginDemo,
    register,
    logout,
    role: currentUser?.role || null,
    isFarmer: currentUser?.role === "farmer",
    isBuyer: currentUser?.role === "buyer",
    isAdmin: currentUser?.role === "admin"
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
