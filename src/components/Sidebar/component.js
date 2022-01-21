import React, { useState } from "react";
import { Box } from "@mui/material";
import CustomizedAccordions from "./customAccordion";
import NavMenu from "./nav";

const items = [
  {
    mainItem: "Get Started",
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
    itemBase: "components/",
    items: [
      {
        name: "Icons",
        to: "icons",
      },
      {
        name: "Shared",
        to: "shared",
      },
    ],
  },
  {
    mainItem: "Application",
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
  return (
    <CustomizedAccordions summary={menuItem.mainItem}>
      <NavMenu items={menuItem.items} />
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
      }}
    >
      <div style={{ minHeight: "10vh" }}>
        <SidebarNav />
      </div>
    </div>
  );
};

export default Sidebar;
