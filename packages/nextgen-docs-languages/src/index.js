/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { LanguageProvider, useLanguage } from "./context/language-provider";
console.log("LANGUAGE pROVIDER", LanguageProvider);

const TestComponent = () => {
  const { test, setTest } = useState("MY TEST");
  return <p>LOOK AT ME NOW, I'M A TESTER{test}</p>;
};

export { LanguageProvider, useLanguage, LanguageSwitcher, TestComponent };

// console.log("LANGUAGE pROVIDER", LanguageProvider);
// export const test = () => {
//   console.log("i'm the test function");
// };
// export const test2 = () => {
//   console.log("number2");
// };
