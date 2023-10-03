import { Box, ThemeProvider, Theme } from "@mui/material";
import  { ReactNode } from "react";

interface ThemeWrapperProps {
  children: ReactNode;
  theme: Theme;
}

const ThemeWrapper = ({ children, ...others }: ThemeWrapperProps): JSX.Element => {
  return (
    <ThemeProvider {...others}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
