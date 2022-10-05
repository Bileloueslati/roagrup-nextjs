import {
  Box,
  Button,
  Modal,
  useTheme,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "@mui/material/Fade";
import { useForm } from "react-hook-form";
import Map from "./map";
import { useTranslation } from "next-i18next";

type Data = {
  [key in "firstName" | "lastName" | "subject" | "message"]: string;
};

export default function FloatingButton() {
  const [open, setOpen] = useState(false);

  const { palette } = useTheme();

  const { t } = useTranslation("common");

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<Data>();

  const onSubmit = (data: Data) => {
    console.log(data);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          right: "18px",
          top: "calc(50% - 120px)",
          zIndex: 9999,
          height: "100%",
        }}
      >
        <Button
          color="secondary"
          onClick={handleOpen}
          startIcon={<MessageIcon />}
          variant="contained"
          sx={{
            transform: "rotate(-90deg)",
            transformOrigin: "center right",
            px: 4,
            visibility: {
              md: open ? "hidden" : "visible",
              xs: "hidden",
            },
          }}
        >
          {t("get_a_quote")}
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          timeout: 700,
        }}
        closeAfterTransition
        keepMounted
      >
        <Fade in={open}>
          <Stack
            justifyContent="center"
            sx={{
              background: alpha(palette.primary.main, 0.6),
              height: "100%",
              width: "100%",
            }}
          >
            <Container>
              <Stack
                sx={{
                  background: palette.common.white,
                  minHeight: "85vh",
                  px: 4,
                  borderRadius: 2,
                }}
              >
                <Stack
                  justifyContent="space-between"
                  alignItems="center"
                  direction="row"
                  sx={{
                    borderBottom: "1px solid #eee",
                    py: 1,
                    my: 3,
                  }}
                >
                  <Box>
                    <Typography variant="h2" fontSize={30} color="primary">
                      Free Consulting With Exceptional Quality
                    </Typography>

                    <Typography variant="body2" fontSize={16}>
                      Do you have a question ?
                    </Typography>
                  </Box>

                  <Button
                    sx={{
                      "& svg": {
                        fontSize: `30px !important`,
                      },
                    }}
                    variant="text"
                    onClick={handleClose}
                    startIcon={<CloseIcon />}
                  />
                </Stack>

                <Grid container spacing={8}>
                  <Grid item md={6}>
                    <Map />
                  </Grid>

                  <Grid item md={6}>
                    <Stack
                      component="form"
                      spacing={2}
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <TextField
                        variant="standard"
                        label="First name"
                        {...register("firstName")}
                        fullWidth
                      />

                      <TextField
                        variant="standard"
                        label="Last name"
                        {...register("lastName")}
                        fullWidth
                      />

                      <TextField
                        variant="standard"
                        label="Subject"
                        {...register("subject")}
                        fullWidth
                      />

                      <TextField
                        variant="standard"
                        label="Message"
                        rows={5}
                        {...register("message")}
                        fullWidth
                        multiline
                      />

                      <Button
                        color="secondary"
                        variant="contained"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Container>
          </Stack>
        </Fade>
      </Modal>
    </>
  );
}
