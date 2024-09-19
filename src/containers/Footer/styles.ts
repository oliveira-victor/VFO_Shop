import styled from "styled-components";
import { color } from "../../styles/colors";

export const Footer = styled.footer`
    max-width: 900px;
    width: 90%;
    padding: 20px 0;
    margin: 50px auto 20px auto;
    background-color: ${color.footer};
    text-align: center;
    border-radius: 10px;
    line-height: 1.8;

    @media (max-width: 767px) {
        margin-bottom: 60px;
    }

    .author {
        white-space: nowrap;
    }
`

export const FooterIcons = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;

    img {
        height: 40px;
    }
`