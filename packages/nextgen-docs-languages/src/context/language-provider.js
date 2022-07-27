/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import i18next from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
/* eslint-disable no-unused-vars */
// import { config } from "../config/index";
import { initialize } from "../config";
const LanguageContext = React.createContext(null);
//console.log(config);

export const LanguageProvider = (props) => {
  const { t, i18n } = useTranslation();
  const [language, setCurrentLanguage] = useState(i18n.language);

  console.log("the children;;", props);

  initialize();

  // useEffect(() => {
  //   initialize();
  // });

  const changeCurrentLanguage = (language) => {
    i18n.changeLanguage(language, () => {
      setCurrentLanguage(language);
    });
  };
  const get = (message = "") => {
    console.log("GET MESSAGE;;;", message);
    console.log(t);
    return t(message);
  };
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
