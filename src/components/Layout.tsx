import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled from "styled-components";
import { DarkTheme } from "../lib/theme";
import React from "react";
import Nav from "./Nav";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
    * { box-sizing: border-box; }

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
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Layout = ({ children, title }) => {
    return (
        <Wrapper>
            <Head>
                <title>{`robiot - ${title}`}</title>
                <meta charSet="utf-8" />

                {/* Generic */}
                <meta
                    name="description"
                    content="Hi, I'm Robiot. I'm a software developer"
                    title="Robiot"
                />
                <meta name="author" content="Robiot" />
                <meta
                    name="keywords"
                    content="Programming, Programming, Robiot, xclicker, rustcat"
                />
                <link rel="canonical" href="https://robiot.dev" />

                {/* Open graph */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="robiot" />
                <meta property="og:title" content={`Robiot - ${title}`} />
                <meta property="og:image" content="/img/robot.png" />
                <meta
                    property="og:description"
                    content="Hi, I'm Robiot. I'm a software developer"
                />
                <meta property="og:url" content="https://robiot.dev" />

                {/* Twitter */}
                <meta property="twitter:title" content={`Robiot - ${title}`} />
                <meta property="twitter:image" content="/images.robot.png" />
                <meta
                    property="twitter:description"
                    content="Hi, I'm Robiot. I'm a software developer"
                />
                <meta property="twitter:card" content="summary" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ThemeProvider theme={DarkTheme}>
                <GlobalStyle />
                <Nav />
                {children}
            </ThemeProvider>
        </Wrapper>
    );
};

export default Layout;
