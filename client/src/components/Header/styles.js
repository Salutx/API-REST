import styled from "styled-components";

export const Header = styled.header ``;

export const Container = styled.div `
    height: 100%;
    margin: 0 auto;
`;

export const Navbar = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
`;

export const HeaderTitle = styled.div `

    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 12px;
    color: white;

`;

export const Breadcumb = styled.p `
    color: var(--secundary-color) !important;
    font-weight: bold;
`;

export const SearchContainer = styled.div `

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    width: 30%;

`;

export const NavbarSearch = styled.div `

    display: flex;
    align-items: center;
    background-color: #252F38;
    padding: .8rem .8rem;
    border-radius: 8px;
    gap: .5rem;
    color: var(--secundary-color);

    button {
        padding: 0 .2rem;
        cursor: pointer;
        display: flex;
        background-color: transparent;
        color: var(--secundary-color);
        font-size: 16px;
    }

    input {
        border: none;
        background-color: transparent;
        font-size: .8rem;
        width: 500px;
        color: ${props => props.theme.title};
    }

    input::placeholder {
        font-size: .7rem;
        color: var(--secundary-color);
    }

    @media (max-width: 1378px) {
        width: auto;
        input{display: none;}
        button:last-child {display: none;}
    }

`;

export const NavbarTools = styled.div `

    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: white;

    button {
        all: unset;
        cursor: pointer; 
        font-size: 16px;
        display: flex;
        align-items: center;
        background-color: transparent;
    }

    button:hover {color: var(--primary-color);}

`;