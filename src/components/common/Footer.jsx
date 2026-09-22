import React from "react";
import { Link } from "react-router-dom";
import { Sprout, Shield, Globe, ExternalLink, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Purpose */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Kisan <span className="text-emerald-400">Mitra</span>
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Empowering Indian farmers through data-driven crop recommendations, transparent mandi intelligence, and direct marketplace connectivity.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-800 border border-stone-700 text-stone-300 text-xs font-medium">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Smart India Hackathon Innovation</span>
            </div>
          </div>

          {/* Col 2: Farmer Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200 mb-3">
              Farmer Advisory
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/farmer/advisor" className="hover:text-emerald-400 transition">
                  Crop Suitability Advisor
                </Link>
              </li>
              <li>
                <Link to="/farmer/input-calculator" className="hover:text-emerald-400 transition">
                  Seed & Nutrient Calculator
                </Link>
              </li>
              <li>
                <Link to="/farmer/calendar" className="hover:text-emerald-400 transition">
                  Seasonal Farming Calendar
                </Link>
              </li>
              <li>
                <Link to="/fertilizers" className="hover:text-emerald-400 transition">
                  Nutrient & Product Guide
                </Link>
              </li>
              <li>
                <Link to="/farmer/reports" className="hover:text-emerald-400 transition">
                  Agricultural Reports & CSV
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Market & Trade */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200 mb-3">
              Market & Export Trade
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/marketplace" className="hover:text-emerald-400 transition">
                  Direct Harvest Marketplace
                </Link>
              </li>
              <li>
                <Link to="/international-demand" className="hover:text-emerald-400 transition flex items-center gap-1">
                  <span>Global Export Demands</span>
                  <span className="px-1 text-[9px] font-bold bg-amber-500 text-stone-950 rounded">
                    APEDA
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/market-prices" className="hover:text-emerald-400 transition">
                  Mandi Price Explorer (APMC)
                </Link>
              </li>
              <li>
                <Link to="/crops" className="hover:text-emerald-400 transition">
                  Indian Crop Knowledgebase
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-emerald-400 transition">
                  Platform Methodology
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Standards & Compliance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200 mb-3">
              Standards & Compliance
            </h4>
            <p className="text-[11px] text-stone-400 leading-relaxed mb-2">
              Crop parameters, APMC wholesale rates, and export specifications conform to AGMARK standards, APEDA export schedules, and ICAR agronomic package of practices.
            </p>
            <p className="text-[11px] text-stone-500 leading-relaxed">
              Ground truth agricultural extension support provided in partnership with local Krishi Vigyan Kendra (KVK) networks.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Kisan Mitra. Built for Smart India Hackathon.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-stone-300 transition">
              About Project
            </Link>
            <span>•</span>
            <Link to="/international-demand" className="hover:text-stone-300 transition">
              Export Desk
            </Link>
            <span>•</span>
            <Link to="/how-it-works" className="hover:text-stone-300 transition">
              Methodology
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
