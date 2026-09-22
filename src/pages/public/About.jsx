import React from "react";
import { ShieldCheck, Target, Cpu, Database, Award, CheckCircle2 } from "lucide-react";

export const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <Award className="w-4 h-4 text-emerald-600" />
          Smart India Hackathon (SIH) Project Initiative
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
          About Kisan Mitra & Project Vision
        </h1>
        <p className="text-stone-600 text-base max-w-2xl mx-auto">
          An integrated agricultural decision-support and direct farm-to-buyer marketplace prototype designed to bridge information asymmetry in Indian farming.
        </p>
      </div>

      {/* Core Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-stone-900">The Problem Statement</h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            Over 85% of Indian farmers are smallholders operating less than 2 hectares of land. They frequently suffer from low profitability due to inappropriate crop choices, imbalance in chemical fertilizer application, lack of local market intelligence, and dependency on unregulated brokers who deduct substantial middleman margins.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-stone-900">Our Technological Solution</h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            Kisan Mitra offers a single connected journey: from onboarding farm parameters (land topography, soil type, and water source) to generating explainable crop options, calculating precise input requirements, monitoring APMC price trajectories, and publishing harvest listings directly to commercial food processors and traders.
          </p>
        </div>
      </div>

      {/* Prototype Limitations & Honesty Standards */}
      <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 space-y-4">
        <h3 className="text-base font-bold text-amber-950 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-700" />
          Academic & SIH Evaluation Transparency Standards
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-amber-900 leading-relaxed">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span><strong>Rule-based Guidance:</strong> The crop advisor is powered by transparent multi-attribute agronomic rules (Season 30%, Soil 25%, Water 25%, Land 10%, Objective 10%) rather than a black-box fake AI model.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span><strong>Sample Mandi Data:</strong> Market prices represent structured APMC benchmark records and historical trajectories rather than live production feeds.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span><strong>Local Verification:</strong> Agronomic recommendations should always be corroborated with the farmer's local Krishi Vigyan Kendra (KVK) and Soil Health Card.</span>
          </li>
        </ul>
      </div>

      {/* Tech Architecture Stack */}
      <div className="bg-white p-8 rounded-2xl border border-stone-200 space-y-4">
        <h3 className="text-lg font-bold text-stone-900">Technology Architecture</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-100">
            <p className="font-bold text-sm text-stone-900">React + Vite</p>
            <p className="text-xs text-stone-500">Frontend Core</p>
          </div>
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-100">
            <p className="font-bold text-sm text-stone-900">Tailwind CSS</p>
            <p className="text-xs text-stone-500">Responsive UI</p>
          </div>
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-100">
            <p className="font-bold text-sm text-stone-900">Recharts</p>
            <p className="text-xs text-stone-500">Price Trend Charts</p>
          </div>
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-100">
            <p className="font-bold text-sm text-stone-900">LocalStorage / Firebase</p>
            <p className="text-xs text-stone-500">Database Layer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
