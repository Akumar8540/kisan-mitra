import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNotification } from "../../context/NotificationContext";
import { marketplaceService } from "../../services/marketplaceService";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import { MessageSquare, Check, X, CheckCircle2, Phone, Calendar, Clock, ArrowRight } from "lucide-react";

export const InquiriesReceived = () => {
  const { currentUser } = useAuth();
  const { addToast } = useNotification();

  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    loadInquiries();
  }, [currentUser]);

  const loadInquiries = async () => {
    setLoading(true);
    try {
      const farmerId = currentUser?.uid || "farmer-1";
      const data = await marketplaceService.getInquiriesForFarmer(farmerId);
      setInquiries(data);
    } catch (err) {
      console.error(err);
      addToast("Failed to load inquiries", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (inquiryId, newStatus) => {
    try {
      await marketplaceService.updateInquiryStatus(inquiryId, newStatus);
      addToast(`Inquiry marked as ${newStatus}`, "success");
      loadInquiries();
    } catch (err) {
      addToast("Failed to update status", "error");
    }
  };

  if (loading) {
    return <LoadingSpinner label="Loading buyer inquiries..." />;
  }

  const filtered = inquiries.filter((inq) => {
    if (filterStatus === "all") return true;
    return inq.status.toLowerCase() === filterStatus.toLowerCase();
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-stone-900 tracking-tight">
            Buyer Purchase Inquiries
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Direct trade inquiries submitted by wholesale merchants and millers for your harvest listings.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-2xl text-xs font-bold">
          <button
            onClick={() => setFilterStatus("all")}
            className={`px-3 py-1.5 rounded-xl transition ${
              filterStatus === "all" ? "bg-white text-emerald-800 shadow-sm" : "text-stone-600"
            }`}
          >
            All ({inquiries.length})
          </button>
          <button
            onClick={() => setFilterStatus("pending")}
            className={`px-3 py-1.5 rounded-xl transition ${
              filterStatus === "pending" ? "bg-white text-amber-800 shadow-sm" : "text-stone-600"
            }`}
          >
            Pending ({inquiries.filter((i) => i.status === "Pending").length})
          </button>
          <button
            onClick={() => setFilterStatus("accepted")}
            className={`px-3 py-1.5 rounded-xl transition ${
              filterStatus === "accepted" ? "bg-white text-emerald-800 shadow-sm" : "text-stone-600"
            }`}
          >
            Accepted ({inquiries.filter((i) => i.status === "Accepted").length})
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center space-y-3 shadow-sm">
          <MessageSquare className="w-8 h-8 text-stone-300 mx-auto" />
          <h3 className="text-base font-bold text-stone-800">No buyer inquiries in this view.</h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Once a trader browses your marketplace listing and sends a quote request, it will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((inq) => (
            <div
              key={inq.id}
              className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-7 shadow-sm space-y-4 hover:border-emerald-200 transition"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-stone-900">{inq.buyerName}</h3>
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
                  <p className="text-xs text-stone-500 flex items-center gap-2 mt-1">
                    <span className="font-semibold text-emerald-800">Inquiry for: {inq.crop}</span>
                    <span>•</span>
                    <span>Received: {inq.createdAt}</span>
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xl font-black text-emerald-800">
                    ₹{inq.targetPrice?.toLocaleString("en-IN")}{" "}
                    <span className="text-xs font-normal text-stone-400">/ Qtl Offer</span>
                  </p>
                  <p className="text-xs text-stone-600 font-bold">
                    Requested: {inq.requestedQuantity} {inq.unit}
                  </p>
                </div>
              </div>

              {/* Message from buyer */}
              <div className="p-4 bg-stone-50 rounded-2xl text-xs text-stone-700 space-y-1">
                <span className="font-bold text-stone-800 block uppercase tracking-wider text-[10px]">
                  Buyer Message:
                </span>
                <p className="leading-relaxed italic">"{inq.message}"</p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1 text-xs">
                <div className="flex items-center gap-4 text-stone-600">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-stone-400" />
                    <strong>Buyer Contact:</strong> {inq.buyerPhone}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <strong>Target Delivery:</strong> {inq.preferredDeliveryDate}
                  </span>
                </div>

                {/* Farmer Actions */}
                <div className="flex items-center gap-2">
                  {inq.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleUpdateStatus(inq.id, "Rejected")}
                        className="px-4 py-2 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-800 font-bold transition flex items-center gap-1"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Decline Offer</span>
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(inq.id, "Accepted")}
                        className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold transition shadow-sm flex items-center gap-1"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Accept Inquiry</span>
                      </button>
                    </>
                  )}

                  {inq.status === "Accepted" && (
                    <button
                      onClick={() => handleUpdateStatus(inq.id, "Completed")}
                      className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold transition flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Mark Sale Completed</span>
                    </button>
                  )}

                  {inq.status === "Completed" && (
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Sale Finalized
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
