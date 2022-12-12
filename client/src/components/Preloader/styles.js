import styled from "styled-components";

export const LoaderContainer = styled.div `
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 900;
    background-color:  ${props => props.theme.background};
`;

export const Loader = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--primary-color) !important;
    z-index: 999;
    gap: 1rem;

    > h1 {
        text-transform: uppercase;
        font-size: 12px;
        color: ${props => props.theme.title};
    }
`;