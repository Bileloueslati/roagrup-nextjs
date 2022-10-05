import { alpha, Box, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";
import { Post } from "../../__typescript/api";
import { getImageUrl } from "../pages/home/posts";
import dayjs from "dayjs";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import DefaultImage from "../../assets/img/500x500.png";

type Props = PropsWithChildren & {
  post: Post;
};

const PostBox: FunctionComponent<Props> = ({ post }) => {
  const { palette } = useTheme();

  const {
    title: { rendered },
    date,
    slug,
    id,
  } = post;

  const image = getImageUrl(post);

  const publishedDate = dayjs(date);

  return (
    <Stack sx={{ my: 2 }}>
      <Link href={`/posts/${slug}/${id}`} passHref>
        <Box
          component="a"
          sx={{
            width: "100%",
            height: 250,
            position: "relative",
            "&:hover": {
              "& .overlay": {
                opacity: 1,
                visibility: "visible",
              },

              "& .date": {
                background: ({ palette }) => palette.secondary.main,
              },
            },
          }}
        >
          <Image
            src={image || DefaultImage}
            layout="fill"
            objectFit="cover"
            alt={rendered}
          />
          <Stack
            className="date"
            alignItems="center"
            spacing={0}
            zIndex={3}
            sx={{
              position: "absolute",
              left: 6,
              top: 0,
              background: ({ palette }) => alpha(palette.primary.main, 0.8),
              color: ({ palette }) => palette.primary.contrastText,
              py: 0.6,
              px: 2,
            }}
          >
            <Typography component="span" fontFamily="Poppins">
              {publishedDate.format("MM")}
            </Typography>
            <Typography
              fontFamily="Poppins"
              textTransform="uppercase"
              component="span"
            >
              {publishedDate.format("MMM")}
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            justifyContent="center"
            className="overlay"
            zIndex={2}
            sx={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              visibility: "hidden",
              transition: "all 0.2s ease-in-out 0s",
              background: ({ palette }) => alpha(palette.primary.main, 0.7),
              color: "#fff",
              py: 4,
              px: 4,
            }}
          >
            <AddIcon fontSize="large" sx={{ color: "#fff" }} />
          </Stack>
        </Box>
      </Link>

      <Box sx={{ px: 2, py: 3, background: "#f1f2f8" }}>
        <Typography variant="h4" textTransform="uppercase" fontSize={18}>
          {rendered}
        </Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </Typography>
      </Box>
    </Stack>
  );
};

export default PostBox;
