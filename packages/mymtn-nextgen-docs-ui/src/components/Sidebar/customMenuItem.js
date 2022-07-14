import * as React from "react";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export default function CustomMenuItem(
  { name, to = "/", index = 0 },
  styles = { fontSize: "1.2rem" }
) {
  return (
    <Link href={to} key={index} style={{ ...styles }}>
      <MenuItem>
        {/* <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon> */}
        <ListItemText>
          <Typography fontSize="1.6rem">{name}</Typography>
        </ListItemText>
      </MenuItem>
    </Link>
  );
}
