import React from "react";
import { Link } from "react-router-dom";
import {
  Sprout,
  Store,
  TrendingUp,
  Compass,
  Calculator,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Users,
  MapPin,
  ChevronRight,
  AlertCircle,
  Globe,
  Award,
  Building2,
  Ship,
  Sparkles,
  BadgeCheck
} from "lucide-react";
import { cropCatalogData } from "../../data/cropCatalogData";
import { initialListings } from "../../data/sampleListingsData";
import { internationalDemandData } from "../../data/internationalDemandData";
import { CropCard } from "../../components/cards/CropCard";
import { ListingCard } from "../../components/cards/ListingCard";

export const Home = () => {
  const featuredCrops = cropCatalogData.slice(0, 3);
  const featuredListings = initialListings.slice(0, 3);
  const featuredExports = internationalDemandData.slice(0, 3);

  const journeySteps = [
    {
      num: "01",
      title: "Enter Farm Profile",
      desc: "Record your land size, soil type, irrigation sources, and current farming season.",
      icon: Sprout
    },
    {
      num: "02",
      title: "Get Crop Options",
      desc: "Receive explainable, rule-based crop options matching your farm's exact conditions.",
      icon: Compass
    },
    {
      num: "03",
      title: "Plan Seed & Inputs",
      desc: "Calculate precise seed quantities and basal N-P-K fertilizer bags needed.",
      icon: Calculator
    },
    {
      num: "04",
      title: "Analyze Mandi Prices",
      desc: "Track 30-day price trends across nearby APMC markets to maximize selling price.",
      icon: TrendingUp
    },
    {
      num: "05",
      title: "Sell Directly or Export",
      desc: "List your harvested produce for domestic buyers or connect to APEDA export leads.",
      icon: Store
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* 1. OFFICIAL STATUTORY HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-emerald-600/20 via-sky-600/20 to-transparent blur-3xl pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          {/* Header Institutional Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              National Agriculture Commerce & Advisory Network
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
              <BadgeCheck className="w-3.5 h-3.5 text-sky-400" />
              e-NAM & APEDA Integrated Platform
            </span>
          </div>

          {/* Main Title */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              From Soil Intelligence to{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                Direct Domestic & Global Markets
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              One unified digital infrastructure empowering Indian farmers with scientific crop advisory, transparent APMC mandi price discovery, and direct commercial contracts with institutional buyers and global exporters.
            </p>
          </div>

          {/* Dual Action Gateways */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-4">
            {/* Farmer Gateway Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/80 to-slate-900 border border-emerald-700/40 shadow-xl flex flex-col justify-between space-y-4 hover:border-emerald-500/60 transition">
              <div>
                <span className="text-[11px] uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-1.5">
                  <Sprout className="w-4 h-4" /> For Farmers & Producers
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  Crop Advisor, Input Calculator & Mandi Rates
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Calculate exact fertilizer bags, discover optimal crops for your land, and list your harvest with 0% broker commission.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  to="/farmer/advisor"
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition shadow-sm flex items-center gap-1.5"
                >
                  <span>Recommend Crop</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/farmer/dashboard"
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition"
                >
                  Farmer Portal
                </Link>
              </div>
            </div>

            {/* Buyer & Exporter Gateway Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-950/80 to-slate-900 border border-sky-700/40 shadow-xl flex flex-col justify-between space-y-4 hover:border-sky-500/60 transition">
              <div>
                <span className="text-[11px] uppercase font-bold text-sky-400 tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" /> For Institutional Buyers & Exporters
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  Direct Harvest Lots & Global Export Demands
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Procure directly from verified farm clusters, view APEDA export leads for UAE, USA & Europe, and track live APMC wholesale auctions.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  to="/international-demand"
                  className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-xs transition shadow-sm flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Global Export Leads</span>
                </Link>
                <Link
                  to="/marketplace"
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition"
                >
                  Browse Lots
                </Link>
              </div>
            </div>
          </div>

          {/* Live High-Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left pt-6">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <p className="text-2xl font-black text-emerald-400">100%</p>
              <p className="text-xs text-slate-300 font-bold">Transparent Price Discovery</p>
              <span className="text-[10px] text-slate-500">Agmarknet & e-NAM Feeds</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <p className="text-2xl font-black text-sky-400">0%</p>
              <p className="text-xs text-slate-300 font-bold">Intermediary Commission</p>
              <span className="text-[10px] text-slate-500">Direct Farmer Settlements</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <p className="text-2xl font-black text-amber-400">$28.4M</p>
              <p className="text-xs text-slate-300 font-bold">International Trade Demands</p>
              <span className="text-[10px] text-slate-500">APEDA & DGFT Verified</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <p className="text-2xl font-black text-white">24 APMCs</p>
              <p className="text-xs text-slate-300 font-bold">Benchmark Mandi Yards</p>
              <span className="text-[10px] text-slate-500">Lasalgaon, Unjha, Guntur</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED GLOBAL EXPORT DEMANDS (APEDA / DGFT SHOWCASE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 border-b border-stone-200 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-900 uppercase tracking-wider">
                Government Verified Leads
              </span>
              <span className="text-xs text-stone-500">APEDA Agri-Exchange</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mt-1">
              International Institutional Export Contracts
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Direct procurement orders from foreign buyers offering high profit margins over domestic mandis
            </p>
          </div>
          <Link
            to="/international-demand"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition shrink-0 shadow-xs"
          >
            <span>Explore All 14 Global Leads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredExports.map((lead) => (
            <div
              key={lead.id}
              className="bg-white rounded-3xl border border-stone-200 shadow-xs hover:shadow-md hover:border-emerald-300 transition flex flex-col justify-between overflow-hidden"
            >
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-stone-100 text-stone-700 font-mono">
                    HS: {lead.hsCode}
                  </span>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-sky-50 text-sky-900 rounded-xl text-xs font-bold border border-sky-100">
                    <span>{lead.countryFlag}</span>
                    <span>{lead.importingCountry}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-stone-900 leading-snug">
                    {lead.commodity}
                  </h3>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Target: {lead.destinationPort}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">FOB Export Price</span>
                    <span className="text-base font-black text-emerald-900">
                      ${lead.fobPriceUsd}
                      <span className="text-[10px] font-normal text-stone-500"> / MT</span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 block">
                      ₹{lead.inrPerQuintal}/Qtl
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-emerald-700 block">Realization</span>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                      +{lead.exportPremiumPercent}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 text-[11px]">Volume: {lead.demandQuantity.split("(")[0]}</span>
                <Link
                  to={`/international-demand`}
                  className="font-bold text-sky-800 hover:text-sky-950 flex items-center gap-1 text-xs"
                >
                  <span>View Dossier</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE COMPLETE FARMER JOURNEY */}
      <section className="bg-stone-100 py-16 px-4 sm:px-6 lg:px-8 border-y border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">
              End-to-End Workflow
            </h2>
            <h3 className="text-3xl font-black text-stone-900 tracking-tight">
              The Farmer Journey in 5 Simple Steps
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              From land preparation to receiving guaranteed payment directly in your bank account
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {journeySteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between relative"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">
                        {step.num}
                      </span>
                      <Icon className="w-5 h-5 text-stone-400" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURED SUITABLE CROPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">
              Agronomic Knowledgebase
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
              Curated Crop Catalog
            </h3>
            <p className="text-sm text-stone-600">
              Verified package of practices for Kharif, Rabi, and Zaid seasons
            </p>
          </div>
          <Link
            to="/crops"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-900"
          >
            <span>View All 15+ Crops</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCrops.map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      </section>

      {/* 5. DIRECT MARKETPLACE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">
              Direct Farmer Produce
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
              Live Harvest Lots
            </h3>
            <p className="text-sm text-stone-600">
              Fresh harvests listed directly by verified farmers with zero commission
            </p>
          </div>
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-900"
          >
            <span>Browse Full Marketplace</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredListings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              onInquire={() => window.location.href = `/marketplace?inquire=${listing.id}`}
              onViewDetails={() => window.location.href = `/marketplace?view=${listing.id}`}
            />
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-slate-900 to-sky-950 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-800/30">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to take control of your agricultural production and sales?
            </h3>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
              Create your free profile today. Discover your optimal crop match, calculate precise fertilizer bags, explore nearby APMC mandi auctions, and participate in high-value global trade.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <Link
              to="/farmer/profile"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-md transition"
            >
              Farmer Profile
            </Link>
            <Link
              to="/buyer/dashboard"
              className="px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-stone-100 font-bold text-sm transition"
            >
              Buyer Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
