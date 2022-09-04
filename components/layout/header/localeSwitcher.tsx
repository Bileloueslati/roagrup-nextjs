import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const LocalItem: FunctionComponent<{ locale: string }> = ({ locale }) => {
  const { pathname, locale: current } = useRouter();

  const { palette } = useTheme();

  return (
    <Box component="li">
      <Link href={pathname} locale={locale} passHref>
        <Box
          component="a"
          sx={{
            textDecoration: "none",
            color:
              locale === current
                ? palette.secondary.main
                : palette.primary.main,
          }}
        >
          <Typography component="span" fontFamily="Poppins">
            {locale.toUpperCase()}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default function LocaleSwitcher() {
  return (
    <Stack
      alignItems="center"
      spacing={1.5}
      direction="row"
      component="ul"
      sx={{
        ml: 2,
        listStyle: "none",
        p: 0,
        width: "fit-content",
        color: "text.secondary",
        "& svg": {
          m: 1.5,
        },
        "& hr": {
          mx: 0.5,
        },
      }}
    >
      <LocalItem locale="en" />
      <Divider orientation="vertical" flexItem />
      <LocalItem locale="fr" />
    </Stack>
  );
}
