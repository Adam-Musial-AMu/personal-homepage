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
        color: ${({ theme }) => theme.colors.global.textSecondary};
        transition: background 0.3s;
        height: 2000px; // to see background
    }
`;