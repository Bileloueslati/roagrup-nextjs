import { Box, Container, Stack, Typography, Button, Grid } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FunctionComponent } from "react";
import { Post } from "../../../__typescript/api";
import Image from "next/image";
import DefaultImage from "../../../assets/img/500x500.png";
import dayjs from "dayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PostBox from "../../post";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export const getImageUrl = (post: Post, i: number = 0) =>
  post._embedded["wp:featuredmedia"]?.[i]?.source_url;

const Posts: FunctionComponent<{ posts: Post[] }> = ({ posts }) => {
  const { t } = useTranslation("common");

  return (
    <Stack sx={{ py: 8 }}>
      <Container>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          sx={{ borderBottom: "1px solid rgba(54,70,115,.08)", pb: 2 }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <FeedIcon fontSize="large" color="primary" />
            <Typography
              variant="h2"
              textTransform="uppercase"
              color="primary"
              fontSize={30}
            >
              {t("news")}
            </Typography>
          </Stack>
          <Box>
            <Link href="/posts" passHref>
              <Button
                component="a"
                size="large"
                variant="contained"
                color="secondary"
                endIcon={<ChevronRightIcon />}
              >
                {t("show_all_posts")}
              </Button>
            </Link>
          </Box>
        </Stack>

        <Grid spacing={4} container>
          <Grid item md={8} xs={12}>
            <Grid spacing={3} container>
              {posts.slice(0, 2).map((post) => (
                <Grid item md={6} xs={12} key={post.id}>
                  <PostBox post={post} />
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
                    <Stack direction="row" spacing={1} mt={1}>
                      <CalendarMonthIcon
                        fontSize="small"
                        sx={{ color: "text.secondary" }}
                      />
                      <Typography color="text.secondary" fontSize={14}>
                        {dayjs(post.date).format("DD/MM/YYYY")}
                      </Typography>
                    </Stack>
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
