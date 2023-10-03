import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Switch,
  createTheme,
  Collapse,
  ListItemText,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/layouts/Navbar";
import ThemeWrapper from "../../components/reusable/ThemeWrapper";
import { useState } from "react";
import { sublinks } from "../../data/adminLinks";
import NavLinkItem from "../../components/reusable/NavLinkItem";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import {
  ModeNight,
  Home,
  StarBorder,
  Inbox,
  ManageAccounts,
} from "@mui/icons-material";

const AdminSharedLayout = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [open, setOpen] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <ThemeWrapper theme={darkTheme}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box flex={0.7} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
          <Box position="fixed">
            <List>
              <NavLinkItem
                icon={<Home />}
                to="/admin"
                text="Acceuil"
                index={0}
              />
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <ManageAccounts />
                </ListItemIcon>
                <ListItemText primary="Comptes" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {sublinks.map((item) => (
                    <NavLinkItem
                      key={item.index}
                      icon={item.icon}
                      to={item.to}
                      text={item.text}
                      index={item.index}
                    />
                  ))}
                </List>
              </Collapse>
              <ListItem disablePadding>
                <ListItemButton component="button">
                  <ListItemIcon>
                    <ModeNight />
                  </ListItemIcon>
                  <Switch
                    onChange={(e) =>
                      setMode(mode === "light" ? "dark" : "light")
                    }
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box flex={4} p={{ xs: 0, md: 2 }}>
          <Outlet />
        </Box>
      </Stack>
    </ThemeWrapper>
  );
};

export default AdminSharedLayout;
