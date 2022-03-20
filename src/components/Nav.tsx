import Link from "next/link";
import Router from "next/router";
import { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
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
    z-index: 100;
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

const ToggleDropdown = styled.div`
    cursor: pointer;
    width: 25px;
    height: 20px;
    transform: rotate(0deg);
    position: relative;
    margin: 50px auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
    }

    & span {
        transition-property: transform, top, width, opacity;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;

        display: block;
        position: absolute;
        border-radius: 9px;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: ${({ theme }) => theme.palette.primary[100]};
        transform-origin: left center; // ?
    }

    & span:nth-child(1) {
        top: 0;
    }

    & span:nth-child(2) {
        top: 50%;
    }

    & span:nth-child(3) {
        top: 100%;
    }

    &.open span:nth-child(1) {
        transform: rotate(45deg);
    }

    &.open span:nth-child(2) {
        width: 0%;
        opacity: 0;
    }

    &.open span:nth-child(3) {
        transform: rotate(-45deg);
        top: 90%;
    }
`;

const Dropdown = styled.div`
    background-color: ${({ theme }) => theme.palette.primary[800]};
    height: 100%;
    top: -100%;
    position: fixed;
    width: 100%;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    transition: top 0.3s ease-in;

    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
    }

    &.open {
        top: 0;
    }

    & * {
        transition: opacity 0.6s ease-out;
        opacity: 0;
    }

    &.open * {
        opacity: 1;
    }
`;

const DropdownItemsWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 6rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
        padding-top: 0;
        justify-content: center;
    }
`;

const DropdownItem = styled(NavItem)`
    padding: 15px 0 15px 2rem;
    height: fit-content;
    font-weight: 700;
    font-size: calc(1.5rem + 0.5vh);
    @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 2.5rem;
        padding-left: 4rem;
    }
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
        <>
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
                                        <Link
                                            href={item.to}
                                            key={index}
                                            passHref
                                        >
                                            <NavItem>{item.name}</NavItem>
                                        </Link>
                                    );
                                })}
                            </NavItems>

                            <ToggleDropdown
                                className={dropdown ? "open" : ""}
                                onClick={() => {
                                    setDropdown(!dropdown);
                                }}
                            >
                                <span />
                                <span />
                                <span />
                            </ToggleDropdown>
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
                            marginLeft:
                                theme == "light" ? "calc(100% - 25px)" : 0,
                        }}
                    />
                </ThemeSwitcher>
            </Holder>

            <Dropdown className={dropdown ? "open" : ""}>
                <DropdownItemsWrapper>
                    <DropdownItem
                        onClick={() => {
                            setDropdown(false);
                            window.scrollTo(0, 0);
                            Router.push("/");
                        }}
                    >
                        Home
                    </DropdownItem>

                    {NavItemsList.map((item, index) => {
                        return (
                            <Link href={item.to} key={index} passHref>
                                <DropdownItem
                                    onClick={() => {
                                        setDropdown(false);
                                    }}
                                >
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
                </DropdownItemsWrapper>
            </Dropdown>
        </>
    );
};

export default Nav;
