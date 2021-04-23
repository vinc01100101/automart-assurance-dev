//global css
import "../src/global.css";

import Layout from "@/components/Layout";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

//theme
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { theme } from "@/config";
const muiTheme = createMuiTheme(theme);

//svg sprite
import SvgSprite from "@/svgStore/sprite";

//redux
import { createWrapper } from "next-redux-wrapper";
//Provider module not needed, createWrapper did it instead
import store from "@/redux/store";

//react
import { useEffect } from "react";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

function MyApp({ Component, pageProps }) {
  let basePath = publicRuntimeConfig.basePath
    ? publicRuntimeConfig.basePath
    : "";

  useEffect(() => {
    //google analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-6L6EWL6H47");
  }, []);
  return (
    <>
      <Head>
        <title>
          Sell My Car or Trade-In Quickly at Best Prices | Automart.Ph
        </title>
        <meta
          name="description"
          content="Sell your used cars or trade-in quick and easy thru Automart.Ph. We offer the best prices for used cars in the Philippines and remove the hassle of looking for buyers, dealing with joy bidders and countless meetups."
        />
        <link
          rel="canonical"
          href="https://sellmycar.automart.ph/sell-my-car"
        />
        <link rel="icon" href={`${basePath}favicon.ico`} />

        {/* asset preloads */}
        <link
          rel="preload"
          as="image"
          href={`${basePath}images/headerImage.webp`}
          imagesrcset={`${basePath}images/headerImage_4000.webp 4000w, ${basePath}images/headerImage_2000.webp 2000w, ${basePath}images/headerImage_1000.webp 1000w`}
          imagesizes="100vw"
        />
        <link
          rel="preload"
          as="image"
          href={`${basePath}images/introImage.webp`}
        />

        {/* fonts asynchronouse load*/}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          href={`https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap`}
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap`}
          />
        </noscript>

        {/* google tag */}
        <script
          src="https://www.googletagmanager.com/gtag/js?id=G-6L6EWL6H47"
          defer
        ></script>
      </Head>
      {/* this svg sprite is hidden, images are called in src/svgStore/svgCall.js */}
      <SvgSprite />
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

//redux Provider wrapper
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
