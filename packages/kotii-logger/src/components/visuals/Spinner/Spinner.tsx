import { Spinner as Gspinner } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedSpinner = styled.div<PageHeaderProps>``;

const Notification: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedSpinner data-testid={testID}>
      <Gspinner {...props} />
    </WrappedSpinner>
  );
};

export default Notification;
