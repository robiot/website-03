import styled from "styled-components";

export const LandingWrapper = styled.div`
    margin-top: 16vw;
    z-index: 2;
    position: relative;
`;

export const BackgroundImage = styled.img`
    height: 100%;
    width: 60%;
    position: absolute;
    right: 0;
    top: 50px;
    @media (max-width: 900px) {
        top: -100px;
    }
    pointer-events: none;
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
`;

export const SubTitle = styled.h2`
    font-size: 2rem;
    color: ${({ theme }) => theme.palette.primary[200]};
    overflow-wrap: break-word;
`;

export const LandingIconsWrapper = styled.div`
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
`;

export const LandingIcon = styled.a`
    color: ${({ theme }) => theme.palette.secondary.default};
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.palette.primary[100]};
    }
`;