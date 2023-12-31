import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        margin: 0 auto;
        font-family: 'Inter', sans-serif;
        background-color: ${({ theme }) => theme.colors.global.background};
        height: 2000px; // to see background
    }
`;