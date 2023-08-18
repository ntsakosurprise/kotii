import { Avatar as Gavatar } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedAvatar = styled.div<PageHeaderProps>``;

const Avatar: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedAvatar>
      <Gavatar {...props} />
    </WrappedAvatar>
  );
};

export default Avatar;
