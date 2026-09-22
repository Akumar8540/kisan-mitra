import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DEMO_ACCOUNTS } from "../../services/authService";
import { Users, ArrowLeft, ShieldCheck, UserCheck } from "lucide-react";

export const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const demoList = Object.values(DEMO_ACCOUNTS);
    const registered = JSON.parse(localStorage.getItem("agri_registered_users") || "[]");
    setUsers([...demoList, ...registered]);
  }, []);

  return (
    <div className="space-y-8 pb-16">
      <Link
        to="/admin/dashboard"
        className="inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-stone-900 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Admin Overview</span>
      </Link>

      <div>
        <h1 className="text-3xl font-black text-stone-900 tracking-tight">
          Inspect Platform Users
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          Directory of registered farmers, buyers, and administrative accounts.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-stone-50 font-bold uppercase text-[11px] text-stone-600 border-b border-stone-200">
              <tr>
                <th className="px-6 py-4">User Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-medium text-stone-800">
              {users.map((u, i) => (
                <tr key={i} className="hover:bg-stone-50 transition">
                  <td className="px-6 py-4 font-bold text-stone-900">{u.name}</td>
                  <td className="px-6 py-4 text-stone-600">{u.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${
                        u.role === "admin"
                          ? "bg-stone-800 text-white"
                          : u.role === "buyer"
                          ? "bg-sky-100 text-sky-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-stone-500">{u.phone}</td>
                  <td className="px-6 py-4 text-stone-500">{u.district ? `${u.district}, ${u.state}` : "India"}</td>
                  <td className="px-6 py-4 text-stone-400">{u.createdAt?.split("T")[0] || "2026-09-18"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
