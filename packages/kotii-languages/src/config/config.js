import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const initialize = () => {
  // i18n.use(initReactI18next).init({
  //   fallbackLng: "en",
  //   lng: "ts",
  //   resources: {
  //     en: {
  //       translations: require("./locales/en/translations.json"),
  //     },
  //     ts: {
  //       translations: require("./locales/ts/translations.json"),
  //     },
  //   },
  //   ns: ["translations"],
  //   defaultNS: "translations",
  // });
  // i18n.languages = ["en", "ts"];
};

export const addLanguages = (langs) => {
  console.log("The langs to ADDLANGUAGES", langs);
  langs.forEach((element) => {
    console.log("forEACHELEMENT");
    const { locale, trans } = element;
    console.log("THE LOCALE", locale);
    console.log("'trans", trans);
    console.log("JSONSTRINGIFIED;;;", JSON.stringify(trans));

    i18n.addResourceBundle(locale, "translations", trans);
  });
};

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
    ve: {
      translations: require("./locales/ve/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

//i18n.languages = ["en", "ts", "ve"];

// export default i18n;
