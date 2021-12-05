import styled from "styled-components";

export const MarkdownStyles = styled.div`
    & p {
        font-size: 1.1rem;
    }

    & ul {
        list-style: square;

        margin-top: 10px;

        font-size: 1rem;
    }

    & li {
        padding-bottom: 2px;
    }

    // Prevent going outside the container
    & img {
        max-width: 100%;
    }

    & a {
        color: ${({theme}) => theme.palette.secondary.default};
        text-decoration: none;
        &:hover {
            text-decoration: underline; 
        }
    }

    /**
    * okaidia theme for JavaScript, CSS and HTML
    * Loosely based on Monokai textmate theme by http://www.monokai.nl/
    * @author ocodia
    */

    code[class*="language-"],
    pre[class*="language-"] {
        color: #f8f8f2;
        background: none;
        text-shadow: 0 1px rgba(0, 0, 0, 0.3);
        font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
        font-size: 1em;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }

    /* Code blocks */
    pre[class*="language-"] {
        padding: 1em;
        margin: 0.5em 0;
        overflow: auto;
        border-radius: 0.3em;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
        background: #2d3748;
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
        padding: 0.1em;
        border-radius: 0.3em;
        white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: #8292a2;
    }

    .token.punctuation {
        color: #f8f8f2;
    }

    .token.namespace {
        opacity: 0.7;
    }

    .token.property,
    .token.tag,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: #f92672;
    }

    .token.boolean,
    .token.number {
        color: #ae81ff;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: #a6e22e;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable {
        color: #f8f8f2;
    }

    .token.atrule,
    .token.attr-value,
    .token.function,
    .token.class-name {
        color: #e6db74;
    }

    .token.keyword {
        color: #66d9ef;
    }

    .token.regex,
    .token.important {
        color: #fd971f;
    }

    .token.important,
    .token.bold {
        font-weight: bold;
    }
    .token.italic {
        font-style: italic;
    }

    .token.entity {
        cursor: help;
    }
`;
