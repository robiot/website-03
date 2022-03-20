import type { NextPage } from "next";

import Footer from "../components/Footer";
import { About } from "../components/HomePage/About/About";
import { Experience } from "../components/HomePage/Experience/Experience";
import { Gallery } from "../components/HomePage/Gallery/Gallery";
import { Home } from "../components/HomePage/Home/Home";
import { Projects } from "../components/HomePage/Projects/Projects";
import Layout from "../components/Layout";

const IndexPage: NextPage = () => {
    return (
        <Layout title="robiot - Home">
            <Home />
            <About />
            <Experience />
            <Projects />
            <Gallery />
            <Footer />
        </Layout>
    );
};

export default IndexPage;
