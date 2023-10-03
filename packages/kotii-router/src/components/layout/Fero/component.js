import React from "react";
// import { Link } from "react-router-dom";
import { Box, Button, Text } from "kotii-ui";
const buttonMinWidth = "105px";
const TokensButton = (props) => {
  return (
    <Button
      // eslint-disable-next-line react/prop-types
      label={props?.text}
      fill
      size="small"
      style={{
        borderRadius: "5px",
        minWidth: buttonMinWidth,
        backgroundColor: "white",
        border: "none",
        fontSize: "20px",
        color: "black",
        borderBottom: "solid 1px #D680FF",
        margin: "5px",
      }}
      pad="medium"
    />
  );
};

const Fero = () => {
  return (
    <Box
      direction={"column"}
      background={"#00BFA5"}
      height={"medium"}
      width={"100%"}
      // wrap={true}
      animation={"fadeIn"}
      gap="large"
      pad={{ left: "medium" }}
      alignContent="center"
      align="center"
    >
      <Box
        width={"100%"}
        // background={"red"}
        direction="row"
        fill={"horizontal"}
        flex="grow"
        // basis="xxlarge"
        // alignSelf="stretch"
        as={"section"}
        margin={{ top: "large" }}
      >
        <Text size="60px" color={"white"}>
          Thank You For Viewing Kotii
        </Text>
      </Box>
      <Box
        direction="row"
        as={"section"}
        align="center"
        alignContent="around"
        wrap={true}
        gap="medium"
        fill="horizontal"
      >
        <Box
          as={"section"}
          direction="row"
          width={"600px"}
          align="center"
          alignContent="around"
          wrap={true}
          gap="medium"
        >
          <TokensButton text="Media" />
          <TokensButton text="Layout" />
          <TokensButton text="Controls" />
          <TokensButton text="Visualizations" />
          <TokensButton text="Data" />
          <TokensButton text="Input" />
        </Box>

        <Box pad={"large"}>
          <Box>
            <Text>{`I'm the new text`}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Fero;
