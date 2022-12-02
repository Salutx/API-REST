import styled from "styled-components";

export const Button = styled.button `

    position: relative;
    padding: 16px 20px;
    outline: none;
    border: none;
    border-radius: 6px;
    width: 100%;
    height: 48px;
    cursor: pointer;
    background-color: var(--primary-color);
    color: white;
    font-weight: 600;
    font-size: .8rem;
    transition: all .5s;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background-color: var(--primary-color-dark);
    }

`