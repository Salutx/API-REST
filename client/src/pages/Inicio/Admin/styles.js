import styled from "styled-components";

export const Main = styled.main `
    width: 100%;
    min-height: 100vh;
    padding-top: 4rem;
    background-color: ${props => props.theme.background};
`;

export const Badge = styled.h1 `
    background-color: #F1D22E;
    font-size: 12px !important;
    color: ${props => props.theme.background} !important;
    border-radius: 8px;
    padding: .1rem 1.3rem;
`;

export const Hint = styled.div `
    background-color: var(--primary-color);
    border-radius: 8px;
    width: 100%;
    padding: .5rem 1.3rem;
    
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: white;

    i {font-size: 24px;}
    h1 {font-size: 16px;}
`;

export const Tools = styled.section `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
        padding: 3rem 0;
        font-weight: 700;
        font-size: 36px;
        line-height: 54px;
        color: ${props => props.theme.title};
    }
`;

export const ToolsContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transition: all .5s;
    width: 100%;
    gap: 1rem;
`;

export const ToolsItem = styled.div `
    background-color: ${props => props.theme.card};
    width: 330px;
    height: 350px;
    border-radius: 16px;
    text-align: center;
    padding: 2rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;;
`;

export const ToolsContent = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ToolsHeader = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const ToolsIcon = styled.div `

    width: 64px;
    height: 64px;
    border-radius: 64px;
    background-color: ${props => props.theme.iconBackground};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 24px;
    color: var(--primary-color);

`;

export const ToolsBody = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .3rem;

    h1 {
        color: ${props => props.theme.title};
        font-weight: 700;
        font-size: 16px;
        line-height: 30px;
        text-transform: uppercase;
    }

    p {
        color: ${props => props.theme.paragraph};
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        width: 90%;
    }

`;

export const ToolsButtons = styled.div `
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 100%;

    button:nth-child(2) {
        background-color: var(--primary-color) !important;
    }
`;

export const btnTools = styled.button `

    background-color: transparent;
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    width: 100%;
    padding: .6rem;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    color: ${props => props.theme.title};

    :hover {background-color: var(--primary-color);}
`;

export const Footer = styled.footer `
    width: 100%;
    color: ${props => props.theme.title};
    font-size: .8rem;
    padding: 5rem 0;
    position: absolute;
    text-decoration: underline;
    text-align: center;

    p {cursor: pointer}
    p:hover {color: var(--primary-color);}
`;