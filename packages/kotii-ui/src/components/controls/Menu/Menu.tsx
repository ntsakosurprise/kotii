import { Menu as Gmenu } from "grommet";

import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedMenu = styled.div<PageHeaderProps>``;

const Menu: React.FC<PageHeaderProps> = ({ testID = "", items, ...props }) => {
  return (
    <WrappedMenu items={items}>
      <Gmenu items={items} {...props} />
    </WrappedMenu>
  );
};

export default Menu;
