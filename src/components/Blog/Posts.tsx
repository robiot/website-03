import DateRangeIcon from "@mui/icons-material/DateRange";

import {
    PostsWrapper,
    Description,
    Title,
    Post,
    PostDate,
} from "./Posts.style";
import Router from "next/router";
import { CutContent, stringToDate } from "../../lib/utils";
import Tags from "../Tags";
import { Post_T } from "../../types/post";

const Posts = ({ posts, tag="" }) => {
    return (
        <PostsWrapper>
            {tag &&
                <h1>Showing {posts.length} item tagged with "{tag}"</h1>
            }
            
            {posts.map((post: Post_T, index: any) => (
                <Post
                    key={index}
                    onClick={(click: any) => {
                        if (click.target.id != "tag") { // Hacky fix, but it works
                            Router.push(`/post/${encodeURIComponent(post.slug)}`);
                        }
                    }}
                >
                    <PostDate>
                        <DateRangeIcon fontSize="small" width="1px" />
                        {stringToDate(post.date)}
                    </PostDate>

                    <Title>{post.title}</Title>

                    <Description>{CutContent(post.content)}</Description>
                    
                    <Tags post={post}/>
                </Post>
            ))}
        </PostsWrapper>
    );
};

export default Posts;
