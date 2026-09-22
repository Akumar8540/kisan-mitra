import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNotification } from "../../context/NotificationContext";
import {
  internationalDemandData,
  exportSummaryStats
} from "../../data/internationalDemandData";
import {
  Globe,
  Ship,
  FileCheck,
  Award,
  TrendingUp,
  DollarSign,
  Package,
  ShieldCheck,
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Info,
  Building2,
  Calendar,
  Layers,
  ArrowUpRight,
  X,
  FileText,
  BadgeCheck,
  Send,
  HelpCircle,
  Clock,
  Briefcase,
  SlidersHorizontal,
  Anchor,
  Sparkles,
  ArrowRight
} from "lucide-react";

export const InternationalDemand = () => {
  const { role, currentUser } = useAuth();
  const { notify } = useNotification();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [currencyMode, setCurrencyMode] = useState("both"); // "usd" | "inr" | "both"
  const [showReadinessTool, setShowReadinessTool] = useState(false);

  // Self-assessment readiness checklist state
  const [readinessChecklist, setReadinessChecklist] = useState({
    iec: true,
    rcmc: false,
    fssai: true,
    labTest: false,
    adCode: true
  });

  const [activeModalLead, setActiveModalLead] = useState(null);
  const [activeModalTab, setActiveModalTab] = useState("documents"); // documents | specs | packaging | incentives
  const [quoteModalLead, setQuoteModalLead] = useState(null);
  const [quoteForm, setQuoteForm] = useState({
    supplierName: "",
    contactNumber: "",
    email: "",
    availableQuantityMT: "",
    offeredFobUsd: "",
    deliveryLeadDays: "20",
    remarks: ""
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState("");

  const categories = [
    "All",
    "Cereals & Grains",
    "Spices & Condiments",
    "Fresh Fruits & Vegetables",
    "Oilseeds & Pulses"
  ];

  const countries = useMemo(() => {
    const set = new Set(internationalDemandData.map((d) => d.importingCountry));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredLeads = useMemo(() => {
    return internationalDemandData.filter((item) => {
      const matchesSearch =
        item.commodity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.hsCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.importingCountry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.destinationPort.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.variety.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const matchesCountry =
        selectedCountry === "All" || item.importingCountry === selectedCountry;

      return matchesSearch && matchesCategory && matchesCountry;
    });
  }, [searchQuery, selectedCategory, selectedCountry]);

  // Calculate readiness score
  const readinessScore = useMemo(() => {
    const values = Object.values(readinessChecklist);
    const count = values.filter(Boolean).length;
    return Math.round((count / values.length) * 100);
  }, [readinessChecklist]);

  const handleOpenQuote = (lead) => {
    setQuoteModalLead(lead);
    setQuoteForm({
      supplierName: currentUser?.name || "Kisan Mitra Verified Producer Co.",
      contactNumber: currentUser?.phone || "+91 98765 43210",
      email: currentUser?.email || "export-desk@kisanmitra.gov.in",
      availableQuantityMT: lead.moq.split(" ")[0] || "50",
      offeredFobUsd: lead.fobPriceUsd.toString(),
      deliveryLeadDays: "21",
      remarks: `Conforming to ${lead.qualitySpecifications.moistureMax} moisture, Sortex cleaned export standards.`
    });
    setQuoteSubmitted(false);
  };

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    const refCode = `KM-EXP-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRefId(refCode);
    setQuoteSubmitted(true);
    notify(
      `Quotation registered successfully! Reference ID: ${refCode}. Facilitation officer will verify documentation within 24h.`,
      "success"
    );
  };

  return (
    <div className="space-y-8 pb-20">
      {/* 1. NATIONAL STATUTORY EMBLEM & LIVE TICKER */}
      <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-xl border border-slate-800">
        {/* Tri-color Accent Bar */}
        <div className="h-1.5 bg-gradient-to-r from-amber-500 via-white to-emerald-600 w-full"></div>

        {/* Live Export Order Ticker */}
        <div className="bg-slate-950/80 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs overflow-hidden">
          <div className="flex items-center gap-2 shrink-0 pr-3 border-r border-slate-800 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            LIVE TRADE REGISTRY
          </div>
          <div className="overflow-hidden whitespace-nowrap text-[11px] text-slate-300 font-medium px-3">
            <span className="inline-block animate-pulse">
              ⚡ UAE: 1,200 MT Basmati Rice (1121) • VIETNAM: 500 MT Teja S17 Chilli • USA: 250 MT Cumin Seeds (Jeera) • SAUDI ARABIA: 800 MT Nashik Red Onion • NETHERLANDS: 600 MT Cavendish Bananas • All Contracts 100% L/C Backed • RoDTEP Benefits Active
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 shrink-0 pl-3 border-l border-slate-800 text-emerald-400 text-[11px] font-semibold">
            <span>RBI FX Ref: 1 USD = ₹86.50</span>
          </div>
        </div>

        {/* Hero Banner Content */}
        <div className="p-6 sm:p-10 relative">
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-bold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                APEDA Agri-Exchange & DGFT International Portal
              </span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-full text-xs font-medium flex items-center gap-1">
                <BadgeCheck className="w-3.5 h-3.5 text-sky-400" />
                Ministry of Commerce & Industry, Govt. of India
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              National Agricultural Export & Trade Gateway
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Official institutional procurement orders from verified global buyers across the Middle East, Europe, North America, and ASEAN. Access real FOB pricing, statutory export documentation checklists, and container specifications to capture high export margins.
            </p>

            {/* High-Impact Stat Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Active Global Demand
                </span>
                <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-0.5">
                  {exportSummaryStats.totalActiveInquiriesVolumeMT}
                </p>
                <span className="text-[10px] text-slate-400">14 Verified Trade Corridors</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Procurement Value
                </span>
                <p className="text-xl sm:text-2xl font-black text-sky-400 mt-0.5">
                  {exportSummaryStats.totalExportValueUSD}
                </p>
                <span className="text-[10px] text-slate-400">Bank L/C Irrevocable</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Avg. Export Realization
                </span>
                <p className="text-xl sm:text-2xl font-black text-amber-400 mt-0.5">
                  +{exportSummaryStats.averageExportPremiumPercent}
                </p>
                <span className="text-[10px] text-slate-400">Above Domestic Mandis</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Govt. Duty Rebate
                </span>
                <p className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  Up to 3.1%
                </p>
                <span className="text-[10px] text-slate-400">RoDTEP Cash Incentive</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. EXPORT READINESS & STATUTORY COMPLIANCE CHECKER */}
      <div className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900">
                Export Readiness & Statutory License Evaluator
              </h3>
              <p className="text-xs text-stone-500">
                Verify mandatory certifications needed to participate in bilateral government trade leads
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-stone-400 block">
                Your Readiness
              </span>
              <span className={`text-base font-black ${
                readinessScore >= 80 ? "text-emerald-700" : "text-amber-600"
              }`}>
                {readinessScore}% Complete
              </span>
            </div>

            <button
              onClick={() => setShowReadinessTool(!showReadinessTool)}
              className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-bold text-stone-700 transition flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{showReadinessTool ? "Hide Checklist" : "Audit Licenses"}</span>
            </button>
          </div>
        </div>

        {showReadinessTool && (
          <div className="mt-5 pt-5 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3 animate-in fade-in duration-200">
            {[
              { key: "iec", label: "DGFT IEC Code", desc: "10-digit Import Export Code" },
              { key: "rcmc", label: "APEDA / Spices RCMC", desc: "Commodity board registration" },
              { key: "fssai", label: "Central FSSAI License", desc: "Export food safety standard" },
              { key: "labTest", label: "NABL Lab Testing", desc: "Pesticide & aflatoxin cert." },
              { key: "adCode", label: "Bank AD Code / GST", desc: "Authorized Dealer ICEGATE link" }
            ].map((item) => (
              <label
                key={item.key}
                className={`p-3 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                  readinessChecklist[item.key]
                    ? "bg-emerald-50/70 border-emerald-300 text-emerald-950"
                    : "bg-stone-50 border-stone-200 text-stone-700"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold">{item.label}</span>
                  <input
                    type="checkbox"
                    checked={readinessChecklist[item.key]}
                    onChange={(e) =>
                      setReadinessChecklist({
                        ...readinessChecklist,
                        [item.key]: e.target.checked
                      })
                    }
                    className="rounded text-emerald-700 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
                  />
                </div>
                <span className="text-[10px] text-stone-500">{item.desc}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 3. FILTER, SEARCH & CURRENCY SWITCHER BAR */}
      <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search by Commodity (e.g. Basmati, Teja Chilli, Cumin), ITC-HS Code, or Destination Country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white transition"
            />
          </div>

          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
            {/* Country Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-500 font-bold shrink-0">Market:</span>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="py-2 px-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-800 focus:ring-2 focus:ring-emerald-600"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Currency Mode Switcher */}
            <div className="flex items-center bg-stone-100 p-1 rounded-xl text-xs font-bold text-stone-700 shrink-0">
              <button
                onClick={() => setCurrencyMode("both")}
                className={`px-2.5 py-1 rounded-lg transition ${
                  currencyMode === "both"
                    ? "bg-white text-emerald-900 shadow-xs font-black"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                USD & INR
              </button>
              <button
                onClick={() => setCurrencyMode("usd")}
                className={`px-2.5 py-1 rounded-lg transition ${
                  currencyMode === "usd"
                    ? "bg-white text-emerald-900 shadow-xs font-black"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrencyMode("inr")}
                className={`px-2.5 py-1 rounded-lg transition ${
                  currencyMode === "inr"
                    ? "bg-white text-emerald-900 shadow-xs font-black"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                INR (₹)
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 4. TRADE LEADS CARD GRID */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-stone-500 px-1">
          <span>
            Displaying <strong>{filteredLeads.length}</strong> active trade leads matching criteria
          </span>
          <span className="hidden sm:inline font-mono text-[11px]">
            Statutory Source: APEDA Agri-Exchange • DGFT EDI Integration
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Top Header */}
              <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{lead.countryFlag}</span>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-400 block">
                      {lead.importingCountry}
                    </span>
                    <span className="text-[11px] text-slate-300">
                      Discharge Port: {lead.destinationPort}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-extrabold bg-slate-800 text-amber-300 border border-slate-700">
                    HS: {lead.hsCode}
                  </span>
                  <span className="block text-[10px] text-slate-400 mt-0.5 font-mono">
                    {lead.tradeLeadId}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold rounded-md border border-emerald-200">
                      {lead.category}
                    </span>
                    <span className="text-[11px] text-stone-400">
                      Term: <strong className="text-stone-700">{lead.contractType}</strong>
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-stone-900 group-hover:text-emerald-800 transition">
                    {lead.commodity}
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Grade / Variety: <span className="font-semibold text-stone-700">{lead.variety}</span>
                  </p>
                </div>

                {/* Shipping Route Strip */}
                <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200/80 flex items-center justify-between text-xs text-stone-700">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Anchor className="w-3.5 h-3.5 text-stone-400" />
                    <span>{lead.indianDeparturePort}</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-700 font-bold text-[11px]">
                    <span>──────🚢──────➔</span>
                  </div>
                  <div className="font-bold text-stone-900">
                    {lead.destinationPort.split(",")[0]}
                  </div>
                </div>

                {/* Pricing & Margin Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-stone-50 to-sky-50/70 border border-stone-200 grid grid-cols-3 gap-3 items-center">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                      Export FOB Quote
                    </span>
                    {(currencyMode === "usd" || currencyMode === "both") && (
                      <p className="text-lg font-black text-emerald-900 leading-tight">
                        ${lead.fobPriceUsd.toLocaleString()}
                        <span className="text-[10px] font-normal text-stone-500"> / MT</span>
                      </p>
                    )}
                    {(currencyMode === "inr" || currencyMode === "both") && (
                      <p className="text-xs font-bold text-emerald-700 mt-0.5">
                        ₹{lead.inrPerQuintal.toLocaleString()}
                        <span className="text-[9px] font-normal text-stone-500"> / Qtl</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                      Domestic APMC
                    </span>
                    <p className="text-base font-bold text-stone-700">
                      ₹{lead.domesticMandiRefPrice.toLocaleString()}
                      <span className="text-[10px] font-normal text-stone-400"> / Qtl</span>
                    </p>
                    <span className="text-[10px] text-stone-400 block">Mandi Benchmark</span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Export Realization
                    </span>
                    <span className="inline-flex items-center gap-0.5 px-2.5 py-1 bg-emerald-600 text-white rounded-lg text-xs font-black shadow-xs">
                      <TrendingUp className="w-3 h-3" />
                      +{lead.exportPremiumPercent}%
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-1">Higher Margin</span>
                  </div>
                </div>

                {/* Order Parameters Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <span className="text-[10px] font-semibold text-stone-400 block">Total Order Volume</span>
                    <p className="font-bold text-stone-800">{lead.demandQuantity}</p>
                    <span className="text-[10px] text-stone-500">Min. Order: {lead.moq}</span>
                  </div>

                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <span className="text-[10px] font-semibold text-stone-400 block">Statutory Incentive</span>
                    <p className="font-bold text-stone-800">{lead.govIncentives.rodtepRate} RoDTEP</p>
                    <span className="text-[10px] text-emerald-700 font-semibold">{lead.govIncentives.rodtepBenefitINR}</span>
                  </div>
                </div>

                {/* Quality & Settlement Highlights */}
                <div className="space-y-1.5 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>
                      <strong>Payment Terms:</strong> {lead.paymentTerms}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>
                      <strong>Buyer Entity:</strong> {lead.buyerProfile.companyName} ({lead.buyerProfile.verificationStatus})
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setActiveModalLead(lead);
                    setActiveModalTab("documents");
                  }}
                  className="text-xs font-bold text-stone-700 hover:text-emerald-800 flex items-center gap-1.5 py-2 px-3 rounded-xl hover:bg-stone-200 transition"
                >
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>Review Statutory Dossier</span>
                </button>

                <button
                  onClick={() => handleOpenQuote(lead)}
                  className="text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-xl transition shadow-xs flex items-center gap-1.5 hover:scale-[1.02]"
                >
                  <span>Submit Quotation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. STATUTORY EXPORT DOSSIER MODAL */}
      {activeModalLead && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-6 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{activeModalLead.countryFlag}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Bilateral Export Dossier • {activeModalLead.importingCountry}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Ref: {activeModalLead.tradeLeadId}
                  </span>
                </div>
                <h3 className="text-xl font-black">{activeModalLead.commodity}</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Target: {activeModalLead.destinationPort} • FOB Quote: ${activeModalLead.fobPriceUsd}/MT (₹{activeModalLead.inrPerQuintal}/Qtl)
                </p>
              </div>

              <button
                onClick={() => setActiveModalLead(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="bg-stone-100 border-b border-stone-200 px-6 flex items-center gap-2 overflow-x-auto text-xs font-bold">
              <button
                onClick={() => setActiveModalTab("documents")}
                className={`py-3 px-3.5 border-b-2 transition ${
                  activeModalTab === "documents"
                    ? "border-emerald-700 text-emerald-800 bg-white"
                    : "border-transparent text-stone-600 hover:text-stone-900"
                }`}
              >
                Mandatory Documentation ({activeModalLead.mandatoryDocuments.length})
              </button>
              <button
                onClick={() => setActiveModalTab("specs")}
                className={`py-3 px-3.5 border-b-2 transition ${
                  activeModalTab === "specs"
                    ? "border-emerald-700 text-emerald-800 bg-white"
                    : "border-transparent text-stone-600 hover:text-stone-900"
                }`}
              >
                Quality & Chemical Specs
              </button>
              <button
                onClick={() => setActiveModalTab("packaging")}
                className={`py-3 px-3.5 border-b-2 transition ${
                  activeModalTab === "packaging"
                    ? "border-emerald-700 text-emerald-800 bg-white"
                    : "border-transparent text-stone-600 hover:text-stone-900"
                }`}
              >
                Container & Packaging
              </button>
              <button
                onClick={() => setActiveModalTab("incentives")}
                className={`py-3 px-3.5 border-b-2 transition ${
                  activeModalTab === "incentives"
                    ? "border-emerald-700 text-emerald-800 bg-white"
                    : "border-transparent text-stone-600 hover:text-stone-900"
                }`}
              >
                Govt. Subsidies & Schemes
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4 text-xs">
              {/* TAB 1: MANDATORY DOCUMENTS */}
              {activeModalTab === "documents" && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900">
                    <p className="font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-amber-700" />
                      Statutory Clearance Requirement
                    </p>
                    <p className="mt-0.5 text-[11px] leading-relaxed">
                      All listed certificates are strictly audited by Indian Customs (ICEGATE) and the importing authority prior to loading on vessel.
                    </p>
                  </div>

                  <div className="space-y-2">
                    {activeModalLead.mandatoryDocuments.map((doc, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
                      >
                        <div className="space-y-0.5">
                          <h4 className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px]">
                              {idx + 1}
                            </span>
                            {doc.name}
                          </h4>
                          <p className="text-[11px] text-stone-500 leading-relaxed">
                            {doc.purpose}
                          </p>
                        </div>
                        <div className="shrink-0 text-left sm:text-right">
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-stone-200 text-stone-800 rounded">
                            {doc.issuer}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: QUALITY SPECS */}
              {activeModalTab === "specs" && (
                <div className="space-y-4">
                  <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-950">
                    <h4 className="font-bold">Laboratory Thresholds (Pre-Shipment Inspection)</h4>
                    <p className="text-[11px] text-emerald-800 mt-0.5">
                      Verified prior to container stuffing by accredited inspection bodies (SGS / Eurofins / Export Inspection Agency).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(activeModalLead.qualitySpecifications).map(([key, val]) => (
                      <div
                        key={key}
                        className="p-3 bg-stone-50 border border-stone-200 rounded-xl flex items-center justify-between gap-2"
                      >
                        <span className="font-semibold text-stone-600 capitalize text-xs">
                          {key.replace(/([A-Z])/g, " $1")}:
                        </span>
                        <span className="font-bold text-stone-900 text-xs text-right">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-stone-100 rounded-xl text-stone-600 text-[11px]">
                    <strong>Buyer Profile:</strong> {activeModalLead.buyerProfile.companyName} ({activeModalLead.buyerProfile.city}, {activeModalLead.buyerProfile.country}) • Credit Status: {activeModalLead.buyerProfile.creditRating}
                  </div>
                </div>
              )}

              {/* TAB 3: PACKAGING & CONTAINER */}
              {activeModalTab === "packaging" && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-2xl space-y-1">
                    <span className="text-[10px] font-bold text-stone-400 uppercase">Container Specifications</span>
                    <p className="font-bold text-stone-900">{activeModalLead.packagingSpecs.containerType}</p>
                    <p className="text-stone-600">{activeModalLead.packagingSpecs.loadability}</p>
                  </div>

                  <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-2xl space-y-1">
                    <span className="text-[10px] font-bold text-stone-400 uppercase">Bag / Carton Packing Material</span>
                    <p className="font-bold text-stone-900">{activeModalLead.packagingSpecs.bagType}</p>
                  </div>

                  <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-2xl space-y-1">
                    <span className="text-[10px] font-bold text-stone-400 uppercase">Palletization & Fumigation</span>
                    <p className="text-stone-800">{activeModalLead.packagingSpecs.palletization}</p>
                  </div>

                  <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-2xl space-y-1">
                    <span className="text-[10px] font-bold text-stone-400 uppercase">Mandatory Marking & Labeling</span>
                    <p className="text-stone-800">{activeModalLead.packagingSpecs.marking}</p>
                  </div>
                </div>
              )}

              {/* TAB 4: INCENTIVES & SUBSIDIES */}
              {activeModalTab === "incentives" && (
                <div className="space-y-3">
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-950 text-sm">RoDTEP Scheme Direct Remission</span>
                      <span className="px-2.5 py-1 bg-emerald-700 text-white font-extrabold rounded-lg text-xs">
                        {activeModalLead.govIncentives.rodtepRate}
                      </span>
                    </div>
                    <p className="text-xs text-emerald-800">
                      Direct cash rebate credited as electronic scrip: <strong>{activeModalLead.govIncentives.rodtepBenefitINR}</strong>
                    </p>
                  </div>

                  <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                    <span className="font-bold text-stone-900 block">Transport & Marketing Assistance (TMA)</span>
                    <p className="text-stone-600 text-[11px] leading-relaxed">
                      {activeModalLead.govIncentives.tmaSupport}
                    </p>
                  </div>

                  <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                    <span className="font-bold text-stone-900 block">Interest Equalization Scheme (3% Subvention)</span>
                    <p className="text-stone-600 text-[11px] leading-relaxed">
                      {activeModalLead.govIncentives.interestEqualization}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-stone-50 border-t border-stone-200 p-4 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalLead(null)}
                className="px-4 py-2 bg-white border border-stone-300 rounded-xl text-xs font-bold text-stone-700 hover:bg-stone-100"
              >
                Close Specification
              </button>

              <button
                onClick={() => {
                  const lead = activeModalLead;
                  setActiveModalLead(null);
                  handleOpenQuote(lead);
                }}
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5"
              >
                <span>Proceed to Submit Quotation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. QUOTATION SUBMISSION MODAL WITH AUTOMATIC COMMERCIAL CALCULATIONS */}
      {quoteModalLead && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Trade Lead Submission Portal
                </span>
                <h3 className="text-lg font-black mt-0.5">
                  Supply Quotation for {quoteModalLead.commodity}
                </h3>
                <p className="text-xs text-slate-300">
                  Lead ID: {quoteModalLead.tradeLeadId} • Destination: {quoteModalLead.importingCountry}
                </p>
              </div>
              <button
                onClick={() => setQuoteModalLead(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {quoteSubmitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-stone-900">Quotation Officially Registered!</h4>
                  <p className="text-xs text-stone-500 mt-1">
                    Your supply offer has been recorded on the national export matching registry.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-left space-y-1.5 font-mono">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Official Tracking Code:</span>
                    <span className="font-bold text-emerald-800">{submittedRefId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Contract Commodity:</span>
                    <span className="font-bold text-stone-800">{quoteModalLead.commodity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Offered Volume:</span>
                    <span className="font-bold text-stone-800">{quoteForm.availableQuantityMT} MT</span>
                  </div>
                </div>

                <button
                  onClick={() => setQuoteModalLead(null)}
                  className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800"
                >
                  Return to Trade Desk
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuote} className="p-6 space-y-4 text-xs">
                {/* Auto Calculation Preview */}
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between text-xs text-emerald-950">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-800 block">Total Contract Value</span>
                    <span className="text-base font-black text-emerald-900">
                      ${((Number(quoteForm.availableQuantityMT) || 0) * (Number(quoteForm.offeredFobUsd) || 0)).toLocaleString()}
                    </span>
                    <span className="text-[10px] text-emerald-700 block">
                      approx ₹{(((Number(quoteForm.availableQuantityMT) || 0) * (Number(quoteForm.offeredFobUsd) || 0) * 86.5)).toLocaleString()}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-emerald-800 block">Estimated RoDTEP Rebate</span>
                    <span className="text-sm font-extrabold text-emerald-800">
                      +₹{((Number(quoteForm.availableQuantityMT) || 0) * 2768).toLocaleString()}
                    </span>
                    <span className="text-[10px] text-emerald-600 block">Cash Incentive</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Company / FPO Name</label>
                    <input
                      type="text"
                      required
                      value={quoteForm.supplierName}
                      onChange={(e) => setQuoteForm({ ...quoteForm, supplierName: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Contact Phone</label>
                    <input
                      type="text"
                      required
                      value={quoteForm.contactNumber}
                      onChange={(e) => setQuoteForm({ ...quoteForm, contactNumber: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Available Quantity (MT)</label>
                    <input
                      type="number"
                      required
                      min="10"
                      value={quoteForm.availableQuantityMT}
                      onChange={(e) => setQuoteForm({ ...quoteForm, availableQuantityMT: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                      placeholder="e.g. 50"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Offered FOB Price (USD / MT)</label>
                    <input
                      type="number"
                      required
                      value={quoteForm.offeredFobUsd}
                      onChange={(e) => setQuoteForm({ ...quoteForm, offeredFobUsd: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                      placeholder="e.g. 1280"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">Dispatch Readiness Location</label>
                  <input
                    type="text"
                    required
                    value={quoteForm.deliveryLeadDays}
                    onChange={(e) => setQuoteForm({ ...quoteForm, deliveryLeadDays: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    placeholder="e.g. Ready in 20 days at Mundra CFS / Nashik Terminal"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">Quality Declarations & Remarks</label>
                  <textarea
                    rows={2}
                    value={quoteForm.remarks}
                    onChange={(e) => setQuoteForm({ ...quoteForm, remarks: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => setQuoteModalLead(null)}
                    className="px-4 py-2 bg-stone-100 hover:bg-stone-200 rounded-xl font-bold text-stone-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Binding Offer</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
