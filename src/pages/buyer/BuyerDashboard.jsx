import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { marketplaceService } from "../../services/marketplaceService";
import { internationalDemandData } from "../../data/internationalDemandData";
import { currentMarketPrices } from "../../data/marketData";
import { StatCard } from "../../components/cards/StatCard";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import {
  Store,
  MessageSquare,
  CheckCircle2,
  User,
  ArrowRight,
  Layers,
  MapPin,
  Globe,
  TrendingUp,
  Award,
  DollarSign,
  ChevronRight,
  ExternalLink
} from "lucide-react";

export const BuyerDashboard = () => {
  const { currentUser } = useAuth();
  const [inquiries, setInquiries] = useState([]);
  const [recentListings, setRecentListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBuyerData();
  }, [currentUser]);

  const loadBuyerData = async () => {
    setLoading(true);
    try {
      const buyerId = currentUser?.uid || "buyer-1";
      const myInqs = await marketplaceService.getInquiriesForBuyer(buyerId);
      setInquiries(myInqs);

      const allListings = await marketplaceService.getListings();
      setRecentListings(allListings.slice(0, 4));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner label="Loading buyer dashboard..." />;
  }

  const acceptedCount = inquiries.filter((i) => i.status === "Accepted").length;
  const pendingCount = inquiries.filter((i) => i.status === "Pending").length;
  const topExportDemands = internationalDemandData.slice(0, 3);
  const sampleMandiRates = currentMarketPrices.slice(0, 4);

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-sky-800/30">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block">
              Commercial Buyer & Institutional Procurement Portal
            </span>
            <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded-full border border-emerald-400/30">
              e-NAM & APEDA Grounded
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Welcome, {currentUser?.name || "Pooja Agro Traders"}!
          </h1>
          <p className="text-xs sm:text-sm text-sky-200 mt-1 max-w-2xl leading-relaxed">
            Procure authentic farm produce directly from verified farmers without middlemen, fulfill high-margin international export orders, and track live APMC wholesale rates.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 flex-wrap">
          <Link
            to="/buyer/international-demand"
            className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 rounded-2xl font-bold text-xs transition shadow-sm flex items-center gap-1.5"
          >
            <Globe className="w-4 h-4 text-stone-950" />
            <span>Global Export Leads</span>
          </Link>

          <Link
            to="/buyer/marketplace"
            className="px-4 py-2.5 bg-white text-sky-950 rounded-2xl font-bold text-xs hover:bg-sky-50 transition shadow-sm flex items-center gap-1.5"
          >
            <Store className="w-4 h-4 text-sky-700" />
            <span>Browse Produce Lots</span>
          </Link>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <StatCard
          title="Active Inquiries Sent"
          value={inquiries.length}
          subtitle={`${pendingCount} Awaiting Response`}
          icon={MessageSquare}
          color="sky"
        />
        <StatCard
          title="Accepted Trade Offers"
          value={acceptedCount}
          subtitle="Ready for Inspection & Dispatch"
          icon={CheckCircle2}
          color="emerald"
        />
        <StatCard
          title="Global Export Leads"
          value={internationalDemandData.length}
          subtitle="APEDA & DGFT Verified"
          icon={Globe}
          color="amber"
        />
        <StatCard
          title="Domestic Harvest Lots"
          value={recentListings.length}
          subtitle="Available for Bulk Bidding"
          icon={Layers}
          color="stone"
        />
      </div>

      {/* Featured Global Export Demand (APEDA / DGFT Desk) */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-stone-900">
                Government Verified International Export Demands
              </h3>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold rounded-md">
                APEDA Leads
              </span>
            </div>
            <p className="text-xs text-stone-500">
              Institutional export contracts with guaranteed Letter of Credit payment terms
            </p>
          </div>
          <Link
            to="/buyer/international-demand"
            className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1"
          >
            <span>View All Leads & Documentation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topExportDemands.map((lead) => (
            <div
              key={lead.id}
              className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/20 transition flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-200 text-stone-700 font-mono">
                    HS: {lead.hsCode}
                  </span>
                  <span className="text-xs font-bold text-sky-900 flex items-center gap-1">
                    <span>{lead.countryFlag}</span>
                    <span>{lead.importingCountry}</span>
                  </span>
                </div>

                <h4 className="text-xs font-bold text-stone-900 line-clamp-1">
                  {lead.commodity}
                </h4>
                <p className="text-[11px] text-stone-500">
                  Target: {lead.destinationPort}
                </p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 block font-semibold">Export FOB Price</span>
                  <span className="text-sm font-black text-emerald-800">
                    ${lead.fobPriceUsd}
                    <span className="text-[10px] font-normal text-stone-500"> / MT</span>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 block">
                    ₹{lead.inrPerQuintal}/Qtl
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-400 block font-semibold">Margin</span>
                  <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    +{lead.exportPremiumPercent}%
                  </span>
                </div>
              </div>

              <Link
                to="/buyer/international-demand"
                className="w-full text-center py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1"
              >
                <span>View Specs & Quote</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Live Mandi Rate Arbitrage Snapshot */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Live Mandi Price Intelligence Snapshot
            </h3>
            <p className="text-xs text-stone-500">
              Real-time daily modal prices and arrivals from major APMC trading yards
            </p>
          </div>
          <Link
            to="/market-prices"
            className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1"
          >
            <span>Full Mandi Bulletin</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {sampleMandiRates.map((item) => (
            <div
              key={item.id}
              className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1 text-xs"
            >
              <div className="flex items-center justify-between text-stone-400 text-[10px] font-semibold">
                <span className="truncate">{item.mandi}</span>
                <span>{item.district}</span>
              </div>
              <p className="font-bold text-stone-900 text-sm">{item.crop}</p>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-emerald-800 font-extrabold text-base">
                  ₹{item.modalPrice?.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] text-stone-500">{item.unit}</span>
              </div>
              <p className="text-[10px] text-stone-400 truncate">
                Arrivals: {item.arrivalQuantity}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Sent Inquiries */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-stone-900">Your Recent Procurement Inquiries</h3>
            <p className="text-xs text-stone-500">Track negotiation status and farmer contact details</p>
          </div>
          <Link
            to="/buyer/inquiries"
            className="text-xs font-bold text-sky-700 hover:text-sky-900"
          >
            View All ({inquiries.length})
          </Link>
        </div>

        {inquiries.length === 0 ? (
          <div className="py-8 text-center text-xs text-stone-500">
            You haven't submitted any purchase inquiries yet. Explore the marketplace to connect with farmers.
          </div>
        ) : (
          <div className="divide-y divide-stone-100">
            {inquiries.slice(0, 3).map((inq) => (
              <div key={inq.id} className="py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900">{inq.crop}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        inq.status === "Accepted"
                          ? "bg-emerald-100 text-emerald-800"
                          : inq.status === "Pending"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {inq.status}
                    </span>
                  </div>
                  <p className="text-stone-500 mt-0.5">
                    Offered: ₹{inq.targetPrice}/Qtl for {inq.requestedQuantity} {inq.unit}
                  </p>
                </div>

                <Link
                  to="/buyer/inquiries"
                  className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1"
                >
                  <span>Check Status</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fresh Produce Opportunities */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 space-y-4 shadow-sm">
        <h3 className="text-base font-bold text-stone-900">Recently Listed Farmer Lots</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recentListings.map((l) => (
            <div
              key={l.id}
              className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-between gap-3 text-xs"
            >
              <div>
                <p className="font-bold text-stone-900">{l.crop} ({l.variety})</p>
                <p className="text-stone-500">{l.quantity} {l.unit} • {l.qualityGrade}</p>
                <p className="text-[11px] text-stone-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" /> {l.village}, {l.district}
                </p>
              </div>
              <div className="text-right">
                <p className="font-black text-emerald-800 text-sm">₹{l.pricePerUnit}</p>
                <Link
                  to={`/marketplace?view=${l.id}`}
                  className="inline-block mt-1 px-3 py-1 bg-white hover:bg-stone-200 rounded-lg font-bold text-[11px] text-stone-800 border border-stone-200 shadow-xs"
                >
                  View Lot
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
