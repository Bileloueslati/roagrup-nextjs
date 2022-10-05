import { FunctionComponent } from "react";
import { usePage } from "../../../contexts/PageContext";
import {
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Box,
  useTheme,
} from "@mui/material";
import Image from "next/image";

type T = {
  we_are_in_numbers: {
    title: string;
    description: string;
    contact_button: string;
    values: {
      number: number;
      label: string;
      icon: string;
    }[];
  };
};

const WeAreInNumbers: FunctionComponent<any> = () => {
  const {
    we_are_in_numbers: { title, description, contact_button, values },
  } = usePage<T>();

  const { palette } = useTheme();

  return (
    <Container sx={{ my: 10 }}>
      <Grid container spacing={8} alignItems="center">
        <Grid item md={6} xs={12}>
          <Typography
            variant="h2"
            fontSize={40}
            color="primary"
            lineHeight={2}
            fontWeight={700}
          >
            {title}
          </Typography>
          <Typography fontSize={18} mb={2}>
            {description}
          </Typography>

          <Button size="large" variant="contained" color="secondary">
            {contact_button}
          </Button>
        </Grid>

        <Grid item md={6} xs={12}>
          <Grid
            container
            spacing={{
              xs: 2,
              md: 5,
            }}
          >
            {values.map(({ label, number, icon }) => (
              <Grid item md={6} xs={6} key={number}>
                <Stack
                  position="relative"
                  spacing={1}
                  sx={{
                    boxShadow: 1,
                    py: 2,
                    px: 4,
                    transition: "all 0.5s",
                    "&:hover": {
                      boxShadow: 2,
                      transform: "translate(10px, 10px)",
                    },
                  }}
                >
                  <Box sx={{ position: "absolute", top: 10, right: 10 }}>
                    <Image
                      src={icon}
                      width={50}
                      height={50}
                      objectFit="cover"
                      alt={label}
                    />
                  </Box>

                  <Typography variant="h3" fontSize={38} color="primary">
                    {number}
                  </Typography>

                  <Typography
                    sx={{
                      borderLeft: `5px solid ${palette.secondary.main}`,
                      lineHeight: 1,
                      pl: 1,
                    }}
                    fontSize={18}
                  >
                    {label}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WeAreInNumbers;
