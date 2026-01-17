/* eslint-disable react/prop-types */
import React from "react";

export const InteractionContext = React.createContext(null);

export function InteractionProvider({ children, interactions }) {
  return (
    <InteractionContext.Provider value={interactions}>
      {children}
    </InteractionContext.Provider>
  );
}
