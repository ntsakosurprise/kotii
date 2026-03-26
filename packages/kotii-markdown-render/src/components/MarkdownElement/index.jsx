/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// import parse from "html-react-parser";
import React from "react";
import PropTypes from "prop-types";
import { StyledMarkdown } from "../StyledMarkdown/index.jsx";

const MarkdownElement = ({ children, setCustom = false, htmlString }) => {
  console.log("MARKDOWN ELEMENT WITH PROPS", children, setCustom, htmlString);
  if (setCustom) return <>{children}</>;
  console.log("NOT SET CUSTOM, PASSING OVER");
  try {
    const rendered = (
      <>
        <StyledMarkdown>
          {children ? (
            children
          ) : (
            <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
          )}
        </StyledMarkdown>
      </>
    );
    console.log("THE RENDERED HTML", rendered);
  } catch (error) {
    console.log("ERROR PARSING HTML", error);
  }

  console.log("STYLED MARKDOWN RESULTS");

  return (
    <>
      <StyledMarkdown>
        {children ? (
          children
        ) : (
          <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
        )}
      </StyledMarkdown>
    </>
  );
};

MarkdownElement.propTypes = {
  children: PropTypes.element,
  setCustom: PropTypes.bool,
  htmlString: PropTypes.string,
};

export default MarkdownElement;
