import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedList = styled.div<PageHeaderProps>``;

const List: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return <WrappedList data-testid={testID} />;
};

export default List;
