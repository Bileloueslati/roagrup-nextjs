import { CssBaseline, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import { FunctionComponent, PropsWithChildren } from "react";
import theme from "../../libs/mui/theme";
import Footer from "./footer";
import Header from "./header";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction="column" minHeight="100vh">
        <Header />
        <Stack component="main">{children}</Stack>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
