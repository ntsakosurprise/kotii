import React from "react";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMessage,
  AiOutlineProfile,
  AiOutlineSetting,
} from "react-icons/ai";
import styled from "styled-components";

const ToolbarNav = styled("div")(() => ({
  width: "100%",
  maxWidth: "500px",
  color: "inherit",
  fontSize: "16px",
  alignSelf: "flex-end",
}));

const Navigation = styled("nav")(() => ({
  display: "flex",
  width: "100%",
  listStyle: "none",
}));

const UnorderedList = styled("ul")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  width: "100%",
  listStyle: "none",
}));
const ListItem = styled("li")(() => ({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  // padding: "2px",
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  backgroundColor: "yellow",
  marginRight: "1%",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "white",
  },
}));

const DemoItemsContainer = styled("a")(() => ({
  // display: "flex",
  // flexDirection: "column",
  // alignItems: "center",
  color: "#2f3046",
}));

const ListIcon = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.6em",
  // backgroundColor: "#fff",
  borderRadius: "50%",
  height: "25px",
  width: "25px",
  transition: "margin-top 250ms ease-in-out, box-shadow 250ms ease-in-out",
}));

const ListText = styled("span")(() => ({
  position: "absolute",
  bottom: "0",
  transform: "scale(0)",
  transition: "transform 250ms ease-in-out",
}));

const DemoToolbar = () => {
  const items = [
    {
      text: "Home",
      icon: "home",
    },
    { text: "Profile", icon: "profile" },
    { text: "messages", icon: "messages" },
    { text: "help", icon: "help" },
    { text: "settings", icon: "settings" },
  ];

  const getIcon = (icon) => {
    switch (icon) {
      case "home":
        return <AiOutlineHome />;
      case "profile":
        return <AiOutlineProfile />;
      case "messages":
        return <AiOutlineMessage />;
      case "help":
        return <AiOutlineInfoCircle />;
      case "settings":
        return <AiOutlineSetting />;
      default:
        return null;
    }
  };
  const getToolbarItems = () => {
    return items.map((current, i) => {
      let { text, icon } = current;
      return (
        <ListItem key={i}>
          <DemoItemsContainer>
            <ListIcon>{getIcon(icon.toLowerCase())}</ListIcon>
            <ListText>{text}</ListText>
          </DemoItemsContainer>
        </ListItem>
      );
    });
  };
  return (
    <ToolbarNav>
      <Navigation>
        <UnorderedList>{getToolbarItems()}</UnorderedList>
      </Navigation>
    </ToolbarNav>
  );
};

export default DemoToolbar;
