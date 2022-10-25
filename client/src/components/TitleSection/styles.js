import styled from "styled-components";

export const TitleHeader = styled.div `

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const Title = styled.div `

    display: flex;
    align-items: center;
    gap: .8rem;
    font-weight: 500;
    color: ${props => props.theme.title};

    i {
        background-color: var(--primary-color);
        color: white;
        padding: .3rem .4rem;
        font-size: 22px;
        border-radius: 4px;
    }

`;

export const Link = styled.a `

    display: flex;
    align-items: center;
    font-size: .9rem;
    cursor: pointer;
    color: var(--secundary-color);

    i {
        font-size: 1.3rem;
        color: var(--primary-color);
    }

`;