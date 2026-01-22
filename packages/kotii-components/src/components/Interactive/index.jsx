// import React from "react";

// export const Interactive = ({ children }) => {
//   console.log("THE INTERACTIVE CHILDREN", children);
//   return React.cloneElement(children, { "data-interactive": "yes" });
// };

import React, { useContext } from "react";
import { InteractionContext } from "../InteractionContext/index.jsx";

const EVENT_REGEX = /^on[A-Z]/;

export const Interactive = ({ children }) => {
  const interactions = useContext(InteractionContext);

  // Not in SSG mode → pass through
  if (!interactions) {
    return children;
  }

  const child = React.Children.only(children);
  const props = { ...child.props };

  const elId = `interactive-${interactions.length}`;
  const events = [];

  Object.keys(props).forEach((key) => {
    console.log("THE EVENT EXTRACTION");
    if (EVENT_REGEX.test(key) && typeof props[key] === "function") {
      const event = key.slice(2).toLowerCase();

      let code = props[key].toString();
      events.push({
        name: event,
        code,
      });
      delete props[key];
    }
  });

  interactions.push({
    id: elId,
    events,
  });

  //   if (child.props?.["data-interactive"]) {
  //   return child;
  // }

  return React.cloneElement(child, {
    ...props,
    "data-interactive-id": elId,
  });
};
