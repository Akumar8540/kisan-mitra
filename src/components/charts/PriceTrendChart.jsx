import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export const PriceTrendChart = ({ data = [], cropName = "Soybean" }) => {
  if (!data || data.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center bg-stone-50 rounded-2xl border border-dashed border-stone-200 text-sm text-stone-500">
        No price history records available for {cropName}.
      </div>
    );
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-stone-900 text-white p-3 rounded-xl shadow-xl border border-stone-800 text-xs">
          <p className="font-bold border-b border-stone-700 pb-1 mb-1.5">{label}</p>
          <p className="text-emerald-400 font-semibold">
            Modal Price: ₹{payload.find((p) => p.dataKey === "modal")?.value?.toLocaleString("en-IN")} / Qtl
          </p>
          <p className="text-stone-300">
            Min Price: ₹{payload.find((p) => p.dataKey === "min")?.value?.toLocaleString("en-IN")}
          </p>
          <p className="text-stone-300">
            Max Price: ₹{payload.find((p) => p.dataKey === "max")?.value?.toLocaleString("en-IN")}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis
            dataKey="date"
            stroke="#78716c"
            fontSize={12}
            tickLine={false}
          />
          <YAxis
            stroke="#78716c"
            fontSize={12}
            tickLine={false}
            tickFormatter={(val) => `₹${val}`}
            domain={['auto', 'auto']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            formatter={(value) => <span className="text-xs font-semibold text-stone-700">{value}</span>}
          />
          <Line
            type="monotone"
            dataKey="modal"
            name="Modal Price"
            stroke="#15803d"
            strokeWidth={3}
            dot={{ r: 4, fill: "#15803d" }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="min"
            name="Minimum Price"
            stroke="#0284c7"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="max"
            name="Maximum Price"
            stroke="#d97706"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
