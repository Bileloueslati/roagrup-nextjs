import { PaletteMode } from "@mui/material";
import create from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  mode: PaletteMode;
  updateMode: (mode: PaletteMode) => void;
}

export const useThemeMode = create(
  persist<ThemeState>(
    (set) => ({
      mode: "light",
      updateMode: (mode) => {
        set(() => ({ mode }));
      },
    }),
    {
      name: "@theme",
      version: 0,
    }
  )
);
