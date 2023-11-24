import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { ja } from "./ja";

const resources = {
  en: en,
  ja: ja,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: "ja",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
