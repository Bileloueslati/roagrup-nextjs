import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontFamily: "Poppins",
      fontWeight: 700,
      textTransform: "capitalize",
    },
    h2: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: 40,
      textTransform: "capitalize",
    },
    h3: {
      fontFamily: "Poppins",
      fontWeight: 600,
    },

    h4: {
      fontFamily: "Poppins",
      fontWeight: 600,
    },

    allVariants: {
      fontFamily: "Hind Vadodara",
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#110e51",
    },
    secondary: {
      main: "#ed6c02",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins",
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
