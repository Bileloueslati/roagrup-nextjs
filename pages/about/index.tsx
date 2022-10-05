import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getPageId, pages } from "../../consts";
import http, { isHttpError } from "../../libs/axios";
import { Page } from "../../__typescript/api";
import { GetServerSideProps } from "../../__typescript/next";
import { PageContextProvider } from "../../contexts/PageContext";
import type { NextPage } from "next";
import Banner from "../../components/banner";
import WeAreInNumbers from "../../components/pages/about/weAreInNumbers";
import { SeoPage } from "../../components/seo/seo";
import Layout from "../../components/layout";
import OurTeam from "../../components/pages/about/team";
import Partners from "../../components/pages/about/partners";
import { getPage } from "../../consts/api";

const About: NextPage<{ page: Page }> = ({ page }) => {
 
  const {
    acf: { banner },
  } = page;

  return (
    <PageContextProvider value={page}>
      <Layout>
        <SeoPage />
        <Banner
          title={banner.title}
          subtitle="We&#180;re Rua Grup"
          description={banner.description}
          image={banner.image}
        />
        <WeAreInNumbers />
        <OurTeam />
        <Partners />
      </Layout>
    </PageContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const pageId = getPageId("about", locale);

    const { data: page } = await getPage(pageId);

    return {
      props: {
        page,
        ...(await serverSideTranslations(locale, ["common"])),
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

  return {
    props: {},
  };
};

export default About;
