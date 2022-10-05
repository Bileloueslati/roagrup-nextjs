import { appWithTranslation } from "next-i18next";
import App, { AppContext, AppProps } from "next/app";
import { getGlobalData } from "../consts/api";
import { GlobalData } from "../__typescript/api";
import { GlobalDataContextProvider } from "../contexts/GlobalDataContext";
import "../assets/css/global.css";

type Props = AppProps & {
  globalData: GlobalData;
};

function MyApp({ Component, pageProps, globalData }: Props) {
  return (
    <GlobalDataContextProvider value={globalData}>
      <Component {...pageProps} />
    </GlobalDataContextProvider>
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
