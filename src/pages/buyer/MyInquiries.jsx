import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { marketplaceService } from "../../services/marketplaceService";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import { MessageSquare, Phone, Calendar, CheckCircle2, XCircle, Clock } from "lucide-react";

export const MyInquiries = () => {
  const { currentUser } = useAuth();
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadInquiries();
  }, [currentUser]);

  const loadInquiries = async () => {
    setLoading(true);
    try {
      const buyerId = currentUser?.uid || "buyer-1";
      const data = await marketplaceService.getInquiriesForBuyer(buyerId);
      setInquiries(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner label="Loading procurement inquiries..." />;
  }

  const filtered = inquiries.filter((inq) => {
    if (filter === "all") return true;
    return inq.status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="space-y-8 pb-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-stone-900 tracking-tight">
            My Purchase Inquiries
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Track status of direct purchase offers submitted to farmers.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-2xl text-xs font-bold">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-xl transition ${
              filter === "all" ? "bg-white text-sky-800 shadow-sm" : "text-stone-600"
            }`}
          >
            All ({inquiries.length})
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-3 py-1.5 rounded-xl transition ${
              filter === "pending" ? "bg-white text-amber-800 shadow-sm" : "text-stone-600"
            }`}
          >
            Pending ({inquiries.filter((i) => i.status === "Pending").length})
          </button>
          <button
            onClick={() => setFilter("accepted")}
            className={`px-3 py-1.5 rounded-xl transition ${
              filter === "accepted" ? "bg-white text-emerald-800 shadow-sm" : "text-stone-600"
            }`}
          >
            Accepted ({inquiries.filter((i) => i.status === "Accepted").length})
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center space-y-3 shadow-sm">
          <MessageSquare className="w-8 h-8 text-stone-300 mx-auto" />
          <p className="text-base font-bold text-stone-800">No inquiries found in this view.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((inq) => (
            <div
              key={inq.id}
              className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-7 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-stone-900">{inq.crop}</h3>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        inq.status === "Accepted"
                          ? "bg-emerald-100 text-emerald-800"
                          : inq.status === "Pending"
                          ? "bg-amber-100 text-amber-800"
                          : inq.status === "Completed"
                          ? "bg-teal-100 text-teal-800"
                          : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {inq.status}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Submitted on: {inq.createdAt} • Target Delivery: {inq.preferredDeliveryDate}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xl font-black text-emerald-800">
                    ₹{inq.targetPrice?.toLocaleString("en-IN")}{" "}
                    <span className="text-xs font-normal text-stone-400">/ Qtl</span>
                  </p>
                  <p className="text-xs text-stone-600 font-bold">
                    Quantity: {inq.requestedQuantity} {inq.unit}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl text-xs text-stone-600">
                <span className="font-bold text-stone-800 block mb-1">Your Note to Farmer:</span>
                <p className="italic leading-relaxed">"{inq.message}"</p>
              </div>

              {/* Status Banner */}
              {inq.status === "Accepted" && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-emerald-950">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <p className="font-bold">The farmer has accepted your inquiry!</p>
                      <p className="text-emerald-800">Call the farmer directly to coordinate lot inspection and transport dispatch.</p>
                    </div>
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-xs transition flex items-center gap-1.5 shrink-0"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Farmer (+91 98765 43210)</span>
                  </a>
                </div>
              )}

              {inq.status === "Pending" && (
                <div className="flex items-center gap-2 text-xs text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-100">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>The farmer has received your offer and is reviewing current local mandi market rates.</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
