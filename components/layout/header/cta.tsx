import { Box, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useTranslation } from "next-i18next";

export default function Cta() {
  const { t } = useTranslation("common");

  return (
    <Box>
      <Button variant="contained" endIcon={<KeyboardArrowRightIcon />}>
        {t("get_a_quote")}
      </Button>
    </Box>
  );
}
