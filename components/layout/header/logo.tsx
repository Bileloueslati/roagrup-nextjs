import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { FunctionComponent } from "react";

type Props = {
  type?: "main" | "white";
  height?: number;
  width?: number;
  sx?: SxProps;
};

const Logo: FunctionComponent<Props> = ({
  type = "main",
  height = 50,
  width = 180,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Image
        src={`/img/${type === "main" ? "logo" : "footer-logo"}.png`}
        width={width}
        height={height}
        alt=""
      />
    </Box>
  );
};

export default Logo;
