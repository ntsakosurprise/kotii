import { Footer as Gfooter } from "grommet";
import React from "react";
import styled from "styled-components";
import { BaseProps } from "../../../types";

const WrappedFooter = styled.div<BaseProps>``;

const Footer: React.FC<BaseProps> = ({
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
