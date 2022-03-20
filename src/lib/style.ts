import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    width: 100%;
    z-index: 1;
    position: relative;
    @media (max-width: 1000px) {
        width: calc(100% - 4rem);
    }
    flex-grow: 1; // For footer
`;

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
    background: linear-gradient(
            134deg,
            ${({ theme }) => theme.palette.accent.brighter} 0%,
            ${({ theme }) => theme.palette.accent.default} 99%
        )
        repeat scroll 0% 0%;
    margin-bottom: 15px;
`;

export const SubSection = styled(Section)`
    margin-top: 2rem;
`;

export const SubSectionTitle = styled.h1`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 2.4rem;
`;

export const slideDownKeyframe = keyframes`
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const slideDownFadeKeyframe = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
