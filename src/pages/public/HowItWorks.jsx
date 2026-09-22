import React from "react";
import { Link } from "react-router-dom";
import {
  Sprout,
  Compass,
  Calculator,
  Calendar,
  TrendingUp,
  Store,
  MessageSquare,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      title: "Step 1: Farmer Onboarding & Land Profile",
      desc: "The farmer records land acreage (Acre/Hectare), soil type (Black, Loamy, Sandy, Alluvial), land condition (Normal, Dry/Rainfed, Degraded), irrigation source (Borewell, Canal, Rainfed), and farming objective (Maximum profit, Low risk, Soil improvement).",
      action: "Create Farm Profile",
      link: "/farmer/profile",
      icon: Sprout
    },
    {
      title: "Step 2: Rule-Based Crop Recommendation",
      desc: "Our multi-criteria decision-support engine evaluates 5 agronomic weights (Season 30%, Soil 25%, Water 25%, Land 10%, Objective 10%) to generate a ranked list of suitable crop options with transparent explanations and watch-out warnings.",
      action: "Try Crop Advisor",
      link: "/farmer/advisor",
      icon: Compass
    },
    {
      title: "Step 3: Seed & Nutrient Calculation",
      desc: "Once a crop is selected, the input calculator calculates total seed quantity required for the acreage along with basal N-P-K fertilizer bags (Urea, DAP, MOP) to prevent under-fertilization or excessive chemical costs.",
      action: "Open Input Calculator",
      link: "/farmer/input-calculator",
      icon: Calculator
    },
    {
      title: "Step 4: Seasonal Planning & Mandi Tracking",
      desc: "The farmer checks the seasonal calendar for critical activity milestones (sowing, weed control, flowering, harvest) and monitors APMC mandi price movements over 30 days and 6 months to decide the optimal selling period.",
      action: "Explore Mandi Prices",
      link: "/market-prices",
      icon: TrendingUp
    },
    {
      title: "Step 5: Direct Harvest Listing & Buyer Inquiries",
      desc: "The farmer lists harvested crop details (variety, quantity in quintals, quality grade, expected price). Buyers browse listings, filter by location or grade, and submit purchase inquiries directly to the farmer without middleman commission.",
      action: "Visit Marketplace",
      link: "/marketplace",
      icon: Store
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
          How Kisan Mitra Works
        </h1>
        <p className="text-stone-600 text-base max-w-2xl mx-auto">
          A step-by-step walkthrough of how our platform transforms agricultural decision-making from planting to market realization.
        </p>
      </div>

      {/* Steps Vertical Timeline */}
      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1 max-w-2xl">
                  <h3 className="text-lg font-bold text-stone-900">{step.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>

              <Link
                to={step.link}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-emerald-50 text-stone-800 hover:text-emerald-800 font-semibold text-xs transition shrink-0"
              >
                <span>{step.action}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Buyer & Farmer Symbiosis Card */}
      <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-10 space-y-4">
        <h3 className="text-2xl font-black">Direct Connection = Fair Value for Both Sides</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-200">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <h4 className="font-bold text-emerald-300">For Farmers:</h4>
            <ul className="space-y-1 list-disc list-inside text-xs leading-relaxed">
              <li>Save 20-30% middleman brokerage fees</li>
              <li>Know real mandi market values before negotiating</li>
              <li>Receive offers directly from processors and millers</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <h4 className="font-bold text-emerald-300">For Buyers / Traders:</h4>
            <ul className="space-y-1 list-disc list-inside text-xs leading-relaxed">
              <li>Source authentic, quality-graded produce directly from farms</li>
              <li>Filter lots by moisture, harvest date, and exact district</li>
              <li>Communicate directly with growers for steady supply contracts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
