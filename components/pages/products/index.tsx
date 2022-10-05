import { Box, Container, Stack, Typography } from "@mui/material";
import { usePage } from "../../../contexts/PageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";

type Sections = {
  sections: {
    title: string;
    products: {
      title: string;
      subtitle: string;
      image: string;
    }[];
  }[];
};

const swiperConfig = {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 2500,
  },
};

export default function ProductsSection() {
  const { sections } = usePage<Sections>();

  return (
    <Container sx={{ my: 6 }}>
      <Stack>
        {sections.map(({ title, products }, i) => (
          <Box key={i} mb={i === sections.length ? 0 : 8}>
            <Typography variant="h2" fontSize="1.6rem" color="secondary" mb={4}>
              {title}
            </Typography>

            <Swiper {...swiperConfig}>
              {products.map(({ title, subtitle, image }) => (
                <SwiperSlide key={title.trim()}>
                  <Stack>
                    <Box position="relative" height={300}>
                      <Image
                        src={image}
                        layout="fill"
                        objectFit="cover"
                        alt={title}
                      />
                      <Box
                        sx={({ palette }) => ({
                          backgroundColor: palette.primary.main,
                          zIndex: 3,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          px: 2,
                          py: 2,
                          position: "absolute",
                        })}
                      >
                        <Stack direction="row" justifyContent="space-between">
                          <Typography variant="h4" fontSize="1rem" color="#fff">
                            {title}
                          </Typography>
                          <Typography
                            variant="h4"
                            fontSize="0.9rem"
                            color="#fff"
                          >
                            {subtitle}
                          </Typography>
                        </Stack>
                      </Box>
                    </Box>
                  </Stack>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
