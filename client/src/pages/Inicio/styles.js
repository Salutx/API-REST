import styled from "styled-components";
import WelcomeBackground from "../../assets/images/welcome-background.svg";

export const GridLayout = styled.div `

    display: grid; 
    grid-template-columns: 1.3fr 1fr 0.7fr; 
    grid-template-rows: repeat(3, 1fr); 
    gap: 1.5rem; 
    grid-template-areas: 
      "welcome-area gadgets-area gadgets-area"
      "tasks-area tasks-area user-area"
      "teams-area teams-area user-area"; 

    .section {
        background-color: ${props => props.theme.card};
        border-radius: 4px;
        padding: 2rem;
    }

`;

export const WelcomeArea = styled.div `

    grid-area: welcome-area; 
    width: 100%;
    height: 100%;
    background-image: url(${WelcomeBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

`;

export const GadgetsArea = styled.div `

    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 1.5rem; 
    grid-template-areas: 
        ". ."; 
    grid-area: gadgets-area; 

`;

export const TasksArea = styled.div `

    grid-area: tasks-area;

`

export const UserArea = styled.div `

    grid-area: user-area;

`

export const TeamsArea = styled.div `

    grid-area: teams-area;

`

// gadgets

export const GadgetsContainer = styled.div `

    width: 100%;
    background-color: white;
    border-radius: 4px;
    display: flex;
    overflow: auto;

    :last-child div:first-child {
        background-color: #fdf5c5; 
        color: #F47111;
    }

`;

export const GadgetsIcon = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c5f6fd;
    width: 25%;
    font-size: 20px;
    color: #00B2FF;


`;

export const GadgetsMain = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
    padding: 2rem 0;
    background: ${props => props.theme.card};

    h1 {
        font-size: 1.1rem;
        color: ${props => props.theme.title};
        font-weight: 500;
    }

    .counter {
        font-size: 1.7rem;
        margin-top: .3rem;
        font-weight: 600;
        color: var(--primary-color);
    }

    .priority {
        font-size: .7rem;
        margin-top: .3rem;
        padding: .2rem 1rem;
        border-radius: 20px;
        border: 1px solid transparent;
    }

    .normal {
        background-color: var(--primary-color-opacity);
        color: var(--primary-color);
    }

`;