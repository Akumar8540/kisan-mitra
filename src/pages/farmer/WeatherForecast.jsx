import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  weatherService,
  AGRICULTURAL_DISTRICTS,
  getWeatherCondition
} from "../../services/weatherService";
import {
  CloudRain,
  Sun,
  CloudSun,
  Cloud,
  CloudLightning,
  Wind,
  Droplets,
  Droplet,
  Thermometer,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  Info,
  Calendar,
  Compass,
  RefreshCw,
  TrendingDown,
  TrendingUp,
  ShieldAlert,
  ShieldCheck,
  Umbrella,
  Sprout,
  Radar,
  Layers,
  Play,
  Pause,
  Activity,
  Radio,
  Eye
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export const WeatherForecast = () => {
  const [selectedDistrictId, setSelectedDistrictId] = useState("nashik");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [customLocationName, setCustomLocationName] = useState(null);
  const [geoLocating, setGeoLocating] = useState(false);
  const [isFallbackMode, setIsFallbackMode] = useState(false);

  // Radar Interactive State
  const [radarMode, setRadarMode] = useState("rain"); // "rain" | "cloud" | "wind"
  const [radarTimeStep, setRadarTimeStep] = useState(0); // -2, -1, 0, 1, 2
  const [isRadarPlaying, setIsRadarPlaying] = useState(true);
  const radarTimerRef = useRef(null);

  // Auto-play Doppler Radar sweep loop
  useEffect(() => {
    if (isRadarPlaying) {
      radarTimerRef.current = setInterval(() => {
        setRadarTimeStep((prev) => (prev >= 2 ? -2 : prev + 1));
      }, 1600);
    } else {
      if (radarTimerRef.current) clearInterval(radarTimerRef.current);
    }
    return () => {
      if (radarTimerRef.current) clearInterval(radarTimerRef.current);
    };
  }, [isRadarPlaying]);

  useEffect(() => {
    loadForecast(selectedDistrictId);
  }, [selectedDistrictId]);

  const loadForecast = async (districtId) => {
    setLoading(true);
    const dist =
      AGRICULTURAL_DISTRICTS.find((d) => d.id === districtId) ||
      AGRICULTURAL_DISTRICTS[0];

    try {
      const data = await weatherService.getLiveForecast(dist.lat, dist.lon, dist.name);
      setWeatherData(data);
      setIsFallbackMode(false);
      setCustomLocationName(null);
    } catch (err) {
      console.warn("Live forecast fetch failed, falling back to cached baseline:", err);
      const fallback = weatherService.getFallbackWeather(dist.name, dist.lat, dist.lon);
      setWeatherData(fallback);
      setIsFallbackMode(true);
      setCustomLocationName(null);
    } finally {
      setLoading(false);
    }
  };

  const handleUseGPS = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setGeoLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const data = await weatherService.getLiveForecast(
            Number(latitude.toFixed(4)),
            Number(longitude.toFixed(4)),
            "My Farm Location"
          );
          setWeatherData(data);
          setIsFallbackMode(false);
          setCustomLocationName("My Current GPS Location");
        } catch (err) {
          console.warn("Failed to load live GPS weather, using agronomic baseline:", err);
          const fallback = weatherService.getFallbackWeather(
            "My Farm Location",
            Number(latitude.toFixed(4)),
            Number(longitude.toFixed(4))
          );
          setWeatherData(fallback);
          setIsFallbackMode(true);
          setCustomLocationName("My Current GPS Location (Baseline)");
        } finally {
          setGeoLocating(false);
        }
      },
      (err) => {
        console.warn("GPS error:", err);
        alert("Could not access GPS location. Switched back to selected district.");
        setGeoLocating(false);
      },
      { timeout: 8000 }
    );
  };

  // Spray Safety Assessment
  const getSpraySuitability = () => {
    if (!weatherData) return null;
    const rainProb = weatherData.today?.rainProb ?? 0;
    const windSpeed = weatherData.current?.windSpeed ?? 10;
    const rainMm = weatherData.today?.rainMm ?? 0;

    if (rainProb >= 50 || rainMm >= 3.0) {
      return {
        status: "UNSAFE FOR SPRAYING",
        badge: "Wash-off Risk",
        color: "text-rose-700 bg-rose-50 border-rose-300",
        icon: AlertTriangle,
        desc: "Significant rainfall expected in next 24 hours. Foliar pesticides, fungicides, and urea sprays will be washed off. Postpone all chemical operations."
      };
    }
    if (windSpeed >= 20) {
      return {
        status: "HIGH WIND DRIFT RISK",
        badge: "Drift Hazard",
        color: "text-amber-700 bg-amber-50 border-amber-300",
        icon: Wind,
        desc: `Wind velocity is ${windSpeed} km/h (safe threshold <15 km/h). Severe drift risk will waste chemicals and can damage adjoining crops. Spray early morning.`
      };
    }
    if (rainProb >= 25) {
      return {
        status: "USE NON-IONIC SURFACTANT",
        badge: "Caution Window",
        color: "text-amber-700 bg-amber-50 border-amber-300",
        icon: ShieldAlert,
        desc: "Moderate rain probability (25-45%). If urgent protective spray is needed, mix a rain-fast silicone sticker/spreader adjuvant (0.5 ml/L) to prevent washoff."
      };
    }
    return {
      status: "OPTIMAL SPRAY WINDOW",
      badge: "Safe to Apply",
      color: "text-emerald-700 bg-emerald-50 border-emerald-300",
      icon: ShieldCheck,
      desc: "Clear atmospheric conditions and low wind speed. Excellent window for foliar nutrient sprays, bio-fungicides, and soil fertilizer applications."
    };
  };

  const sprayVerdict = getSpraySuitability();

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden border border-blue-900/40">
        <div className="absolute right-0 top-0 -mt-10 -mr-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping"></span>
              <span>IMD Agromet Advisory & Live Rain Forecast</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Agro-Weather & Rain Intelligence
            </h1>
            <p className="text-xs sm:text-sm text-sky-100/90 mt-2 max-w-2xl leading-relaxed">
              Real-time precipitation Doppler radar, 24-hour hourly probability, 7-day rainfall forecasting, and agronomic chemical spraying advisories grounded in meteorological satellite models.
            </p>
          </div>

          {/* Quick Stats Pill */}
          {weatherData && (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3.5 rounded-2xl flex items-center gap-4 shrink-0 shadow-lg">
              <div className="p-3 bg-white/20 rounded-xl">
                <CloudRain className="w-7 h-7 text-sky-300" />
              </div>
              <div>
                <div className="text-xs text-sky-200 font-semibold">Today's Rain Risk</div>
                <div className="text-2xl font-black text-white">{weatherData.today?.rainProb ?? 0}%</div>
                <div className="text-[11px] text-sky-100">
                  {weatherData.today?.rainMm > 0 ? `Expected: ${weatherData.today.rainMm} mm` : "Dry / No rain expected"}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fallback Notice Banner */}
      {isFallbackMode && (
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 flex items-center justify-between gap-4 text-xs text-amber-900 shadow-sm">
          <div className="flex items-center gap-2.5 font-medium">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              Live satellite feed temporarily unavailable. Displaying verified regional seasonal agromet baseline for <strong>{weatherData?.district}</strong>.
            </span>
          </div>
          <button
            onClick={() => loadForecast(selectedDistrictId)}
            className="px-3 py-1.5 bg-amber-200 hover:bg-amber-300 text-amber-950 rounded-xl font-bold transition shrink-0 flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retry Live Sync</span>
          </button>
        </div>
      )}

      {/* Location Selector Toolbar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
          <div className="text-xs sm:text-sm font-bold text-stone-800">
            Selected District:
          </div>
          <select
            value={selectedDistrictId}
            onChange={(e) => setSelectedDistrictId(e.target.value)}
            className="text-xs sm:text-sm font-semibold text-stone-800 bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          >
            {AGRICULTURAL_DISTRICTS.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}, {d.state} ({d.primaryCrops})
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleUseGPS}
            disabled={geoLocating}
            className="px-4 py-2 bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 rounded-xl text-xs font-bold transition flex items-center gap-2"
          >
            <Compass className={`w-4 h-4 text-emerald-700 ${geoLocating ? "animate-spin" : ""}`} />
            <span>{geoLocating ? "Locating Farm..." : "Detect Farm GPS"}</span>
          </button>
          <button
            onClick={() => loadForecast(selectedDistrictId)}
            className="p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-xl transition"
            title="Refresh weather data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Loading Skeleton */}
      {loading && !weatherData && (
        <div className="space-y-6 animate-pulse">
          <div className="h-64 bg-stone-200 rounded-3xl" />
          <div className="h-72 bg-stone-200 rounded-3xl" />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-40 bg-stone-200 rounded-2xl" />
            ))}
          </div>
        </div>
      )}

      {weatherData && (
        <>
          {/* Main Weather Hero Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Current Weather Snapshot */}
            <div className="lg:col-span-1 bg-gradient-to-br from-stone-900 to-stone-800 text-white p-6 rounded-3xl shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                    {customLocationName || `${weatherData.district}, India`}
                  </span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-[11px] font-bold flex items-center gap-1.5">
                    <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                    <span>Live Satellite</span>
                  </span>
                </div>

                <div className="flex items-end gap-4 pt-2">
                  <div className="text-5xl sm:text-6xl font-black tracking-tight text-white">
                    {weatherData.current?.temperature ?? 27}°
                    <span className="text-2xl font-normal text-stone-400">C</span>
                  </div>
                  <div className="pb-2">
                    <div className="text-sm font-bold text-sky-400">
                      {weatherData.current?.condition?.label ?? "Partly Cloudy"}
                    </div>
                    <div className="text-xs text-stone-400">
                      Feels like {weatherData.current?.feelsLike ?? 28}°C
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-700">
                  <div className="flex items-center gap-2.5">
                    <Droplets className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-stone-400">Humidity</div>
                      <div className="text-sm font-bold text-white">{weatherData.current?.humidity ?? 65}%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Wind className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-stone-400">Wind Speed</div>
                      <div className="text-sm font-bold text-white">{weatherData.current?.windSpeed ?? 10} km/h</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Umbrella className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-stone-400">Precipitation</div>
                      <div className="text-sm font-bold text-white">{weatherData.current?.precipitationMm ?? 0} mm</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Thermometer className="w-4 h-4 text-rose-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-stone-400">Day Max / Min</div>
                      <div className="text-sm font-bold text-white">
                        {weatherData.today?.maxTemp ?? 31}° / {weatherData.today?.minTemp ?? 22}°
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-700/60 text-[11px] text-stone-400 flex items-center justify-between">
                <span>Lat: {weatherData.lat}°, Lon: {weatherData.lon}°</span>
                <span className="text-emerald-400 font-semibold">Agromet Telemetry Ready</span>
              </div>
            </div>

            {/* Right: Urgent Agro-Meteorological Advisories */}
            <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-base font-bold text-stone-900">
                      Agro-Meteorological Action Advisories (Next 48 Hours)
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-stone-500">
                    IMD Field Standards
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {(weatherData.advisories || []).slice(0, 4).map((adv, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border transition ${
                        adv.type === "warning"
                          ? "bg-amber-50/70 border-amber-300"
                          : adv.type === "action"
                          ? "bg-rose-50/70 border-rose-300"
                          : adv.type === "info"
                          ? "bg-blue-50/70 border-blue-300"
                          : "bg-emerald-50/70 border-emerald-300"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-stone-500">
                          {adv.category}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            adv.type === "warning"
                              ? "bg-amber-200 text-amber-900"
                              : adv.type === "action"
                              ? "bg-rose-200 text-rose-900"
                              : adv.type === "info"
                              ? "bg-blue-200 text-blue-900"
                              : "bg-emerald-200 text-emerald-900"
                          }`}
                        >
                          {adv.badge}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-stone-900 mb-1">
                        {adv.title}
                      </h4>
                      <p className="text-[11px] text-stone-700 leading-relaxed">
                        {adv.advice}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <Info className="w-3.5 h-3.5 text-stone-400" />
                  Crop Sowing Tip: Rain &gt; 10 mm prepares optimal seedbed moisture for Rabi sowing.
                </span>
                <Link
                  to="/farmer/advisor"
                  className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 shrink-0"
                >
                  <span>Open Crop Advisor</span>
                  <Compass className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Chemical Spray Safety Matrix Card */}
          {sprayVerdict && (
            <div className={`p-5 rounded-3xl border shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${sprayVerdict.color}`}>
              <div className="flex items-start gap-3.5">
                <div className="p-3 bg-white/70 rounded-2xl shrink-0 shadow-xs">
                  <sprayVerdict.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/80 border border-current">
                      {sprayVerdict.badge}
                    </span>
                    <h4 className="text-sm font-black tracking-tight">{sprayVerdict.status}</h4>
                  </div>
                  <p className="text-xs leading-relaxed max-w-3xl opacity-90">
                    {sprayVerdict.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right text-[11px]">
                  <div className="font-bold">Wind Drift: {weatherData.current?.windSpeed ?? 10} km/h</div>
                  <div className="opacity-80">Rain Risk: {weatherData.today?.rainProb ?? 0}%</div>
                </div>
                <Link
                  to="/fertilizers"
                  className="px-3.5 py-2 bg-white text-stone-900 border border-stone-300 hover:bg-stone-50 rounded-xl text-xs font-bold transition shadow-xs"
                >
                  Fertilizer Guide
                </Link>
              </div>
            </div>
          )}

          {/* Interactive Live Doppler Rain Radar & Satellite Cloud Visualizer */}
          <div className="bg-stone-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-stone-800 relative overflow-hidden space-y-5">
            {/* Header with Mode Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Radar className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black tracking-tight flex items-center gap-2">
                    <span>Live Doppler Rain Radar & Precipitation Sweep</span>
                    <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      High-Resolution 5km Band
                    </span>
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Simulated meteorological Doppler reflectivity for {weatherData.district} region (Range: 150 km radius).
                  </p>
                </div>
              </div>

              {/* Mode Selector Tabs */}
              <div className="flex items-center gap-1.5 bg-stone-900 p-1 rounded-xl border border-stone-800 shrink-0">
                <button
                  onClick={() => setRadarMode("rain")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                    radarMode === "rain"
                      ? "bg-blue-600 text-white shadow"
                      : "text-stone-400 hover:text-white"
                  }`}
                >
                  <CloudRain className="w-3.5 h-3.5" />
                  <span>Precipitation (dBZ)</span>
                </button>
                <button
                  onClick={() => setRadarMode("cloud")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                    radarMode === "cloud"
                      ? "bg-emerald-600 text-white shadow"
                      : "text-stone-400 hover:text-white"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>INSAT Clouds</span>
                </button>
                <button
                  onClick={() => setRadarMode("wind")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                    radarMode === "wind"
                      ? "bg-amber-600 text-white shadow"
                      : "text-stone-400 hover:text-white"
                  }`}
                >
                  <Wind className="w-3.5 h-3.5" />
                  <span>Wind Vectors</span>
                </button>
              </div>
            </div>

            {/* Visual Doppler Radar Scope */}
            <div className="relative aspect-video max-h-[380px] w-full bg-radial from-stone-900 to-stone-950 rounded-2xl border border-stone-800 overflow-hidden flex items-center justify-center shadow-inner">
              {/* Concentric Range Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[85%] h-[85%] rounded-full border border-emerald-500/10 flex items-center justify-center">
                  <div className="w-[70%] h-[70%] rounded-full border border-emerald-500/15 flex items-center justify-center">
                    <div className="w-[60%] h-[60%] rounded-full border border-emerald-500/20 flex items-center justify-center">
                      <div className="w-[45%] h-[45%] rounded-full border border-emerald-500/25 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Crosshairs */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-full h-px bg-emerald-500/10" />
                <div className="h-full w-px bg-emerald-500/10 absolute" />
              </div>

              {/* Distance Labels */}
              <div className="absolute top-3 left-4 text-[10px] font-mono text-emerald-400/60 uppercase tracking-wider space-y-0.5">
                <div>Range: 150 km</div>
                <div>Station: IMD-MET-RADAR-{weatherData.district.toUpperCase().slice(0, 4)}</div>
                <div>Sweep Elevation: 0.5° PPI</div>
              </div>

              {/* Cardinal Markers */}
              <div className="absolute top-2 text-[11px] font-mono font-bold text-stone-500">N</div>
              <div className="absolute bottom-2 text-[11px] font-mono font-bold text-stone-500">S</div>
              <div className="absolute left-3 text-[11px] font-mono font-bold text-stone-500">W</div>
              <div className="absolute right-3 text-[11px] font-mono font-bold text-stone-500">E</div>

              {/* Rotating Doppler Radar Sweep Beam */}
              <div
                className="absolute w-full h-full pointer-events-none"
                style={{
                  animation: "spin 5s linear infinite"
                }}
              >
                <div
                  className="w-1/2 h-1/2 ml-auto origin-bottom-left"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(16, 185, 129, 0.35) 0deg, rgba(16, 185, 129, 0.05) 45deg, transparent 60deg)"
                  }}
                />
              </div>

              {/* Dynamic Rain / Cloud / Wind Layer Echoes */}
              <div className="absolute inset-0 pointer-events-none">
                {radarMode === "rain" && (
                  <>
                    {/* Simulated storm cell echo matching current district rain prob */}
                    {weatherData.today?.rainProb > 25 ? (
                      <>
                        <div
                          className="absolute w-44 h-44 rounded-full blur-2xl transition-all duration-1000 opacity-60"
                          style={{
                            top: `${40 + radarTimeStep * 6}%`,
                            left: `${45 + radarTimeStep * 8}%`,
                            background:
                              weatherData.today?.rainProb > 60
                                ? "radial-gradient(circle, rgba(239, 68, 68, 0.7) 0%, rgba(245, 158, 11, 0.5) 40%, rgba(34, 197, 94, 0.3) 70%, transparent 100%)"
                                : "radial-gradient(circle, rgba(245, 158, 11, 0.6) 0%, rgba(34, 197, 94, 0.4) 50%, rgba(59, 130, 246, 0.2) 80%, transparent 100%)"
                          }}
                        />
                        <div
                          className="absolute w-32 h-32 rounded-full blur-xl transition-all duration-1000 opacity-50"
                          style={{
                            top: `${25 + radarTimeStep * 4}%`,
                            left: `${30 + radarTimeStep * 5}%`,
                            background:
                              "radial-gradient(circle, rgba(34, 197, 94, 0.5) 0%, rgba(59, 130, 246, 0.3) 60%, transparent 100%)"
                          }}
                        />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-stone-700 text-xs font-bold text-emerald-400 flex items-center gap-1.5 shadow">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Clear Air Mode: No major precipitation echoes detected within 100 km</span>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {radarMode === "cloud" && (
                  <div
                    className="absolute w-72 h-72 rounded-full blur-3xl bg-sky-400/25 transition-all duration-1000"
                    style={{
                      top: `${35 + radarTimeStep * 5}%`,
                      left: `${40 + radarTimeStep * 6}%`
                    }}
                  />
                )}

                {radarMode === "wind" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-1 bg-stone-900/80 px-4 py-2 rounded-xl border border-stone-700">
                      <div className="text-xs font-bold text-amber-400 flex items-center justify-center gap-1.5">
                        <Wind className="w-4 h-4" />
                        <span>Surface Flow: {weatherData.current?.windSpeed ?? 10} km/h (Westerly)</span>
                      </div>
                      <div className="text-[11px] text-stone-400">Streamline vectors aligned toward East-Northeast</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Farm Center Pin */}
              <div className="relative z-10 flex flex-col items-center pointer-events-none">
                <div className="w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-400/40 animate-pulse flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <div className="mt-1 px-2 py-0.5 bg-stone-900/90 border border-emerald-500/40 rounded text-[10px] font-bold text-emerald-300 shadow">
                  📍 Farm ({weatherData.district})
                </div>
              </div>

              {/* Scrubber & Time Frame Controller Overlay (Bottom) */}
              <div className="absolute bottom-3 left-4 right-4 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-auto">
                <div className="flex items-center gap-2 bg-stone-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-stone-700 shadow">
                  <button
                    onClick={() => setIsRadarPlaying(!isRadarPlaying)}
                    className="p-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-white transition"
                    title={isRadarPlaying ? "Pause loop" : "Play loop"}
                  >
                    {isRadarPlaying ? (
                      <Pause className="w-3.5 h-3.5 text-amber-400" />
                    ) : (
                      <Play className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </button>

                  <div className="flex items-center gap-1 text-[11px] font-mono">
                    {[-2, -1, 0, 1, 2].map((step) => {
                      const labels = {
                        "-2": "-2h",
                        "-1": "-1h",
                        "0": "LIVE",
                        "1": "+1h",
                        "2": "+2h"
                      };
                      const isActive = radarTimeStep === step;
                      return (
                        <button
                          key={step}
                          onClick={() => setRadarTimeStep(step)}
                          className={`px-2 py-0.5 rounded transition font-bold ${
                            isActive
                              ? "bg-blue-600 text-white"
                              : "text-stone-400 hover:text-white"
                          }`}
                        >
                          {labels[step]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Radar Legend */}
                <div className="flex items-center gap-2 bg-stone-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-stone-700 text-[10px] font-mono">
                  <span className="text-stone-400">Rain Rate:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-blue-500" title="Light: 0.1-2.5 mm/h"></span>
                    <span className="text-stone-300">Light</span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-green-500" title="Moderate: 2.5-7.5 mm/h"></span>
                    <span className="text-stone-300">Mod</span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-amber-500" title="Heavy: 7.5-15 mm/h"></span>
                    <span className="text-stone-300">Heavy</span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-rose-600" title="Severe: >15 mm/h"></span>
                    <span className="text-stone-300">Storm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 24-Hour Hourly Rain & Precipitation Forecast Chart */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                  <CloudRain className="w-5 h-5 text-blue-600" />
                  <span>24-Hour Hourly Rainfall Probability & Precipitation</span>
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Plan your chemical spraying, harvesting, and field irrigation hour-by-hour.
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <div className="flex items-center gap-1.5 text-blue-700">
                  <span className="w-3 h-3 rounded bg-blue-500 inline-block"></span>
                  <span>Rain Probability (%)</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <span className="w-3 h-3 rounded bg-emerald-500 inline-block"></span>
                  <span>Expected Rain (mm)</span>
                </div>
              </div>
            </div>

            <div className="h-64 sm:h-72 w-full pt-4 min-h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={weatherData.hourly || []}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="rainProbGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                  <XAxis dataKey="time" stroke="#94A3B8" fontSize={11} tickLine={false} />
                  <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} domain={[0, 100]} />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-stone-900 text-white p-3 rounded-xl text-xs space-y-1 shadow-lg border border-stone-700">
                            <div className="font-bold text-sky-400">{label} ({data.temp}°C)</div>
                            <div>Rain Probability: <span className="font-bold text-white">{data.rainProb}%</span></div>
                            <div>Expected Precipitation: <span className="font-bold text-emerald-400">{data.rainMm} mm</span></div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="rainProb"
                    stroke="#2563EB"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#rainProbGrad)"
                    name="Rain Probability"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Satellite Soil Telemetry & FAO-56 Precision Irrigation Card */}
          {weatherData.soil && (
            <div className="bg-gradient-to-br from-teal-950 via-emerald-950 to-stone-900 rounded-3xl p-6 sm:p-7 text-white shadow-xl border border-emerald-800/40 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 -mb-12 -mr-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-800/40 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black tracking-tight flex items-center gap-2">
                        <span>Satellite Soil Moisture & Precision Irrigation Telemetry</span>
                        <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                          FAO-56 Standard
                        </span>
                      </h3>
                      <p className="text-xs text-emerald-200/70 mt-0.5">
                        Real-time microwave remote sensing of topsoil, root-zone moisture, and crop evapotranspiration loss.
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${weatherData.soil.badgeStyle}`}>
                      {weatherData.soil.status}
                    </span>
                  </div>
                </div>

                {/* 4 Metrics Telemetry Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-xs text-stone-300">
                      <span>Topsoil Moisture (0-1cm)</span>
                      <Droplets className="w-4 h-4 text-sky-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      {weatherData.soil.surfaceMoisturePct}%
                    </div>
                    <p className="text-[11px] text-emerald-300 font-medium">Volumetric Water Content</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-xs text-stone-300">
                      <span>Root Zone Moisture (3-9cm)</span>
                      <Sprout className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      {weatherData.soil.rootZoneMoisturePct}%
                    </div>
                    <p className="text-[11px] text-emerald-300 font-medium">Active root absorption zone</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-xs text-stone-300">
                      <span>Evapotranspiration (ET0)</span>
                      <Sun className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      {weatherData.soil.et0Mm} <span className="text-sm font-normal text-stone-400">mm/day</span>
                    </div>
                    <p className="text-[11px] text-amber-300 font-medium">Atmospheric moisture demand</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-xs text-stone-300">
                      <span>Soil Temperature (0cm)</span>
                      <Thermometer className="w-4 h-4 text-rose-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      {weatherData.soil.soilTemperature}°<span className="text-sm font-normal text-stone-400">C</span>
                    </div>
                    <p className="text-[11px] text-stone-300 font-medium">Seedbed microbial activity</p>
                  </div>
                </div>

                {/* Precision Irrigation Action Banner */}
                <div className="bg-emerald-900/60 border border-emerald-700/50 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-emerald-200 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Today's Precision Irrigation Prescription (1 Acre)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white leading-relaxed">
                      Run drip irrigation for <strong>~{weatherData.soil.dripHoursRequired} hours</strong> (approx <strong>{weatherData.soil.irrigationDemandLitersPerAcre.toLocaleString()} Liters</strong>) to replenish water loss without waterlogging.
                    </p>
                  </div>

                  <Link
                    to="/farmer/input-calculator"
                    className="shrink-0 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs font-black transition flex items-center gap-1.5 shadow-md"
                  >
                    <span>Input Calculator</span>
                    <Compass className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* 7-Day Daily Weather & Rain Forecast Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <span>7-Day Comprehensive Agricultural Weather Forecast</span>
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Daily temperature span, rainfall probability, and field readiness.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {(weatherData.daily || []).map((day, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border text-center transition flex flex-col justify-between ${
                    idx === 0
                      ? "bg-emerald-50/80 border-emerald-400 shadow-sm"
                      : "bg-white border-stone-200 hover:border-stone-300 shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-stone-500 uppercase">
                        {day.dayName}
                      </span>
                      {idx === 0 && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 bg-emerald-600 text-white rounded">
                          Today
                        </span>
                      )}
                    </div>

                    <div className="my-2.5 flex justify-center">
                      <div className={`p-2.5 rounded-2xl ${day.condition?.bg || "bg-stone-100"}`}>
                        {day.rainProb >= 50 ? (
                          <CloudRain className="w-6 h-6 text-blue-600" />
                        ) : (day.condition?.label || "").includes("Cloud") ? (
                          <CloudSun className="w-6 h-6 text-sky-500" />
                        ) : (
                          <Sun className="w-6 h-6 text-amber-500" />
                        )}
                      </div>
                    </div>

                    <div className="text-xs font-bold text-stone-800 line-clamp-1">
                      {day.condition?.label || "Fair Weather"}
                    </div>

                    <div className="text-sm font-black text-stone-900 mt-1">
                      {day.maxTemp}° <span className="text-xs font-normal text-stone-400">/ {day.minTemp}°</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-stone-100 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-stone-500">Rain Prob:</span>
                      <span className={`font-bold ${day.rainProb >= 50 ? "text-blue-600 font-black" : "text-stone-700"}`}>
                        {day.rainProb}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-stone-500">Rainfall:</span>
                      <span className="font-bold text-emerald-700">
                        {day.rainMm > 0 ? `${day.rainMm} mm` : "0 mm"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
