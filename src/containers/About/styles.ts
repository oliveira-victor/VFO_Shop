import styled from "styled-components";

export const About = styled.section`
    margin-top: 100px;
`

export const AboutDescription = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    font-size: 20px;
    padding: 0 20px;

    p {
        margin-bottom: 30px;
        line-height: 1.4;
    }

    .strongLink {
        font-weight: bold;
    }

    img {
        max-width: 500px;
        width: 100%;
        height: fit-content;
        
        @media (min-width: 1024px) {
            transform: translateY(-100px);
        }
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`
