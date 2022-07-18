/* eslint-disable react/prop-types */
// import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { initialize } from "../config";
const LanguageContext = React.createContext(null);

export const LanguageProvider = (props) => {
  const { language, changeLanguage } = useState("en");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    initialize();
  });

  const changeCurrentLanguage = (language) => {
    i18n.changeLanguage(language, () => {
      changeLanguage(language);
    });
  };
  const get = (message = "") => t(message);
  return (
    <LanguageContext.Provider
      value={{
        language,
        changeCurrentLanguage,
        get,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);
