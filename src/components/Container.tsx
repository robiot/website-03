import styled from "styled-components";

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
`;
