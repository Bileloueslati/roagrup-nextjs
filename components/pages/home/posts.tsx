import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Grid,
  alpha,
} from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FunctionComponent } from "react";
import { Post } from "../../../__typescript/api";
import Image from "next/image";
import DefaultImage from "../../../assets/img/500x500.png";
import dayjs from "dayjs";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";

const getImageUrl = (post: Post, i: number = 0) =>
  post._embedded["wp:featuredmedia"]?.[i]?.source_url;

const BoxPost: FunctionComponent<{ post: Post }> = ({ post }) => {
  const {
    title: { rendered },
    date,
    slug,
  } = post;

  const image = getImageUrl(post);

  const publishedDate = dayjs(date);

  return (
    <Stack sx={{ my: 2 }}>
      <Link href={`/posts/${slug}`} passHref>
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
            width="100%"
            height="100%"
            layout="fill"
            objectFit="cover"
            alt=""
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
            <AddIcon fontSize="large" sx={{color: "#fff"}} />
          </Stack>
        </Box>
      </Link>

      <Box sx={{ px: 2, py: 3, background: "#f1f2f8" }}>
        <Typography variant="h4" textTransform="uppercase" fontSize={18}>
          {rendered}
        </Typography>
      </Box>
    </Stack>
  );
};

const Posts: FunctionComponent<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Stack sx={{ py: 5 }}>
      <Container>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          sx={{ borderBottom: "1px solid rgba(54,70,115,.08)", pb: 2 }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <FeedIcon fontSize="large" />
            <Typography variant="h2" textTransform="uppercase" fontSize={30}>
              News
            </Typography>
          </Stack>
          <Box>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              endIcon={<ChevronRightIcon />}
            >
              View all posts
            </Button>
          </Box>
        </Stack>

        <Grid spacing={4} container>
          <Grid item md={8} xs={12}>
            <Grid spacing={3} container>
              {posts.slice(0, 2).map((post) => (
                <Grid item md={6} xs={12} key={post.id}>
                  <BoxPost post={post} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item md={4} xs={12}>
            <Stack sx={{ mt: 2 }}>
              {posts.slice(2, 5).map((post) => (
                <Grid
                  sx={{ mb: 3 }}
                  key={post.id}
                  spacing={2}
                  alignItems="center"
                  container
                >
                  <Grid item md={4}>
                    <Box
                      sx={{ width: "100%", height: 80, position: "relative" }}
                    >
                      <Image
                        src={getImageUrl(post) || DefaultImage}
                        layout="fill"
                        objectFit="cover"
                        alt={post.title.rendered}
                      />
                    </Box>
                  </Grid>

                  <Grid item md={8}>
                    <Typography fontSize={16} variant="h4">
                      {post.title.rendered}
                    </Typography>
                    <Typography color="#95a5a6" fontSize={14}>
                      {dayjs(post.date).format("DD/MM/YYYY")}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Posts;
