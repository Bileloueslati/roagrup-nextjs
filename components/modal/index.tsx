import { ReactNode, FunctionComponent, PropsWithChildren } from "react";
import {
  Modal as MuiModal,
  Box,
  Fade,
  Stack,
  Typography,
  Button,
  IconButton,
  ButtonProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { InjectedModalState } from "./widthModal";

export type ModalProps = PropsWithChildren &
  InjectedModalState & {
    title: ReactNode;
    width?: {
      [key in "xs" | "md" | "lg"]?: string | number;
    };
  };

const Modal: FunctionComponent<ModalProps> = ({
  title,
  isOpen,
  closeModal,
  width,
  children,
}) => (
  <MuiModal open={isOpen} onClose={closeModal}>
    <Fade in={isOpen}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxHeight: "90vh",
          overflowY: "auto",
          width: {
            xs: "90%",
            md: 600,
            ...width,
          },
          borderRadius: 2,
          bgcolor: "background.paper",
          boxShadow: 24,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
          sx={{
            pt: 1,
            px: 3,
            borderBottom: "1px solid #eee",
          }}
        >
          <Box>
            <Typography variant="h2" fontSize={25}>
              {title}
            </Typography>
          </Box>

          <IconButton onClick={closeModal}>
            <CloseIcon fontSize="large" sx={{ cursor: "pointer" }} />
          </IconButton>
        </Stack>

        <Box sx={{ mt: 1, px: 3, py: 2 }}>{children}</Box>
      </Box>
    </Fade>
  </MuiModal>
);

export default Modal;
