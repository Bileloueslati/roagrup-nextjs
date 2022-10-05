import { Stack, Typography, useTheme, Container, Box } from "@mui/material";
import { usePage } from "../../../contexts/PageContext";
import PhoneIcon from "@mui/icons-material/Phone";

type CtaT = {
  cta: {
    title: string;
    subtitle: string;
    description: string;
    bgImage: string;
  };
};

export default function CallToAction() {
  const {
    cta: { title, subtitle, description, bgImage },
  } = usePage<CtaT>();

  const { palette } = useTheme();

  return (
    <Stack
      sx={{
        color: palette.primary.contrastText,
        py: 5,
        position: "relative",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          inset: 0,
          background: palette.primary.main,
          opacity: 0.8,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 3 }}>
        <Stack
          textAlign="center"
          spacing={2}
          sx={{
            maxWidth: {
              lg: "70%",
            },
            mx: "auto",
          }}
        >
          <Box
            sx={{
              background: palette.secondary.main,
              borderRadius: "50%",
              display: "flex",
              alignSelf: "flex-start",
              mx: "auto",
              width: "3.2rem",
              height: "3.2rem",
              lineHeight: "3.2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PhoneIcon fontSize="large" />
          </Box>
          <Typography variant="h2" fontSize={35}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            fontSize={25}
            color={palette.secondary.main}
          >
            {subtitle}
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
}
