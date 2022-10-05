import { FunctionComponent } from "react";
import { Stack, Container, Typography, Box } from "@mui/material";
import { usePage } from "../../../contexts/PageContext";
import Image from "next/image";

type Team = {
  team: {
    [key in "title" | "description" | "image"]: string;
  };
};

const OurTeam: FunctionComponent = () => {
  const {
    team: { title, description, image },
  } = usePage<Team>();

  return (
    <Stack sx={{mb: 10}}>
      <Container>
        <Stack>
          <Box
            sx={{
              textAlign: "center",
              ml: {
                lg: "25%",
                xs: 0,
              },
              width: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            <Typography
              variant="h2"
              fontSize={40}
              color="primary"
              lineHeight={2}
              fontWeight={700}
            >
              {title}
            </Typography>

            <Typography fontSize={18} mb={2}>
              {description}
            </Typography>
          </Box>

          <Box sx={{ mt: 3, position: "relative", width: "100%", height: "500px" }}>
            <Image src={image} objectFit="cover" layout="fill" alt={title} />
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default OurTeam;
