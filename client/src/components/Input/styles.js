import styled from "styled-components";

export const Input = styled.input `

    outline: none;
    padding: 1.6rem 1.3rem .5rem 1.3rem;
    width: 100%;
    border-radius: 6px;
    border: ${props => props.theme.border};
    font-size: .8rem;
    color: ${props => props.theme.title};

    background-color: ${props => props.theme.background};

    ::placeholder {
        font-size: .8rem;
        color: #a0a6ac;
    }

    :focus {
        border: ${props => props.theme.border};
    }
`;

export const Label = styled.label `
    
    position: absolute;
    color: #6C757D;
    font-size: .7rem;
    font-weight: 600;
    top: .5rem;
    left: 1.3rem;

`;

export const FormItem = styled.div `

    position: relative;
    width: 100%;

`;