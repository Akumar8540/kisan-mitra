import React from "react";

export const StatCard = ({ title, value, subtitle, icon: Icon, color = "emerald", change }) => {
  const colorMap = {
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    sky: "bg-sky-50 text-sky-700 border-sky-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
    stone: "bg-stone-100 text-stone-700 border-stone-200",
    purple: "bg-purple-50 text-purple-700 border-purple-100"
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-5 flex items-start justify-between shadow-sm">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {title}
        </p>
        <h3 className="text-2xl font-black text-stone-900 tracking-tight">
          {value}
        </h3>
        {subtitle && (
          <p className="text-xs text-stone-500 font-medium">{subtitle}</p>
        )}
        {change && (
          <span className="inline-block mt-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
            {change}
          </span>
        )}
      </div>

      {Icon && (
        <div className={`p-3 rounded-xl border ${colorMap[color] || colorMap.emerald}`}>
          <Icon className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};
