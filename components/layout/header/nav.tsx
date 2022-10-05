import { Box, Stack, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { usePageContext } from "../../../contexts/PageContext";
import useLocale from "../../../hooks/useLocale";

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

  return (
    <Stack flexDirection="row" alignItems="center" gap={8}>
      <nav>
        <Box
          component="ul"
          sx={{
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            gap: 5,
          }}
        >
          {paths
            .filter(() => locale in translations)
            .map(({ path, name }, i) => (
              <Box component="li" key={i}>
                <Link href={path} passHref>
                  <Box
                    component="a"
                    color="primary"
                    sx={{
                      fontSize: 16,
                      cursor: "pointer",
                      textDecoration: "none",
                      color: palette.primary.main,
                      fontFamily: "Poppins",
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
        </Box>
      </nav>
    </Stack>
  );
};

export default MainNav;
