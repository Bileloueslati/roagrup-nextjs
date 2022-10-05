import { Stack, Box, Typography, useTheme } from "@mui/material";
import { FunctionComponent, useState, useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Post } from "../../__typescript/api";
import { useTranslation } from "next-i18next";

type Props = {
  post: Post;
};

const ShareIcons: FunctionComponent<Props> = ({ post }) => {
  const [path, setPath] = useState<string | null>(null);

  const { t } = useTranslation("common");

  const { palette } = useTheme();

  useEffect(() => {
    setPath(window.location.href);
  }, []);

  const link = {
    style: {
      display: "flex",
      flexDirection: "row",
      color: palette.secondary.main,
      border: `1px solid ${palette.secondary.main}`,
      px: 2,
      py: 0.9,
      borderRadius: 2,
      textDecoration: "none",
      transition: "0.2s linear",
      "&:hover": {
        background: palette.secondary.main,
        color: "#fff",
      },
    },

    attrs: {
      target: "_blank",
      rel: "noreferrer",
    },
  };

  if (!path) return null;

  return (
    <Stack direction="row" spacing={2} my={2} alignItems="center">
      <Typography variant="h4" fontSize={20} color="primary">
        {t("share")}
      </Typography>
      <Stack
        direction="row"
        spacing={2.5}
        component="ul"
        sx={{ listStyle: "none", p: 0 }}
      >
        <Box component="li">
          <Box
            component="a"
            href={`https://www.facebook.com/sharer/sharer.php?u=${path}`}
            sx={link.style}
            {...link.attrs}
          >
            <FacebookIcon />
            <Typography sx={{ ml: 1, mb: 0 }}>Facebook</Typography>
          </Box>
        </Box>
        <Box component="li">
          <Box
            component="a"
            href={`https://twitter.com/share?url=${path}`}
            sx={link.style}
            {...link.attrs}
          >
            <TwitterIcon />
            <Typography sx={{ ml: 1, mb: 0 }}>Twitter</Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ShareIcons;
