import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle `

    body {
        background-color: #F3F2F7;
    }

    input {
        outline: none;
        padding: 1.6rem 1.3rem .5rem 1.3rem;
        width: 100%;
        border-radius: 6px;
        font-size: .8rem !important;
    
        background-color: #F1F6F8;
        border: none;
    }
    
    input::placeholder {
        font-size: .8rem;
        color: #a0a6ac;
    }
    
    .form-label {
        position: absolute;
        color: #6C757D;
        font-size: .7rem;
        font-weight: 600;
        top: .5rem;
        left: 1.3rem;
    }
    
    .form-item {
        position: relative;
        width: 100%;
    }

`;

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 100vh;
    background-color: white;
`;

export const Cadastro = styled.form `

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    max-width: 600px;

`;

export const Content = styled.div`

    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 6px;
    width: 100%;
`;

export const Main = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;

`;

export const Label = styled.label `

    font-size: 18px;
    font-weight: bold;
    color: #676767;

`;

export const LabelError = styled.label `

    font-size: 14px;
    color: red;

`;

export const LabelSuccess = styled.label `

    font-size: 14px;
    color: green !important;

`;

export const Strong = styled.strong `

    cursor: pointer;

    a {
        text-decoration: none;
        color: #676767;
    }

`;