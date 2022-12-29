/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { styled } from "styled-components";

const Head = styled.div`
  color: yellow;
`;

export const ReusableModuleComponet = () => {
  return (
    <>
      <Head>
        <p>I'm the Resuable Head</p>
      </Head>
    </>
  );
};
