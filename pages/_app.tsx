import { store } from "@/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../assets/css/globals.css"
import { NavMobileBottom } from "@/components/NavBar/NavMobileBottom";
import { NavMobileTop } from "@/components/NavBar/NavMobileTop";
import NavBar from "@/components/NavBar/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <Provider store={store}>
         <div className="flex w-full [&__svg]:cursor-pointer">
        <NavMobileTop />
        <NavBar />
        {/* <Content /> */}
        <Component {...pageProps} />
        {/* <Video reel={} /> */}
      </div>
      <NavMobileBottom />
      </Provider>
    );
  }

  export default MyApp