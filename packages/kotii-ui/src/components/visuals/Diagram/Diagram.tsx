import { Diagram as Gdiagram } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDiagram = styled.div<PageHeaderProps>``;

const Diagram: React.FC<PageHeaderProps> = ({
  testID = "",
  connections,
  ...props
}) => {
  return (
    <WrappedDiagram connections={connections} data-testid={testID}>
      <Gdiagram {...props} connections={connections} />
    </WrappedDiagram>
  );
};

export default Diagram;
