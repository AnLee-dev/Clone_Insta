import { store } from "@/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../assets/css/globals.css";
import { NavMobileBottom } from "@/components/NavBar/NavMobileBottom";
import { NavMobileTop } from "@/components/NavBar/NavMobileTop";
import NavBar from "@/components/NavBar/NavBar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mystagram</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Provider store={store}>
        <div className="flex w-full [&__svg]:cursor-pointer">
          <NavMobileTop />
          <NavBar />
          <Component {...pageProps} />
        </div>
        <NavMobileBottom />
      </Provider>
    </>
  );
}

export default MyApp;
