import styled from "styled-components";
import { device } from "../../../components/@media-query";

export const LoginContainer = styled.div `

position: fixed;
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);

    z-index: 150;
    transition: all .2s linear;
    backdrop-filter: blur(4px);

`;

export const LoginBody = styled.div `

    background: ${props => props.theme.background};
    border-radius: 16px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media ${device.tablet} {border-radius: 0;}

`;

export const LoginHeader = styled.div `

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    button {
        background-color: transparent;
        font-size: 24px;
        color: ${props => props.theme.title};
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
    width: 100%;

    > h1 {
        font-size: 1rem;
        color: ${props => props.theme.title};
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
        color: ${props => props.theme.title};
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
    color: ${props => props.theme.title};
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
    height: 100%;
    flex-direction: column;
    border-radius: 6px;
    position: relative;
    
    :first-child {
        max-width: 430px;
    }

    h1 {
        color: ${props => props.theme.title};
        font-size: 1.5rem;
    }

    h1 span {
        color: var(--primary-color);
    }
`;

export const Line = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;

export const LabelError = styled.label `
    font-size: 14px;
    color: red;
`;

