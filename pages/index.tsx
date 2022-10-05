import { Stack } from "@mui/system";
import type { NextPage } from "next";
import Banner from "../components/pages/home/banner";
import Posts from "../components/pages/home/posts";
import Services from "../components/pages/home/services";
import Values from "../components/pages/home/values";
import { PageContextProvider } from "../contexts/PageContext";
import { Page, Post } from "../__typescript/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "../__typescript/next";
import CallToAction from "../components/pages/home/cta";
import { getPageId } from "../consts";
import { SeoPage } from "../components/seo/seo";
import Layout from "../components/layout";
import { getPage, getPosts } from "../consts/api";

type Props = {
  page: Page;
  posts: Post[];
};

const Home: NextPage<Props> = ({ page, posts }) => {

  console.log({posts})
  return (
    <PageContextProvider value={page}>
      <Layout>
        <SeoPage />
        <Stack>
          <Banner />
          <Values />
          <Services />
          <CallToAction />
          <Posts posts={posts} />
        </Stack>
      </Layout>
    </PageContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const pageId = getPageId("home", locale);

  try {
    const [page, posts] = await Promise.all([
      getPage(pageId),
      getPosts(locale),
    ]);

    return {
      props: {
        page: page.data,
        posts: posts.data,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } catch (e: unknown) {
    return {
      notFound: true,
    };
  }
};

export default Home;
