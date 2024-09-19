import styled from "styled-components";
import { screen } from "../../styles/screens";
import { color } from "../../styles/colors";

export const Nav = styled.nav`
    text-align: center;
    background-color: #fff;

    @media (max-width: ${screen.mobile}) {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 1px solid ${color.lightLine};
        z-index: 10;
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

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            
                .external-link {
                height: 18px;
                margin-left: 8px;
            }
        }
    }

    .highlight {
        font-weight: bold;
    }

    @media (max-width: ${screen.mobile}) {
        justify-content: left;
    }
`