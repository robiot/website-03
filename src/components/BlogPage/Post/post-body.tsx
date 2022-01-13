import { MarkdownStyles } from "./Markdown.style";

export const PostBody = ({ content }) => {
    return (
        <MarkdownStyles
            dangerouslySetInnerHTML={{ __html: content }}
        ></MarkdownStyles>
    );
};
