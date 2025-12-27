/* eslint-disable react/prop-types */
import React from "react";

import { useContext, createContext } from "react";

const HeadContext = createContext({
  push: null,
});

export const HeadProvider = ({ children, context }) => {
  return (
    <HeadContext.Provider value={context}>{children}</HeadContext.Provider>
  );
};

export const useHead = () => {
  return useContext(HeadContext);
};
