/* eslint-disable quotes */
import path from "path";
import { useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    dracula,
    materialLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import { themeCtx } from "../../../pages/_app";
import { InlineCodeBlock, MarkdownStyles } from "./Markdown.style";

export const PostBody = ({
    content,
    slug,
}: {
    content: string;
    slug: string;
}) => {
    const [theme, setTheme] = useContext(themeCtx);

    return (
        <MarkdownStyles
            children={content}
            components={{
                img: (image) => {
                    const imgurl = /\/*(\/)\w*\1\/*/g.test(image.src!)
                        ? image.src!
                        : path.join("/img/blog", slug, image.src!);

                    return <img src={imgurl} alt={image.alt} />;
                },
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");

                    return !inline ? (
                        <SyntaxHighlighter
                            style={theme == "dark" ? dracula : materialLight}
                            language={match == undefined ? undefined : match[1]}
                            PreTag="div"
                            children={String(children).replace(/\n$/, "")}
                            className="codeStyle"

                            // showLineNumbers={true}
                            // wrapLines={true}
                            // useInlineStyles={true}
                            // {...props}
                        />
                    ) : (
                        <InlineCodeBlock
                            className={className}
                            {...props}
                            children={String(children).replace(/\n$/, "")}
                        />
                    );
                },
            }}
        />
    );
};
