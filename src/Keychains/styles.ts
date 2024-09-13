import styled from "styled-components";

export const KeysContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const MainImage = styled.div`
    background-color: blue;
    max-width: 48%;
    width: 100%;

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
    background-color: green;
    max-width: 48%;
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    list-style: none;

    img {
        max-width: 120px;
        width: 100%;
        height: 180px;
        object-fit: cover;
    }
`
