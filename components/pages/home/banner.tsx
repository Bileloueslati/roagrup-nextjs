import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { usePage } from "../../../contexts/PageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

type BannerT = {
  banner: {
    slides: {
      title: string;
      description: string;
      image: string;
    }[];
  };
};

const swiperConfig = {
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
  },
};

export default function Banner() {
  const {
    banner: { slides },
  } = usePage<BannerT>();

  const { palette } = useTheme();

  return (
    <Box sx={{ overflow: "hidden", width: "100%", mx: "auto" }}>
      <Swiper {...swiperConfig} modules={[Autoplay]}>
        {slides.map(({ title, description, image }, i) => (
          <SwiperSlide key={i}>
            <Stack
              justifyContent="center"
              sx={{
                height: "500px",
                position: "relative",
                zIndex: 1,
                width: "100%",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  inset: 0,
                  background: palette.primary.main,
                  opacity: 0.7,
                }}
              />

              <Container sx={{ zIndex: 2 }}>
                <Stack
                  spacing={1.6}
                  alignItems="flex-start"
                  sx={{
                    maxWidth: { lg: "700px", color: "#fff" },
                  }}
                >
                  <Box>
                    <Typography
                      textTransform="uppercase"
                      fontFamily="poppins"
                      fontSize={20}
                    >
                      We&#180;re Rua Grup
                    </Typography>

                    <Typography
                      variant="h1"
                      sx={{
                        lineHeight: 1.2,
                        fontSize: {
                          lg: 40,
                        },
                      }}
                    >
                      {title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      lineHeight: 1.8,
                      fontSize: {
                        lg: 18,
                      },
                    }}
                  >
                    {description}
                  </Typography>
                  <Button
                    startIcon={<ChevronRightIcon />}
                    variant="contained"
                    size="large"
                    color="secondary"
                  >
                    Learn more
                  </Button>
                </Stack>
              </Container>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
