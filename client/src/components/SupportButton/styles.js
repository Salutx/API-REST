import styled from "styled-components";

export const Button = styled.button `
    padding: .6rem;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    background-color: transparent;
    border: 2px solid var(--primary-color);
    border-radius: 4px;
    transition: all .2s linear;

    :hover {
        background-color: var(--primary-color);
    }
`;