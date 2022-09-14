import "nprogress/nprogress.css";
import "aos/dist/aos.css";

import AOS from "aos";
import { getCookie } from "cookies-next";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { Dispatch } from "react";
import { createContext, useEffect, useState } from "react";
import { DarkTheme, LightTheme } from "src/lib/theme";
import { createGlobalStyle, ThemeProvider } from "styled-components";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type PropsType = {
    theme: themes;
};

const GlobalStyle = createGlobalStyle`
    :root {
        color-scheme: ${({ theme }) => theme.theme};
    }

    * { 
        box-sizing: border-box;
    }
    
    body {
        overflow-y: scroll;
    }

    html, body {
        scroll-behavior: smooth;
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        color: ${({ theme }) => theme.palette.buttonText};
        background: ${({ theme }) => theme.palette.primary[900]};
    }

    h1, h2, h3, h4 {
        padding: 0; 
        margin: 0;
    }

    /* Remove spinner */
    #nprogress .spinner, #nprogress .spinner-icon {
        display: none;
    }

    #nprogress .bar {
        background: ${({ theme }) => theme.palette.accent.brighter};
    }
`;

export type themes = "light" | "dark";

export const themeCtx = createContext<[themes, Dispatch<themes>]>([
    "dark",
    () => {},
]);

const CustomApp = (properties: AppProps<PropsType> & PropsType) => {
    const theme = useState<themes>(properties.theme);

    useEffect(() => {
        AOS.init({ once: true });
    });

    return (
        <themeCtx.Provider value={theme}>
            <ThemeProvider theme={theme[0] == "light" ? LightTheme : DarkTheme}>
                <GlobalStyle />
                <properties.Component {...properties.pageProps} />
            </ThemeProvider>
        </themeCtx.Provider>
    );
};

const getInitialProps: (_: AppContext) => Promise<PropsType> = async (
    appContext
) => {
    const appProps = (await App.getInitialProps(appContext)) as any;

    let theme: string;

    if (appContext.ctx.req == undefined || appContext.ctx.res == undefined) {
        theme = "dark";
    } else {
        const cookie = getCookie("not-default-theme", {
            res: appContext.ctx.res,
            req: appContext.ctx.req,
        });

        theme = cookie != undefined && cookie ? "light" : "dark";
    }

    return {
        ...appProps,
        theme,
    };
};

CustomApp.getInitialProps = getInitialProps;

export default CustomApp;
