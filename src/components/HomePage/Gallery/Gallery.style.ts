import styled from "styled-components";

import { Container } from "../../../style/style";

export const BiggerContainer = styled(Container)`
    max-width: 850px;
`;

export const ItemsWrapper = styled.div`
    display: grid;
    gap: 50px 50px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const ItemDiv = styled.div`
    background: ${({ theme }) => theme.palette.primary[800]};
    box-shadow: ${({ theme }) => theme.palette.primary[700]} 2px 5px 10px 2px;
    border-radius: 13px;
    height: 230px;
    transition: transform 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const ItemTitle = styled.h1`
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 2px;
`;

export const ItemImage = styled.img`
    background-color: ${({ theme }) => theme.palette.primary[700]};
    border-radius: 13px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    max-height: 300px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 100%;
    }
`;

export const Tooltip = styled.span`
    position: relative;
    cursor: pointer;
    &:before {
        content: attr(data-text);
        position: absolute;
        font-size: 1rem;
        font-weight: normal;

        /* vertically center */
        top: 50%;
        transform: translateY(-50%);

        left: 100%;
        margin-left: 15px;

        left: initial;
        margin: initial;

        right: 100%;
        margin-right: 15px;

        width: 200px;
        padding: 10px;
        border-radius: 10px;
        background: ${({ theme }) => theme.palette.primary[900]};
        color: ${({ theme }) => theme.palette.buttonText};
        box-shadow: ${({ theme }) => theme.palette.primary[800]} 2px 5px 10px
            2px;

        text-align: center;

        display: none;
    }

    &:hover:before {
        display: block;
    }
`;
