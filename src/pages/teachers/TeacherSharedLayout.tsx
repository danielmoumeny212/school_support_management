import { Box, Stack, createTheme } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ThemeWrapper from "../../components/reusable/ThemeWrapper";
import Navbar from "../../components/layouts/Navbar";
import Sidebar from "../../components/layouts/Sidebar";
import sidebarItems from "../../data/teacherNavLink"; 

const TeacherSharedLayout = () => {
  const [mode, setMode] = useState<"light"| "dark">("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }});
  return (
    <ThemeWrapper theme={darkTheme}>
       <Navbar />
       <Stack   direction="row" spacing={2} justifyContent="space-between">
       <Sidebar setMode={setMode} mode={mode} sidebarItems={sidebarItems}/>
      <Box flex={4} p={{ xs: 0, md: 2 }}>
        <Outlet />
       </Box>
      </Stack>
    </ThemeWrapper>
  )
}

export default TeacherSharedLayout