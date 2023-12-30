import { Video as Gvideo } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedVideo = styled.div<PageHeaderProps>``;

const Video: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedVideo>
      <Gvideo {...props} />
    </WrappedVideo>
  );
};

export default Video;
