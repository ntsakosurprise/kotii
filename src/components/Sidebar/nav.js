import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import { Link } from "@mui/material";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";

export default function NavMenu({ items }) {
  return (
    <Paper elevation={0} sx={{ width: 200, maxWidth: "100%" }}>
      <MenuList>
        {items.map((item, i) => {
          return (
            <Link href="/" key={i}>
              <MenuItem>
                {/* <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon> */}
                <ListItemText>
                  <Typography fontSize="1.6rem">{item.name}</Typography>
                </ListItemText>
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Paper>
  );
}
