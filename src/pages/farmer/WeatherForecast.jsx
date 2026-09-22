import React, { useState, useEffect } from "react";
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
  Umbrella
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
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

  useEffect(() => {
    loadForecast(selectedDistrictId);
  }, [selectedDistrictId]);

  const loadForecast = async (districtId) => {
    setLoading(true);
    try {
      const dist = AGRICULTURAL_DISTRICTS.find((d) => d.id === districtId) || AGRICULTURAL_DISTRICTS[0];
      const data = await weatherService.getLiveForecast(dist.lat, dist.lon, dist.name);
      setWeatherData(data);
      setCustomLocationName(null);
    } catch (err) {
      console.error(err);
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
          setCustomLocationName("My Current GPS Location");
        } catch (err) {
          console.error("Failed to load GPS weather:", err);
        } finally {
          setGeoLocating(false);
        }
      },
      (err) => {
        console.warn("GPS error:", err);
        alert("Could not access GPS. Switched back to selected district.");
        setGeoLocating(false);
      }
    );
  };

  const currentDist = AGRICULTURAL_DISTRICTS.find((d) => d.id === selectedDistrictId);

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-sky-900 to-emerald-900 text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-sky-200 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
              <span>IMD Agromet Advisory & Live Rain Forecast</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Agro-Weather & Rain Intelligence
            </h1>
            <p className="text-xs sm:text-sm text-sky-100/90 mt-2 max-w-2xl leading-relaxed">
              Real-time precipitation radar, 7-day rainfall forecasting, and agronomic chemical spraying advisories grounded in official meteorological satellite models.
            </p>
          </div>

          {/* Quick Stats Pill */}
          {weatherData && (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3.5 rounded-2xl flex items-center gap-4 shrink-0">
              <div className="p-3 bg-white/20 rounded-xl">
                <CloudRain className="w-7 h-7 text-sky-300" />
              </div>
              <div>
                <div className="text-xs text-sky-200 font-semibold">Today's Rain Risk</div>
                <div className="text-2xl font-black text-white">{weatherData.today.rainProb}%</div>
                <div className="text-[11px] text-sky-100">
                  {weatherData.today.rainMm > 0 ? `Expected: ${weatherData.today.rainMm} mm` : "Dry / No rain"}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

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
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-[11px] font-bold">
                    Live Satellite
                  </span>
                </div>

                <div className="flex items-end gap-4 pt-2">
                  <div className="text-5xl sm:text-6xl font-black tracking-tight text-white">
                    {weatherData.current.temperature}°
                    <span className="text-2xl font-normal text-stone-400">C</span>
                  </div>
                  <div className="pb-2">
                    <div className="text-sm font-bold text-sky-400">
                      {weatherData.current.condition.label}
                    </div>
                    <div className="text-xs text-stone-400">
                      Feels like {weatherData.current.feelsLike}°C
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-700">
                  <div className="flex items-center gap-2.5">
                    <Droplets className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-stone-400">Humidity</div>
                      <div className="text-sm font-bold text-white">{weatherData.current.humidity}%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Wind className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-stone-400">Wind Speed</div>
                      <div className="text-sm font-bold text-white">{weatherData.current.windSpeed} km/h</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Umbrella className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-stone-400">Precipitation</div>
                      <div className="text-sm font-bold text-white">{weatherData.current.precipitationMm} mm</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Thermometer className="w-4 h-4 text-rose-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-stone-400">Day Max / Min</div>
                      <div className="text-sm font-bold text-white">
                        {weatherData.today.maxTemp}° / {weatherData.today.minTemp}°
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-700/60 text-[11px] text-stone-400 flex items-center justify-between">
                <span>Lat: {weatherData.lat}°, Lon: {weatherData.lon}°</span>
                <span className="text-emerald-400 font-semibold">Agromet Ready</span>
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
                  {weatherData.advisories.map((adv, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border transition ${
                        adv.type === "warning"
                          ? "bg-amber-50/60 border-amber-300"
                          : adv.type === "action"
                          ? "bg-rose-50/60 border-rose-300"
                          : adv.type === "info"
                          ? "bg-blue-50/60 border-blue-300"
                          : "bg-emerald-50/60 border-emerald-300"
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

          {/* 24-Hour Hourly Rain & Precipitation Forecast Chart */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                  <CloudRain className="w-5 h-5 text-blue-600" />
                  <span>24-Hour Hourly Rainfall Probability & Precipitation</span>
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Plan your spraying, harvesting, and irrigation schedule hour-by-hour.
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

            <div className="h-64 sm:h-72 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weatherData.hourly} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
              {weatherData.daily.map((day, idx) => (
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
                        <span className="text-[9px] font-bold px-1.5 py-0.2 bg-emerald-600 text-white rounded">
                          Today
                        </span>
                      )}
                    </div>

                    <div className="my-2.5 flex justify-center">
                      <div className={`p-2.5 rounded-2xl ${day.condition.bg}`}>
                        {day.rainProb >= 50 ? (
                          <CloudRain className="w-6 h-6 text-blue-600" />
                        ) : day.condition.label.includes("Cloud") ? (
                          <CloudSun className="w-6 h-6 text-sky-500" />
                        ) : (
                          <Sun className="w-6 h-6 text-amber-500" />
                        )}
                      </div>
                    </div>

                    <div className="text-xs font-bold text-stone-800 line-clamp-1">
                      {day.condition.label}
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
