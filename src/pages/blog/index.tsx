import type { NextPage } from "next";

import { Posts } from "../../components/BlogPage/Blog/Posts";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import { getAllPosts } from "../../lib/api";
import { Container } from "../../style/Container";

const Blog: NextPage = ({ allPosts }: any) => {
    return (
        <Layout title="Blog | robiot">
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
    ] as any);

    return {
        props: { allPosts },
    };
}

export default Blog;
