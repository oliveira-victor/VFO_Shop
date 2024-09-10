import styled from "styled-components";
import { screen } from "../../styles/screens";

export const Nav = styled.nav`
    text-align: center;
`

export const MenuList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: nowrap;
    overflow-x: auto;
    list-style: none;
    padding: 10px 20px;

    li {
        white-space: nowrap;
    }

    @media (max-width: ${screen.mobile}) {
        justify-content: left;
    }
`