import { Box, List, ListItem, ListItemButton, ListItemIcon, Switch } from '@mui/material'
import { ModeNight } from '@mui/icons-material'
import NavLinkItem from '../reusable/NavLinkItem'

interface SidebarProps {
  mode: string;
  setMode:  React.Dispatch<React.SetStateAction<"light"| "dark">>;
  sidebarItems: SidebarItem[];
}

const Sidebar = ({ mode, setMode, sidebarItems }: SidebarProps) => {
  return (
    <Box flex={.7} p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <List>
          {sidebarItems.map((item) => (
            <NavLinkItem key={item.index} icon={item.icon} to={item.to} text={item.text} index={item.index} />
          ))}
          <ListItem disablePadding>
            <ListItemButton component="button">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
