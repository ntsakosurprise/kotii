/* eslint-disable react/prop-types */
import React from "react";

import { useContext, createContext } from "react";

const HeadContext = createContext({
  push: null,
});

export const HeadProvider = ({ children, head }) => {
  return <HeadContext.Provider value={head}>{children}</HeadContext.Provider>;
};

export const useHead = () => {
  return useContext(HeadContext);
};
