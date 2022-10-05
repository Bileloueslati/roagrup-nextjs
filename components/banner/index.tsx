import { FunctionComponent, PropsWithChildren } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

type Props = PropsWithChildren & {
  image?: string;
  title: string;
  subtitle?: string;
  description?: string;
};

const Banner: FunctionComponent<Props> = ({
  image,
  title,
  subtitle,
  description,
}) => {
  const { palette } = useTheme();
  return (
    <Stack
      justifyContent="center"
      sx={{
        height: {
          xs: 400,
          md: 400,
        },
        position: "relative",
        zIndex: 1,
        width: "100%",
        backgroundImage: `url(${image})`,
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
          opacity: 0.7,
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
            {subtitle && (
              <Typography
                textTransform="uppercase"
                fontFamily="poppins"
                fontSize={20}
              >
                {subtitle}
              </Typography>
            )}

            <Typography
              variant="h1"
              sx={{
                lineHeight: 1.2,
                fontSize: {
                  xs: 30,
                  lg: 45,
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
        </Stack>
      </Container>
    </Stack>
  );
};

export default Banner;
