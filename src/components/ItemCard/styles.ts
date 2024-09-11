import styled from "styled-components";
import { color } from "../../styles/colors";

export const CardImg = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 10px 10px 0 0;
    background-size: 300px;
    background-position: center;
    transition: all .3s ease;
`

export const Card = styled.li`
    max-width: 300px;
    width: 100%;
    min-width: 100px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    background-color: #fff;

    &:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    }

    h2 {
        color: #999;
        transition: all .3s ease;
    }

    &:hover h2 {
        color: #000;
    }

    &:hover ${CardImg} {
        background-size: 320px;
    }
`

export const CardTag = styled.span`
    background-color: ${color.alert};
    width: fit-content;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(20px);
    color: #fff;
    padding: 4px 8px 4px 18px;
    border-radius: 24px 4px 4px 4px;
`

export const CardTitle = styled.div`
    padding: 20px 0;
    border-radius: 0 0 10px 10px;
    text-align: center;

    h2 {
        font-size: 20px;
        font-weight: 400;
    }
`