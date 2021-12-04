import styled from "styled-components";
import { Container } from "./Container";
import Link from "next/link";
import Router from "next/router"

const Holder = styled.div`
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: ${({ theme }) => theme.palette.primary[800]};
    height: 60px;
    display: flex;
    box-shadow: 0 8px 10px -6px ${({ theme }) => theme.palette.primary[900]};
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
`;

const NavItem = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    &:hover {
        color: ${({ theme }) => theme.palette.secondary.default};
    }
    font-size: 1.1rem;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
`;

const HomeImage = styled.img`
    height: 40px;
    font-size: 1.3rem;
    border-radius: 10%;
    cursor: pointer;
`;

const Nav = () => {
    return (
        <Holder>
            <Container>
                <Wrapper>
                    <HomeImage src="/img/robot.png" height="1px"/>
                    <Wrapper>                        
                        <NavItem onClick={() => {
                            window.scrollTo(0, 0);
                            Router.push("/")
                        }}>Home</NavItem>
                        <Link href="/#about" passHref>
                            <NavItem>About</NavItem>
                        </Link>
                        {/* <Link href="/#projects" passHref>
                            <NavItem>Projects</NavItem>
                        </Link> */}
                        {/* <Link href="/#contact" passHref>
                            <NavItem>Contact</NavItem>
                        </Link> */}
                        <Link href="/blog" passHref>
                            <NavItem>Blog</NavItem>
                        </Link>
                    </Wrapper>
                </Wrapper>
            </Container>
        </Holder>
    );
};

export default Nav;
