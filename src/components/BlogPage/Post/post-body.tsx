import path from "path";
import { useContext } from "react";
import ReactLinkify from "react-linkify";
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
    const [theme, _setTheme] = useContext(themeCtx);

    return (
        <MarkdownStyles
            children={content}
            components={{
                img: (props) => {
                    const imgurl = /\/*(\/)\w*\1\/*/g.test(props.src!)
                        ? props.src!
                        : path.join("/img/blog", slug, props.src!);

                    return <img src={imgurl} alt={props.alt} />;
                },
                // eslint-disable-next-line unused-imports/no-unused-vars
                code(props) {
                    const match = /language-(\w+)/.exec(props.className || "");

                    return !props.inline ? (
                        <SyntaxHighlighter
                            style={theme == "dark" ? dracula : materialLight}
                            language={match == undefined ? undefined : match[1]}
                            PreTag="div"
                            children={String(props.children).replace(/\n$/, "")}
                            className="codeStyle"
                            showLineNumbers={true}
                            // {...props}
                        />
                    ) : (
                        <InlineCodeBlock
                            className={props.className}
                            {...props}
                            children={String(props.children).replace(/\n$/, "")}
                        />
                    );
                },

                a: (props) => (
                    <a target="_blank" href={props.href} key={props.key}>
                        {props.children}
                    </a>
                ),

                p: (props) => (
                    <ReactLinkify
                        componentDecorator={(
                            decoratedHref,
                            decoratedText,
                            key
                        ) => {
                            console.log(props.children);

                            return (
                                <a
                                    target="_blank"
                                    href={decoratedHref}
                                    key={key}
                                >
                                    {decoratedText}
                                </a>
                            );
                        }}
                    >
                        <p>{props.children}</p>
                    </ReactLinkify>
                ),
            }}
        />
    );
};
