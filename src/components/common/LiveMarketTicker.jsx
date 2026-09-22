import React, { useState, useEffect } from "react";
import { marketService } from "../../services/marketService";
import { TrendingUp, TrendingDown, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

export const LiveMarketTicker = () => {
  const [tickerItems, setTickerItems] = useState([]);
  const [lastTickIdx, setLastTickIdx] = useState(null);

  useEffect(() => {
    const unsubscribe = marketService.subscribeToLiveTicker((items) => {
      setTickerItems(items);
      // Highlight the item that just updated
      const recentlyUpdated = items.findIndex(
        (i) => i.lastTick && Date.now() - i.lastTick < 3000
      );
      if (recentlyUpdated !== -1) {
        setLastTickIdx(recentlyUpdated);
        setTimeout(() => setLastTickIdx(null), 1800);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!tickerItems.length) return null;

  return (
    <div className="bg-stone-950 text-stone-200 border-b border-stone-800 text-[11px] py-1.5 px-3 overflow-hidden flex items-center shadow-inner select-none">
      {/* Live Badge */}
      <div className="flex items-center gap-1.5 bg-emerald-950 text-emerald-300 border border-emerald-800/80 px-2 py-0.5 rounded-md font-extrabold uppercase tracking-wider shrink-0 mr-3 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>APMC Live Tick</span>
      </div>

      {/* Marquee Ticker Track */}
      <div className="flex-1 overflow-x-auto no-scrollbar flex items-center space-x-5">
        {tickerItems.map((item, idx) => {
          const isUp = item.trend === "up";
          const isJustTicked = lastTickIdx === idx;

          return (
            <div
              key={idx}
              className={`flex items-center gap-2 whitespace-nowrap px-2 py-0.5 rounded transition-all duration-300 ${
                isJustTicked
                  ? isUp
                    ? "bg-emerald-900/60 ring-1 ring-emerald-400 scale-105"
                    : "bg-rose-900/60 ring-1 ring-rose-400 scale-105"
                  : "hover:bg-stone-900"
              }`}
            >
              <span className="font-bold text-white tracking-tight">{item.crop}</span>
              <span className="text-stone-400 text-[10px]">({item.mandi.replace(" APMC", "")})</span>
              <span className="font-extrabold text-stone-100 font-mono">
                ₹{item.price.toLocaleString("en-IN")}
              </span>
              <span
                className={`flex items-center text-[10px] font-bold px-1 rounded ${
                  isUp ? "text-emerald-400 bg-emerald-950/80" : "text-rose-400 bg-rose-950/80"
                }`}
              >
                {isUp ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {item.changePct}
              </span>
            </div>
          );
        })}
      </div>

      <div className="text-[10px] text-stone-500 hidden xl:flex items-center gap-1 shrink-0 ml-3 pl-3 border-l border-stone-800">
        <Activity className="w-3 h-3 text-emerald-500" />
        <span>Electronic Floor Feeds Active</span>
      </div>
    </div>
  );
};
