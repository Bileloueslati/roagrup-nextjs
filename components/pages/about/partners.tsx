import { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, SwiperOptions } from "swiper";
import { usePage } from "../../../contexts/PageContext";
import Image from "next/image";
import { Container, Box } from "@mui/material";

const swiperConfig: SwiperOptions = {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 2500,
  },
};

const Partners: FunctionComponent = () => {
  const { partners } = usePage<{ partners: string[] }>();

  return (
    <Container sx={{ mb: 8 }}>
      <Swiper {...swiperConfig} modules={[Autoplay]}>
        {partners.map((logo, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{ position: "relative", minHeight: "150px", width: "100%" }}
            >
              <Image layout="fill" objectFit="cover" src={logo} alt="" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Partners;
