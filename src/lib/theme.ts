import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
    palette: {
        primary: {
            100: "#dee3ea",
            200: "#b2bdcd",
            300: "#5d7290",
            400: "#5d7290",
            500: "#5d7290",
            600: "#323d4d",
            700: "#242c37",
            800: "#151a21",
            900: "#0b0e11",
        },
        accent: {
            default: "#4961dc",
            brighter: "#6a98f0",
        },
        secondary: {
            default: "#5575e7",
            washedOut: "#879eed",
        },
        buttonText: "#fff",
        shadow: "#0b0e11",
    },

    breakpoints: {
        large: "1000px",
        medium: "930px",
        small: "550px",
    },
};

export const LightTheme: DefaultTheme = {
    palette: {
        primary: {
            100: "#0b0e11",
            200: "#151a21",
            300: "#242c37",
            400: "#F1F1F1",
            500: "#adadad",
            600: "#bdbdbd",
            700: "#ededed",
            800: "#FFF",
            900: "#F6F6F6",
        },
        accent: {
            default: "#4961dc",
            brighter: "#6a98f0",
        },
        secondary: {
            default: "#5575e7",
            washedOut: "#879eed",
        },
        buttonText: "#2b2b2b",
        shadow: "#ededed",
    },

    breakpoints: {
        large: "1000px",
        medium: "930px",
        small: "550px",
    },
};
