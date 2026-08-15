import React from "react";
import styled from "kotii-styled";
import { PageHeaderProps } from "./types";

// 1. Change the generic from <PageHeaderProps> to <any> to prevent the internal 'as' prop collision
const WrappedAcontext = styled.div<any>``;

// 2. Keep the component strictly typed with PageHeaderProps so your app stays safe
const AnnounceContext: React.FC<PageHeaderProps> = ({
  testID = "",
  ...props
}) => {
  return (
    <WrappedAcontext data-testid={testID}>
      {/* <GannounceContext {...props} /> */}
    </WrappedAcontext>
  );
};

export default AnnounceContext;
