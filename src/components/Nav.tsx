import Link from "next/link";
import Router from "next/router";
import { useContext, useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import styled from "styled-components";

import { Container } from "../lib/style";
import { themeCtx as themeContext } from "../pages/_app";

const NavItemsList = [
    {
        name: "About",
        to: "/#about",
    },
    {
        name: "Projects",
        to: "/#projects",
    },
    {
        name: "Gallery",
        to: "/#gallery",
    },
    {
        name: "Blog",
        to: "/blog",
    },
];

const NavContainer = styled(Container)`
    flex-grow: 0;
    height: 100%;
`;

const Holder = styled.div`
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: ${({ theme }) => theme.palette.primary[800]};
    height: 60px;
    display: flex;
    box-shadow: 0 2px 10px 0px ${({ theme }) => theme.palette.shadow};
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
`;

const NavItems = styled(Wrapper)`
    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
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

const MenuIconWrapper = styled.div`
    margin-top: 5px;
    cursor: pointer;
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
    }
`;

const Dropdown = styled.div`
    background-color: ${({ theme }) => theme.palette.primary[700]};
    top: 60px;
    position: fixed;
    padding: 1rem;
    width: 100%;
    left: 0;
    z-index: 100;
    box-shadow: 0 2px 10px 0px ${({ theme }) => theme.palette.primary[900]};
    display: flex;
    flex-direction: column;
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
    }
`;

const DropdownItem = styled(NavItem)`
    height: 50px;
`;

const ThemeSwitcher = styled.div`
    position: absolute;
    right: 0;
    margin-right: 2rem;
    width: 50px;
    height: 25px;
    padding: 0px 0.1rem;
    background: ${({ theme }) => theme.palette.primary[900]};
    border: none;
    border-radius: 25px;
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
    }
    /* &:hover {
        color: ${({ theme }) => theme.palette.secondary.default};
    } */
`;

const ThemeThumb = styled.div`
    background: ${({ theme }) => theme.palette.primary[100]};
    height: 100%;
    width: 25px;
    border: 2px solid ${({ theme }) => theme.palette.primary[900]};
    position: relative;
    margin-left: 0.4px;
    margin-right: 0.4px;
    border-radius: 25px;
    transition: all 0.2s linear 0s;
`;

const Nav = () => {
    const [dropdown, setDropdown] = useState(false);
    const [theme, setTheme] = useContext(themeContext);

    const setThemeEverywhere = () => {
        const cTheme = theme == "light" ? "dark" : "light";

        setTheme(cTheme);
        localStorage.setItem("theme", cTheme);
    };

    return (
        <Holder>
            <NavContainer>
                <Wrapper>
                    <HomeImage
                        src="/img/robot.png"
                        height="1px"
                        onClick={() => {
                            window.scrollTo(0, 0);
                            Router.push("/");
                        }}
                    />
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

                        <MenuIconWrapper>
                            <FaBars
                                onClick={() => {
                                    setDropdown(!dropdown);
                                }}
                                width="1px"
                                fontSize="1.4rem"
                            />
                        </MenuIconWrapper>

                        {dropdown && (
                            <Dropdown>
                                <DropdownItem
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                        Router.push("/");
                                    }}
                                >
                                    Home
                                </DropdownItem>

                                {NavItemsList.map((item, index) => {
                                    return (
                                        <Link
                                            href={item.to}
                                            key={index}
                                            passHref
                                        >
                                            <DropdownItem>
                                                {item.name}
                                            </DropdownItem>
                                        </Link>
                                    );
                                })}

                                <DropdownItem
                                    onClick={() => {
                                        setThemeEverywhere();
                                    }}
                                >
                                    {theme == "dark" && <FaSun width="1px" />}

                                    {theme == "light" && <FaMoon width="1px" />}
                                    <div
                                        style={{
                                            marginLeft: "10px",
                                        }}
                                    >
                                        Change theme
                                    </div>
                                </DropdownItem>
                            </Dropdown>
                        )}
                    </Wrapper>
                </Wrapper>
            </NavContainer>
            <ThemeSwitcher
                onClick={() => {
                    setThemeEverywhere();
                }}
            >
                <ThemeThumb
                    style={{
                        marginLeft: theme == "light" ? "calc(100% - 25px)" : 0,
                    }}
                />
            </ThemeSwitcher>
        </Holder>
    );
};

export default Nav;
