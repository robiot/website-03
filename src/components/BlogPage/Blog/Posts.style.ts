import styled from "styled-components";

export const PostsWrapper = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    padding: 0 10px 0 10px;
    gap: 2rem;
    @media (max-width: 550px) {
        padding: 0;
    }
`;

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.palette.primary[800]};
    padding: 2rem;
    border-radius: 0.6rem;
    box-shadow: 0 8px 10px -6px ${({ theme }) => theme.palette.primary[900]};
    border-top: 7px solid ${({ theme }) => theme.palette.primary[600]};
`;

export const PostDate = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.palette.primary[200]};
    display: flex;
    gap: 0.3rem;
    margin-bottom: 1rem;
`;

export const Title = styled.h1`
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 1.3rem;
    width: fit-content;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
