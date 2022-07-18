/* eslint-disable no-unused-vars */
import { GlobalStyle, Themes } from "AppGlobals";
import { useTheme } from "Hooks";
import React, { useEffect, useState } from "react";
import { Root } from "Startup";
import styled, { ThemeProvider } from "styled-components";
import { ThemeSelector } from "UI";
import { getFromStorage, setInStorage } from "Utilities";
import WebFont from "webfontloader";

const Container = styled.div`
  margin: 5px auto 5px auto;
`;
const App = () => {
  setInStorage("themes", Themes);
  console.log("the themes");
  console.log(getFromStorage("themes"));
  const { theme, isThemeLoaded, getWebFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [showDialog, setShowDialog] = useState(false);
  const [newTheme, setNewTheme] = useState();

  useEffect(() => {
    setSelectedTheme(theme);
    console.log("the setTheme;;;", selectedTheme);
  }, [isThemeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: { families: getWebFonts() },
    });
  });

  const manageDialog = () => {
    setShowDialog(!showDialog);
  };

  const createTheme = (newTheme) => {
    console.log(newTheme);
    setShowDialog(false);
    setNewTheme(newTheme);
  };

  console.log("resetStyles;;;", selectedTheme);
  return (
    <>
      {isThemeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle />
          <Container style={{ fontFamily: selectedTheme.font }}>
            <Root />
            <button className="btn" onClick={manageDialog}>
              Create a Theme
            </button>
            {/* <Dialog
              header="Create a Theme"
              body={<MakeTheme create={createTheme} />}
              open={showDialog}
              callback={manageDialog}
            /> */}
            <ThemeSelector setter={setSelectedTheme} />
          </Container>
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
