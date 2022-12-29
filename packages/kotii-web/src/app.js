/* eslint-disable no-unused-vars */
import { GlobalStyle } from "AppGlobals";
import {
  LanguageProvider,
  LanguageSwitcher,
  useLanguage,
} from "kotii-languages";
import {
  ThemeGlobalStyle,
  // GlobalStyle,
  ThemeProvider,
  ThemeSwitcher,
  useTheme,
  useThemeContext,
} from "kotii-theme";
import { docs } from "Markdowns/get-started/welcome.md";
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

  console.log(docs);
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
  console.log("languageProvider", ThemeProvider);
  console.log("useLanguage;;;", useTheme);

  // const { theme, isThemeLoaded } = useTheme();
  // const [selectedTheme, setSelectedTheme] = useState(theme);
  // const [showDialog, setShowDialog] = useState(false);
  // const [newTheme, setNewTheme] = useState();
  // console.log("THE APP THEME;;;", theme);

  // useEffect(() => {
  //   setSelectedTheme(theme);
  //   console.log("the setThemeaa;;;", selectedTheme);
  // }, [isThemeLoaded]);

  // useEffect(() => {
  //   WebFont.load({
  //     google: { families: getWebFonts() },
  //   });
  // });

  // const manageDialog = () => {
  //   setShowDialog(!showDialog);
  // };

  // const createTheme = (newTheme) => {
  //   console.log(newTheme);
  //   setShowDialog(false);
  //   setNewTheme(newTheme);
  // };

  // console.log("resetStyles;;;", selectedTheme);
  return (
    <>
      <ThemeProvider>
        {/* <GlobalStyle theme={theme} /> */}
        {/* <TestGlobal /> */}
        <ThemeGlobalStyle globalStyle={GlobalStyle} />

        <ThemeSwitcher />
        <LanguageProvider language="en">
          <LanguageSwitcher />
          <Root />

          <div>
            <p>Surprise</p>
          </div>
          <Test />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
