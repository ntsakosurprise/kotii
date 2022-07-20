/* eslint-disable no-unused-vars */
import {
  LanguageProvider,
  LanguageSwitcher,
  useLanguage,
} from "nextgen-docs-languages";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

const Test = () => {
  const { get } = useLanguage();
  return (
    <p>
      Message: <span>{get("greetings")}</span>
    </p>
  );
};
const App = () => {
  console.log("languageProvider", LanguageProvider);
  console.log("useLanguage;;;", useLanguage);

  // setInStorage("themes", Themes);
  // console.log("the themes");
  // console.log(getFromStorage("themes"));
  // const { theme, isThemeLoaded, getWebFonts } = useTheme();
  // const [selectedTheme, setSelectedTheme] = useState(theme);
  // const [showDialog, setShowDialog] = useState(false);
  // const [newTheme, setNewTheme] = useState();

  // useEffect(() => {
  //   setSelectedTheme(theme);
  //   console.log("the setTheme;;;", selectedTheme);
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
      {/* {isThemeLoaded && (
        <ThemeProvider theme={selectedTheme}> */}
      <LanguageProvider language="en">
        <LanguageSwitcher />
        <div>
          <p>Surprise</p>
        </div>
        <Test />
        {/* <GlobalStyle />
            <Container style={{ fontFamily: selectedTheme.font }}>
              <Root />
              <button className="btn" onClick={manageDialog}>
                Create a Theme
              </button>
              <Dialog
              header="Create a Theme"
              body={<MakeTheme create={createTheme} />}
              open={showDialog}
              callback={manageDialog}
            />
              <ThemeSelector setter={setSelectedTheme} />
            </Container> */}
      </LanguageProvider>
      {/* </ThemeProvider>
      )} */}
    </>
  );
};

export default App;
