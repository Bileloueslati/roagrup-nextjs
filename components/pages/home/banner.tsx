import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { usePage } from "../../../contexts/PageContext";
import bg from "../../../assets/img/slide1.jpg";

type BannerT = {
  banner: {
    title: string;
    description: string;
  };
};

export default function Banner() {
  const {
    banner: { title, description },
  } = usePage<BannerT>();

  const { palette } = useTheme();

  return (
    <Stack
      justifyContent="center"
      sx={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        height: "500px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          inset: 0,
          background: palette.primary.main,
          opacity: 0.4,
        }}
      />

      <Container sx={{ zIndex: 2 }}>
        <Stack
          spacing={1.6}
          alignItems="flex-start"
          sx={{
            maxWidth: { lg: "700px", color: "#fff" },
          }}
        >
          <Box>
            <Typography
              textTransform="uppercase"
              fontFamily="poppins"
              fontSize={20}
            >
              We&#180;re Rua Grup
            </Typography>

            <Typography
              variant="h1"
              sx={{
                lineHeight: 1.2,
                fontSize: {
                  lg: 40,
                },
              }}
            >
              {title}
            </Typography>
          </Box>
          <Typography
            sx={{
              lineHeight: 1.8,
              fontSize: {
                lg: 18,
              },
            }}
          >
            {description}
          </Typography>
          <Button
            startIcon={<ChevronRightIcon />}
            variant="contained"
            size="large"
            color="secondary"
          >
            Learn more
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
}
