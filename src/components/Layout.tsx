import { createGlobalStyle, ThemeProvider } from "styled-components";
import { DarkTheme } from "../lib/theme";
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

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

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <GlobalStyle />
            <Nav />
            {children}
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;
