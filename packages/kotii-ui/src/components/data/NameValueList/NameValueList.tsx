import { NameValueList as GnameValueList } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedValueList = styled.div<PageHeaderProps>``;

const NameValueList: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedValueList>
      <GnameValueList {...props} />
    </WrappedValueList>
  );
};

export default NameValueList;
