import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Load translation files
  .use(LanguageDetector) // Detect browser languagex
  .use(initReactI18next) // Pass to react-i18next
  .init({
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "it"],
    debug: false,
    interpolation: {
      escapeValue: false, // React escapes by default
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to translation files
    },
  });

export default i18n;
