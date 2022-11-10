import styled from "styled-components";

export const GridLayout = styled.div `

    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 403px 0.7fr; 
    grid-template-rows: 0.9fr 1.1fr 1fr; 
    gap: 24px 24px; 
    grid-template-areas: 
        "welcome-area welcome-area welcome-area"
        "tarefas-area tarefas-area info-area"
        "frequency-area frequency-area support-area";

    .section {
        background-color: ${props => props.theme.card};
        border-radius: 4px;
        padding: 2rem;
        gap: 1rem;
    }

    @media (max-width: 1378px) {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr; 
        display: grid; 
        grid-template-areas: 
        "welcome-area welcome-area"
        "tarefas-area tarefas-area",
        "frequency-area frequency-area",
        "info-area support-area"
    }

`;

