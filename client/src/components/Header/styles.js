import styled from "styled-components";

export const Header = styled.header `

    height: 52px;
    background-color: ${props => props.theme.body};

`

export const Container = styled.div `

    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;

`;

export const Navbar = styled.div `

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    
`;

export const Breadcrumb = styled.div `

    display: flex;
    align-items: center;
    gap: .3rem;
    font-size: .8rem;
    color: var(--secundary-color);
    flex: 0 0 25%;

    p:last-child {color: var(--primary-color);}

`;

export const SearchContainer = styled.div `

    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 0 0 60%;

`;

export const NavbarSearch = styled.div `

    display: flex;
    align-items: center;
    background-color: ${props => props.theme.background};
    padding: .4rem;
    border-radius: 4px;
    overflow: hidden;
    gap: .5rem;
    color: var(--secundary-color);

    a {
        padding: 0 .2rem;
        cursor: pointer;
        display: flex;
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

`;

export const NavbarTools = styled.div `

    display: flex;
    align-items: center;
    gap: .8rem;
    color: var(--secundary-color);

    button {
        all: unset;
        cursor: pointer; 
        font-size: 16px;
        display: flex;
        align-items: center
    }

`;

export const NavbarLogout = styled.div `

    flex: 0 0 0;

    button {
        font-size: .8rem;
        display: flex;
        align-items: center;
        gap: .3rem;
        border: none;
        background-color: transparent;
        color: var(--secundary-color);
    }

`;