import { Box, Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import { paths } from "../header/nav";
import Link from "next/link";
import { FunctionComponent } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

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
              textTransform: "uppercase",
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
        py: 5,
        borderTop: ({ palette }) => `8px solid ${palette.secondary.main}`,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Image src="/img/footer-logo.png" width={192} height={160} alt="" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography textTransform="uppercase" variant="h4" fontSize={20}>
              Services
            </Typography>
            <Nav items={paths} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography textTransform="uppercase" variant="h4" fontSize={20}>
              Services
            </Typography>
            <Nav items={paths} />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}
