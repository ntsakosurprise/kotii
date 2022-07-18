/* eslint-disable react/prop-types */
import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { initialize } from "../config";
const LanguageContext = React.createContext(null);

export const LanguageProvider = (props) => {
  const { language, changeLanguage } = useState("en");

  useEffect(() => {
    initialize();
  });

  const changeCurrentLanguage = (language) => {
    i18next.changeLanguage(language, () => {
      changeLanguage();
    });
  };
  return (
    <LanguageContext.Provider
      value={{
        language,
        changeCurrentLanguage,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);
