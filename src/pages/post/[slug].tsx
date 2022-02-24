import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import styled from "styled-components";

import { PostBody } from "../../components/BlogPage/Post/post-body";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Tags from "../../components/Tags";
import {
    copyToPublic,
    ensureFolder,
    getAllPosts,
    getAllPostTags,
    getPostBySlug,
    getPostImagesBySlug,
} from "../../lib/api";
import { markdownToHtml } from "../../lib/markdown";
import { CutContent, stringToDate } from "../../lib/utils";
import { Container } from "../../style/style";

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
    // console.log(post);

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
