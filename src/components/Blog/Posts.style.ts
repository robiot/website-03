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
    background-color: ${({ theme }) => theme.palette.primary[700]};
    padding: 2rem;
    border-radius: 0.6rem;
    box-shadow: 0 8px 10px -6px ${({ theme }) => theme.palette.primary[900]};
    border-top: 7px solid ${({ theme }) => theme.palette.primary[600]};
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 15px -6px ${({ theme }) => theme.palette.primary[300]};
    }
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
    margin-bottom: 0.5rem;
`;

export const Description = styled.h4`
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 1.3rem;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const Tag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 1rem 0.4rem 1rem;
    border: solid 1px ${({ theme }) => theme.palette.secondary.default};
    border-radius: 1.1rem;
    color: ${({ theme }) => theme.palette.secondary.washedOut};
    font-size: 0.8rem;

    &:hover {
        background-color: ${({ theme }) => theme.palette.secondary.default};
        color: #fff;
    }
`;