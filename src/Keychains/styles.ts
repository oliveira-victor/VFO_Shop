import styled from "styled-components";
import { color } from "../styles/colors";

export const KeysContainer = styled.div`
    /* display: flex; */
    /* justify-content: space-between;
    flex-wrap: wrap; */
    gap: 20px;
    display: grid;
    grid-template-columns: 680px auto ;

    @media (max-width: 1030px) {
        display: block;
    }
`

export const MainImage = styled.div`
    /* max-width: 48%;
    width: 100%; */

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
    /* max-width: 48%;
    width: 100%; */
    max-height: 510px;
    overflow-y: auto;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    list-style: none;

    img {
        width: 120px;
        height: 180px;
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

    @media (max-width: 767px) {
        flex-wrap: nowrap;
        overflow-x: auto;
    }
`
