import styled from "styled-components";

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

export const Strong = styled.strong `

    cursor: pointer;

    a {
        text-decoration: none;
        color: #676767;
    }

`;