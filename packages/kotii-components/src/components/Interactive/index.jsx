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

  // Not in SSG mode → pass through untouched
  if (!interactions) {
    return children;
  }

  function processElement(element) {
    if (!React.isValidElement(element)) {
      return element;
    }

    const props = { ...element.props };
    const events = [];

    Object.keys(props).forEach((key) => {
      if (EVENT_REGEX.test(key) && typeof props[key] === "function") {
        const event = key.slice(2).toLowerCase();

        events.push({
          name: event,
          code: props[key].toString(),
        });

        delete props[key];
      }
    });

    // Recurse into children
    if (props.children) {
      props.children = React.Children.map(props.children, processElement);
    }

    // Only assign an interactive id if events were found
    if (events.length > 0) {
      const elId = `interactive-${interactions.length}`;

      interactions.push({
        id: elId,
        events,
      });

      props["data-interactive-id"] = elId;
    }

    return React.cloneElement(element, props);
  }

  return React.Children.map(children, processElement);
};
