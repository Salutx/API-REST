import styled from "styled-components";

export const Header = styled.header `

    h1 {
        font-size: 1rem;
        color: white;
    }

`;

export const Container = styled.div `
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
`;

export const Navbar = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0rem;

    @media (max-width: 524px) { 
        > div:nth-child(2) {
            display: none
        }
    }
`;

export const NavbarBrand = styled.div `
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
        display: flex; 
        gap: .2rem; 
        text-transform: uppercase; 
        color: white;
    }

    span > * {font-size: 16px;}

    img {
        width: 35px;
        height: 35px;
    }
`;

export const NavbarNav = styled.div `
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;