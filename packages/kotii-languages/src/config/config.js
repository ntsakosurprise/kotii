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
  const locales = [];
  langs.forEach((element) => {
    console.log("forEACHELEMENT");
    const { locale, trans } = element;
    console.log("THE LOCALE", locale);
    console.log("'trans", trans);
    console.log("JSONSTRINGIFIED;;;", JSON.stringify(trans));

    i18n.addResourceBundle(locale, "translations", trans, false, false);
    locales.push(locale);
  });
  setLanguages(locales);
};

export const setLanguages = (lngs) => {
  console.log("Set languages", lngs);
  i18n
    .loadLanguages(lngs)
    .then((loaded) => {
      console.log("All at once languages", loaded);
      console.log("i18n languages", i18n.languages);
      i18n.language = [...lngs];
      console.log("i18n after update", i18n.languages);
    })
    .catch((err) => {
      console.log("Loading new Languages has failed", err);
    });
  // lngs.forEach((lng) => {
  //   i18n.loadLanguages(lng, (err, t) => {
  //     if (err) {
  //       console.log("There was an error adding values", err);
  //     }
  //     console.log("SetLanguage T", t);
  //     console.log("New Languages Locales Added");
  //   });
  // });

  //console.log("i18n languages", i18n.languages);
};
// i18n.use(initReactI18next).init({ resources: {} });
i18n.use(initReactI18next).init(
  {
    fallbackLng: "en",
    lng: "en",
    debug: true,
    resources: {},
    keySeparator: ".",
    ns: ["translations"],
    defaultNS: "translations",
  },
  () => {
    console.log("Translations have been loaded");
  }
);

export const getDefaultLocale = () => {
  return {
    locale: "en",
    label: "English",
  };
};

export const removeDefaultLanguage = (translations, languagesSet) => {
  let defaultLanguage = "en";
  let isRemoveDefaultLangauge = false;
  translations.forEach((trans) => {
    if (trans.locale.toLowerCase() === defaultLanguage)
      isRemoveDefaultLangauge = true;
  });
  if (isRemoveDefaultLangauge)
    i18n.removeResourceBundle(defaultLanguage, "translations");
  languagesSet(true);
};

//i18n.languages = ["en", "ts", "ve"];

export default i18n;
