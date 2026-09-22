import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCollection, STORAGE_KEYS } from "../../services/storageRepo";
import { StatCard } from "../../components/cards/StatCard";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import {
  ShieldCheck,
  Users,
  Sprout,
  Database,
  Layers,
  FlaskConical,
  Activity,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const AdminDashboard = () => {
  const [stats, setStats] = useState({
    cropsCount: 0,
    listingsCount: 0,
    inquiriesCount: 0,
    marketRecordsCount: 0,
    fertilizersCount: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const crops = getCollection(STORAGE_KEYS.CROP_CATALOG);
    const listings = getCollection(STORAGE_KEYS.CROP_LISTINGS);
    const inqs = getCollection(STORAGE_KEYS.BUYER_INQUIRIES);
    const prices = getCollection(STORAGE_KEYS.MARKET_PRICES);
    const ferts = getCollection(STORAGE_KEYS.FERTILIZER_PRODUCTS);

    setStats({
      cropsCount: crops.length,
      listingsCount: listings.length,
      inquiriesCount: inqs.length,
      marketRecordsCount: prices.length,
      fertilizersCount: ferts.length
    });
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingSpinner label="Loading administrative telemetry..." />;
  }

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white p-6 sm:p-8 rounded-3xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 block">
            System Operations Control Center
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Kisan Mitra Administration
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            Curate agricultural datasets, monitor marketplace activity, and inspect platform users.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
          <Activity className="w-3.5 h-3.5" />
          <span>Operational Health: Normal</span>
        </div>
      </div>

      {/* KPI Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Curated Crop Database"
          value={stats.cropsCount}
          subtitle="Kharif, Rabi, Zaid Packages"
          icon={Sprout}
          color="emerald"
        />
        <StatCard
          title="Marketplace Produce Lots"
          value={stats.listingsCount}
          subtitle="Active Farmer Listings"
          icon={Layers}
          color="sky"
        />
        <StatCard
          title="Direct Buyer Inquiries"
          value={stats.inquiriesCount}
          subtitle="Disintermediation Trades"
          icon={Activity}
          color="amber"
        />
        <StatCard
          title="Mandi Price Benchmarks"
          value={stats.marketRecordsCount}
          subtitle="APMC Market Records"
          icon={Database}
          color="stone"
        />
      </div>

      {/* Admin Modules Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-stone-900">Curated Agronomic Data Management</h3>
          <p className="text-xs text-stone-500">
            Maintain crop duration, verified seed rates, N-P-K nutrient tables, and input fertilizers.
          </p>
          <div className="space-y-2 pt-2">
            <Link
              to="/admin/crops"
              className="p-3 rounded-xl bg-stone-50 hover:bg-emerald-50 border border-stone-100 flex items-center justify-between text-xs font-bold text-stone-800 hover:text-emerald-900 transition"
            >
              <span className="flex items-center gap-2">
                <Sprout className="w-4 h-4 text-emerald-700" />
                <span>Manage Crop Catalog ({stats.cropsCount} crops)</span>
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/admin/fertilizers"
              className="p-3 rounded-xl bg-stone-50 hover:bg-emerald-50 border border-stone-100 flex items-center justify-between text-xs font-bold text-stone-800 hover:text-emerald-900 transition"
            >
              <span className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-emerald-700" />
                <span>Manage Fertilizer Catalog ({stats.fertilizersCount} products)</span>
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-stone-900">Market & User Operations</h3>
          <p className="text-xs text-stone-500">
            Update benchmark APMC price arrivals, review buyers, and audit registered accounts.
          </p>
          <div className="space-y-2 pt-2">
            <Link
              to="/admin/market-data"
              className="p-3 rounded-xl bg-stone-50 hover:bg-emerald-50 border border-stone-100 flex items-center justify-between text-xs font-bold text-stone-800 hover:text-emerald-900 transition"
            >
              <span className="flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-700" />
                <span>Manage APMC Mandi Records ({stats.marketRecordsCount} records)</span>
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/admin/users"
              className="p-3 rounded-xl bg-stone-50 hover:bg-emerald-50 border border-stone-100 flex items-center justify-between text-xs font-bold text-stone-800 hover:text-emerald-900 transition"
            >
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-700" />
                <span>Inspect Platform Farmers & Buyers</span>
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Platform System Event Logs */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 space-y-4 shadow-sm">
        <h3 className="text-base font-bold text-stone-900">Recent Platform Telemetry Events</h3>
        <div className="divide-y divide-stone-100 text-xs text-stone-600">
          <div className="py-2.5 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>LocalStorage Repository initialized successfully.</span>
            </span>
            <span className="text-stone-400">19 Sept 2026, 10:00 AM</span>
          </div>
          <div className="py-2.5 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>15 Indian Crop Packages of Practices seeded.</span>
            </span>
            <span className="text-stone-400">19 Sept 2026, 10:00 AM</span>
          </div>
          <div className="py-2.5 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Benchmark APMC price series loaded for 7 states.</span>
            </span>
            <span className="text-stone-400">19 Sept 2026, 10:00 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
