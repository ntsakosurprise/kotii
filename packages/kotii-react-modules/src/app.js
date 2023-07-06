/* eslint-disable no-unused-vars */
import { LanguageProvider } from "kotii-languages";
import {
  // GlobalStyle,
  KotiiThemeProvider,
} from "kotii-theme";
import React from "react";
import { Root } from "Startup";
import {
  enTranslation,
  peTranslation,
  tsTranslation,
  veTranslation,
  zuTranslation,
} from "./config";
// import { ThemeProvider } from "styled-components";

// const Container = styled.div`
//   margin: 5px auto 5px auto;
// `;

const App = () => {
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
  console.log("app runinng");
  return (
    <KotiiThemeProvider>
      {/* <GlobalStyle theme={theme} /> */}
      {/* <TestGlobal /> */}

      {/* <ThemeGlobalStyle globalStyle={GlobalStyle} /> */}

      <LanguageProvider
        translations={[
          { locale: "ts", trans: tsTranslation, label: "Tsonga" },
          { locale: "pe", trans: peTranslation, label: "Pedi" },
          { locale: "zu", trans: zuTranslation, label: "Zulu" },
          { locale: "ve", trans: veTranslation, label: "Venda" },
          { locale: "en", trans: enTranslation, label: "English" },
        ]}
      >
        <Root />

        <div>
          <p>Surprise</p>
        </div>
      </LanguageProvider>
    </KotiiThemeProvider>
  );
};

export default App;
