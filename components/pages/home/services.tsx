import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
  Stack,
} from "@mui/material";
import { usePage } from "../../../contexts/PageContext";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TimelineIcon from "@mui/icons-material/Timeline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { cloneElement, ReactElement } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

type ServicesT = {
  services_section: {
    services: Array<{ title: string; description: string }>;
    title: string;
    description: string;
  };
};

const icons = [
  <ShoppingCartIcon />,
  <BarChartIcon />,
  <TimelineIcon />,
  <ChatBubbleOutlineIcon />,
  <RequestQuoteIcon />,
  <CallMadeIcon />,
];

export default function Services() {
  const {
    services_section: { title, description, services },
  } = usePage<ServicesT>();

  const { palette } = useTheme();

  const { t } = useTranslation("common");

  return (
    <Stack sx={{ background: "#f1f2f8", py: 8 }}>
      <Container>
        <Stack>
          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            sx={{ borderBottom: "1px solid rgba(54,70,115,.08)", pb: 2 }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <TrendingUpIcon fontSize="large" color="primary" />
              <Typography variant="h2" fontSize={35} color="primary">
                {title}
              </Typography>
            </Stack>
            <Box>
              <Link href="products" passHref>
                <Button
                  component="a"
                  size="large"
                  variant="contained"
                  color="secondary"
                  endIcon={<ChevronRightIcon />}
                >
                  {t("view_our_products")}
                </Button>
              </Link>
            </Box>
          </Stack>

          <Grid container spacing={4} sx={{ mt: 1 }}>
            {services.map(({ title, description }, i) => (
              <Grid item xs={12} md={4} key={Math.random()}>
                <Stack
                  spacing={2}
                  sx={{
                    py: 4,
                    px: 4,
                    boxShadow: "0 0 15px rgb(0 0 0 / 6%)",
                    background: "#fff",
                    borderRadius: 2,
                    transition: "all 0.3s linear",
                    "&:hover": {
                      background: palette.primary.main,
                      color: "#fff",
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  {typeof icons[i] !== "undefined" &&
                    cloneElement(icons[i] as ReactElement, {
                      color: "secondary",
                      sx: { fontSize: 45 },
                    })}

                  <Typography
                    color="secondary"
                    variant="h3"
                    sx={{ fontSize: 18 }}
                  >
                    {title}
                  </Typography>

                  <Box>
                    <Typography lineHeight={1.8} fontSize={16}>
                      {description}
                    </Typography>
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
