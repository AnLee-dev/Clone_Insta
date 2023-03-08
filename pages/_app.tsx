import { store } from "@/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../assets/css/globals.css";
import { NavMobileBottom } from "@/components/NavBar/NavMobileBottom";
import { NavMobileTop } from "@/components/NavBar/NavMobileTop";
import NavBar from "@/components/NavBar/NavBar";
import Head from "next/head";
import CheckRoute from "./CheckRoute";
import { Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Mystagram</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Provider store={store}>
        <CheckRoute />
        <NavMobileTop />
        <div className="flex w-full mb:h-[calc(100vh-49px)] lg:h-[100vh] [&__svg]:cursor-pointer ">
          <NavBar />
          <Component {...pageProps} />
        </div>
        <NavMobileBottom />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
