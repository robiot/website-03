import DateRangeIcon from "@mui/icons-material/DateRange";
import Router from "next/router";

import { CutContent, stringToDate } from "../../../lib/utils";
import { Post_T } from "../../../types/post";
import Tags from "../../Tags";
import { Post, PostDate, PostsWrapper, Title } from "./Posts.style";

export const Posts = ({ posts, tag = "" }) => {
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
                        <DateRangeIcon fontSize="small" width="1px" />
                        {stringToDate(post.date)}
                    </PostDate>

                    <Title>{post.title}</Title>
                    <Tags post={post} />
                </Post>
            ))}
        </PostsWrapper>
    );
};
