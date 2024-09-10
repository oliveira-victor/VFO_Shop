import styled from "styled-components";
import heroImg from '../../assets/hero.webp'
import heroMobile from '../../assets/hero-mobile.webp'
import { screen } from "../../styles/screens";

export const Hero = styled.div`
    background-image: url(${heroImg});
    background-position: center;
    width: 100%;
    height: 500px;

    @media (max-width: ${screen.mobile}) {
        height: 300px;
        background-image: url(${heroMobile});
    }
`