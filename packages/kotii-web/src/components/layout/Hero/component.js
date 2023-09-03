import React, { useEffect } from "react";
import stones from "../../../../public/img/stones.jpg";

// import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Circle,
  Oval,
  Rectangle,
  Shape,
  Square,
  Text,
  useKotiiTheme,
} from "kotii-ui";
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

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Hero = () => {
  const { changeTheme, changeThemeMode } = useKotiiTheme();
  const themeNames = ["dark", "light", "seaWave", "cherry"];
  const themeModes = ["dark", "light"];
  useEffect(() => {
    console.log("HERO REMOUNTED");
  }, []);
  return (
    <Box
      direction={"column"}
      background="app-background"
      height={"medium"}
      width={"100%"}
      // wrap={true}
      animation={"fadeIn"}
      gap="large"
      pad={{ left: "medium" }}
      alignContent="between"
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
          Kotii Component Library
        </Text>
        <Shape
          size="large"
          name={"octagon"}
          style={{
            backgroundImage: `url(${stones})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box background="app-background">
            <Text>My Shape Text</Text>
            <img src="/img/stones.jpg" alt="Kotii Logo" width={"40px"} />
          </Box>
        </Shape>
      </Box>
      <Box
        direction="row"
        as={"section"}
        align="center"
        alignContent="around"
        // wrap={true}
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
          <TokensButton text="Shapes" />
        </Box>

        <Box
          pad={"xlarge"}
          fill="vertical"
          background={"white"}
          margin={{ left: "50px" }}
          width="90%"
        >
          <Box>
            <Text size="15px" color={"black"}>
              Kotii-ui is a component library this is set of re-usable
              components and utilities made from Grommet Design system.
              Basically, Kotii-ui is a wrapper around Grommet with added extras
              to help you quickly build your products and achieve accessibility.
            </Text>
            <Square width={10}>
              <Text color={"white"}>Square</Text>
            </Square>
            <Circle background="app-background" size="xxsmall" />
            <Rectangle background="app-background" />
            <Oval />
            <Square width="xsmall" background="app-background" />
            <Button
              label="changeTheme"
              onClick={() => changeTheme(themeNames[randomInteger(0, 3)])}
            />
            <Button
              label="changeThemeMode"
              onClick={() => changeThemeMode(themeModes[randomInteger(0, 1)])}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
