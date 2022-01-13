import type { NextPage } from "next";

import Footer from "../components/Footer";
import { About } from "../components/HomePage/About/About";
import { Experience } from "../components/HomePage/Experience/Experience";
import { Home } from "../components/HomePage/Home/Home";
import Layout from "../components/Layout";

const IndexPage: NextPage = () => {
    return (
        <Layout title="robiot - Home">
            <Home />
            <About />
            <Experience />
            <Footer />
        </Layout>
    );
};

export default IndexPage;
