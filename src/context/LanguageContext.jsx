import React, { createContext, useContext, useState, useEffect } from "react";
import { supportedLanguages, translations } from "../data/translations";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("km_preferred_language") || "en";
  });

  const triggerDomTranslation = (langCode) => {
    try {
      const hostname = window.location.hostname;
      if (langCode === "en") {
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname};`;
      } else {
        document.cookie = `googtrans=/en/${langCode}; path=/;`;
        document.cookie = `googtrans=/en/${langCode}; path=/; domain=${hostname};`;
        document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${hostname};`;
      }

      // Find the select element inserted by Google Translate
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event("change"));
      } else {
        // Check again shortly once Google script finishes initializing
        setTimeout(() => {
          const retrySelect = document.querySelector(".goog-te-combo");
          if (retrySelect) {
            retrySelect.value = langCode;
            retrySelect.dispatchEvent(new Event("change"));
          } else {
            // If select not available, a quick soft reload applies the cookie to 100% of DOM
            window.location.reload();
          }
        }, 250);
      }
    } catch (err) {
      console.warn("DOM translation bridge notice:", err);
    }
  };

  useEffect(() => {
    localStorage.setItem("km_preferred_language", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    // If user previously selected a language (e.g. Hindi), automatically re-apply on mount
    const saved = localStorage.getItem("km_preferred_language");
    if (saved && saved !== "en") {
      setTimeout(() => {
        triggerDomTranslation(saved);
      }, 500);
    }
  }, []);

  const changeLanguage = (langCode) => {
    setLanguage(langCode);
    triggerDomTranslation(langCode);
  };

  const t = (key, fallback = "") => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    if (translations.en && translations.en[key]) {
      return translations.en[key];
    }
    return fallback || key;
  };

  const currentLanguageMeta =
    supportedLanguages.find((l) => l.code === language) || supportedLanguages[0];

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
        supportedLanguages,
        currentLanguageMeta
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
