import styled from "styled-components";
import { Container } from "./Container";
import Link from "next/link";
import Router from "next/router";
import { Menu } from "@material-ui/icons";
import { useState } from "react";

const NavItemsList = [
    {
        name: "About",
        to: "/#about",
    },
    // {
    //     name: "Projects",
    //     to: "/#projects",
    // },
    {
        name: "Blog",
        to: "/blog",
    },
];

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

const NavItems = styled(Wrapper)`
    @media (max-width: 550px) {
        display: none;
    }
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

const MenuIcon = styled.div`
    margin-top: 5px;
    cursor: pointer;
    @media (min-width: 550px) {
        display: none;
    }
`;

const Dropdown = styled.div`
    background-color: ${({ theme }) => theme.palette.primary[700]};
    top: 60px;
    position: fixed;
    height: 10rem;
    padding: 1rem;
    width: 100%;
    left: 0;
    z-index: 100;
    box-shadow: 0 8px 10px -6px ${({ theme }) => theme.palette.primary[900]};
    display: flex;
    flex-direction: column;
    @media (min-width: 550px) {
        display: none;
    }
`;

const Nav = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <Holder>
            <Container>
                <Wrapper>
                    <HomeImage src="/img/robot.png" height="1px" />
                    <Wrapper>
                        <NavItems>
                            <NavItem
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    Router.push("/");
                                }}
                            >
                                Home
                            </NavItem>

                            {NavItemsList.map((item, index) => {
                                return (
                                    <Link href={item.to} key={index} passHref>
                                        <NavItem>{item.name}</NavItem>
                                    </Link>
                                );
                            })}
                        </NavItems>

                        <MenuIcon>
                            <Menu
                                width="1px"
                                onClick={() => {
                                    setDropdown(!dropdown);
                                }}
                            />
                        </MenuIcon>

                        {dropdown && (
                            <Dropdown>
                                <NavItem
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                        Router.push("/");
                                    }}
                                >
                                    Home
                                </NavItem>

                                {NavItemsList.map((item, index) => {
                                    return (
                                        <Link
                                            href={item.to}
                                            key={index}
                                            passHref
                                        >
                                            <NavItem>{item.name}</NavItem>
                                        </Link>
                                    );
                                })}
                            </Dropdown>
                        )}
                    </Wrapper>
                </Wrapper>
            </Container>
        </Holder>
    );
};

export default Nav;
