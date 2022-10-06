import { Box, Stack, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { usePageContext } from "../../../contexts/PageContext";
import useLocale from "../../../hooks/useLocale";
import useMediaQuery from "../../../hooks/useMediaQuery";

export const paths = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about_us",
    path: "/about",
  },
  {
    name: "products",
    path: "/products",
  },
  {
    name: "affiliated_companies",
    path: "/affiliated-companies",
  },
  {
    name: "news",
    path: "/posts",
  },
];

const MainNav = () => {
  const { palette } = useTheme();

  const { t } = useTranslation("common");

  const { locale } = useLocale();

  const { translations } = usePageContext();

  const { isSm } = useMediaQuery();

  return (
    <Stack flexDirection="row" alignItems="center" gap={8}>
      <Box component="nav">
        <Stack
          direction={isSm ? "column" : "row"}
          component="ul"
          sx={{
            listStyle: "none",
            gap: !isSm ? 5 : 3.2,
            ...(isSm && { alignItems: "center" }),
          }}
        >
          {paths
            .filter(() => locale in translations)
            .map(({ path, name }, i) => (
              <Box component="li" key={i}>
                <Link href={path} passHref>
                  <Box
                    component="a"
                    sx={{
                      fontSize: 16,
                      cursor: "pointer",
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      color: !isSm ? palette.primary.main : "#fff",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      "&:hover": {
                        color: palette.warning.main,
                      },
                    }}
                  >
                    {t(name)}
                  </Box>
                </Link>
              </Box>
            ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default MainNav;
