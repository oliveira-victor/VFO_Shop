import styled from "styled-components";
import heroMobile from '../../assets/hero-mobile.webp'
import { screen } from "../../styles/screens";

export const Hero = styled.div`
    background-position: center;
    width: 100%;
    height: 500px;
    margin-bottom: 50px;

    @media (max-width: ${screen.mobile}) {
        height: 300px;
        background-image: url(${heroMobile});
    }
`