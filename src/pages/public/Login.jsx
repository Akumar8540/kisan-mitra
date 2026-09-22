import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNotification } from "../../context/NotificationContext";
import { Sprout, UserCheck, ShieldCheck, ArrowRight, Lock, Mail } from "lucide-react";

export const Login = () => {
  const { loginWithEmail, loginDemo } = useAuth();
  const { addToast } = useNotification();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const redirectUserByRole = (userRole) => {
    const from = location.state?.from?.pathname;
    if (from && from !== "/login") {
      navigate(from, { replace: true });
      return;
    }
    if (userRole === "farmer") navigate("/farmer/dashboard");
    else if (userRole === "buyer") navigate("/buyer/dashboard");
    else if (userRole === "admin") navigate("/admin/dashboard");
    else navigate("/");
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginWithEmail(email, password);
      addToast(`Welcome back, ${res.user.name}!`, "success");
      redirectUserByRole(res.user.role);
    } catch (err) {
      addToast(err.message || "Failed to sign in. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (roleKey) => {
    setLoading(true);
    try {
      const res = await loginDemo(roleKey);
      addToast(`Signed in as Demo ${roleKey.charAt(0) + roleKey.slice(1).toLowerCase()} (${res.user.name})`, "success");
      redirectUserByRole(res.user.role);
    } catch (err) {
      addToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-6">
        {/* Top Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white mx-auto flex items-center justify-center shadow-lg shadow-emerald-700/20">
            <Sprout className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-black text-stone-900 tracking-tight">
            Sign in to Kisan Mitra
          </h2>
          <p className="text-xs text-stone-500">
            Access your farm profile, crop advisory records, and produce listings
          </p>
        </div>

        {/* 1-Click Demo Evaluation Box for SIH Judges */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-5 space-y-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-900">
              SIH Fast-Track Evaluation (1-Click Login)
            </p>
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed">
            Test any role instantly without typing credentials:
          </p>

          <div className="space-y-2">
            <button
              onClick={() => handleDemoLogin("FARMER")}
              disabled={loading}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white hover:bg-emerald-100 text-emerald-900 font-bold text-xs border border-emerald-200 transition shadow-sm"
            >
              <span className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-700" />
                <span>Continue as Demo Farmer (Ramesh Kumar, Nashik)</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleDemoLogin("BUYER")}
              disabled={loading}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white hover:bg-sky-50 text-sky-900 font-bold text-xs border border-sky-200 transition shadow-sm"
            >
              <span className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-sky-700" />
                <span>Continue as Demo Buyer (Pooja Agro, Pune)</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleDemoLogin("ADMIN")}
              disabled={loading}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-bold text-xs border border-stone-300 transition shadow-sm"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-stone-700" />
                <span>Continue as Demo Administrator</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-stone-200 w-full"></div>
          <span className="bg-stone-50 px-3 text-xs font-semibold text-stone-400 uppercase">
            Or sign in with email
          </span>
        </div>

        {/* Regular Login Form */}
        <form onSubmit={handleEmailSubmit} className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="ramesh.farmer@kisanmitra.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition shadow-sm disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-xs text-stone-500">
          Don't have an account yet?{" "}
          <Link to="/register" className="font-bold text-emerald-700 hover:text-emerald-900">
            Create Free Account
          </Link>
        </p>
      </div>
    </div>
  );
};
