import styled from "styled-components";

const JSONNMStyles = styled("div")(() => ({
  "& h1, h2, h3, h4": { fontWeight: 400 },
  "& h1, h2, h3, h4, h5, p": { marginBottom: "24px", padding: "0" },
  h1: { fontSize: "48px" },
  h2: { fontSize: "36px", margin: "24px 0 6px" },
  h3: { fontSize: "24px" },
  h4: { fontSize: "21px" },
  h5: { fontSize: "18px" },
  a: {
    color: "#61BFC1",
    margin: "0",
    padding: "0",
    textDecoration: "none",
    verticalAlign: "baseline",
  },
  "a:hover": { textDecoration: "underline" },
  "a:visited": { color: "#466B6C" },
  "ul, ol": { padding: "0", margin: "0" },
  li: { lineHeight: "24px" },
  "li ul, li ul": { marginLeft: "24px" },
  "p, ul, ol": { fontSize: "16px", lineHeight: "24px", maxWidth: "540px" },
  pre: { padding: "0px 24px", maxWidth: "800px", whiteSpace: "pre-wrap" },
  code: {
    fontFamily: "Consolas, Monaco, Andale Mono, monospace",
    lineHeight: 1.5,
    fontSize: "13px",
  },
  aside: { display: "block", cssFloat: "right", width: "390px" },
  blockquote: {
    borderLeft: ".5em solid #eee",
    padding: "0 2em",
    marginLeft: "0",
    maxWidth: "476px",
  },
  "blockquote  cite": {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#bfbfbf",
  },
  "blockquote cite:before": { content: "'\\2014 \\00A0'" },
  "blockquote p": { color: "#666", maxWidth: "460px" },
  hr: {
    width: "540px",
    textAlign: "left",
    margin: "0 auto 0 0",
    color: "#999",
  },
  "button,\ninput,\nselect,\ntextarea": {
    fontSize: "100%",
    margin: "0",
    verticalAlign: ["baseline", "middle"],
  },
  "button, input": { lineHeight: "normal", overflow: "visible" },
  "button::-moz-focus-inner, input::-moz-focus-inner": {
    border: "0",
    padding: "0",
  },
  'button,\ninput[type="button"],\ninput[type="reset"],\ninput[type="submit"]':
    {
      cursor: "pointer",
      WebkitAppearance: "button",
    },
  "input[type=checkbox], input[type=radio]": {
    cursor: "pointer",
    marginBottom: "0",
  },
  'input:not([type="image"]), textarea': {
    WebkitBoxSizing: "content-box",
    MozBoxSizing: "content-box",
    boxSizing: "content-box",
  },
  'input[type="search"]': {
    WebkitAppearance: "textfield",
    WebkitBoxSizing: "content-box",
    MozBoxSizing: "content-box",
    boxSizing: "content-box",
  },
  'input[type="search"]::-webkit-search-decoration': {
    WebkitAppearance: "none",
  },
  "label,\ninput,\nselect,\ntextarea": {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "13px",
    fontWeight: "normal",
    lineHeight: "normal",
    marginBottom: "18px",
  },
  "input[type=text],\ninput[type=password],\ntextarea,\nselect": {
    display: "inline-block",
    width: "210px",
    padding: "4px",
    fontSize: "13px",
    fontWeight: "normal",
    lineHeight: "18px",
    height: "18px",
    color: "#808080",
    border: "1px solid #ccc",
    WebkitBorderRadius: "3px",
    MozBorderRadius: "3px",
    borderRadius: "3px",
  },
  "select, input[type=file]": { height: "27px", lineHeight: "27px" },
  textarea: { height: "auto" },
  ":-moz-placeholder": { color: "#bfbfbf" },
  "::-webkit-input-placeholder": { color: "#bfbfbf" },
  "input[type=text],\ninput[type=password],\nselect,\ntextarea": {
    WebkitTransition: "border linear 0.2s, box-shadow linear 0.2s",
    MozTransition: "border linear 0.2s, box-shadow linear 0.2s",
    transition: "border linear 0.2s, box-shadow linear 0.2s",
    WebkitBoxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
    MozBoxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  "input[type=text]:focus, input[type=password]:focus, textarea:focus": {
    outline: "none",
    borderColor: "rgba(82, 168, 236, 0.8)",
    WebkitBoxShadow:
      "inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6)",
    MozBoxShadow:
      "inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6)",
    boxShadow:
      "inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6)",
  },
  button: {
    display: "inline-block",
    padding: "4px 14px",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "13px",
    lineHeight: "18px",
    WebkitBorderRadius: "4px",
    MozBorderRadius: "4px",
    borderRadius: "4px",
    WebkitBoxShadow:
      "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05)",
    MozBoxShadow:
      "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05)",
    boxShadow:
      "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05)",
    backgroundColor: "#0064cd",
    backgroundRepeat: "repeat-x",
    backgroundImage: [
      "-khtml-gradient(linear, left top, left bottom, from(#049cdb), to(#0064cd))",
      "-moz-linear-gradient(top, #049cdb, #0064cd)",
      "-ms-linear-gradient(top, #049cdb, #0064cd)",
      "-webkit-gradient(linear, left top, left bottom, color-stop(0%, #049cdb), color-stop(100%, #0064cd))",
      "-webkit-linear-gradient(top, #049cdb, #0064cd)",
      "-o-linear-gradient(top, #049cdb, #0064cd)",
      "linear-gradient(top, #049cdb, #0064cd)",
    ],
    color: "#fff",
    textShadow: "0 -1px 0 rgba(0, 0, 0, 0.25)",
    border: "1px solid #004b9a",
    borderBottomColor: "#003f81",
    WebkitTransition: "0.1s linear all",
    MozTransition: "0.1s linear all",
    transition: "0.1s linear all",
    borderColor: [
      "#0064cd #0064cd #003f81",
      "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
    ],
  },
  "button:hover": {
    color: "#fff",
    backgroundPosition: "0 -15px",
    textDecoration: "none",
  },
  "button:active": {
    WebkitBoxShadow:
      "inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05)",
    MozBoxShadow:
      "inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05)",
    boxShadow:
      "inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05)",
  },
  "button::-moz-focus-inner": { padding: "0", border: "0" },
}));

export { JSONNMStyles };
