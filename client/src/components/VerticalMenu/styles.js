import styled from "styled-components";

export const VerticalMenu = styled.aside `

    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 205px;
    background-color: ${props => props.theme.body};
    height: 100%;

`;

export const NavLogo = styled.div `

    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    height: 55px;
    gap: 1.3rem;
    font-size: .75rem;
    text-transform: uppercase;
    color: var(--secundary-color);

    img {
        line-height: 0;
        width: 28px;
        height: 28px;
    }

`;

export const NavDivider = styled.div `

    width: 100%;
    height: 1px;
    background-color: #c3c3c341;

`;

export const JustifySpacebetween = styled.div `

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;

`;

export const NavContainer = styled.div `

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0.6rem 1rem;

`;

export const NavSection = styled.div ``;

export const NavHeader = styled.p `

    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.7rem;
    margin: 0 !important;
    padding: .8rem 0;
    color: var(--secundary-color);

`;

export const NavMenu = styled.div `

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;

`;

export const NavItem = styled.div `

    button {
        width: 100%;
        padding: .3rem .8rem;
        display: flex;
        align-items: center;
        gap: .8rem;
        border-radius: 4px;
        font-size: .8rem;
        color: ${props => props.status ? "var(--primary-color)" : "var(--secundary-color)"};
        background-color: ${props => props.status ? "var(--primary-color-opacity)" : "transparent" };
    }

    button > i {
        color: ${props => props.status ? "var(--primary-color)" : "var(--secundary-color)" };
        font-size: 22px;
    }

`;

export const NavUser = styled.div `

    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .7rem 1rem;
    gap: 1rem;
    font-size: .8rem;

    img {
        width: 32px;
        height: 32px;
    }

`;

export const UserDetails = styled.div `

    display: flex;
    flex-direction: column;
    color: var(--secundary-color);

    p {margin: 0 !important;};
    p:last-child {color: var(--primary-color)};
`;