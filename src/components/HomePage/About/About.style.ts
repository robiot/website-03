import styled from "styled-components";

export const SectionBg = styled.div`
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background: ${({ theme }) => theme.palette.primary[800]} none repeat scroll
        0% 0%;
    transform: skewY(-3deg);
    pointer-events: none;
    position: absolute;
`;

export const AboutMeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.6rem;
    margin-bottom: 1rem;
`;

export const AboutMeText = styled.div`
    font-size: 1.3rem;
    overflow-wrap: break-word;
`;

export const MeImage = styled.img`
    height: 200px;
    border-radius: 20%;
    margin-left: 5rem;
    @media (max-width: 900px) {
        display: none;
    }

    border: solid 3px transparent;
    &:hover {
        border: solid 3px ${({ theme }) => theme.palette.primary[600]};
    }
`;
