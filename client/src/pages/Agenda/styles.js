import styled from "styled-components";

export const SectionContent = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 0.5rem;
`;

export const SectionHeader = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 0px;
    gap: 10px;
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

export const Week = styled.div `
    display: flex;
    width: 100%;
    gap: .5rem;

    > p {
        width: calc(100% * (1/6));
        color: ${props => props.theme.paragraph};
        font-size: 0.8rem;
    }
    
`;

export const DaysContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: .5rem;
    overflow-y: auto;
`;

export const Day = styled.div `
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 24px;
    width: calc(100% * (1/6));
    width: calc(100% * (1/8));
    align-self: stretch;
    border-radius: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: white;
    border: 1px solid transparent;

    ${props => props.status === "inactive" ?  `${props.theme.inactive}` : null}
    ${props => props.status === "unmarked" ? `${props.theme.unmarked}` : null}
    ${props => props.status === "marked" ? `${props.theme.marked}` : null}
`;