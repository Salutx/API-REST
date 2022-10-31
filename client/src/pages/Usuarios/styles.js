import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle `

    body {
        background-color: #F3F2F7;
    }

    .table {
        background-color: white;
        border-radius: 8px;
        color: var(--secundary-color);
        font-size: 0.8rem;
        width: 100%;
    }

    th, td {
        border: none;
        padding: 1rem;
    }

    th {
        color: var(--primary-color);
        font-weight: 500;
        text-align: left !important;
    }

    .table > :not(caption) > * > * {
        padding: 1rem;
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
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 1rem;

`;

export const Main = styled.main `

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;

`;

export const MainHeader = styled.div `

    h1:first-child {
        font-size: .8rem;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--secundary-color);
    }

    h1:nth-child(2) {
        font-size: 1.5rem;
        color: var(--primary-color);
    }

`;

export const MainContent = styled.div `

    display: flex;
    justify-content: space-between;
    gap: 1rem;
    overflow-x: auto;
    max-height: 560px;

`;

export const SearchContainer = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 100%;

    input {
        border: none;
        padding: .8rem 1rem;
        border-radius: 6px;
        width: 100%;
        font-size: 0.8rem;
        background-color: white;
    }

    input::placeholder {
        color: var(--secundary-color);
    }
`;

export const SearchRefresh = styled.button `

    display: flex;
    background-color: var(--primary-color);
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    padding: .6rem .9rem;

    :hover {
        background-color: var(--primary-color-dark);
    }

`;