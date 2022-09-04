import { Box, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Cta() {
  return (
    <Box>
      <Button variant="contained" endIcon={<KeyboardArrowRightIcon />}>
        Get a quote
      </Button>
    </Box>
  );
}
