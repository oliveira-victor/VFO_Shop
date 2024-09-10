import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Quicksand", sans-serif;
    }

    h1, h2, h3, h4 {
        font-family: "Poppins", system-ui;
    }

    a {
        color: #000;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .wrapper {
        max-width: 1920x;
        width: 100%;
        margin: 0 auto;
    }

    .container {
        max-width: 1440px;
        width: 100%;
    }
`

export default GlobalStyle