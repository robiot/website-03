import styled from "styled-components";

export const Section = styled.div`
    margin-top: 15vw;
    scroll-margin-top: 10px;
    @media (max-width: 900px) {
        margin-top: 35%;
    }
    position: relative;
    width: 100%;
    padding: 4rem 0;
`;

export const SectionTitle = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
`;

export const SectionLine = styled.div`
    width: 12rem;
    height: 5px;
    background: rgba(0, 0, 0, 0)
        linear-gradient(134deg, rgb(106, 152, 240) 0%, rgb(73, 97, 220) 99%)
        repeat scroll 0% 0%;
    margin-bottom: 15px;
`;

export const SectionBg = styled.div`
    left: 0px;
    /* width: 100%; */
    /* height: 400px; */
    right: 0;
    top: 0;
    bottom: 0;

    background: ${({ theme }) => theme.palette.primary[800]} none repeat scroll
        0% 0%;
    transform: skewY(-3deg);
    /* z-index: -1; */
    pointer-events: none;
    position: absolute;
`;

export const AboutMeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.4rem;
`;

export const AboutMeText = styled.div`
    font-size: 1.3rem;
    overflow-wrap: break-word;
`;

export const MeImage = styled.img`
    height: 200px;
    border-radius: 20%;
    cursor: pointer;
    display: block;
    margin-left: 5rem;
    @media (max-width: 900px) {
        display: none;
    }
`;
