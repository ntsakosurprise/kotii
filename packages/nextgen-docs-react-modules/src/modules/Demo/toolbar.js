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
  nav: {
    // position: "fixed",
    // bottom: "0",
    width: "100%",
    padding: "12px",
    maxWidth: "500px",
    margin: "0 auto",
    left: "0",
    right: "0",
  },
  ".nav": {
    "&-container": {
      display: "flex",
      width: "100%",
      listStyle: "none",
      justifyContent: "space-around",
    },
  },
}));
const ListItem = styled("li")(() => ({
  display: "flex",
  position: "relative",
  padding: "2px",
  "&.active": {
    ".nav__item-icon": {
      marginTop: "-26px",
      boxShadow: "0px 0px 16px 0px #4444",
    },
    ".nav__item-text": { transform: "scale(1)" },
  },
}));

const DemoLink = styled("a")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#2f3046",
  textDecoration: "none",
}));

const ListIcon = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.6em",
  backgroundColor: "#fff",
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
          <DemoLink href={`#${text}`}>
            <ListIcon>{getIcon(icon.toLowerCase())}</ListIcon>
            <ListText>{text}</ListText>
          </DemoLink>
        </ListItem>
      );
    });
  };
  return (
    <ToolbarNav>
      <nav className="nav">
        <div className="nav-box">
          <ul className="nav-container">{getToolbarItems()}</ul>
        </div>
      </nav>
    </ToolbarNav>
  );
};

export default DemoToolbar;
