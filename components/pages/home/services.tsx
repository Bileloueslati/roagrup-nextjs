import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
  Stack
} from "@mui/material";
import { usePage } from "../../../contexts/PageContext";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type ServicesT = {
  services_section: {
    services: Array<{ title: string; description: string }>;
    title: string;
    description: string;
  };
};

export default function Services() {
  const {
    services_section: { title, description, services },
  } = usePage<ServicesT>();

  const { palette } = useTheme();

  return (
    <Stack sx={{ background: "#f1f2f8", py: 5 }}>
      <Container>
        <Stack>
          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            sx={{ borderBottom: "1px solid rgba(54,70,115,.08)", pb: 2 }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <TrendingUpIcon fontSize="large" />
              <Typography textTransform="uppercase" variant="h2" fontSize={30}>
                {title}
              </Typography>
            </Stack>
            <Box>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                endIcon={<ChevronRightIcon />}
              >
                View all services
              </Button>
            </Box>
          </Stack>

          <Grid container spacing={4} sx={{ mt: 1 }}>
            {services.map(({ title, description }) => (
              <Grid item xs={12} md={4} key={Math.random()}>
                <Stack
                  spacing={2}
                  alignItems="center"
                  sx={{
                    py: 4,
                    px: 4,
                    boxShadow: "0 0 15px rgb(0 0 0 / 6%)",
                    background: "#fff",
                    borderRadius: 2,
                    textAlign: "center",
                    transition: "all 0.3s linear",
                    "&:hover": {
                      background: palette.primary.main,
                      color: "#fff",
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  <BarChartIcon color="secondary" sx={{ fontSize: 40 }} />

                  <Typography variant="h3" sx={{ fontSize: 18 }}>
                    {title}
                  </Typography>

                  <Box>
                    <Typography lineHeight={1.8} fontSize={14}>
                      {description}
                    </Typography>

                    <Button color="secondary">Learn more</Button>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
}
