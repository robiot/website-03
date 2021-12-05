import type { NextPage } from "next";
import { Container } from "../components/Container";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import Posts from "../components/Blog/Posts";
import Footer from "../components/Footer";

const Blog: NextPage = ({ allPosts }: any) => {
    return (
        <Layout title="Blog posts">
            <Container>
                <Posts posts={allPosts} />
            </Container>

            <Footer />
        </Layout>
    );
};

export async function getStaticProps() {
    const allPosts = getAllPosts([
        "title",
        "content",
        "date",
        "author",
        "tags",
        "slug",
    ]);

    return {
        props: { allPosts },
    };
}

export default Blog;
