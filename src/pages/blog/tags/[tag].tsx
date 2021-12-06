import type { NextPage } from "next";
import { Container } from "../../../components/Container";
import Layout from "../../../components/Layout";
import { getAllPosts, getAllPostTags } from "../../../lib/api";
import Posts from "../../../components/Blog/Posts";
import Footer from "../../../components/Footer";

const Blog: NextPage = ({ allPosts, tag }: any) => {
    return (
        <Layout title="Blog | robiot">
            <Container>
                <Posts posts={allPosts} tag={tag}/>
            </Container>
            <Footer />
        </Layout>
    );
};

export async function getStaticProps({ params }) {
    const allPosts = getAllPosts([
        "title",
        "content",
        "date",
        "author",
        "tags",
        "slug",
    ], params.tag);

    const tag = params.tag;

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
