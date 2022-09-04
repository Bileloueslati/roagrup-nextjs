import {
  Box,
  Container,
  Grid,
  alpha,
  Stack,
  Typography,
  useTheme,
  Button,
} from "@mui/material";
import Image from "next/image";
import { usePage } from "../../../contexts/PageContext";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PublicIcon from "@mui/icons-material/Public";
import AssuredWorkloadOutlinedIcon from "@mui/icons-material/AssuredWorkloadOutlined";
import { cloneElement } from "react";
import ConnectingAirportsOutlinedIcon from "@mui/icons-material/ConnectingAirportsOutlined";

type Values = {
  values: {
    [key in "title" | "description" | "image"]: string;
  }[];
};

export default function Values() {
  const { palette } = useTheme();

  const { values } = usePage<Values>();

  const icons = [
    <PublicIcon key={null} />,
    <AssuredWorkloadOutlinedIcon key={null} />,
    <ConnectingAirportsOutlinedIcon key={null} />,
  ];

  return (
    <Stack sx={{ my: 6 }}>
      <Container>
        <Grid container spacing={4}>
          {values.map(({ title, description, image }, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Stack
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 2,
                  "&:hover": {
                    "& .title": {
                      opacity: 0,
                    },

                    "& .content": {
                      opacity: 1,
                      visibility: "visible",
                      transform: "translateX(0)",
                    },
                  },
                }}
              >
                <Box sx={{ width: "100%", height: 300, position: "relative" }}>
                  <Image
                    src={image}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    alt=""
                  />
                </Box>

                <Stack
                  direction="row"
                  alignItems="center"
                  className="title"
                  spacing={1}
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: alpha(palette.primary.main, 0.7),
                    width: "100%",
                    padding: "10px 20px",
                    minHeight: 65,
                    margin: "0 auto",
                    transition: "all 0.5s ease-in-out 0s",
                  }}
                >
                  <Box>
                    {/* @ts-ignore */}
                    {cloneElement(icons[i], {
                      fontSize: "large",
                      sx: {
                        color: "#fff",
                      },
                    })}
                  </Box>
                  <Typography
                    variant="h4"
                    fontSize={16}
                    color="#fff"
                    lineHeight={2}
                    fontWeight={700}
                  >
                    {title}
                  </Typography>
                </Stack>

                <Stack
                  justifyContent="center"
                  className="content"
                  spacing={1}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0,
                    transform: "translateX(-100%)",
                    visibility: "hidden",
                    transition: "all 1s cubic-bezier(.23,1,.32,1)",
                    background: alpha(palette.primary.main, 0.7),
                    color: "#fff",
                    py: 4,
                    px: 4,
                  }}
                >
                  <Typography
                    variant="h4"
                    fontSize={18}
                    color="#fff"
                    lineHeight={1.2}
                    fontWeight={600}
                  >
                    {title}
                  </Typography>
                  <Typography>{description}</Typography>
                  <Box>
                    <Button
                      variant="text"
                      color="secondary"
                      startIcon={<KeyboardDoubleArrowRightIcon />}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}
