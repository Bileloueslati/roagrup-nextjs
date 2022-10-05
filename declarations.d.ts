import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
} from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Palette extends MuiPallete {
    neutral: { main: string };
  }

  interface PaletteOptions extends MuiPaletteOptions {
    neutral?: { main: string };
  }
}

declare module "@mui/material/FormControl" {
  interface FormControlPropsColorOverrides {
    neutral: true;
  }
}
