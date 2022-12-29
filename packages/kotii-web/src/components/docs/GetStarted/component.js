/* eslint-disable no-unused-vars */
import { useLanguage } from "nextgen-docs-languages";
import React from "react";
export const GetStarted = () => {
  const { get, language } = useLanguage();
  return (
    <div>
      <p>I am the get started docs comp</p>
      <strong>{get("greetings")}</strong>
    </div>
  );
};
