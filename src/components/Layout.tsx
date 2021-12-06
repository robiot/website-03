import styled from "styled-components";
import React from "react";
import Nav from "./Nav";
import Head from "next/head";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Layout = ({ children, title, description = "Hi, I'm Robiot. I'm a software developer" }) => {
    return (
        <Wrapper>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />

                {/* Generic */}
                <meta
                    name="description"
                    content={description}
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
                <meta property="og:title" content={title} />
                <meta property="og:image" content="/img/robot.png" />
                <meta
                    property="og:description"
                    content={description}
                />
                <meta property="og:url" content="https://robiot.dev" />

                {/* Twitter */}
                <meta property="twitter:title" content={title} />
                <meta property="twitter:image" content="/images.robot.png" />
                <meta
                    property="twitter:description"
                    content={description}
                />
                <meta property="twitter:card" content="summary" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            {children}
        </Wrapper>
    );
};

export default Layout;
