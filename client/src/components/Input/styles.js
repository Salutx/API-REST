import styled from "styled-components";

export const Input = styled.input `

    outline: none;
    padding: 1.6rem 1.3rem .5rem 1.3rem;
    width: 100%;
    border-radius: 6px;
    font-size: .8rem;

    background-color: #F1F6F8;
    border: none;

    ::placeholder {
        font-size: .8rem;
        color: #a0a6ac;
    }
`;

export const Label = styled.label `
    
    position: absolute;
    color: #6C757D;
    font-size: .7rem;
    font-weight: 600;
    top: .7rem;
    left: 1.3rem;

`;

export const FormItem = styled.div `

    position: relative;
    width: 100%;

`;