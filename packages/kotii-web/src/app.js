/* eslint-disable no-unused-vars */
import {
  LanguageProvider,
  LanguageSwitcher,
  useLanguage,
} from "kotii-languages";
import { KotiiGlobal, KotiiThemeProvider, ThemeSwitcher } from "kotii-ui";
import {
  peTranslation,
  tsTranslation,
  veTranslation,
  zuTranslation,
} from "Language";
import React, { useState } from "react";
import { Root } from "Startup";
// import { GlobalStyle } from "./globals";

const Test = () => {
  const { get, language } = useLanguage();
  const [test, setTest] = useState("i am the test");
  console.log("the TEST;;;", test);

  // console.log(docs);
  console.log(setTest);
  return (
    <p>
      <span>
        {get("greetings")}, {get("message")} {test}
      </span>
      <p>The current language is set to {language}</p>
      <button onClick={() => setTest("I am the test 2")}>Click me</button>
    </p>
  );
};

const TestGlobal = () => {
  // const { theme } = useThemeContext();
  // console.log("Test Global theme", theme);
  // return <GlobalStyle theme={theme} />;
};
const App = () => {
  return (
    <KotiiThemeProvider>
      <KotiiGlobal />
      <ThemeSwitcher />
      <LanguageProvider
        ln="en"
        translations={[
          { locale: "zu", trans: zuTranslation, label: "zulu" },
          { locale: "pe", trans: peTranslation, label: "pedi" },
          { locale: "ve", trans: veTranslation, label: "venda" },
          { locale: "ts", trans: tsTranslation, label: "tsonga" },
        ]}
      >
        <LanguageSwitcher />
        <Root />
        {/* <Test /> */}
      </LanguageProvider>
    </KotiiThemeProvider>
  );
};

export default App;
