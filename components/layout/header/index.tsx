import { Stack } from "@mui/system";
import { Box, Container } from "@mui/material";
import MainNav from "./nav";
import LocaleSwitcher from "./localeSwitcher";
import Logo from "./logo";
import Headroom from "react-headroom";
import useMediaQuery from "../../../hooks/useMediaQuery";
import MobileNav from "./mobileNav";

export default function Header() {
  const { isSm } = useMediaQuery();

  return (
    <Headroom disableInlineStyles>
      <Box component="header" sx={{ py: 2, background: "#fff" }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Logo  />
            <Stack direction="row" alignItems="center" spacing={5}>
              {!isSm ? (
                <>
                  <MainNav />
                  <Box>
                    <LocaleSwitcher />
                  </Box>
                </>
              ) : (
                <MobileNav />
              )}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Headroom>
  );
}
