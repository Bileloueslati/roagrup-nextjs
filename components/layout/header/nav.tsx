import { Box, Stack, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";

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
    name: "Products",
    path: "/",
  },
  {
    name: "Affiliated Companies",
    path: "/",
  },
];

const MainNav = () => {
  const { palette } = useTheme();

  const { t } = useTranslation("common");

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
          {paths.map(({ path, name }, i) => (
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
                    fontWeight: 500,
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
