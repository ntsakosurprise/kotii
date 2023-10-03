/* eslint-disable no-unused-vars */
import {
  LanguageProvider,
  // LanguageSwitcher,
  useLanguage,
} from "kotii-languages";
import { logger } from "kotii-logger";
// import { getPages, Routes as KotiiRouterRoot } from "kotii-router";
import { KotiiGlobal, KotiiThemeProvider, Square, Text } from "kotii-ui";
import {
  peTranslation,
  tsTranslation,
  veTranslation,
  zuTranslation,
} from "Language";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Root } from "Startup";
// const routerLoader = require("kotii-router-loader!.");
// console.log("THE RESULT", routerLoader);
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
  logger.log("events", "I'M RUNNING FROM THE LOGGER");
  // console.log("kotii-router-root", KotiiRouterRoot);
  return (
    <KotiiThemeProvider>
      <KotiiGlobal />
      <Square width={500} background="app-background">
        <Text color={"white"}>Square</Text>
      </Square>
      {/* <ThemeSwitcher /> */}
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
        <header>
          <Link
            to="/"
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   alignContent: "center",
            //   alignItems: "center",
            // }}
          >
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text size="18px" color={"black"}>
                Home
              </Text>
            </p>
          </Link>
          <Link
            to="/about"
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   alignContent: "center",
            //   alignItems: "center",
            // }}
          >
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text size="18px" color={"black"}>
                About
              </Text>
            </p>
          </Link>
          <Link
            to="/posts"
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   alignContent: "center",
            //   alignItems: "center",
            // }}
          >
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text size="18px" color={"black"}>
                Posts
              </Text>
            </p>
          </Link>
          <Link
            to="/contact-us"
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   alignContent: "center",
            //   alignItems: "center",
            // }}
          >
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text size="18px" color={"black"}>
                Posts
              </Text>
            </p>
          </Link>
          <Link
            to="/faqs"
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   alignContent: "center",
            //   alignItems: "center",
            // }}
          >
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text size="18px" color={"black"}>
                Faqs
              </Text>
            </p>
          </Link>
        </header>
        <Root />

        {/* <Test /> */}
      </LanguageProvider>
    </KotiiThemeProvider>
  );
};

const AppOld = () => {
  return (
    <>
      <header>
        <Link
          to="/"
          // style={{
          //   display: "flex",
          //   flexDirection: "row",
          //   alignContent: "center",
          //   alignItems: "center",
          // }}
        >
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text size="18px" color={"black"}>
              Home
            </Text>
          </p>
        </Link>
        <Link
          to="/about"
          // style={{
          //   display: "flex",
          //   flexDirection: "row",
          //   alignContent: "center",
          //   alignItems: "center",
          // }}
        >
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text size="18px" color={"black"}>
              About
            </Text>
          </p>
        </Link>
        <Link
          to="/posts"
          // style={{
          //   display: "flex",
          //   flexDirection: "row",
          //   alignContent: "center",
          //   alignItems: "center",
          // }}
        >
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text size="18px" color={"black"}>
              Posts
            </Text>
          </p>
        </Link>
      </header>
      <p>Im the current app</p>;<div>Footer</div>
    </>
  );
};

export default App;
