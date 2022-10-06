import { Box, Fade, IconButton, Modal, Stack, useTheme } from "@mui/material";
import MainNav from "./nav";
import { useVisibilityState } from "webrix/hooks";
import { Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./logo";
import LocaleSwitcher from "./localeSwitcher";
import CloseIcon from "@mui/icons-material/Close";

export default function MobileNav() {
  const { visible, show, hide } = useVisibilityState(false);

  const { palette } = useTheme();

  return (
    <Fragment>
      <IconButton onClick={show}>
        <MenuIcon color="primary" fontSize="large" />
      </IconButton>

      <Modal
        open={visible}
        onClose={hide}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={visible}>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              inset: 0,
              bgcolor: palette.primary.main,
            }}
          >
            <Box sx={{ position: "absolute", top: 15, right: 25 }}>
              <IconButton onClick={hide} sx={{ color: "#fff" }}>
                <CloseIcon color="inherit" fontSize="large" />
              </IconButton>
            </Box>
            <Logo type="white" height={124} width={150} sx={{ ml: 3 }} />
            <MainNav />
            <LocaleSwitcher />
          </Stack>
        </Fade>
      </Modal>
    </Fragment>
  );
}
