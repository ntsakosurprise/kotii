/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";

import { createContext, useContext } from "react";

import { createHeadStore } from "../store/index.jsx";
import { useMemo } from "react";
const HeadContext = createContext(null);
export default ({ children, context = null }) => {
  // let theContext = context ?? initialHead
  const store = useMemo(() => context ?? createHeadStore(), context);
  return <HeadContext.Provider value={store}>{children}</HeadContext.Provider>;
};
export const useHead = () => {
  return useContext(HeadContext);
};
