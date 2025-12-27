import { createContext } from "react";

export const initialHead = {
  push: null,
  headRouterEntries: [],
  componentHeadEntries: [],
};

const HeadContext = createContext(initialHead);

export default HeadContext;
