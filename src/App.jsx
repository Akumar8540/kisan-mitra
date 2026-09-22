import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";
import { LanguageProvider } from "./context/LanguageContext";

// Layouts
import { PublicLayout } from "./layouts/PublicLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { ProtectedRoute } from "./layouts/ProtectedRoute";

// Public Pages
import { Home } from "./pages/public/Home";
import { About } from "./pages/public/About";
import { HowItWorks } from "./pages/public/HowItWorks";
import { PublicMarketplace } from "./pages/public/PublicMarketplace";
import { CropCatalog } from "./pages/public/CropCatalog";
import { CropDetail } from "./pages/public/CropDetail";
import { MarketPrices } from "./pages/public/MarketPrices";
import { CropMarketHistory } from "./pages/public/CropMarketHistory";
import { MandiDetail } from "./pages/public/MandiDetail";
import { FertilizerGuide } from "./pages/public/FertilizerGuide";
import { InternationalDemand } from "./pages/public/InternationalDemand";
import { Login } from "./pages/public/Login";
import { Register } from "./pages/public/Register";

// Farmer Pages
import { FarmerDashboard } from "./pages/farmer/Dashboard";
import { FarmProfile } from "./pages/farmer/FarmProfile";
import { CropAdvisor } from "./pages/farmer/CropAdvisor";
import { InputCalculator } from "./pages/farmer/InputCalculator";
import { FarmingCalendar } from "./pages/farmer/FarmingCalendar";
import { MyListings } from "./pages/farmer/MyListings";
import { CreateListing } from "./pages/farmer/CreateListing";
import { EditListing } from "./pages/farmer/EditListing";
import { InquiriesReceived } from "./pages/farmer/InquiriesReceived";
import { Reports } from "./pages/farmer/Reports";
import { WeatherForecast } from "./pages/farmer/WeatherForecast";

// Buyer Pages
import { BuyerDashboard } from "./pages/buyer/BuyerDashboard";
import { MyInquiries } from "./pages/buyer/MyInquiries";
import { BuyerProfile } from "./pages/buyer/BuyerProfile";

// Admin Pages
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { ManageCrops } from "./pages/admin/ManageCrops";
import { ManageMarketData } from "./pages/admin/ManageMarketData";
import { ManageFertilizers } from "./pages/admin/ManageFertilizers";
import { ManageUsers } from "./pages/admin/ManageUsers";

import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <NotificationProvider>
            <Routes>
            {/* Public Layout Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/marketplace" element={<PublicMarketplace />} />
              <Route path="/crops" element={<CropCatalog />} />
              <Route path="/crops/:id" element={<CropDetail />} />
              <Route path="/international-demand" element={<InternationalDemand />} />
              <Route path="/market-prices" element={<MarketPrices />} />
              <Route path="/market-prices/:crop" element={<CropMarketHistory />} />
              <Route path="/mandis/:id" element={<MandiDetail />} />
              <Route path="/fertilizers" element={<FertilizerGuide />} />
              <Route path="/weather" element={<WeatherForecast />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            {/* Farmer Portal (Protected) */}
            <Route
              path="/farmer"
              element={
                <ProtectedRoute allowedRoles={["farmer", "admin"]}>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/farmer/dashboard" replace />} />
              <Route path="dashboard" element={<FarmerDashboard />} />
              <Route path="profile" element={<FarmProfile />} />
              <Route path="advisor" element={<CropAdvisor />} />
              <Route path="input-calculator" element={<InputCalculator />} />
              <Route path="calendar" element={<FarmingCalendar />} />
              <Route path="weather" element={<WeatherForecast />} />
              <Route path="listings" element={<MyListings />} />
              <Route path="listings/create" element={<CreateListing />} />
              <Route path="listings/:id/edit" element={<EditListing />} />
              <Route path="inquiries" element={<InquiriesReceived />} />
              <Route path="reports" element={<Reports />} />
            </Route>

            {/* Buyer Portal (Protected) */}
            <Route
              path="/buyer"
              element={
                <ProtectedRoute allowedRoles={["buyer", "admin"]}>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/buyer/dashboard" replace />} />
              <Route path="dashboard" element={<BuyerDashboard />} />
              <Route path="marketplace" element={<PublicMarketplace />} />
              <Route path="international-demand" element={<InternationalDemand />} />
              <Route path="inquiries" element={<MyInquiries />} />
              <Route path="profile" element={<BuyerProfile />} />
            </Route>

            {/* Admin Portal (Protected) */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="crops" element={<ManageCrops />} />
              <Route path="market-data" element={<ManageMarketData />} />
              <Route path="fertilizers" element={<ManageFertilizers />} />
              <Route path="users" element={<ManageUsers />} />
            </Route>

            {/* 404 Catch-All */}
            <Route path="*" element={<PublicLayout />}>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          </NotificationProvider>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
