import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Banner from "../../components/banner";
import Layout from "../../components/layout";
import { SeoPage } from "../../components/seo/seo";
import { getPageId } from "../../consts";
import { getPage } from "../../consts/api";
import { PageContextProvider } from "../../contexts/PageContext";
import { Page, Banner as BannerT } from "../../__typescript/api";
import { GetServerSideProps } from "../../__typescript/next";

const AffiliatedCompanies: NextPage<{ page: Page }> = ({ page }) => {
  const banner = page.acf.banner as BannerT;

  const image = page.acf.image as string;

  return (
    <PageContextProvider value={page}>
      <SeoPage />
      <Layout>
        <Banner {...banner} />
        <Container sx={{ my: 4 }}>
          <Box position="relative" height={500} width="100%">
            <Image layout="fill" objectFit="cover" src={image} alt={""} />
          </Box>
        </Container>
      </Layout>
    </PageContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const pageId = getPageId("affiliatedCompanies", locale);

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

export default AffiliatedCompanies;
