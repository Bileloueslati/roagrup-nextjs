import { Box } from "@mui/material";
import Image from "next/image";

export default function Logo() {
  return (
    <Box>
      <Image src="/img/logo.png" width="180px" height="50px" alt="" />
    </Box>
  );
}
