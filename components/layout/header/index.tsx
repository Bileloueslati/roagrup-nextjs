import { Stack } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import MainNav from "./nav";
import LocaleSwitcher from "./localeSwitcher";
import Cta from "./cta";
import Logo from "./logo";

export default function Header() {
  const theme = useTheme();

  return (
    <Box component="header" sx={{ py: 2, boxShadow: "-2px 2px 10px #eee" }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo />
          <Stack direction="row" alignItems="center" spacing={3}>
            <MainNav />
            <Cta />
            <Box>
              <LocaleSwitcher />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
