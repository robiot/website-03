import type { NextPage } from "next";
import Link from "next/link";
import { FaCalendar, FaUser } from "react-icons/fa";
import styled from "styled-components";

import { PostBody } from "../../components/BlogPage/Post/post-body";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Tags from "../../components/Tags";
import {
    copyToPublic,
    ensureFolder,
    getAllPosts,
    getPostBySlug,
    getPostImagesBySlug,
} from "../../lib/api";
import { Container } from "../../lib/style";
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
                            <FaCalendar
                                fontSize="small"
                                width="1px"
                                style={{ marginTop: 2 }}
                            />
                            {stringToDate(post.date)}
                        </PostInfoItem>

                        <PostInfoItem>
                            <FaUser
                                fontSize="small"
                                width="1px"
                                style={{ marginTop: 2 }}
                            />
                            by {post.author}
                        </PostInfoItem>
                    </PostInfo>
                    <Title>{post.title}</Title>
                    <PostBody content={post.content} slug={post.slug} />
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

export async function getStaticProps({ params }: { params: any }) {
    const post = getPostBySlug(params.slug + "/index.md", [
        "title",
        "date",
        "slug",
        "author",
        "content",
        "tags",
    ]);

    ensureFolder(post.slug);

    getPostImagesBySlug(post.slug).map((image) =>
        copyToPublic(image.path, post.slug, image.name)
    );

    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"] as any);

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
