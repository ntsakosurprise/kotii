import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "ts",
  resources: {
    en: {
      translations: require("./locales/en/translations.json"),
    },
    ts: {
      translations: require("./locales/ts/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "ts"];

export default i18n;
