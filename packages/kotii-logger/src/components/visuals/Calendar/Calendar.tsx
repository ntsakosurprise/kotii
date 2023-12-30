import { Calendar as Gcalendar } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedCalendar = styled.div<PageHeaderProps>``;

const Select: React.FC<PageHeaderProps> = ({
  testID = "",
  children,
  ...props
}) => {
  return (
    <WrappedCalendar>
      <Gcalendar {...props} />
    </WrappedCalendar>
  );
};

export default Select;
