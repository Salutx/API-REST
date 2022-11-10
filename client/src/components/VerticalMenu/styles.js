import styled from "styled-components";

export const VerticalMenu = styled.aside `

    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 280px;
    background-color: ${props => props.theme.body};
    height: 100%;
    padding: 24px;
    gap: 1.5rem;
    border-radius: 0px 8px 8px 0px;

`;

export const NavLogo = styled.div `

    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 14px;
    text-transform: uppercase;
    color: white;

    img {
        line-height: 0;
        width: 26px;
        height: 26px;
    }

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

`;

export const NavSection = styled.div ``;

export const NavHeader = styled.p `

    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.7rem;
    margin: 0 !important;
    padding: .8rem 0;
    color: white;

`;

export const NavMenu = styled.div `

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .3rem;

`;

export const NavItem = styled.div `

    border-radius: 4px;
    overflow: hidden;

    button {
        width: 100%;
        padding: 8px 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: .8rem;
        color: ${props => props.status ? "var(--primary-color)" : "var(--secundary-color)"};
        background-color: ${props => props.status ? "var(--primary-color-opacity)" : "transparent" };
    }

    button > i {
        color: ${props => props.status ? "var(--primary-color)" : "var(--secundary-color)" };
        font-size: 22px;
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :hover > button {
        background-color: var(--primary-color-opacity);
        color: white;
    }

    :hover > button, :hover > button > i {color: white !important;}

`;

export const NavUser = styled.div `

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .7rem;
    font-size: .8rem;
    background-color: var(--primary-color-opacity);
    padding: 10px 14px;
    border-radius: 4px;

    img {
        width: 38px;
        height: 38px;
        border-radius: 32px;
        background-color: white;
        border: 1px solid white;
    }

`;

export const NavUserLeft = styled.div `

    display: flex;
    align-items: center;
    gap: .7rem;

`;

export const NavUserRight = styled.div `
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--lightred);
    padding: 0 0.5rem;
    border-radius: 2px;

    i {font-size: 16px;}
    :hover {background-color: rgba(251, 100, 131, 0.2);}
`;


export const UserDetails = styled.div `

    display: flex;
    flex-direction: column;
    color: white;
    font-size: 11px;
    font-weight: bold;

    p {margin: 0 !important;};
    p:last-child {color: var(--primary-color); font-weight: lighter;};
`;