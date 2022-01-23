import React, { useState } from "react";
import { Box } from "@mui/material";
import CustomizedAccordions from "./customAccordion";
import NavMenu from "./nav";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ArticleRoundeIcon from "@mui/icons-material/ArticleRounded";
import FoundationRounded from "@mui/icons-material/FoundationRounded";
import ToggleOffRounded from "@mui/icons-material/ToggleOffRounded";
import PhoneIphoneRounded from "@mui/icons-material/PhoneIphoneRounded";
import ApiRoundedIcon from "@mui/icons-material/ApiRounded";
import StartRoundedIcon from "@mui/icons-material/StartRounded";

const items = [
  {
    mainItem: "Introduction",
    MainIcon: StartRoundedIcon,
    noItems: true,
    itemBase: "/introduction",
  },
  {
    mainItem: "Get Started",
    MainIcon: ArticleRoundeIcon,
    itemBase: "get-started/",
    items: [
      {
        name: "Installaion",
        to: "installation",
      },
      {
        name: "Examples",
        to: "examples",
      },
    ],
  },
  {
    mainItem: "Framework",
    MainIcon: FoundationRounded,
    itemBase: "framework/",
    items: [
      {
        name: "framework",
        to: "framework",
      },
      {
        name: "FrameTwo",
        to: "frameTwo",
      },
    ],
  },
  {
    mainItem: "Components",
    MainIcon: ToggleOffRounded,
    itemBase: "components/",
    items: [
      {
        name: "Icons",
        to: "icons",
      },
      {
        name: "INPUTS",
        nested: [
          { name: "AutoComplete", to: "autocomplete" },
          { name: "Button", to: "button" },
          { name: "Checkbox", to: "checkbox" },
          { name: "Checkmark", to: "checkmark" },
          { name: "Radiobutton", to: "radiobutton" },
          { name: "Rating", to: "rating" },
          { name: "Select", to: "select" },
          { name: "Slider", to: "slider" },
          { name: "Switch", to: "switch" },
          { name: "Texfield", to: "textfield" },
          { name: "Rating", to: "rating" },
          { name: "Select", to: "select" },
          { name: "Slider", to: "slider" },
          { name: "Switch", to: "switch" },
          { name: "Texfield", to: "textfield" },
        ],
      },
    ],
  },
  {
    mainItem: "Application",
    MainIcon: PhoneIphoneRounded,
    itemBase: "application/",
    items: [
      {
        name: "framework",
        to: "framework",
      },
      {
        name: "FrameTwo",
        to: "frameTwo",
      },
    ],
  },
  {
    mainItem: "Api",
    MainIcon: ApiRoundedIcon,
    itemBase: "api/",
    items: [
      {
        name: "framework",
        to: "framework",
      },
      {
        name: "FrameTwo",
        to: "frameTwo",
      },
    ],
  },
];

const DropDownItem = ({ menuItem }) => {
  const {
    mainItem = "",
    MainIcon = null,
    items = null,
    itemBase = "",
    noItems = false,
  } = menuItem;
  return (
    <CustomizedAccordions
      summary={mainItem}
      icon={MainIcon}
      to={itemBase}
      noItems={noItems}
    >
      {items ? <NavMenu items={items} /> : null}
    </CustomizedAccordions>
  );
};

const renderItem = (item, i) => {
  return <DropDownItem menuItem={item} key={i} />;
};

const SidebarNav = () => {
  return (
    <Box>
      {items.map((item, i) => {
        return renderItem(item, i);
      })}
    </Box>
  );
};

const Sidebar = () => {
  return (
    <div
      style={{
        width: "300px",
        position: "fixed",
        top: "150px",
        minHeight: "100vh",
        left: 0,
        display: "inline-block",
        backgroundColor: "#f2f1f1",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <div style={{ minHeight: "10vh", height: "100%", overflowY: "scroll" }}>
        <SidebarNav />
      </div>
    </div>
  );
};

export default Sidebar;
