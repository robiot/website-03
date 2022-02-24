import dynamic from "next/dynamic";
import Image from "next/image";
import path from "path";
import { useRef } from "react";
import { useAsync } from "react-async";

// import prism from "remark-prism";
import { MarkdownStyles } from "./Markdown.style";
// const image = require("../");

export const PostBody = ({
    content,
    slug,
}: {
    content: string;
    slug: string;
}) => {
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
            }}
        />
    );
};
