import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "styled-components";

export const MarkdownStyles = styled(ReactMarkdown)`
    * {
        word-wrap: break-word;
    }

    /* font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif; */
    
    font-family: Roboto, sans-serif;

    & p {
        font-size: 1.15rem;
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
        margin-top: 1rem;
    }

    & a {
        color: ${({ theme }) => theme.palette.secondary.default};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    & h1,
    h2,
    h3,
    h4,
    h5 {
        margin-top: 1.5rem;
    }

    /* .codeStyle,
    pre,
    code,
    code span {
        font-family: var(--font-primary);
        font-style: normal !important;
    }

    pre {
        margin: 0 -1.5rem 1.5rem -1.5rem;
        font-size: 14;
    } */

    .codeStyle {
        border-radius: 6px !important;
        box-shadow: 0 8px 10px -6px ${({ theme }) => theme.palette.primary[700]};
        font-family: inherit !important;
        font-size: 1rem !important;
        line-height: 1.5 !important;
        tab-size: 4 !important;
        hyphens: none !important;
        padding: 1em !important;
        margin: 0.5em 0px !important;
        background-color: ${({ theme }) =>
            theme.palette.primary[700]} !important;
        code {
            background-color: transparent !important;
            color: ${({ theme }) => theme.palette.primary[100]} !important;
        }
    }
`;

export const InlineCodeBlock = styled.div`
    display: inline-block;
    border-radius: 6px;
    padding: 0.2em 0.4em;
    background-color: ${({ theme }) => theme.palette.primary[700]};
    color: ${({ theme }) => theme.palette.primary[100]};
`;
