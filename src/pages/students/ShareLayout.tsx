import { Outlet } from "react-router-dom";
import { Box, createTheme, Stack } from "@mui/material"; 
import { useState } from "react";

import Sidebar from "../../components/layouts/Sidebar";
import Rightbar from "../../components/layouts/Rightbar";
import ThemeWrapper from "../../components/reusable/ThemeWrapper";
import studentSidebarItems from "../../data/studentLinks"; 
import Navbar from "../../components/layouts/Navbar";



const SharedLayout = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeWrapper theme={darkTheme}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}  sidebarItems={studentSidebarItems}/>
      <Box flex={4} p={{ xs: 0, md: 2 }}>
        <Outlet />
       </Box>
        <Rightbar />
      </Stack>
    </ThemeWrapper>
  )
};

export default SharedLayout;




