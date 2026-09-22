import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Globe, UserCheck, ShieldCheck, CheckCircle2 } from "lucide-react";

export const DemoBanner = () => {
  const { currentUser, loginDemo } = useAuth();

  return (
    <div className="bg-stone-900 border-b border-stone-800 text-white px-4 py-2 text-xs md:text-sm font-medium">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-700 text-white tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
            LIVE APMC & APEDA NETWORK
          </span>
          <span className="flex items-center gap-1.5 text-stone-300 text-xs">
            <span>Direct Farmer-to-Buyer Marketplace & Institutional Export Desk</span>
          </span>
        </div>

        {/* 1-Click Role Switcher for Seamless Testing */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-stone-400 text-xs hidden lg:inline">Switch Perspective:</span>
          <button
            onClick={() => loginDemo("FARMER")}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              currentUser?.role === "farmer"
                ? "bg-emerald-700 text-white shadow-xs"
                : "bg-stone-800 text-stone-300 border border-stone-700 hover:bg-stone-700"
            }`}
          >
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            Farmer View (Ramesh)
          </button>
          <button
            onClick={() => loginDemo("BUYER")}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              currentUser?.role === "buyer"
                ? "bg-sky-700 text-white shadow-xs"
                : "bg-stone-800 text-stone-300 border border-stone-700 hover:bg-stone-700"
            }`}
          >
            <UserCheck className="w-3.5 h-3.5 text-sky-400" />
            Buyer View (Pooja Agro)
          </button>
          <button
            onClick={() => loginDemo("ADMIN")}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              currentUser?.role === "admin"
                ? "bg-amber-600 text-white shadow-xs"
                : "bg-stone-800 text-stone-300 border border-stone-700 hover:bg-stone-700"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Admin Console
          </button>
        </div>
      </div>
    </div>
  );
};
