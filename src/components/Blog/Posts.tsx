import styled from "styled-components";
import DateRangeIcon from '@mui/icons-material/DateRange';

import {
    PostsWrapper,
    Description,
    Title,
    Post,
    PostDate,
    Tag,
    Tags,
} from "./Posts.style";
import Router from "next/router";
import { CutContent, stringToDate } from "../../lib/utils";

const Posts = ({ posts }) => {
    return (
        <PostsWrapper>
            {posts.map((post: any, index: any) => (
                <Post
                    key={index}
                    onClick={() => {
                        Router.push(`/post/${post.slug}`);
                    }}
                >
                    <PostDate>
                        <DateRangeIcon fontSize="small" width="1px"/>
                        {stringToDate(post.date)}
                    </PostDate>

                    <Title>{post.title}</Title>

                    <Description>
                        {CutContent(post.content)}
                    </Description>

                    <Tags>
                        {post.tags.map((tag: any, index: any) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </Tags>
                </Post>
            ))}
        </PostsWrapper>
    );
};

export default Posts;
