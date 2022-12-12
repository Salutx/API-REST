import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle `

`;

export const SectionContent = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .3rem;
    height: 100%;
`;

export const SectionHeader = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .5rem 0px;
    gap: 10px;
`;

export const SectionParagraph = styled.p `
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: ${props => props.theme.paragraph};
    font-size: .8rem;
    font-weight: 400 !important;

    i {
        color: yellow;
    }
`;

export const SectionTitle = styled.h1 `
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    color: ${props => props.theme.title};
`;

export const SectionButtons = styled.div `
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const ButtonIcon = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px;
    gap: 16px;

    width: 40px;
    height: 40px;
    color: var(--primary-color);

    transition: color .1s;
    transition: background .2s;

    background: rgba(0, 205, 180, 0.1);
    border-radius: 32px;
    cursor: pointer;
    font-size: 1rem;

    :hover {
        background-color: var(--primary-color);
        color: white !important;
    }
`;

export const BoletimContainer = styled.div `

`;

export const Table = styled.div `
    width: 100%;
    display: table;
`;

export const TableHeader = styled.div `
    display: table-header-group;
    background-color: ${props => props.theme.card};
    font-weight: bold;
`;

export const TableHeaderCell = styled.div `
    display: table-cell;
    padding: .8rem 1rem;
    font-size: .7rem;
    color: ${props => props.theme.title};
    border-bottom: ${props => props.theme.border};
`;

export const TableBody = styled.div `
    display: table-row-group;
`;

export const TableRow = styled.div `
    display: table-row;
`;

export const TableBodyCell = styled.div `
    display: table-cell;
    font-size: .8rem;
    color: ${props => props.theme.paragraph};
    padding: .7rem 1rem;
    border-bottom: ${props => props.theme.border};
`;