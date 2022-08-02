/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const StyledMarkdown = styled("div")(() => ({
  "& h1": { color: "red", margin: "10px 0", fontWeight: 800 },
  "& table": {
    minWidth: "600px",
    border: "2px solid #2a2f36",
    margin: "20px auto",
    width: "100%",
    borderSpacing: "0",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
  },
  "& table thead": {
    background: "#2a2f36",
    color: "#fff",
    textAlign: "left",
    fontWeight: 600,
  },
  "& table thead th": { fontWeight: 600 },
  "& table td,\ntable th": {
    padding: "10px",
    fontSize: "16px",
    fontWeight: 400,
  },
  "& table tr:nth-child(2n)": { background: "#f5f7fa" },
}));

const MarkdownElement = ({ children }) => {
  return (
    <>
      <StyledMarkdown>{children}</StyledMarkdown>
    </>
  );
};

export default MarkdownElement;
