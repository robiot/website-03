import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import type { NextPage } from "next";
import styled from "styled-components";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import PostBody from "../../components/Post/post-body";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdown";
import { CutContent, stringToDate } from "../../lib/utils";

const Wrapper = styled.div`
    margin-top: 4rem;
`;

const PostInfo = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.palette.primary[200]};
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
`;

const PostInfoItem = styled.div`
    display: flex;
    gap: 0.3rem;
`;

const Title = styled.h1`
    font-size: 2.5rem;
`;

const Post: NextPage = ({ post }: any) => {
    return (
        <Layout title={post.title} description={CutContent(post.content)}>
            <Container>
                <Wrapper>
                    <PostInfo>
                        <PostInfoItem>
                            <DateRangeIcon fontSize="small" width="1px" />
                            {stringToDate(post.date)}
                        </PostInfoItem>

                        <PostInfoItem>
                            <PersonIcon fontSize="small" width="1px" />
                            by {post.author}
                        </PostInfoItem>
                    </PostInfo>
                    <Title>{post.title}</Title>
                    <PostBody content={post.content} />
                </Wrapper>
            </Container>
            <Footer />
        </Layout>
    );
};

export async function getStaticProps({ params }) {
    const post: any = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "author",
        "content",
    ]);
    const content = await markdownToHtml(post.content || "");

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"]);

    return {
        paths: posts.map((post: any) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}

export default Post;
