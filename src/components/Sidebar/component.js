import React, { useState } from "react";
import {
  Grid,
  Link,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

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
];

const DropDownItem = ({ menuItem }) => {
  return (
    <Accordion>
      <AccordionSummary>{menuItem.mainItem}</AccordionSummary>
      <AccordionDetails>
        {menuItem.items.map((it, ii) => {
          return <Link key={ii}>{it.name}</Link>;
        })}
      </AccordionDetails>
    </Accordion>
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
    <Grid item xs={12} md={4}>
      <SidebarNav />
    </Grid>
  );
};

export default Sidebar;
