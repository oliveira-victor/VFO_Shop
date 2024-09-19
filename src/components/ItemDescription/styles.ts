import styled from "styled-components";
import { screen } from "../../styles/screens";

export const DescriptionList = styled.ul`
    background-color: #fff;
    max-width: 1000px;
    width: 94%;
    margin: 40px auto;
    padding: 20px 40px;
    line-height: 3;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
    border-radius: 6px;

    @media (max-width: ${screen.mobile}) {
        line-height: 2;
    }
`