import styled from "styled-components";

export const Section = styled.div`
    margin-top: 5rem;
`;

export const SectionTitle = styled.h1`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 2.4rem;
`;

export const Experiences = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    width: 100%;
    gap: 1rem;

    @media (max-width: 765px) {
        flex-flow: column wrap;
    }
`;

export const ExperienceColumn = styled.div`
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 1rem;
    align-items: center;
`;

export const ExperienceTitle = styled.h2`
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
`;

export const ExperienceItem = styled.div`
    background-color: ${({ theme }) => theme.palette.primary[700]};
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    display: flex;
    padding: 0.6rem;
    align-items: center;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 4px ${({ theme }) => theme.palette.primary[600]};
    }
    img {
        margin-right: 1rem;
        height: 100%;
    }
`;

export const Separator = styled.div`
    flex-grow: initial;
    width: 0.1rem;
    display: flex;
    background-color: ${({ theme }) => theme.palette.primary[200]};
`;
