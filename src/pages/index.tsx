import type { NextPage } from "next";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";


const IndexPage: NextPage = () => {
    return (
        <Layout>
            <Home />
            <About />
            <Experience />
        </Layout>
    );
};

export default IndexPage;
