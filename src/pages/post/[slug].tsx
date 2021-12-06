import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import type { NextPage } from "next";
import styled from "styled-components";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import PostBody from "../../components/Post/post-body";
import Tags from "../../components/Tags";
import { getAllPosts, getAllPostTags, getPostBySlug } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdown";
import { CutContent, stringToDate } from "../../lib/utils";
import Link from "next/link";

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

const Separator = styled.div`
    background-color: ${({ theme }) => theme.palette.primary[200]};
    width: 100%;
    height: 2px;
    margin-bottom: 1rem;
    margin-top: 4rem;
`;

const MoreBlogsLink = styled.a`
    color: ${({ theme }) => theme.palette.secondary.default};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    cursor: pointer;
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

                <Separator />

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Tags post={post} />
                    <Link href="/blog" passHref>
                        <MoreBlogsLink>More Posts</MoreBlogsLink>
                    </Link>
                </div>
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
        "tags",
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
    const tags = getAllPostTags();

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
