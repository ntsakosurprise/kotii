/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";

// export const Interactive = ({ children }) => {
//   console.log("THE INTERACTIVE CHILDREN", children);
//   return React.cloneElement(children, { "data-interactive": "yes" });
// };

import React, { useContext } from "react";

export const VisibleWrapper = (children) => {
  // Helper: recursively handle children
  console.log("THE VISIBLE WRAPPER RUNS", children);
  const transformChild = (child) => {
    if (!child) return null;

    // If child is an array, recurse
    if (Array.isArray(child)) {
      return child.map(transformChild);
    }

    // If child is a React element
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        // If the child already has props, merge them
        ...child.props,
        // For each child of this element, recurse
        children: transformChild(child.props.children),
      });
    }

    // If child is a conditional expression (we capture &&)
    if (
      typeof child === "object" &&
      child?.$$typeof?.toString() === "Symbol(react.element)"
    ) {
      return child;
    }

    return child;
  };

  // For conditional && expressions in JSX, we cannot directly inspect
  // the expression without wrapping in a function, so we require
  // the user to pass it as <VisibleWrapper children={...}/> in normal JSX
  // or we handle inline && by using a wrapper function
  const mappedChildren = React.Children.map(children, (child) => {
    // Only handle normal elements
    console.log("CHILD MAPPING", child, React.isValidElement(child));
    if (!React.isValidElement(child)) return child;
    console.log("IS VALIDE REACT ELEMENT", child.props);

    // Detect if this element has a `data-visible` prop already
    if (child.props["data-visible"]) return child;
    console.log("HAS DATA VISIBLE");

    // Here we detect if the element was wrapped in a logical && manually
    // For your example: {errors && errors.username && <strong>…</strong>}
    // You would instead write:
    // <VisibleWrapper>{errors && errors.username ? <strong>…</strong> : null}</VisibleWrapper>
    // Then we capture the condition and inject it
    const visibleExpr =
      child.props["data-visible"] || "errors && errors.username";
    console.log("THE VISIBLE EXPR");

    return React.cloneElement(child, {
      ...child.props,
      "data-visible": visibleExpr,
      children: transformChild(child.props.children),
    });
  });

  return <>{mappedChildren}</>;
};
