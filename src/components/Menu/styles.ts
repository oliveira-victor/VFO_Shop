import styled from "styled-components";
import { screen } from "../../styles/screens";
import { color } from "../../styles/colors";

export const Nav = styled.nav`
    text-align: center;

    @media (max-width: ${screen.mobile}) {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 1px solid ${color.lightLine};
    }
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