/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../config/config";
/* eslint-disable no-unused-vars */
// import { config } from "../config/index";
import { addLanguages, initialize } from "../config";
const LanguageContext = React.createContext(null);
//console.log(config);

export const LanguageProvider = (props) => {
  const { t, i18n } = useTranslation();
  const [language, setCurrentLanguage] = useState(
    props.language || i18n.language
  );

  const { children, ln, translations } = props;
  const [updateLanguages, setUpdateLanguages] = useState(null);
  //const [languagesSet, setLanguagesSet] = useState(false);

  // console.log("the children;;", ln);
  console.log("PROVIDER TRANSLATIONS", props);
  console.log("children", children);
  console.log("ln", ln);

  initialize();

  useEffect(() => {
    addLanguages(translations);
    //removeDefaultLanguage(translations, setLanguagesSet);
    setUpdateLanguages(translations);
  }, []);

  useEffect(() => {
    console.log("UpdateLanguages updated", updateLanguages);
    console.log("NewLanguages;;;", i18n.languages);
  }, [updateLanguages]);

  const changeCurrentLanguage = (language) => {
    i18n.changeLanguage(language, () => {
      setCurrentLanguage(language);
    });
  };
  const getLanguageNames = () => {
    return translations.map((trans) => {
      return { name: trans.label, locale: trans.locale };
    });
  };
  const get = (message = "") => {
    console.log("GET MESSAGE;;;", message);
    console.log(t);
    return t(message);
  };

  //if (!languagesSet) return null;

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeCurrentLanguage,
        get,
        getLanguageNames,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);
