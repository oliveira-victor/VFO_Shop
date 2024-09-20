import styled from "styled-components";
import { color } from "../../styles/colors";
import { screen } from "../../styles/screens";

export const ContactContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-around;
    flex-wrap: wrap;

    img {
        max-width: 500px;
        width: 100%;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.7);
        border-radius: 10px;
        transition: all .3s ease;

        &:hover {
            transform: scale(1.02);
            box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.7);
        }
    }

    @media (max-width: ${screen.mobile}) {
        flex-direction: column-reverse;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 60px 20px;
    max-width: 500px;
    width: 100%;
    border-radius: 10px;

    label {
        margin-bottom: 10px;
    }

    input {
        width: 100%;
        border: none;
        height: 40px;
        margin-bottom: 20px;
        border-radius: 10px;
        padding: 4px 10px;
        font-size: 16px;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
    }

    input:focus {
        outline: 3px solid ${color.active};
    }

    textarea {
        height: 160px;
        border: none;
        border-radius: 10px;
        padding: 10px 16px;
        font-size: 16px;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
        resize: none;
    }

    textarea:focus {
        outline: 3px solid ${color.active};
    }

    button {
        background-color: ${color.active};
        color: #fff;
        margin-top: 30px;
        padding: 14px 0;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-size: 20px;
        text-transform: uppercase;
    }
`
