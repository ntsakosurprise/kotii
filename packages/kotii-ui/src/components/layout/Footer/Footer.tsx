import { Footer as Gfooter } from "grommet";
import React from "react";
import styled from "styled-components";
import { FooterProps } from "./types";

const WrappedFooter = styled.div<FooterProps>``;

const Footer: React.FC<FooterProps> = ({
  testID = "",
  pad,
  direction,
  children,
  ...props
}) => {
  return (
    <WrappedFooter data-testid={testID}>
      <Gfooter direction={direction} pad={pad} {...props}>
        {children}
      </Gfooter>
    </WrappedFooter>
  );
};

export default Footer;
