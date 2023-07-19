import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #FFFFFF;
        color: #111111;
        margin: 0;
        display: flex;
        place-items: center;
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