import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "../../components/banner";
import Layout from "../../components/layout";
import ProductsSection from "../../components/pages/products";
import { SeoPage } from "../../components/seo/seo";
import { getPageId } from "../../consts";
import { getPage } from "../../consts/api";
import { PageContextProvider } from "../../contexts/PageContext";
import { Banner as BannerT, Page } from "../../__typescript/api";
import { GetServerSideProps } from "../../__typescript/next";

const Products: NextPage<{ page: Page }> = ({ page }) => {
  const banner = page.acf.banner as BannerT;

  return (
    <PageContextProvider value={page}>
      <SeoPage />
      <Layout>
        <Banner {...banner} />
        <ProductsSection />
      </Layout>
    </PageContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const pageId = getPageId("products", locale);

    const { data: page } = await getPage(pageId);

    return {
      props: {
        page,
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

export default Products;
