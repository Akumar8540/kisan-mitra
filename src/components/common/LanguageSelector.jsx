import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Languages, ChevronDown, Check } from "lucide-react";

export const LanguageSelector = ({ variant = "navbar" }) => {
  const { language, changeLanguage, supportedLanguages, currentLanguageMeta } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition border ${
          variant === "banner"
            ? "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"
            : "bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200 shadow-2xs"
        }`}
        title="Change Platform Language"
      >
        <Languages className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        <span className="font-bold">{currentLanguageMeta.nativeName}</span>
        <span className="text-[10px] text-stone-400 font-normal hidden sm:inline">
          ({currentLanguageMeta.code.toUpperCase()})
        </span>
        <ChevronDown className="w-3 h-3 text-stone-400 shrink-0" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-white shadow-xl border border-stone-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1.5 border-b border-stone-100 text-[10px] uppercase font-bold tracking-wider text-stone-400">
            Select Language (भाषा निवडा)
          </div>
          <div className="max-h-64 overflow-y-auto py-1 divide-y divide-stone-50">
            {supportedLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition hover:bg-emerald-50/60 ${
                  language === lang.code
                    ? "bg-emerald-50 text-emerald-900 font-bold"
                    : "text-stone-700"
                }`}
              >
                <div>
                  <p className="font-bold text-stone-900 leading-tight">
                    {lang.nativeName}
                  </p>
                  <p className="text-[10px] text-stone-400">
                    {lang.label} • {lang.region}
                  </p>
                </div>
                {language === lang.code && (
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
