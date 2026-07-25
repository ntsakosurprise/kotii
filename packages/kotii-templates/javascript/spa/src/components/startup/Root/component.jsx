/* eslint-disable react/prop-types */
import { GlobalStyle } from "AppGlobals";
import {LanguageProvider} from "kotii-languages"
import {
  peTranslation,
  tsTranslation,
  veTranslation,
  zuTranslation,enTranslation
} from "Language";
import React from "react";

const Root = (props) => {
  console.log("THE ROOT PROPS", props)
  const {locale} = props 
  console.log("THE LOCALE IS ",locale)
  
  
  return (
    <div>
      <GlobalStyle />
      <LanguageProvider  
      ln={locale}
      translations={[
          { locale: "zu", trans: zuTranslation, label: "zulu" },
          { locale: "pe", trans: peTranslation, label: "pedi" },
          { locale: "ve", trans: veTranslation, label: "venda" },
          { locale: "ts", trans: tsTranslation, label: "tsonga" },
          { locale: "en", trans: enTranslation, label: "english" },
        ]}>
         {props.children}
      </LanguageProvider>
      
    </div>
  );
};

export default Root;
