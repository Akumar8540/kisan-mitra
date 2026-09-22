import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import {
  Sprout,
  Store,
  BookOpen,
  TrendingUp,
  FlaskConical,
  Menu,
  X,
  User,
  LogOut,
  LayoutDashboard,
  Globe,
  MessageSquare,
  ShieldCheck,
  Building2,
  CloudRain,
  Bot,
  Sparkles
} from "lucide-react";

export const Navbar = () => {
  const { currentUser, logout, role } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const getDashboardLink = () => {
    if (role === "farmer") return "/farmer/dashboard";
    if (role === "buyer") return "/buyer/dashboard";
    if (role === "admin") return "/admin/dashboard";
    return "/login";
  };

  const navItemClass = ({ isActive }) =>
    `text-sm font-medium transition flex items-center gap-1.5 py-1 px-2.5 rounded-lg ${
      isActive
        ? "text-emerald-700 bg-emerald-50 font-semibold"
        : "text-stone-600 hover:text-emerald-700 hover:bg-stone-50"
    }`;

  const buyerNavItemClass = ({ isActive }) =>
    `text-sm font-medium transition flex items-center gap-1.5 py-1 px-2.5 rounded-lg ${
      isActive
        ? "text-sky-800 bg-sky-50 font-semibold"
        : "text-stone-600 hover:text-sky-700 hover:bg-stone-50"
    }`;

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md transition group-hover:scale-105 ${
                role === "buyer"
                  ? "bg-gradient-to-br from-sky-700 to-indigo-800 shadow-sky-800/20"
                  : "bg-gradient-to-br from-emerald-600 to-green-700 shadow-emerald-700/20"
              }`}
            >
              {role === "buyer" ? <Building2 className="w-5 h-5" /> : <Sprout className="w-6 h-6" />}
            </div>
            <div>
              <span className="text-xl font-black text-stone-900 tracking-tight flex items-center gap-1">
                {t("brandName", "Kisan Mitra")}
              </span>
              <span className="block text-[10px] text-stone-500 uppercase tracking-widest font-semibold">
                {role === "buyer"
                  ? "Commercial Buyer & Export Gateway"
                  : t("tagline", "Smart Farmer Assistant & Direct Crop Marketplace")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {role === "buyer" ? (
              // BUYER NAVIGATION
              <>
                <NavLink to="/" end className={buyerNavItemClass}>
                  {t("home", "Home")}
                </NavLink>
                <NavLink to="/marketplace" className={buyerNavItemClass}>
                  <Store className="w-4 h-4 text-sky-700" />
                  {t("browseProduce", "Browse Produce")}
                </NavLink>
                <NavLink to="/international-demand" className={buyerNavItemClass}>
                  <Globe className="w-4 h-4 text-sky-700" />
                  {t("globalDemands", "Global Export Demands")}
                  <span className="px-1.5 py-0.2 text-[9px] font-bold bg-amber-100 text-amber-800 rounded">
                    Govt Leads
                  </span>
                </NavLink>
                <NavLink to="/market-prices" className={buyerNavItemClass}>
                  <TrendingUp className="w-4 h-4 text-sky-700" />
                  {t("mandiLiveRates", "Mandi Live Rates")}
                </NavLink>
                <NavLink to="/buyer/inquiries" className={buyerNavItemClass}>
                  <MessageSquare className="w-4 h-4 text-sky-700" />
                  {t("myInquiries", "My Inquiries")}
                </NavLink>
              </>
            ) : role === "farmer" ? (
              // FARMER NAVIGATION
              <>
                <NavLink to="/" end className={navItemClass}>
                  {t("home", "Home")}
                </NavLink>
                <NavLink to="/marketplace" className={navItemClass}>
                  <Store className="w-4 h-4 text-emerald-600" />
                  {t("marketplace", "Marketplace")}
                </NavLink>
                <NavLink to="/crops" className={navItemClass}>
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  {t("cropGuide", "Crop Guide")}
                </NavLink>
                <NavLink to="/market-prices" className={navItemClass}>
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  {t("mandiPrices", "Mandi Prices")}
                </NavLink>
                <NavLink to="/fertilizers" className={navItemClass}>
                  <FlaskConical className="w-4 h-4 text-emerald-600" />
                  {t("fertilizers", "Fertilizers")}
                </NavLink>
                <NavLink to="/international-demand" className={navItemClass}>
                  <Globe className="w-4 h-4 text-emerald-600" />
                  {t("globalDemands", "Global Demands")}
                </NavLink>
                <NavLink to="/farmer/weather" className={navItemClass}>
                  <CloudRain className="w-4 h-4 text-emerald-600" />
                  {t("rainForecast", "Rain Forecast")}
                </NavLink>
                <NavLink to="/farmer/ai-assistant" className={navItemClass}>
                  <Bot className="w-4 h-4 text-emerald-600" />
                  <span>{t("kisanAI", "Kisan AI")}</span>
                  <span className="px-1.5 py-0.2 text-[9px] font-bold bg-amber-100 text-amber-800 rounded flex items-center gap-0.5">
                    <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                    Voice
                  </span>
                </NavLink>
              </>
            ) : role === "admin" ? (
              // ADMIN NAVIGATION
              <>
                <NavLink to="/" end className={navItemClass}>
                  {t("home", "Home")}
                </NavLink>
                <NavLink to="/admin/dashboard" className={navItemClass}>
                  Platform Overview
                </NavLink>
                <NavLink to="/admin/crops" className={navItemClass}>
                  Manage Crops
                </NavLink>
                <NavLink to="/admin/market-data" className={navItemClass}>
                  Market Data
                </NavLink>
                <NavLink to="/international-demand" className={navItemClass}>
                  Export Leads
                </NavLink>
                <NavLink to="/admin/users" className={navItemClass}>
                  Users
                </NavLink>
              </>
            ) : (
              // PUBLIC / GUEST NAVIGATION
              <>
                <NavLink to="/" end className={navItemClass}>
                  {t("home", "Home")}
                </NavLink>
                <NavLink to="/how-it-works" className={navItemClass}>
                  {t("howItWorks", "How It Works")}
                </NavLink>
                <NavLink to="/marketplace" className={navItemClass}>
                  <Store className="w-4 h-4 text-emerald-600" />
                  {t("marketplace", "Marketplace")}
                </NavLink>
                <NavLink to="/weather" className={navItemClass}>
                  <CloudRain className="w-4 h-4 text-emerald-600" />
                  {t("rainForecast", "Rain Forecast")}
                </NavLink>
                <NavLink to="/ai-assistant" className={navItemClass}>
                  <Bot className="w-4 h-4 text-emerald-600" />
                  <span>{t("kisanAI", "Kisan AI")}</span>
                  <span className="px-1.5 py-0.2 text-[9px] font-bold bg-amber-100 text-amber-800 rounded flex items-center gap-0.5">
                    <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                    Voice
                  </span>
                </NavLink>
                <NavLink to="/international-demand" className={navItemClass}>
                  <Globe className="w-4 h-4 text-sky-700" />
                  {t("globalDemands", "Global Demands")}
                  <span className="px-1.5 py-0.2 text-[9px] font-bold bg-amber-100 text-amber-800 rounded">
                    Govt
                  </span>
                </NavLink>
                <NavLink to="/market-prices" className={navItemClass}>
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  {t("mandiPrices", "Mandi Prices")}
                </NavLink>
                <NavLink to="/crops" className={navItemClass}>
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  {t("cropGuide", "Crop Guide")}
                </NavLink>
                <NavLink to="/about" className={navItemClass}>
                  {t("about", "About")}
                </NavLink>
              </>
            )}
          </div>

          {/* Right Action / Language Selector & User Profile */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Multi-Language Dropdown */}
            <LanguageSelector />

            {currentUser ? (
              <div className="flex items-center gap-2.5">
                <Link
                  to={getDashboardLink()}
                  className={`inline-flex items-center gap-2 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-xs transition ${
                    role === "buyer"
                      ? "bg-sky-800 hover:bg-sky-900"
                      : "bg-emerald-700 hover:bg-emerald-800"
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>
                    {role === "farmer" && t("farmerPortal", "Farmer Portal")}
                    {role === "buyer" && t("buyerPortal", "Buyer Portal")}
                    {role === "admin" && t("adminPanel", "Admin Panel")}
                  </span>
                </Link>

                <div className="flex items-center gap-2 pl-2 border-l border-stone-200">
                  <div className="text-right">
                    <p className="text-xs font-bold text-stone-900 leading-tight">
                      {currentUser.name}
                    </p>
                    <p
                      className={`text-[10px] uppercase font-semibold ${
                        role === "buyer" ? "text-sky-700" : "text-emerald-700"
                      }`}
                    >
                      {role}
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    title={t("logout", "Logout")}
                    className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="text-stone-700 hover:text-emerald-700 font-bold text-xs px-3 py-2 rounded-xl hover:bg-stone-50 transition"
                >
                  {t("signIn", "Sign In")}
                </Link>
                <Link
                  to="/register"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-xs transition"
                >
                  {t("register", "Get Started")}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-xl">
          {role === "buyer" ? (
            // Mobile Buyer Links
            <>
              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium"
              >
                {t("home", "Home")}
              </NavLink>
              <NavLink
                to="/marketplace"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sky-800 font-semibold flex items-center gap-2"
              >
                <Store className="w-4 h-4" /> {t("browseProduce", "Browse Produce")}
              </NavLink>
              <NavLink
                to="/international-demand"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sky-800 font-semibold flex items-center gap-2"
              >
                <Globe className="w-4 h-4" /> {t("globalDemands", "Global Export Demands")}
              </NavLink>
              <NavLink
                to="/market-prices"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4" /> {t("mandiLiveRates", "Mandi Live Rates")}
              </NavLink>
              <NavLink
                to="/buyer/inquiries"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> {t("myInquiries", "My Inquiries")}
              </NavLink>
            </>
          ) : role === "farmer" ? (
            // Mobile Farmer Links
            <>
              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium"
              >
                {t("home", "Home")}
              </NavLink>
              <NavLink
                to="/marketplace"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium"
              >
                {t("marketplace", "Marketplace")}
              </NavLink>
              <NavLink
                to="/crops"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium"
              >
                {t("cropGuide", "Crop Guide")}
              </NavLink>
              <NavLink
                to="/market-prices"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium"
              >
                {t("mandiPrices", "Mandi Prices")}
              </NavLink>
              <NavLink
                to="/fertilizers"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium"
              >
                {t("fertilizers", "Fertilizer Guide")}
              </NavLink>
              <NavLink
                to="/international-demand"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium"
              >
                {t("globalDemands", "Global Demands")}
              </NavLink>
              <NavLink
                to="/farmer/weather"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium flex items-center gap-2"
              >
                <CloudRain className="w-4 h-4 text-emerald-600" />
                {t("rainForecast", "Rain Forecast")}
              </NavLink>
              <NavLink
                to="/farmer/ai-assistant"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-emerald-800 font-bold flex items-center gap-2"
              >
                <Bot className="w-4 h-4 text-emerald-600" />
                <span>{t("kisanAI", "Kisan AI Voice Assistant")}</span>
              </NavLink>
            </>
          ) : (
            // Mobile Public Links
            <>
              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium"
              >
                {t("home", "Home")}
              </NavLink>
              <NavLink
                to="/how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium"
              >
                {t("howItWorks", "How It Works")}
              </NavLink>
              <NavLink
                to="/marketplace"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium"
              >
                {t("marketplace", "Marketplace")}
              </NavLink>
              <NavLink
                to="/weather"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium flex items-center gap-2"
              >
                <CloudRain className="w-4 h-4 text-emerald-600" />
                {t("rainForecast", "Rain Forecast")}
              </NavLink>
              <NavLink
                to="/ai-assistant"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-emerald-800 font-bold flex items-center gap-2"
              >
                <Bot className="w-4 h-4 text-emerald-600" />
                <span>{t("kisanAI", "Kisan AI Voice Assistant")}</span>
              </NavLink>
              <NavLink
                to="/international-demand"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sky-800 font-medium"
              >
                {t("globalDemands", "Global Export Demands")}
              </NavLink>
              <NavLink
                to="/market-prices"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium"
              >
                {t("mandiPrices", "Mandi Prices")}
              </NavLink>
              <NavLink
                to="/crops"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium"
              >
                {t("cropGuide", "Crop Guide")}
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-stone-700 font-medium"
              >
                {t("about", "About Project")}
              </NavLink>
            </>
          )}

          <div className="pt-4 border-t border-stone-200">
            {currentUser ? (
              <div className="space-y-2">
                <Link
                  to={getDashboardLink()}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center justify-center gap-2 text-white py-2.5 rounded-xl font-bold text-sm ${
                    role === "buyer" ? "bg-sky-800" : "bg-emerald-700"
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  {t("dashboard", "Dashboard")} ({role})
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 text-rose-600 bg-rose-50 py-2.5 rounded-xl font-bold text-sm"
                >
                  <LogOut className="w-4 h-4" />
                  {t("logout", "Sign Out")} ({currentUser.name})
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2.5 bg-stone-100 text-stone-800 font-bold rounded-xl text-sm"
                >
                  {t("signIn", "Sign In")}
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2.5 bg-emerald-700 text-white font-bold rounded-xl text-sm"
                >
                  {t("register", "Register")}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
