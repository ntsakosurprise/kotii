import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import CustomMenuList from "./customMenuList";

export default function NavMenu({ items }) {
  return (
    <Paper elevation={0} sx={{ width: 200, maxWidth: "100%" }}>
      <CustomMenuList items={items} />
    </Paper>
  );
}
