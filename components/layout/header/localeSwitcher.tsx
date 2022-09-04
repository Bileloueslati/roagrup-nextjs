import { Box, Divider, Stack } from "@mui/material";

export default function LocaleSwitcher() {
  return (
    <Stack
      alignItems="center"
      spacing={1.5}
      direction="row"
      component="ul"
      sx={{
        listStyle: "none",
        p: 0,
        m: 0,
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
      <Box component="li">FR</Box>
      <Divider orientation="vertical" flexItem />
      <Box component="li">EN</Box>
    </Stack>
  );
}
