import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { SiBlogger } from "react-icons/si";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function SidebarDrawer() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 190,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 190,
            boxSizing: "border-box",
            [theme.breakpoints.down("md")]: {
              width: 150,
            },
            [theme.breakpoints.down("sm")]: {
              width: 120,
            },
          },
        }}
      >
        <Box sx={{ overflow: "auto", mt: 8 }}>
          <List>
            <Link to="/about">
              <ListItem key="About" disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "var(--main-bg-color)" }}>
                    <BsFillInfoSquareFill />
                  </ListItemIcon>
                  <ListItemText primary="About" sx={{ ml: -2 }} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/blogs">
              <ListItem key="Blogs" disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "var(--main-bg-color)" }}>
                    <SiBlogger />
                  </ListItemIcon>
                  <ListItemText primary="Blogs" sx={{ ml: -2 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
