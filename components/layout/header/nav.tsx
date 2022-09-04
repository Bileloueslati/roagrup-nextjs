import { Box, Stack, useTheme } from "@mui/material";
import Link from "next/link";

export const paths = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About us",
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
                  {name}
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
