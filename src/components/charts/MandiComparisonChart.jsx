import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export const MandiComparisonChart = ({ data = [], cropName = "Soybean" }) => {
  if (!data || data.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center bg-stone-50 rounded-2xl border border-dashed border-stone-200 text-sm text-stone-500">
        No mandi comparison data available.
      </div>
    );
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-stone-900 text-white p-3 rounded-xl shadow-xl border border-stone-800 text-xs">
          <p className="font-bold border-b border-stone-700 pb-1 mb-1.5">{label}</p>
          <p className="text-emerald-400 font-semibold">
            Modal: ₹{payload.find((p) => p.dataKey === "modalPrice")?.value?.toLocaleString("en-IN")} / Qtl
          </p>
          <p className="text-stone-300">
            Min: ₹{payload.find((p) => p.dataKey === "minPrice")?.value?.toLocaleString("en-IN")}
          </p>
          <p className="text-stone-300">
            Max: ₹{payload.find((p) => p.dataKey === "maxPrice")?.value?.toLocaleString("en-IN")}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 25 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis
            dataKey="mandi"
            stroke="#78716c"
            fontSize={11}
            interval={0}
            angle={-15}
            textAnchor="end"
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
          <Bar
            dataKey="modalPrice"
            name="Modal Price (₹/Qtl)"
            fill="#15803d"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="maxPrice"
            name="Max Price (₹/Qtl)"
            fill="#86efac"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
