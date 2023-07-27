/* eslint-disable no-unused-vars */
import { GlobalStyle } from "AppGlobals";
import { LanguageProvider, useLanguage } from "kotii-languages";
import { KotiiThemeProvider, useTheme, useThemeContext } from "kotii-theme";
import { Page } from "kotii-ui";
import {
  peTranslation,
  tsTranslation,
  veTranslation,
  zuTranslation,
} from "Language";
// import { docs } from "Markdowns/get-started/welcome.md";
import React, { useState } from "react";
import { Root } from "Startup";
// import { ThemeProvider } from "styled-components";

// const Container = styled.div`
//   margin: 5px auto 5px auto;
// `;

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
  const { theme } = useThemeContext();
  console.log("Test Global theme", theme);
  return <GlobalStyle theme={theme} />;
};
const App = () => {
  console.log("useLanguage;;;", useTheme);
  console.log("Translation", zuTranslation, peTranslation);
  console.log("Kotii-ui Page Component:", Page);

  return (
    <KotiiThemeProvider>
      {/* <ThemeSwitcher /> */}
      <Page kind="wide">TEST</Page>
      <LanguageProvider
        ln="en"
        translations={[
          { locale: "zu", trans: zuTranslation, label: "zulu" },
          { locale: "pe", trans: peTranslation, label: "pedi" },
          { locale: "ve", trans: veTranslation, label: "venda" },
          { locale: "ts", trans: tsTranslation, label: "tsonga" },
        ]}
      >
        {/* <LanguageSwitcher /> */}
        <Root />
      </LanguageProvider>
    </KotiiThemeProvider>
  );
};

export default App;
