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
    color: var(--primary-color) !important;
    z-index: 999;
`;