import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { DemoBanner } from "../components/common/DemoBanner";
import { LiveMarketTicker } from "../components/common/LiveMarketTicker";

export const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
      <DemoBanner />
      <LiveMarketTicker />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
