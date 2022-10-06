import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, FunctionComponent } from "react";
import { usePageContext } from "../../../contexts/PageContext";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Languages } from "../../../__typescript/api";

const LocalItem: FunctionComponent<{ locale: Languages }> = ({ locale }) => {
  const { pathname, locale: current, query } = useRouter();

  const { type, translations } = usePageContext();

  const {isSm} = useMediaQuery()

  const { palette } = useTheme();

  return (
    <Box component="li">
      <Link
        href={{
          pathname,
          ...(type === "post" &&
            query.slug &&
            query.id && {
              query: { slug: query.slug, id: translations[locale] },
            }),
        }}
        locale={locale}
        passHref
      >
        <Box
          component="a"
          sx={{
            fontFamily: "Poppins",
            textDecoration: "none",
            color:
              locale === current
                ? palette.secondary.main
                : !isSm ? palette.primary.main: "#fff",
          }}
        >
          <Typography
            component="span"
            fontFamily="Poppins"
            fontWeight={locale === current ? 600 : 500}
          >
            {locale.toUpperCase()}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default function LocaleSwitcher() {
  const { translations } = usePageContext();

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
      {Object.entries(translations).map(([k], i) => (
        <Fragment key={i}>
          <LocalItem locale={k as Languages} />
          {i + 1 < Object.keys(translations).length && (
            <Divider orientation="vertical" flexItem />
          )}
        </Fragment>
      ))}
    </Stack>
  );
}
