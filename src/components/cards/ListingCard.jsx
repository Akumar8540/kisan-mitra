import React from "react";
import { MapPin, Calendar, Tag, ShieldCheck, MessageSquare } from "lucide-react";

export const ListingCard = ({ listing, onInquire, onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group">
      {/* Top Image & Quality Badge */}
      <div className="relative h-44 w-full bg-stone-100 overflow-hidden">
        <img
          src={listing.imageUrl}
          alt={listing.crop}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&auto=format&fit=crop&q=80";
          }}
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 text-emerald-800 shadow-sm backdrop-blur-sm">
            {listing.qualityGrade}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span
            className={`px-2 py-0.5 rounded text-xs font-semibold ${
              listing.status === "Active"
                ? "bg-emerald-600 text-white"
                : listing.status === "Pending"
                ? "bg-amber-500 text-white"
                : "bg-stone-500 text-white"
            }`}
          >
            {listing.status}
          </span>
        </div>
        <div className="absolute bottom-2 left-3 right-3">
          <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-bold bg-stone-900/80 text-white backdrop-blur-sm">
            {listing.quantity} {listing.unit}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition">
              {listing.crop}
            </h3>
            <span className="text-base font-extrabold text-emerald-700">
              ₹{listing.pricePerUnit?.toLocaleString("en-IN")}{" "}
              <span className="text-xs font-medium text-stone-500">/ {listing.unit === "Quintals" ? "Qtl" : "kg"}</span>
            </span>
          </div>

          <p className="text-xs text-stone-600 font-medium mb-3">
            Variety: <span className="text-stone-800">{listing.variety}</span>
          </p>

          <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-4">
            {listing.description}
          </p>
        </div>

        <div className="space-y-1.5 pt-3 border-t border-stone-100 text-xs text-stone-600">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="truncate">{listing.village}, {listing.district}, {listing.state}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span>Harvested: {listing.harvestDate}</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>Farmer: {listing.farmerName}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 bg-stone-50/80 border-t border-stone-100 flex items-center gap-2">
        <button
          onClick={() => onViewDetails?.(listing)}
          className="flex-1 py-2 px-3 text-xs font-semibold text-stone-700 bg-white border border-stone-200 rounded-xl hover:bg-stone-100 transition text-center"
        >
          View Details
        </button>
        <button
          onClick={() => onInquire?.(listing)}
          className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-emerald-700 rounded-xl hover:bg-emerald-800 transition flex items-center justify-center gap-1.5 shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Send Inquiry</span>
        </button>
      </div>
    </div>
  );
};
