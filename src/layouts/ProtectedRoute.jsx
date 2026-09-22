import React from "react";
import { Navigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { LoadingSpinner } from "../components/common/LoadingSpinner";

export const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { currentUser, loading, role } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner label="Authenticating session..." />;
  }

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-stone-900 mb-2">
          Access Restricted to {allowedRoles.join(" or ").toUpperCase()}
        </h2>
        <p className="text-sm text-stone-600 max-w-md mb-6 leading-relaxed">
          You are currently signed in as a <span className="font-bold uppercase text-stone-800">{role}</span>. You do not have permission to view this administrative or specialized section.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-800 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    );
  }

  return children;
};
