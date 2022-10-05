import { Container, Grid, Stack, Typography, Button, Box, useTheme } from "@mui/material";
import { usePage } from "../../../contexts/PageContext";
import Image from "../../../assets/img/dark-mosaic.png";

type AboutT = {
  about: {
    title: string;
    description: string;
    states: {
      number: number;
      values: string;
    }[];
  };
};

export default function About() {
  const {
    about: { title, description, states },
  } = usePage<AboutT>();

  const { palette } = useTheme();

  return (
    <Stack
      sx={{
        background: ({ palette }) => palette.primary.main,
        color: ({ palette }) => palette.primary.contrastText,
        py: 10,
        my: 5,
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item md={6}>
            <Stack spacing={3}>
              <Typography variant="h2">{title}</Typography>
              <Typography variant="body2" fontSize={16} lineHeight={1.6}>
                {description}
              </Typography>
              <Box>
                <Button color="secondary" size="large" variant="contained">
                  Learn more
                </Button>
              </Box>
            </Stack>
          </Grid>

          <Grid item md={6}>
            <Grid container spacing={5}>
              {states.map((state) => (
                <Grid item md={6} key={state.number}>
                  <Box
                    sx={{
                      textAlign: "center",
                      py: 2,
                      px: 3,
                      backgroundImage: `url(${Image.src})`,
                    }}
                  >
                    <Typography
                      fontFamily="Poppins"
                      fontWeight={700}
                      fontSize={45}
                      sx={{
                        color: palette.secondary.main,
                      }}
                    >
                      {state.number}
                    </Typography>

                    <Typography>{state.values}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}
