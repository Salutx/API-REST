import styled from "styled-components";

export const FormItem = styled.div `

    position: relative;
    width: 100%;

    :focus-within input {
        border: 1px solid var(--primary-color);
    }

    :focus-within label {
        color: var(--primary-color);
    }

`;

export const Input = styled.input `

    outline: none;
    padding: 1.6rem 1.3rem .5rem 1rem;
    width: 100%;
    border-radius: 6px;
    border: 1px solid #424242;
    font-size: .8rem;
    color: white;

    background-color: #1C1D22;

    ::placeholder {
        font-size: .8rem;
        color: #a0a6ac;
    }
`;

export const Label = styled.label `
    
    position: absolute;
    color: #6C757D;
    font-size: .6rem;
    font-weight: 600;
    top: .6rem;
    left: 1.05rem;

`;