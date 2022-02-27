import router from "next/router";
import styled from "styled-components";

export const TagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const Tag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 1rem 0.4rem 1rem;
    border: solid 1px ${({ theme }) => theme.palette.secondary.default};
    border-radius: 1.1rem;
    color: ${({ theme }) => theme.palette.secondary.washedOut};
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.palette.secondary.default};
        color: #fff;
    }
    width: auto;
`;

const Tags = ({ post }: { post: any }) => {
    return (
        <TagsWrapper>
            {post.tags.map((tag: any, index: any) => (
                <Tag
                    key={index}
                    id="tag"
                    onClick={() => {
                        router.push(`/blog/tags/${encodeURIComponent(tag)}`);
                    }}
                >
                    {tag}
                </Tag>
            ))}
        </TagsWrapper>
    );
};

export default Tags;
