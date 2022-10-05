import { createTheme } from "@mui/material/styles";

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
      fontFamily: "Lexend",
      fontWeight: 300,
    },
  },
  palette: {
    primary: {
      main: "#1D1D91",
    },
    secondary: {
      main: "#ed6c02",
    },
    neutral: {
      main: "#fff",
    },

    common: {
      black: "#222",
      white: "#fff",
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
