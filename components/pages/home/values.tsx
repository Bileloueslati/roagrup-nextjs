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

type Values = {
  values: {
    [key in "title" | "description" | "image"]: string;
  }[];
};

export default function Values() {
  const { palette } = useTheme();

  const { values } = usePage<Values>();

  return (
    <Stack sx={{ my: 6 }}>
      <Container>
        <Grid container spacing={4}>
          {values.map(({ title, description, image }) => (
            <Grid item xs={12} md={4} key={title}>
              <Stack
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 2,
                  "&:hover": {
                    "& .title": {
                      opacity: 0,
                      transform: "translateX(100%)",
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
                    transform: "translateX(0)",
                    bottom: 20,
                    left: 0,
                    right: 0,
                    background: alpha(palette.primary.main, 0.7),
                    width: "100%",
                    padding: "10px 20px",
                    minHeight: 65,
                    margin: "0 auto",
                    maxWidth: "95%",
                    transition: "all 0.2s ease-in-out 0s",
                  }}
                >
                  <Typography
                    variant="h4"
                    textTransform="uppercase"
                    fontSize={14}
                    color="#fff"
                    lineHeight={2}
                    fontWeight={700}
                  >
                    {title}
                  </Typography>
                  <Box>
                    <Button variant="contained" color="secondary">
                      <KeyboardDoubleArrowRightIcon
                        fontSize="large"
                        sx={{ color: "#fff" }}
                      />
                    </Button>
                  </Box>
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
                    transition: "all 0.2s ease-in-out 0s",
                    background: alpha(palette.primary.main, 0.7),
                    color: "#fff",
                    py: 4,
                    px: 4,
                  }}
                >
                  <Typography>{description}</Typography>
                  <Box>
                    <Button variant="contained" color="secondary">
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
