import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { farmService } from "../../services/farmService";
import { marketplaceService } from "../../services/marketplaceService";
import { marketService } from "../../services/marketService";
import { StatCard } from "../../components/cards/StatCard";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import {
  Sprout,
  Compass,
  Calculator,
  Calendar,
  Layers,
  MessageSquare,
  FileText,
  TrendingUp,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Clock,
  CloudRain,
  Droplets,
  Wind,
  ShieldAlert,
  ArrowUpRight,
  SunMedium
} from "lucide-react";
import { weatherService } from "../../services/weatherService";

export const FarmerDashboard = () => {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [myListings, setMyListings] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [recentMarketPrice, setRecentMarketPrice] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, [currentUser]);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const farmerId = currentUser?.uid || "farmer-1";
      const farmData = await farmService.getFarmProfile(farmerId);
      setProfile(farmData);

      const allListings = await marketplaceService.getListings();
      const farmerListings = allListings.filter((l) => l.farmerId === farmerId);
      setMyListings(farmerListings);

      const inqs = await marketplaceService.getInquiriesForFarmer(farmerId);
      setInquiries(inqs);

      const prices = marketService.getMarketPrices({ crop: farmData.currentCrop || "Soybean" });
      if (prices.length > 0) setRecentMarketPrice(prices[0]);

      // Fetch live weather data for farmer's district
      try {
        const wData = await weatherService.getWeatherData(farmData?.district || "Nashik");
        setWeather(wData);
      } catch (wErr) {
        console.warn("Weather fetch non-critical warning:", wErr);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner label="Loading farm records..." />;
  }

  const totalListedQuantity = myListings.reduce((sum, l) => sum + (Number(l.quantity) || 0), 0);
  const pendingInquiries = inquiries.filter((i) => i.status === "Pending").length;

  return (
    <div className="space-y-8 pb-12">
      {/* Top Greeting Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-green-900 text-white p-6 sm:p-8 rounded-3xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Farmer Portal Dashboard</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Namaste, {profile?.name || currentUser?.name || "Kisan"}!
          </h1>
          <p className="text-xs sm:text-sm text-stone-200 mt-1">
            {profile?.village}, {profile?.district}, {profile?.state} • {profile?.totalLandArea} {profile?.landUnit} {profile?.landType} Land
          </p>
        </div>

        <Link
          to="/farmer/advisor"
          className="px-5 py-3 bg-white text-emerald-900 rounded-2xl font-bold text-xs hover:bg-emerald-50 transition shadow-sm flex items-center gap-2 shrink-0"
        >
          <Compass className="w-4 h-4 text-emerald-700" />
          <span>Find Suitable Crops</span>
        </Link>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Active Farm Land"
          value={`${profile?.totalLandArea} ${profile?.landUnit}`}
          subtitle={`Soil: ${profile?.soilType} • ${profile?.irrigationType}`}
          icon={Sprout}
          color="emerald"
        />
        <StatCard
          title="Active Harvest Listings"
          value={myListings.length}
          subtitle={`Total: ${totalListedQuantity} Quintals`}
          icon={Layers}
          color="sky"
        />
        <StatCard
          title="Buyer Inquiries"
          value={inquiries.length}
          subtitle={`${pendingInquiries} Pending Decision`}
          icon={MessageSquare}
          color="amber"
          change={pendingInquiries > 0 ? `${pendingInquiries} New` : null}
        />
        <StatCard
          title={`${profile?.currentCrop || "Crop"} APMC Price`}
          value={`₹${recentMarketPrice?.modalPrice || 5120}`}
          subtitle={`${recentMarketPrice?.mandi || "Pimpalgaon APMC"}`}
          icon={TrendingUp}
          color="purple"
        />
      </div>

      {/* Live Rain & Agro-Weather Advisory Card */}
      {weather && (
        <div className="bg-gradient-to-br from-sky-900 via-emerald-900 to-teal-950 text-white rounded-3xl p-6 shadow-md border border-sky-800/40 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            {/* Left: Weather Summary */}
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0 text-amber-300">
                {weather.current.precipitation > 0 ? (
                  <CloudRain className="w-9 h-9 text-sky-300" />
                ) : (
                  <SunMedium className="w-9 h-9 text-amber-300" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-sky-400/20 text-sky-200 border border-sky-400/30">
                    Live Satellite Feed
                  </span>
                  <span className="text-xs text-sky-200/80 font-medium">
                    {weather.location.district}, {weather.location.state}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black tracking-tight">
                    {Math.round(weather.current.temperature)}°C
                  </span>
                  <span className="text-sm font-semibold text-emerald-200">
                    {weather.current.condition}
                  </span>
                  <span className="text-xs text-stone-300 hidden sm:inline">
                    (Feels like {Math.round(weather.current.apparentTemperature)}°C)
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-stone-300 mt-2">
                  <span className="flex items-center gap-1">
                    <CloudRain className="w-3.5 h-3.5 text-sky-300" />
                    Rain Chance: <strong className="text-white">{weather.today.rainProbMax}%</strong>
                  </span>
                  <span className="flex items-center gap-1">
                    <Droplets className="w-3.5 h-3.5 text-sky-300" />
                    Precipitation: <strong className="text-white">{weather.today.rainSum} mm</strong>
                  </span>
                  <span className="flex items-center gap-1 hidden sm:flex">
                    <Wind className="w-3.5 h-3.5 text-teal-300" />
                    Wind: <strong className="text-white">{weather.current.windSpeed} km/h</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Immediate Agro-Advisory & Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:max-w-md">
              {weather.advisories && weather.advisories[0] && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/15 text-xs flex-1">
                  <div className="flex items-center gap-1.5 font-bold text-sky-200 mb-0.5">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>{weather.advisories[0].title}</span>
                  </div>
                  <p className="text-[11px] text-stone-200 line-clamp-2">
                    {weather.advisories[0].description}
                  </p>
                </div>
              )}

              <Link
                to="/farmer/weather"
                className="px-4 py-3 bg-white text-emerald-950 font-black text-xs rounded-2xl hover:bg-sky-50 transition shadow-md flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>7-Day Rain Radar</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-700" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Your Farm Snapshot & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Farm Snapshot Card */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="text-base font-bold text-stone-900">Your Farm Snapshot</h3>
            <Link
              to="/farmer/profile"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900"
            >
              Edit Profile
            </Link>
          </div>

          <div className="space-y-3 text-xs text-stone-600">
            <div className="flex justify-between py-1.5 border-b border-stone-50">
              <span className="text-stone-400">Total Acreage:</span>
              <span className="font-bold text-stone-800">{profile?.totalLandArea} {profile?.landUnit}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-stone-50">
              <span className="text-stone-400">Soil Classification:</span>
              <span className="font-bold text-stone-800">{profile?.soilType} ({profile?.soilCondition})</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-stone-50">
              <span className="text-stone-400">Water Availability:</span>
              <span className="font-bold text-stone-800">{profile?.waterAvailability} ({profile?.irrigationType})</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-stone-50">
              <span className="text-stone-400">Current Season:</span>
              <span className="font-bold text-emerald-700">{profile?.currentSeason}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-stone-50">
              <span className="text-stone-400">Current Crop:</span>
              <span className="font-bold text-stone-800">{profile?.currentCrop}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-stone-400">Primary Objective:</span>
              <span className="font-bold text-stone-800">{profile?.farmingObjective}</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/farmer/reports"
              className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs transition flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Farm Assessment Report</span>
            </Link>
          </div>
        </div>

        {/* Quick Action Matrix */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-stone-200 p-6 space-y-4 shadow-sm">
          <h3 className="text-base font-bold text-stone-900">Recommended Next Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/farmer/advisor"
              className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:bg-emerald-50 transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800">
                    Find Suitable Crops
                  </h4>
                  <p className="text-xs text-stone-500">Run multi-attribute recommendation engine</p>
                </div>
              </div>
            </Link>

            <Link
              to="/farmer/input-calculator"
              className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 hover:bg-sky-50 transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-700 text-white flex items-center justify-center shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 group-hover:text-sky-800">
                    Calculate Seed & Fertilizers
                  </h4>
                  <p className="text-xs text-stone-500">Determine exact kg & bag requirements</p>
                </div>
              </div>
            </Link>

            <Link
              to="/farmer/calendar"
              className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 hover:bg-amber-50 transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 group-hover:text-amber-800">
                    View Seasonal Calendar
                  </h4>
                  <p className="text-xs text-stone-500">Check Kharif, Rabi & Zaid milestones</p>
                </div>
              </div>
            </Link>

            <Link
              to="/farmer/listings/create"
              className="p-4 rounded-2xl bg-stone-100 hover:bg-stone-200/80 transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-stone-800 text-white flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    List My Harvest for Sale
                  </h4>
                  <p className="text-xs text-stone-500">Connect with wholesale traders directly</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Market Insight Teaser */}
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex items-center justify-between text-xs text-stone-700">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>
                <strong>Market Tip:</strong> {profile?.currentCrop} prices in Indore APMC are currently <strong>₹140/Qtl higher</strong> than Pimpalgaon.
              </span>
            </div>
            <Link to="/market-prices" className="font-bold text-emerald-700 hover:text-emerald-900 shrink-0">
              Check Mandis
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Inquiries Received */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-stone-900">Recent Buyer Purchase Inquiries</h3>
            <p className="text-xs text-stone-500">Direct trade offers submitted for your harvest listings</p>
          </div>
          <Link
            to="/farmer/inquiries"
            className="text-xs font-bold text-emerald-700 hover:text-emerald-900"
          >
            View All ({inquiries.length})
          </Link>
        </div>

        {inquiries.length === 0 ? (
          <div className="py-8 text-center text-xs text-stone-500">
            No buyer inquiries received yet. Create a crop listing to receive purchase offers.
          </div>
        ) : (
          <div className="divide-y divide-stone-100">
            {inquiries.slice(0, 3).map((inq) => (
              <div key={inq.id} className="py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900">{inq.buyerName}</span>
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
                  <p className="text-stone-500 line-clamp-1">
                    Requested: {inq.requestedQuantity} {inq.unit} of {inq.crop} at target ₹{inq.targetPrice}/Qtl
                  </p>
                </div>

                <Link
                  to="/farmer/inquiries"
                  className="px-3.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold shrink-0"
                >
                  Manage Inquiry
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
