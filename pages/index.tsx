import { Stack } from "@mui/system";
import type { NextPage } from "next";
import About from "../components/pages/home/about";
import Banner from "../components/pages/home/banner";
import Posts from "../components/pages/home/posts";
import Services from "../components/pages/home/services";
import Values from "../components/pages/home/values";
import PageContext from "../contexts/PageContext";
import http, { isHttpError } from "../libs/axios";
import { Page, Post } from "../__typescript/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "../__typescript/next";

type Props = {
  page: Page;
  posts: Post[];
};

const Home: NextPage<Props> = ({ page, posts }) => {
  return (
    <PageContext.Provider value={page}>
      <Stack>
        <Banner />
        <Values />
        <Services />
        <About />
        <Posts posts={posts} />
      </Stack>
    </PageContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const [page, posts] = await Promise.all([
      http.get<Page>("/pages/16"),
      http.get<Post[]>("/posts?_embed&per_page=6"),
    ]);
    return {
      props: {
        page: page.data,
        posts: posts.data,
        ...(await serverSideTranslations(locale!, ["common", "form", "nav"])),
      },
    };
  } catch (e: unknown) {
    if (isHttpError(e) && e.response) {
      console.log(e.response.status);
    }
    return {
      notFound: true,
    };
  }
};

export default Home;
