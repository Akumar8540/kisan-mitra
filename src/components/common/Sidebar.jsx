import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";
import {
  LayoutDashboard,
  User,
  Compass,
  Calculator,
  Calendar,
  Layers,
  MessageSquare,
  FileText,
  Store,
  Settings,
  Database,
  Users,
  FlaskConical,
  Sprout,
  Globe,
  TrendingUp,
  Building2,
  ShieldCheck,
  CloudRain,
  Bot
} from "lucide-react";

export const Sidebar = () => {
  const { role, currentUser } = useAuth();
  const { t } = useLanguage();

  const farmerLinks = [
    { to: "/farmer/dashboard", label: t("dashboard", "Dashboard"), icon: LayoutDashboard },
    { to: "/farmer/ai-assistant", label: t("kisanAI", "Kisan Mitra AI"), icon: Bot },
    { to: "/farmer/weather", label: t("rainForecast", "Rain & Weather"), icon: CloudRain },
    { to: "/farmer/profile", label: t("farmProfile", "Farm Profile"), icon: User },
    { to: "/farmer/advisor", label: t("cropAdvisor", "Crop Advisor"), icon: Compass },
    { to: "/farmer/input-calculator", label: t("inputCalculator", "Input Calculator"), icon: Calculator },
    { to: "/farmer/calendar", label: t("seasonalCalendar", "Seasonal Calendar"), icon: Calendar },
    { to: "/farmer/listings", label: t("myListings", "My Harvest Listings"), icon: Layers },
    { to: "/farmer/inquiries", label: t("myInquiries", "Buyer Inquiries"), icon: MessageSquare },
    { to: "/international-demand", label: t("globalDemands", "Global Export Demands"), icon: Globe },
    { to: "/farmer/reports", label: t("reports", "Reports & CSV Export"), icon: FileText }
  ];

  const buyerLinks = [
    { to: "/buyer/dashboard", label: t("dashboard", "Buyer Dashboard"), icon: LayoutDashboard },
    { to: "/buyer/marketplace", label: t("browseProduce", "Browse Produce"), icon: Store },
    { to: "/buyer/international-demand", label: t("globalDemands", "Global Export Demands"), icon: Globe },
    { to: "/market-prices", label: t("mandiLiveRates", "Mandi Live Rates"), icon: TrendingUp },
    { to: "/buyer/inquiries", label: t("myInquiries", "My Inquiries"), icon: MessageSquare },
    { to: "/buyer/profile", label: "Buyer Profile", icon: User }
  ];

  const adminLinks = [
    { to: "/admin/dashboard", label: "Platform Overview", icon: LayoutDashboard },
    { to: "/admin/crops", label: "Manage Crops", icon: Sprout },
    { to: "/admin/market-data", label: "Manage Market Data", icon: Database },
    { to: "/international-demand", label: t("globalDemands", "Global Export Leads"), icon: Globe },
    { to: "/admin/fertilizers", label: "Manage Fertilizers", icon: FlaskConical },
    { to: "/admin/users", label: "Manage Users", icon: Users }
  ];

  const links = role === "farmer" ? farmerLinks : role === "buyer" ? buyerLinks : adminLinks;

  return (
    <aside className="w-64 bg-white border-r border-stone-200 shrink-0 min-h-[calc(100vh-4rem)] flex flex-col justify-between p-4">
      <div>
        {/* User Card */}
        <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200 mb-6 flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
              role === "buyer"
                ? "bg-sky-100 text-sky-800"
                : "bg-emerald-100 text-emerald-800"
            }`}
          >
            {currentUser?.name?.charAt(0) || (role === "buyer" ? "B" : "F")}
          </div>
          <div className="overflow-hidden">
            <h4 className="text-sm font-bold text-stone-900 truncate">
              {currentUser?.name || (role === "buyer" ? "Pooja Agro Traders" : "Ramesh Patel")}
            </h4>
            <p
              className={`text-xs font-semibold capitalize flex items-center gap-1 ${
                role === "buyer" ? "text-sky-700" : "text-emerald-700"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  role === "buyer" ? "bg-sky-500" : "bg-emerald-500"
                }`}
              ></span>
              {role === "buyer" ? "Commercial Buyer" : `${role} Account`}
            </p>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to.endsWith("/dashboard")}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? role === "buyer"
                        ? "bg-sky-800 text-white shadow-xs font-semibold"
                        : "bg-emerald-700 text-white shadow-xs font-semibold"
                      : role === "buyer"
                      ? "text-stone-600 hover:text-sky-800 hover:bg-sky-50"
                      : "text-stone-600 hover:text-emerald-700 hover:bg-stone-50"
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Information Widget */}
      <div
        className={`p-3.5 rounded-2xl border text-xs ${
          role === "buyer"
            ? "bg-sky-50/70 border-sky-200 text-sky-900"
            : "bg-emerald-50/70 border-emerald-200 text-emerald-900"
        }`}
      >
        <p className="font-semibold mb-1 flex items-center gap-1.5">
          {role === "buyer" ? (
            <Building2 className="w-3.5 h-3.5 text-sky-700" />
          ) : (
            <Sprout className="w-3.5 h-3.5 text-emerald-700" />
          )}
          <span>{role === "buyer" ? "Agri-Procurement Portal" : t("brandName", "Kisan Mitra")}</span>
        </p>
        <p className="text-stone-600 leading-relaxed text-[11px]">
          {role === "buyer"
            ? "Trade leads grounded in APEDA & e-NAM verified agricultural trade records."
            : "All farm profiles and listings are stored securely in your LocalStorage database."}
        </p>
      </div>
    </aside>
  );
};
