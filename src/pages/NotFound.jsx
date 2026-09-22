import React from "react";
import { Link } from "react-router-dom";
import { Sprout, ArrowLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
        <Sprout className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-black text-stone-900 mb-2">404</h1>
      <h2 className="text-xl font-bold text-stone-800 mb-2">Page Not Found</h2>
      <p className="text-sm text-stone-500 max-w-sm mb-6">
        The agricultural advisory module or page you were looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
};
