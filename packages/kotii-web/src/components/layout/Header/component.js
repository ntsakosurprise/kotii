import React from "react";
// import { Link } from "react-router-dom";
import { Box, Header, Square, Text, ThemeSwitcher } from "kotii-ui";
import { AiFillGithub, AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <Header
      background="app-background"
      direction="row"
      pad={{ vertical: "5px", horizontal: "15px" }}
      responsive={true}
    >
      <Box direction="row">
        <Link
          to="/"
          // style={{
          //   display: "flex",
          //   flexDirection: "row",
          //   alignContent: "center",
          //   alignItems: "center",
          // }}
        >
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/img/kotii.png" alt="Kotii Logo" width={"40px"} />
            <Text size="18px" color={"black"}>
              Kotii
            </Text>
          </p>
          <Text size="12px" color={"black"}>
            Component Library
          </Text>
        </Link>
      </Box>
      <Box>
        <Text>Item 2</Text>
        <Square
          size="large"
          background="app-background"
          // border="large ridge green top left"
          border="30 ridge green horizontal:50px-dotted-red bottom:60-solid-brown"
        />
      </Box>
      <Box
        // alignSelf="end"
        // background={"red"}
        // fill="horizontal"
        // width={"medium"}
        direction="row"
        alignContent="around"
      >
        <AiFillGithub color="#D680FF" />
        <AiFillSetting color="#D680FF" />
        <ThemeSwitcher />

        {/* <Circle /> */}
      </Box>
    </Header>
  );
};

export default AppHeader;
