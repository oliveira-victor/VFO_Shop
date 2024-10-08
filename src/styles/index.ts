import styled, { createGlobalStyle } from 'styled-components'
import { color } from './colors'
import { screen } from './screens'

import bgpattern from '../assets/waves.webp'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Quicksand", sans-serif;
        background-image: url(${bgpattern});
        background-size: 120px;
        
    }

    h1, h2, h3, h4 {
        font-family: "Poppins", system-ui;
    }

    a {
        color: #000;
        text-decoration: none;
        transition: all .3s ease;
    }

    a:hover {
        color: ${color.active};
    }

    .wrapper {
        max-width: 1920x;
        width: 100%;
        margin: 0 auto;
    }

    .container {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        padding: 0 10px;
    }

    .mobileHide {
        color: ${color.active};

        @media (max-width: ${screen.mobile}) {
            display: none;
        }
    }
`

export const SectionTitle = styled.h2`
    font-size: 62px;
    font-weight: 200;
    border-bottom: 1px solid ${color.active};
    text-transform: uppercase;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 0 10px;

    @media (max-width: ${screen.mobile}) {
        font-size: 42px;
        text-align: center;
    }
`

export default GlobalStyle
