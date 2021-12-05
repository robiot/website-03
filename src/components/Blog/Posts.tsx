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
import { StringToDate } from "../../lib/utils";

const Posts = ({ posts }) => {
    return (
        <PostsWrapper>
            {posts.map((post, index) => (
                <Post
                    key={index}
                    onClick={() => {
                        Router.push(`/post/${post.slug}`);
                    }}
                >
                    <PostDate>
                        <DateRangeIcon fontSize="small" width="1px"/>
                        {StringToDate(post.date)}
                    </PostDate>

                    <Title>{post.title}</Title>

                    <Description>
                        {post.content.length > 114
                            ? `${post.content.substring(0, 114)}...`
                            : post.content}
                    </Description>

                    <Tags>
                        {post.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </Tags>
                </Post>
            ))}
        </PostsWrapper>
    );
};

export default Posts;
