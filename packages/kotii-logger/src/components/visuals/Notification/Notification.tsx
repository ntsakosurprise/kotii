import { Notification as Gnotification } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedNotification = styled.div<PageHeaderProps>``;

const Notification: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedNotification>
      <Gnotification {...props} />
    </WrappedNotification>
  );
};

export default Notification;
