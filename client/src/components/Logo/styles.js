import styled from "styled-components";

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