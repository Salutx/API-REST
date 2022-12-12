import styled from "styled-components";

export const ThemeSwitch = styled.button `
    display: flex;
    align-items: center;
    background-color: transparent;
    font-size: 18px;
    color: ${props => props.theme.title};

    :hover {background-color: transparent; color: var(--primary-color)}
`;