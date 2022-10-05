import { NextPage } from "next";
import { Banner as BannerT, Page, Post } from "../../__typescript/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "../../__typescript/next";
import { getPage, getPosts } from "../../consts/api";
import Layout from "../../components/layout";
import Banner from "../../components/banner";
import { getPageId } from "../../consts";
import { PageContextProvider } from "../../contexts/PageContext";
import { SeoPage } from "../../components/seo/seo";
import { Container, Grid } from "@mui/material";
import PostBox from "../../components/post";

type Props = {
  posts: Post[];
  page: Page;
};

const Posts: NextPage<Props> = ({ posts, page }) => {
  const banner = page.acf.banner as BannerT;

  return (
    <PageContextProvider value={page}>
      <SeoPage />
      <Layout>
        <Banner {...banner} />
        <Container sx={{ my: 4 }}>
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid key={post.id} item xs={12} md={4}>
                <PostBox post={post} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Layout>
    </PageContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<any> = async ({
  locale,
}) => {
  try {
    const pageId = getPageId("news", locale);

    const [posts, page] = await Promise.all([
      getPosts(locale),
      getPage(pageId),
    ]);

    return {
      props: {
        posts: posts.data,
        page: page.data,
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

export default Posts;
