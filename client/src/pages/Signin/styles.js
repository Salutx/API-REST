import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;
    background-color: white;

`;

export const Border = styled.div `

    padding: 2rem 1rem;
    border-radius: 16px;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;

    img {
        width: 64px;
        height: 64px;
        margin-bottom: .5rem;
    }

`;

export const Content = styled.div`
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: white;
    max-width: 400px;
    padding: 1.3rem;
    border-radius: 6px;
    position: relative;
`;

export const FormHeader = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
`;

export const Apresentation = styled.p `
    font-size: .8rem;
    font-family: Inter;
    font-weight: bold;
    color: #9C9C9C;
`;

export const Highlight = styled.p `
    color: var(--primary-color);
`;

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;

export const Title = styled.h1 `
    font-size: 1.8rem;
    font-weight: 500;
    color: #426C64;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
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