import styled from "styled-components";

export const VerticalMenu = styled.aside `

    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 280px;
    background-color: #1C1D22;
    height: 100%;
    border-right: 1px solid #2F3037;

`;

export const NavLogo = styled.div `

    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 14px;
    text-transform: uppercase;
    color: white;
    padding: 2rem;

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

export const NavSection = styled.div `
`;

export const NavHeader = styled.p `

    font-weight: 500;
    font-size: 0.7rem;
    margin: 0 !important;
    color: #636270;
    padding: .8rem 2rem;

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
    padding: 0 2rem;
    border-left: ${props => props.status ? "1px solid var(--primary-color)" : "1px solid transparent"};

    button {
        width: 100%;
        padding: 8px 0;
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: .8rem;
        color: ${props => props.status ? "white" : "#636270"};
        background-color: transparent;
        font-weight: 500;
    }

    button > i {
        color: ${props => props.status ? "var(--primary-color)" : "#636270" };
        font-size: 22px;
        font-weight: normal;
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :hover > button {
        color: white !important;
        background-color: transparent !important;
    }

    :hover > button, :hover > button > i {color: color !important;}

`;

export const UserContainer = styled.div `
    display: flex;
    width: 100%;
    padding: 1.5rem;
`

export const NavUser = styled.div `

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: .7rem;
    font-size: .8rem;
    background-color: #14151A;
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