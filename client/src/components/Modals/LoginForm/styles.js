import styled, { createGlobalStyle } from "styled-components";
import { device } from "../../@media-query";

export default createGlobalStyle `
    .alertcontainer {
        width: 500px;
    }
`;

export const LoginContainer = styled.div `

    position: fixed;
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    gap: 3rem;

    animation-name: opacity-animation;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;

    @keyframes opacity-animation{
        0% {opacity: 0%;}
        100% {opacity: 100%;}
    }

    z-index: 150;
    backdrop-filter: blur(4px);

`;

export const LoginBody = styled.div `

    background: #1C1D22;
    max-width: 955px;
    width: 100%;
    border-radius: 16px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    transition: all .2s;

    @media ${device.tablet} {border-radius: 0;}

    @keyframes blink {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

`;

export const LoginHeader = styled.div `

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    button {
        background-color: transparent;
        font-size: 24px;
        color: white;
        display: flex;
    }

    button:hover {
        background-color: transparent; 
        color: var(--primary-color);
    }
`;

export const LoginMain = styled.div `
    display: flex;
    gap: 2.7rem;
    align-items: center;

    > h1 {
        font-size: 1rem;
        color: white;
        position: relative;
    }

    > h1::before {
        content: '';
        width: 1px;
        height: 120px;
        background-color: #9799B0;
        position: absolute;
        left: 50%;
        top: -130px;
    }

    > h1::after {
        content: '';
        width: 1px;
        height: 120px;
        background-color: #9799B0;
        position: absolute;
        left: 50%;
        bottom: -130px;
    }

    @media ${device.tablet} {
        flex-direction: column;
        > h1{
            display: flex;
            gap: 1rem;
        }

        > h1::before {
            content: ' ';
            height: 1px;
            width: 120px;
            background-color: #9799B0;
            position: absolute;
            top: 50%;
            left: -150px;
            right: 0;
        }

        > h1::after {
            content: ' ';
            height: 1px;
            width: 120px;
            background-color: #9799B0;
            position: absolute;
            top: 50%;
            left: 50px;
        }
    }

`;

export const LoginDivider = styled.h1 ``;

export const LoginSupport = styled.div `

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h1 {
        font-size: 24px;
        line-height: 40px;
        color: white;
    }

    h1 span {
        color: var(--primary-color);
    }

    @media ${device.tablet} {
        align-items: center;
        text-align: center
    }

`;

export const SupportButton = styled.button `
    padding: .6rem;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    background-color: transparent;
    border: 2px solid var(--primary-color);
    border-radius: 4px;
    transition: all .2s linear;
    width: 80%;

    :hover {
        background-color: var(--primary-color);
    }
`;

export const Content = styled.div`
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    border-radius: 6px;
    position: relative;

    h1 {
        color: white;
        font-size: 1.5rem;
    }

    h1 span {
        color: var(--primary-color);
    }

    button {
        background-color: ${props => props.confirmation ? "#ef6e6e" : "var(--primary-color)"};
        margin-top: 1rem;

        :hover {
            background-color: ${props => props.confirmation ? "#ef6e6e" : "var(--primary-color-dark)"};
        }
    }
`;

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;

export const LabelError = styled.label `
    text-align: center;
    font-size: 13px;
    color: var(--secundary-color);
`;
