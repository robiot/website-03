import styled from "styled-components";

export const ProjectDiv = styled.div`
    background: ${({ theme }) => theme.palette.primary[800]};
    box-shadow: ${({ theme }) => theme.palette.primary[700]} 2px 5px 10px 2px;
    border-radius: 13px;
    min-height: 300px;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        flex-direction: column-reverse;
    }
`;

export const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const LeftWrapper = styled.div`
    padding-top: 40px;
    padding-left: 50px;
    padding-right: 30px;
    padding-bottom: 30px;
    width: 45%;
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 100%;
        padding-left: 30px;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProjectTitle = styled.h1`
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 2px;
`;

export const ProjectDescription = styled.p`
    font-size: 1.1rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 0.9rem;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 14px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        justify-content: space-between;
    }
`;

export const DownloadButton = styled.a`
    text-decoration: none;
    background: linear-gradient(
            134deg,
            ${({ theme }) => theme.palette.accent.brighter} 0%,
            ${({ theme }) => theme.palette.accent.default} 99%
        )
        repeat scroll 0% 0%;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: all 0.2s ease 0s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    &:hover {
        transform: scale(1.05);
    }
    color: white;
`;

export const GithubButton = styled.a`
    background: linear-gradient(
            134deg,
            ${({ theme }) => theme.palette.accent.brighter} 0%,
            ${({ theme }) => theme.palette.accent.default} 99%
        )
        repeat scroll 0% 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1px;
    transition: all 0.2s ease 0s;
    color: white;
    font-size: 1.3rem;
    &:hover {
        transform: scale(1.05);
    }
`;

export const ProjectImage = styled.img`
    background-color: ${({ theme }) => theme.palette.primary[700]};
    border-radius: 13px;
    width: 50%;
    object-fit: cover;
    object-position: center;
    max-height: 300px;
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 100%;
    }
`;
