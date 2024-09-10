import styled from "styled-components";
import { color } from "../../styles/colors";

export const Card = styled.li`
    max-width: 300px;
    width: 100%;
    min-width: 100px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    background-color: #fff;
    transition: all .3s ease;

    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }

    &:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    }
`

export const CardTag = styled.span`
    background-color: ${color.alert};
    width: fit-content;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-20px, 20px);
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
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