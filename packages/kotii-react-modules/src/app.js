/* eslint-disable no-unused-vars */
import React from "react";
import { Root } from "Startup";
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
    <>
      <Root />

      <div>
        <p>Surprise</p>
      </div>
    </>
  );
};

export default App;