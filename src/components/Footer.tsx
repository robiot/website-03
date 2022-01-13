import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.palette.primary[800]};
    width: 100%;
    height: 3rem;
    margin-top: 10rem;
    justify-content: center;
    align-items: center;
    font-weight: 200;
`;

const Footer = () => {
    return <Wrapper>Made without ♥ in Next.js ;)</Wrapper>;
};

export default Footer;
