import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --primary-color: #00CDB4;
        --primary-color-dark: #426C64;
        --primary-color-opacity: #00cdb51e;
        --title-color: #426C64;
        --secundary-color: #9799B0;
        --dark-color: #0F1923;
        --lightred: #FB6483;
        scrollbar-width: auto;
        scrollbar-color: var(--primary-color) #ffffff;
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
  
    ::-webkit-scrollbar-thumb {
        background: var(--primary-color);
        border-radius: 25px;
    }
  
    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {-webkit-appearance: none;}
    input[type=number] {-moz-appearance: textfield;}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins;
        list-style: none;
        text-decoration: none;
        transition: all 0.3s;
    }

    body {
        width: 100%;
        min-height: 100vh;
        overflow: overlay;
    }

    a, button {
        transition: all .3s;
        cursor: pointer;
    }

    button:hover { background-color: var(--primary-color-dark); color: white }

    button {outline: none; border: none; }

    input:focus { border:none; outline: none;  }

`;

export const TestLoader = styled.div `
    position: relative;
`;

export const Content = styled.div `

    display: flex;
    width: 100%;
    height: 100vh;
    transition: all .25s linear;
    background-color: ${props => props.theme.background};
    position: relative;

`;

export const Main = styled.main `

    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.background};
    padding: 24px 24px 24px 24px;

`;

export const Section = styled.section `

    width: 100%;
    height: 100%;
    background: transparent;
`;
