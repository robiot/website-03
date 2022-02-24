import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "styled-components";

export const MarkdownStyles = styled(ReactMarkdown)`
    * {
        word-wrap: break-word;
    }

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
`;
