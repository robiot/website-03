import type { NextPage } from "next";

import { Posts } from "../../../components/BlogPage/Blog/Posts";
import Footer from "../../../components/Footer";
import Layout from "../../../components/Layout";
import { getAllPosts, getAllPostTags } from "../../../lib/api";
import { Container } from "../../../style/Container";

const Blog: NextPage = ({ allPosts, tag }: any) => {
    return (
        <Layout title="Blog | robiot">
            <Container>
                <Posts posts={allPosts} tag={tag} />
            </Container>
            <Footer />
        </Layout>
    );
};

export async function getStaticProps({ params }: { params: any }) {
    const allPosts = getAllPosts(
        ["title", "content", "date", "author", "tags", "slug"] as any,
        params.tag
    );

    const { tag } = params;

    return {
        props: { allPosts, tag },
    };
}

export async function getStaticPaths() {
    const tags = getAllPostTags();

    return {
        paths: tags.map((tag: string) => {
            return {
                params: {
                    tag: tag,
                },
            };
        }),
        fallback: false,
    };
}

export default Blog;
