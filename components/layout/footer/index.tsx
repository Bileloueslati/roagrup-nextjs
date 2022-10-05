import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import Image from "next/image";
import { paths } from "../header/nav";
import Link from "next/link";
import { FunctionComponent } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import NewsLetter from "./newsLetter";

const Nav: FunctionComponent<{ items: typeof paths }> = ({ items }) => (
  <Stack
    component="ul"
    spacing={1.4}
    sx={{
      listStyle: "none",
      padding: 0,
    }}
  >
    {items.map(({ path, name }, i) => (
      <Box component="li" key={i}>
        <Link href={path} passHref>
          <Stack
            component="a"
            color="primary"
            direction="row"
            spacing={0.8}
            sx={{
              fontSize: 14,
              cursor: "pointer",
              fontWeight: 400,
              textDecoration: "none",
              color: "#fff",
              transition: "0.5s all ease",
              "&:hover": {
                pl: 0.5,
              },
            }}
          >
            <KeyboardDoubleArrowRightIcon fontSize="small" />
            <Box component="span"> {name}</Box>
          </Stack>
        </Link>
      </Box>
    ))}
  </Stack>
);

export default function Footer() {
  return (
    <Stack
      component="footer"
      sx={{
        backgroundColor: ({ palette }) => palette.primary.main,
        color: "#fff",
        py: 7.5,
        mt: "auto",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Image src="/img/footer-logo.png" width={192} height={160} alt="" />
          </Grid>

          <Grid item xs={12} md={5}>
            <Grid container spacing={4}>
              <Grid item xs={6} md={6}>
              <Typography color="secondary" variant="h4" mb={1.4} fontSize={20}>
                  Services
                </Typography>
                <Nav items={paths} />
              </Grid>
              <Grid item xs={6} md={6}>
              <Typography color="secondary" variant="h4" mb={1.4} fontSize={20}>
                  Services
                </Typography>
                <Nav items={paths} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography color="secondary" variant="h4" mb={1.4} fontSize={20}>
              Newsletter
            </Typography>
            <NewsLetter />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}
