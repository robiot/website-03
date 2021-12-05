import type { AppProps } from "next/app";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import { DarkTheme, LightTheme } from "../lib/theme";
import { useState, createContext, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const GlobalStyle = createGlobalStyle`
    * { 
        box-sizing: border-box;
        transition: background-color 150ms, color 100ms, box-shadow 100ms;
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
`;

export type themes = "light" | "dark";

export const themeCtx = createContext<[themes, React.Dispatch<themes>]>([
    "dark",
    () => {},
]);

const App = ({ Component, pageProps }: AppProps) => {
    const theme = useState<themes>("dark");

    useEffect(() => {
        theme[1]((localStorage.getItem("theme") || "dark") as themes);
    });

    return (
        <themeCtx.Provider value={theme}>
            <ThemeProvider theme={theme[0] == "light" ? LightTheme : DarkTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </themeCtx.Provider>
    );
};

export default App;
