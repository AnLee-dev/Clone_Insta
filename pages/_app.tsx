import { store } from "@/store";
import App, { AppContext, AppProps } from "next/app";
import { SessionProvider, getSession } from "next-auth/react";
import { Provider } from "react-redux";
import "../assets/css/globals.css";
import { NavMobileBottom } from "@/components/NavBar/NavMobileBottom";
import { NavMobileTop } from "@/components/NavBar/NavMobileTop";
import NavBar from "@/components/NavBar/NavBar";
import Head from "next/head";
import CheckRoute from "./CheckRoute";
import { Fragment } from "react";
import { ColorModeScript } from "nextjs-color-mode";
import MainLayout from "@/components/layout/MainLayout";
import { Col, Dropdown, Layout, Row, Space } from "antd";
import { menuProps } from "@/components/layout/MainLayout.state";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Mystagram</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      {/* <ColorModeScript /> */}
      <SessionProvider session={session}>
        <Provider store={store}>
          <Row>
            <Col
              span={12}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Space direction="vertical">
                <Dropdown.Button
                  icon={<DownOutlined />}
                  menu={menuProps}
                ></Dropdown.Button>
              </Space>
            </Col>
          </Row>
          <MainLayout>
            <CheckRoute />
            <NavMobileTop />
            <div className="flex w-full mb:h-[calc(100vh-49px)] lg:h-[100vh] [&__svg]:cursor-pointer ">
              <NavBar />
              <Component {...pageProps} />
            </div>
            <NavMobileBottom />
          </MainLayout>
        </Provider>
      </SessionProvider>
    </Fragment>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  const session = await getSession(context.ctx);

  return {
    ...appProps,
    session,
  };
};

export default MyApp;
