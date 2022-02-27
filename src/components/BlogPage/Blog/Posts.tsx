import Router from "next/router";
import { FaCalendar } from "react-icons/fa";

import { stringToDate } from "../../../lib/utils";
import { Post_T } from "../../../types/post";
import Tags from "../../Tags";
import { Post, PostDate, PostsWrapper, Title } from "./Posts.style";

export const Posts = ({ posts, tag = "" }: { posts: any; tag?: string }) => {
    return (
        <PostsWrapper>
            {tag && (
                <h1>
                    Showing {posts.length} item tagged with "{tag}"
                </h1>
            )}

            {posts.map((post: Post_T, index: any) => (
                <Post
                    key={index}
                    onClick={(click: any) => {
                        if (click.target.id != "tag") {
                            // Hacky fix, but it works
                            Router.push(
                                `/post/${encodeURIComponent(post.slug)}`
                            );
                        }
                    }}
                >
                    <PostDate>
                        <FaCalendar
                            fontSize="small"
                            width="1px"
                            style={{ marginTop: 2 }}
                        />
                        {stringToDate(post.date)}
                    </PostDate>

                    <Title>{post.title}</Title>
                    <Tags post={post} />
                </Post>
            ))}
        </PostsWrapper>
    );
};
