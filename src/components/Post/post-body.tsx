import { MarkdownStyles } from "./Markdown.style";
const PostBody = ({ content }) => {
    return <MarkdownStyles dangerouslySetInnerHTML={{ __html: content }}></MarkdownStyles>;
};

export default PostBody;
