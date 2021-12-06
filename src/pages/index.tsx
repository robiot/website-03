import type { NextPage } from "next";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer";

const IndexPage: NextPage = () => {
    return (
        <Layout title="robiot - Home" particles={true}>
            <Home />
            <About />
            <Experience />
            <Footer />
        </Layout>
    );
};

export default IndexPage;
