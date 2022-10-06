import { appWithTranslation } from "next-i18next";
import App, { AppContext, AppProps } from "next/app";
import { getGlobalData } from "../consts/api";
import { GlobalData } from "../__typescript/api";
import { GlobalDataContextProvider } from "../contexts/GlobalDataContext";
import "../assets/css/global.css";
import Script from 'next/script'


type Props = AppProps & {
  globalData: GlobalData;
};

function MyApp({ Component, pageProps, globalData }: Props) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QYT71KT4VK');
        `}
      </Script>
    <GlobalDataContextProvider value={globalData}>
      <Component {...pageProps} />
    </GlobalDataContextProvider>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);

  try {
    const { data: globalData } = await getGlobalData();
    return { ...appProps, globalData };
  } catch (e: unknown) {
    return appProps;
  }
};

export default appWithTranslation<Props>(MyApp);
