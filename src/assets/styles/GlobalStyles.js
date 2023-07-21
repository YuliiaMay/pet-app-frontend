import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        // mobile
        @media screen and (min-width: 320px) {
            margin: 0 auto;
            padding: 0 20px;
        }

        // tablet
        @media screen and (min-width: 768px) {
            max-width: 768px;
            padding: 0 32px;
        }

        // desktop
        @media screen and (min-width: 1280px) {
            max-width: 1280px;
            padding: 0 16px;
        }        
    };
    
    body {
        font-family: 'Manrope', sans-serif;
        font-weight: 400;
        font-size: 16px;
        background-color: #FFFFFF;
        color: #111111;
        margin: 0;
    };

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li,
    ul {
        list-style: none;
    }

    button {
        display: block;
        cursor: pointer;
        padding: 0;
        margin: 0;
    }
`;
