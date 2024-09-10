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

    .mainContainer {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
    }
`

export default GlobalStyle