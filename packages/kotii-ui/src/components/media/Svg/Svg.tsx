import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedSvg = styled.div<PageHeaderProps>``;

const Svg: React.FC<PageHeaderProps> = ({
  testID = "",
  src,
  inline = false,
  asComponent,
  ...props
}) => {
  return (
    <WrappedSvg data-testid={testID}>
      {inline && asComponent ? asComponent : null}
    </WrappedSvg>
  );
};

export default Svg;

// <KotiiThemeProvider>
//       <WrappedSvg   data-testid={testID}>
//         <KotiiSvg />
//       </WrappedSvg>
//     </KotiiThemeProvider>
