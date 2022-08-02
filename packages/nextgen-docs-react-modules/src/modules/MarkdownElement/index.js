/* eslint-disable react/prop-types */
import React from "react";
import { GitHubMarkdown } from "../GitHubMarkdown";

// const GoogleFonts = styled.div`
//   @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
//   @import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");
// `;
// const StyledMarkdown = styled(GoogleFonts)(() => ({
//   fontFamily: '"Roboto", sans-serif',
//   "& h1": {
//     color: "red",
//     margin: "10px 0",
//     fontSize: "3rem",
//     lineHeight: "3.5rem",
//     fontWeight: 900,
//   },
//   "& h1, h2, h3, h4, h5, h6": { textTransform: "capitalize" },
//   "& table": {
//     minWidth: "600px",
//     border: "2px solid #2a2f36",
//     margin: "20px auto",
//     width: "100%",
//     borderSpacing: "0",
//     borderCollapse: "collapse",
//     backgroundColor: "#fff",
//   },
//   "& table thead": {
//     background: "#2a2f36",
//     color: "#fff",
//     textAlign: "left",
//     fontWeight: 600,
//   },
//   "& table thead th": { fontWeight: 600 },
//   "& table td,\ntable th": {
//     padding: "10px",
//     fontSize: "16px",
//     fontWeight: 400,
//   },
//   "& table tr:nth-child(2n)": { background: "#f5f7fa" },
//   "& pre": {
//     background: "#eee",
//     borderLeft: "10px solid #9684A3",
//     borderRadius: "10px",
//     padding: "10px",
//     letterSpacing: ".5px",
//     fontSize: "10pt",
//     color: "#96b38a",
//     fontWeight: "bold",
//   },
//   "& pre::-webkit-scrollbar": {
//     backgroundColor: "#DED7E6",
//     height: "10px",
//   },
//   "& pre::-webkit-scrollbar-thumb": {
//     background: "#9684A3",
//     borderTopRightRadius: "10px",
//   },

//   "& pre code": {
//     display: "block",
//     background: "none",
//     whiteSpace: "pre",
//     WebkitOverflowScrolling: "touch",
//     overflowX: "scroll",
//     maxWidth: "100%",
//     minWidth: "100px",
//     padding: "0",
//     fontSize: "30px",
//     fontFamily: "MyFancyCustomFont, monospace",
//   },
//   "& code": {
//     fontFamily: "MyFancyCustomFont, monospace",
//     fontSize: "inherit",
//   },

//   "& ol": {
//     margin: "0 0 1em 0",
//     padding: "0",
//     counterReset: "li",
//     listStyle: "none",
//   },
//   "& ol li": {
//     display: "block",
//     overflow: "hidden",
//     position: "relative",
//     paddingLeft: "50px",
//     minHeight: "35px",
//     margin: "10px 0px",
//     paddingTop: "4px",
//   },
//   "& ol li:before": {
//     position: "absolute",
//     top: "0px",
//     left: "0px",
//     border: "1px solid #000",
//     backgroundColor: "#d5d5d5",
//     borderRadius: "50%",
//     width: "30px",
//     height: "30px",
//     lineHeight: "30px",
//     textAlign: "center",
//     fontSize: "12px",
//     fontWeight: 700,
//     color: "#000",
//     content: "counter(li)",
//     counterIncrement: "li",
//   },
//   "& ul li": {
//     color: "green",
//     listStyle: "none",
//     position: "relative",
//     paddingLeft: "50px",
//     lineHeight: 2,
//     fontSize: "16px",
//   },
//   "& ul li:before": {
//     position: "absolute",
//     left: "0",
//     color: "red",
//     fontSize: "32px",
//     content: '"\\f111"',
//   },
//   "p > code,\nli > code,\ndd > code,\ntd > code": {
//     background: "#ffeff0",
//     wordWrap: "break-word",
//     boxDecorationBreak: "clone",
//     padding: ".1rem .3rem .2rem",
//     borderRadius: ".2rem",
//   },
//   // "& ul li.two:before": { content: '"\\f00c"' },
//   // "& ul li.three:before": { content: '"\\f10c"' },
//   // "& ul li.four:before": { content: '"\\f004"' },
//   // "& ul li.five:before": { content: '"\\f1e2"' },
//   // "& ul li.six:before": { content: '"\\f0e7"' },
//   // "& ul li:hover:before": { color: "#fff" },
//   "& p": {
//     textAlign: "justify",
//     hyphens: "auto",
//     // fontFamily: '"Pangolin", sans-serif',
//   },
//   "& p:first-of-type": { fontSize: "1.1rem" },
//   "& p:first-of-type:first-letter": {
//     fontSize: "2.2rem",
//     fontWeight: "bold",
//     float: "left",
//     display: "inline-block",
//     marginTop: "0.5rem",
//     paddingRight: "0.15rem",
//     color: "white",
//     backgroundColor: "red",
//     padding: "1.2rem 0.5rem",
//     marginRight: "0.5rem",
//   },
//   "& p:first-of-type:first-line": { fontWeight: "bold" },
//   "& blockquote": {
//     fontSize: "1.4em",
//     width: "60%",
//     margin: "50px auto",
//     fontFamily: "Open Sans",
//     fontStyle: "italic",
//     color: "#555555",
//     padding: "1.2em 30px 1.2em 75px",
//     borderLeft: "8px solid #78C0A8",
//     lineHeight: 1.6,
//     position: "relative",
//     background: "#EDEDED",
//   },
//   "& blockquote::before": {
//     fontFamily: "Arial",
//     content: '"\\201C"',
//     color: "#78C0A8",
//     fontSize: "4em",
//     position: "absolute",
//     left: "10px",
//     top: "-10px",
//   },
//   "& blockquote::after": { content: "''" },
//   "& blockquote span": {
//     display: "block",
//     color: "#333333",
//     fontStyle: "normal",
//     fontWeight: "bold",
//     marginTop: "1em",
//   },
// }));

const MarkdownElement = ({ children }) => {
  return <GitHubMarkdown>{children}</GitHubMarkdown>;
};

export default MarkdownElement;
