//global css
import "../src/global.css";

// import Layout from "@/components/Layout";
import Head from "next/head";
// import CssBaseline from "@material-ui/core/CssBaseline";

//whole page dialogs
import GetCTPL from "@/components/Dialogs/GetCTPL";

//hrefLinks
import {CONTACTUS, FAQS} from "@/components/hrefLinks";
//QLIB
import _Wrapper from "@qniverse/core/_Wrapper";
import _NavBarWithDrawer from "@qniverse/core/_NavBarWithDrawer";
import _Footer from "@qniverse/core/_Footer";
import assuranceTheme from "@qniverse/core/assurance";
import qConfig from "@qniverse/core/config";

import NextImage from "next/image";
import NextLink from "next/link";

import FrequentlyAskedQuestionsIcon from "mdi-react/FrequentlyAskedQuestionsIcon";
// import PostOutlineIcon from "mdi-react/PostOutlineIcon";
import FaceAgentIcon from "mdi-react/FaceAgentIcon";

//optional componenets for QLIB

import Pna from "@/components/SectionFooter/pna";

//theme
// import { createMuiTheme } from "@material-ui/core/styles";
// import { theme } from "@/config";
// const muiTheme = createMuiTheme(theme);

//svg sprite
import SvgSprite from "@/svgStore/sprite";
import {assurance} from "@/svgStore/svgCall";

//FAQs Schema
import faqSchema from "@/src/faqSchema";

//redux
import {createWrapper} from "next-redux-wrapper";
//Provider module not needed, createWrapper did it instead
import store from "@/redux/store";

//react
import {useEffect} from "react";

import getConfig from "next/config";
const {publicRuntimeConfig} = getConfig();

function MyApp({Component, pageProps}) {
    (() => {
        //theme module
        qConfig.theme = assuranceTheme;

        //company logo to be used
        qConfig.companyLogoSvg = assurance;

        //link hrefs
        qConfig.links = {
            ...qConfig.links,
            FAQs: [FAQS, false],
            "Contact Us": [CONTACTUS, false],
            "Login or Signup": ["https://automart.ph/login", true],
            "Buy a Car": ["http://automart.ph/", true],
            "Buy a Motorcycle": ["http://motomart.ph/", true],
            "Privacy Policy": ["http://automart.ph/page/privacy-policy", true],
            "Terms and Conditions": [
                "http://automart.ph/page/terms-and-conditions",
                true,
            ],
        };

        //drawer button links
        qConfig.drawerList = [
            "Buy a Car",
            "Buy a Motorcycle",
            "FAQs",
            "Contact Us",
        ];

        //footer text links
        qConfig.footerList = [
            "Login or Signup",
            "Privacy Policy",
            "FAQs",
            "Contact Us",
            "Terms and Conditions",
        ];

        //navbar button links
        qConfig.navList = ["FAQs", "Contact Us"];

        //navbar icon list
        qConfig.navIcons = [FrequentlyAskedQuestionsIcon, FaceAgentIcon];

        //image element to be used
        qConfig.imageElement = (props) => <NextImage {...props} />;

        //anchor element to be used
        qConfig.anchorElement = (props) => {
            return (
                <NextLink {...props}>
                    <a {...props}>{props.children}</a>
                </NextLink>
            );
        };

        //platform copyright text
        qConfig.copyrightText = "© Copyright 2020, Automart.Ph";
    })();

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
                <title>Assurance.Ph</title>
                <meta
                    name="description"
                    content="Sell your used cars or trade-in quick and easy thru Automart.Ph. We offer the best prices for used cars in the Philippines and remove the hassle of looking for buyers, dealing with joy bidders and countless meetups."
                />
                <link
                    rel="canonical"
                    href="https://sellmycar.automart.ph/sell-my-car"
                />
                <link rel="icon" href={`${basePath}favicon.png`} />

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

                {/* FAQs SCHEMA */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: faqSchema}}
                ></script>
            </Head>
            {/* this svg sprite is hidden, images are called in src/svgStore/svgCall.js */}
            <SvgSprite />
            {/* <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider> */}

            <_Wrapper>
                <_NavBarWithDrawer />
                <GetCTPL />
                <Component {...pageProps} />
                <_Footer PartnersAndAffiliates={Pna} />
            </_Wrapper>
        </>
    );
}

//redux Provider wrapper
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
