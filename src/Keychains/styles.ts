import styled from "styled-components";
import { color } from "../styles/colors";

export const KeysContainer = styled.div`
    gap: 20px;
    display: grid;
    grid-template-columns: 680px auto ;

    @media (max-width: 1030px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

export const MainImage = styled.div`

    .display-img {
        max-width: 680px;
        width: 100%;
        max-height: 510px;
        object-fit: cover;
        margin: 0 auto;
        display: block;
    }
`

export const KeysList = styled.ul`
    max-height: 510px;
    overflow-y: auto;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;

    li {
        height: fit-content;

        img {
            width: 100px;
            height: 150px;
            object-fit: cover;
            border: 6px solid #fff;
            border-radius: 6px;
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
            transition: all.3s ease;

            &:hover {
                border: 6px solid ${color.active};
                transform: translateY(-4px);
            }
        }
    }

    @media (max-width: 767px) {
        flex-wrap: nowrap;
        overflow-x: auto;
    }
`
