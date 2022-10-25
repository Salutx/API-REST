import styled from "styled-components";

export const Button = styled.button `

    position: relative;
    padding: 16px 20px;
    outline: none;
    border: none;
    border-radius: 6px;
    width: 100%;
    cursor: pointer;
    background-color: var(--primary-color);
    color: white;
    font-weight: 600;
    font-size: .8rem;
    transition: all .5s;

    :hover {
        background-color: var(--primary-color-dark);
    }
`