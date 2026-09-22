import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNotification } from "../../context/NotificationContext";
import { farmService } from "../../services/farmService";
import { cropRecommendationService } from "../../services/cropRecommendationService";
import { inputCalculatorService } from "../../services/inputCalculatorService";
import { marketService } from "../../services/marketService";
import { marketplaceService } from "../../services/marketplaceService";
import { reportService } from "../../services/reportService";
import { cropCatalogData } from "../../data/cropCatalogData";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import {
  FileText,
  Download,
  Printer,
  Compass,
  Calculator,
  TrendingUp,
  Layers,
  Sprout,
  ShieldCheck
} from "lucide-react";

export const Reports = () => {
  const { currentUser } = useAuth();
  const { addToast } = useNotification();

  const [activeReport, setActiveReport] = useState("farm-profile");
  const [profile, setProfile] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [inputPlan, setInputPlan] = useState(null);
  const [marketRecords, setMarketRecords] = useState([]);
  const [myListings, setMyListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllReportData();
  }, [currentUser]);

  const loadAllReportData = async () => {
    setLoading(true);
    try {
      const farmerId = currentUser?.uid || "farmer-1";
      const farmData = await farmService.getFarmProfile(farmerId);
      setProfile(farmData);

      const recs = cropRecommendationService.recommendCrops({
        season: farmData.currentSeason || "Kharif",
        soilType: farmData.soilType || "Black",
        waterAvailability: farmData.waterAvailability || "Medium",
        landType: farmData.landType || "Normal",
        farmingObjective: farmData.farmingObjective || "Maximum profit",
        landArea: Number(farmData.totalLandArea) || 3
      });
      setRecommendations(recs);

      const primaryCrop = cropCatalogData.find((c) => c.name === (farmData.currentCrop || "Soybean")) || cropCatalogData[0];
      const inputs = inputCalculatorService.calculateInputs({
        crop: primaryCrop,
        landArea: farmData.totalLandArea || 3,
        unit: farmData.landUnit || "Acre"
      });
      setInputPlan(inputs);

      const prices = marketService.getMarketPrices({ state: farmData.state || "Maharashtra" });
      setMarketRecords(prices);

      const allListings = await marketplaceService.getListings();
      setMyListings(allListings.filter((l) => l.farmerId === farmerId));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportCsv = () => {
    try {
      if (activeReport === "farm-profile" && profile) {
        reportService.exportFarmProfileCsv(profile);
      } else if (activeReport === "crop-recommendations" && recommendations.length > 0) {
        reportService.exportCropRecommendationsCsv(recommendations, profile?.name);
      } else if (activeReport === "input-plan" && inputPlan) {
        reportService.exportInputRequirementCsv(inputPlan, profile?.name);
      } else if (activeReport === "market-prices" && marketRecords.length > 0) {
        reportService.exportMarketPricesCsv(marketRecords);
      } else if (activeReport === "listings" && myListings.length > 0) {
        reportService.exportListingsCsv(myListings);
      }
      addToast("Report exported as CSV successfully!", "success");
    } catch (err) {
      addToast("Failed to export CSV file.", "error");
    }
  };

  if (loading) {
    return <LoadingSpinner label="Generating agricultural reports..." />;
  }

  return (
    <div className="space-y-8 pb-16">
      {/* Header with Print & CSV buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 no-print">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 mb-1">
            <FileText className="w-3.5 h-3.5 text-emerald-600" />
            Official Documentation & Bank Loan Reports
          </div>
          <h1 className="text-3xl font-black text-stone-900 tracking-tight">
            Agricultural Reports & Data Export
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Generate printable dossiers and RFC-4180 CSV files for institutional credit, crop insurance, and FPO submissions.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 font-bold text-xs shadow-sm transition flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Print Report</span>
          </button>
          <button
            onClick={handleExportCsv}
            className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>Download CSV</span>
          </button>
        </div>
      </div>

      {/* Report Switcher Tabs */}
      <div className="bg-white p-2 rounded-2xl border border-stone-200 shadow-sm flex flex-wrap gap-1 no-print">
        {[
          { id: "farm-profile", label: "1. Farm Profile", icon: Sprout },
          { id: "crop-recommendations", label: "2. Crop Suitability", icon: Compass },
          { id: "input-plan", label: "3. Input Plan", icon: Calculator },
          { id: "market-prices", label: "4. Mandi Prices", icon: TrendingUp },
          { id: "listings", label: "5. Crop Listings", icon: Layers }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveReport(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeReport === tab.id
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* REPORT CONTENT VIEWPORT */}
      <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm space-y-6">
        {/* Printable Official Header */}
        <div className="border-b-2 border-stone-800 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black">
              KM
            </div>
            <div>
              <h2 className="text-xl font-black text-stone-900">KISAN MITRA AGRI ADVISORY</h2>
              <p className="text-[11px] text-stone-500 uppercase font-semibold">
                Smart India Hackathon • Decision Support System Dossier
              </p>
            </div>
          </div>
          <div className="text-right text-xs text-stone-500">
            <p><strong>Date:</strong> {new Date().toLocaleDateString('en-IN')}</p>
            <p><strong>Farmer:</strong> {profile?.name}</p>
          </div>
        </div>

        {/* REPORT 1: FARM PROFILE REPORT */}
        {activeReport === "farm-profile" && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900">1. Farm Profile & Land Topography Assessment</h3>
            <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
              <tbody className="divide-y divide-stone-200">
                <tr className="bg-stone-50">
                  <td className="p-3 font-bold text-stone-700 w-1/3">Farmer Name</td>
                  <td className="p-3 font-semibold text-stone-900">{profile?.name}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-stone-700">Contact Number</td>
                  <td className="p-3 text-stone-800">{profile?.phone}</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="p-3 font-bold text-stone-700">Location</td>
                  <td className="p-3 text-stone-800">{profile?.village}, {profile?.district}, {profile?.state}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-stone-700">Total Cultivable Land</td>
                  <td className="p-3 font-bold text-emerald-800">{profile?.totalLandArea} {profile?.landUnit}</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="p-3 font-bold text-stone-700">Land Topography</td>
                  <td className="p-3 text-stone-800">{profile?.landType}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-stone-700">Soil Classification</td>
                  <td className="p-3 text-stone-800">{profile?.soilType} ({profile?.soilCondition} condition)</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="p-3 font-bold text-stone-700">Irrigation Availability</td>
                  <td className="p-3 text-stone-800">{profile?.waterAvailability} ({profile?.irrigationType})</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-stone-700">Current Cropping Season</td>
                  <td className="p-3 font-bold text-emerald-700">{profile?.currentSeason}</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="p-3 font-bold text-stone-700">Primary Farming Objective</td>
                  <td className="p-3 text-stone-800">{profile?.farmingObjective}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* REPORT 2: CROP RECOMMENDATIONS REPORT */}
        {activeReport === "crop-recommendations" && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900">2. Crop Suitability Recommendations</h3>
            <p className="text-xs text-stone-500">Ranked by explainable multi-attribute agronomic compatibility</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-stone-200">
                <thead className="bg-stone-100 font-bold uppercase text-[10px] text-stone-700">
                  <tr>
                    <th className="p-2.5">Rank</th>
                    <th className="p-2.5">Crop Name</th>
                    <th className="p-2.5">Match %</th>
                    <th className="p-2.5">Seasons</th>
                    <th className="p-2.5">Duration</th>
                    <th className="p-2.5">Seed Rate</th>
                    <th className="p-2.5">Yield Potential</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {recommendations.slice(0, 5).map((rec, idx) => (
                    <tr key={rec.crop.id} className={idx === 0 ? "bg-emerald-50/60 font-semibold" : ""}>
                      <td className="p-2.5">#{idx + 1}</td>
                      <td className="p-2.5 font-bold text-stone-900">{rec.crop.name}</td>
                      <td className="p-2.5 font-black text-emerald-700">{rec.matchScore}%</td>
                      <td className="p-2.5">{rec.crop.seasons.join("/")}</td>
                      <td className="p-2.5">{rec.crop.durationDays}</td>
                      <td className="p-2.5">{rec.crop.seedRate} {rec.crop.seedRateUnit}</td>
                      <td className="p-2.5">{rec.crop.expectedYieldQuintalPerAcre}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* REPORT 3: INPUT REQUIREMENT PLAN */}
        {activeReport === "input-plan" && inputPlan && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900">
              3. Seed & Fertilizer Input Formulation ({inputPlan.cropName})
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                <p className="font-bold text-stone-900">Total Seed Quantity:</p>
                <p className="text-xl font-black text-emerald-800">{inputPlan.seed.totalSeedKg} kg</p>
                <p className="text-stone-500">Rate: {inputPlan.seed.seedRatePerAcre} kg/acre • Est Cost: {inputPlan.seed.estimatedCostRange}</p>
              </div>
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                <p className="font-bold text-stone-900">Elemental N-P-K:</p>
                <p className="text-sm font-semibold">
                  N: {inputPlan.nutrients.nitrogenKg} kg • P: {inputPlan.nutrients.phosphorusKg} kg • K: {inputPlan.nutrients.potassiumKg} kg
                </p>
                <p className="text-stone-500">Pure nutrient requirement</p>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-950 space-y-1">
              <p className="font-bold">Commercial Bag Requirements (Per {inputPlan.landArea} {inputPlan.unit}):</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Urea (46% N): {inputPlan.commercialFertilizerEquivalent.ureaBags} Bags ({inputPlan.commercialFertilizerEquivalent.ureaKg} kg)</li>
                <li>DAP (18-46-0): {inputPlan.commercialFertilizerEquivalent.dapBags} Bags ({inputPlan.commercialFertilizerEquivalent.dapKg} kg)</li>
                <li>MOP Potash (60% K): {inputPlan.commercialFertilizerEquivalent.mopBags} Bags ({inputPlan.commercialFertilizerEquivalent.mopKg} kg)</li>
              </ul>
            </div>
          </div>
        )}

        {/* REPORT 4: MANDI PRICES REPORT */}
        {activeReport === "market-prices" && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900">4. APMC Mandi Market Intelligence Report</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-stone-200">
                <thead className="bg-stone-100 font-bold uppercase text-[10px] text-stone-700">
                  <tr>
                    <th className="p-2.5">Crop</th>
                    <th className="p-2.5">Mandi Yard</th>
                    <th className="p-2.5">District</th>
                    <th className="p-2.5">Min (₹/Qtl)</th>
                    <th className="p-2.5">Modal (₹/Qtl)</th>
                    <th className="p-2.5">Max (₹/Qtl)</th>
                    <th className="p-2.5">Reporting Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {marketRecords.map((m) => (
                    <tr key={m.id}>
                      <td className="p-2.5 font-bold">{m.crop}</td>
                      <td className="p-2.5">{m.mandi}</td>
                      <td className="p-2.5">{m.district}</td>
                      <td className="p-2.5">₹{m.minPrice}</td>
                      <td className="p-2.5 font-bold text-emerald-800">₹{m.modalPrice}</td>
                      <td className="p-2.5">₹{m.maxPrice}</td>
                      <td className="p-2.5 text-stone-500">{m.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* REPORT 5: MY LISTINGS REPORT */}
        {activeReport === "listings" && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900">5. Harvest Marketplace Lot Listings</h3>
            {myListings.length === 0 ? (
              <p className="text-xs text-stone-500">No active produce listings on file.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200">
                  <thead className="bg-stone-100 font-bold uppercase text-[10px] text-stone-700">
                    <tr>
                      <th className="p-2.5">Crop</th>
                      <th className="p-2.5">Variety</th>
                      <th className="p-2.5">Quantity</th>
                      <th className="p-2.5">Price</th>
                      <th className="p-2.5">Grade</th>
                      <th className="p-2.5">Harvest Date</th>
                      <th className="p-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {myListings.map((l) => (
                      <tr key={l.id}>
                        <td className="p-2.5 font-bold">{l.crop}</td>
                        <td className="p-2.5">{l.variety}</td>
                        <td className="p-2.5">{l.quantity} {l.unit}</td>
                        <td className="p-2.5 font-bold text-emerald-700">₹{l.pricePerUnit}</td>
                        <td className="p-2.5">{l.qualityGrade}</td>
                        <td className="p-2.5">{l.harvestDate}</td>
                        <td className="p-2.5 font-semibold">{l.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Official Prototype Footer Disclaimer */}
        <div className="border-t border-stone-200 pt-4 text-[11px] text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Official Disclaimer: Demonstration guidance generated for Smart India Hackathon.</span>
          <span>Kisan Mitra Prototype Engine v1.0</span>
        </div>
      </div>
    </div>
  );
};
