import { Stack } from "@mui/system";
import { Box, Container } from "@mui/material";
import MainNav from "./nav";
import LocaleSwitcher from "./localeSwitcher";
import Logo from "./logo";
import Headroom from "react-headroom";

export default function Header() {
  return (
    <Headroom disableInlineStyles>
      <Box component="header" sx={{ py: 2, background: "#fff" }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Logo />
            <Stack direction="row" alignItems="center" spacing={5}>
              <MainNav />
              <Box>
                <LocaleSwitcher />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Headroom>
  );
}
