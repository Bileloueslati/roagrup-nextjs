import { Container, Stack, Box, Typography, Divider } from "@mui/material";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ComponentType } from "react";
import Banner from "../../../components/banner";
import Layout from "../../../components/layout";
import { getImageUrl } from "../../../components/pages/home/posts";
import { PostContentProps } from "../../../components/post/postContent";
import { SeoPage } from "../../../components/seo/seo";
import { getPost } from "../../../consts/api";
import { getPostContent, getPostTitle } from "../../../consts/post";
import { PageContextProvider } from "../../../contexts/PageContext";
import { Post as PostT } from "../../../__typescript/api";
import { GetServerSideProps } from "../../../__typescript/next";
import dayjs from "dayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShareIcons from "../../../components/shareIcons";

const PostContent = dynamic<PostContentProps>(
  import("../../../components/post/postContent"),
  {
    ssr: false,
  }
);

const Post: NextPage<{ post: PostT }> = ({ post }) => {
  const image = getImageUrl(post);

  const title = getPostTitle(post);

  const content = getPostContent(post);

  return (
    <PageContextProvider value={post}>
      <SeoPage />
      <Layout>
        <Stack>
          <Container sx={{ mb: 4 }}>
            {image && (
              <Box position="relative" height={400} width="100%">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={image}
                  alt={title}
                />
              </Box>
            )}

            <Typography variant="h1" color="primary" mt={2} fontSize={"2.4rem"}>
              {title}
            </Typography>

            <Stack direction="row" spacing={1}>
              <CalendarMonthIcon
                fontSize="small"
                sx={{ color: "text.secondary" }}
              />
              <Typography color="text.secondary" fontSize={14}>
                {dayjs(post.date).format("DD/MM/YYYY")}
              </Typography>
            </Stack>

            <PostContent content={content} />

            <Divider />

            <ShareIcons post={post} />
          </Container>
        </Stack>
      </Layout>
    </PageContextProvider>
  );
};

type Params = {
  id: string;
};

export const getServerSideProps: GetServerSideProps<any, Params> = async ({
  locale,
  params,
}) => {
  try {
    const id = Number(params!.id);

    const { data: post } = await getPost(id);

    return {
      props: {
        post,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } catch (e: unknown) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

export default Post;
