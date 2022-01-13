import { MarkdownStyles } from "./Markdown.style";

export const PostBody = ({ content }: { content: string }) => {
    return (
        <MarkdownStyles
            dangerouslySetInnerHTML={{ __html: content }}
        ></MarkdownStyles>
    );
};
