import styled, { createGlobalStyle } from "styled-components";
import { device } from "../../components/@media-query";

export default createGlobalStyle `
    body {
        width: 100% !important;
        min-height: 100vh;
        background: linear-gradient(156deg, rgba(44,62,80,1) 0%, rgba(12,21,30,1) 31%);
    }

    .card {
        border-radius: 16px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 750px;
    }

    .card-black {
        /* From https://css.glass */
        background: rgba(29, 42, 56, 0.4);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.2px);
        -webkit-backdrop-filter: blur(5.2px);
        border: 1px solid rgba(29, 42, 56, 0.5);
    }

    @media ${device.laptopL} { 
        .card {
            justify-content: flex-start;
        }
    }

    @media (max-width: 524px) { 
        br {
            content: " ";
        }

        br:after {
            content: " ";;
        }
    }
`;

export const Main = styled.main `
    position: relative;
    transition: all .2s linear;
`;

export const LoginButton = styled.button `
    padding: .6rem 3.5rem;
    background-color: var(--primary-color);
    border-radius: 4px;
    color: white;
    font-weight: bold;
    font-size: 13px;
    box-shadow: 0px 4px 25px rgba(0, 205, 180, 0.3);
`;

// MAIN

export const Hero = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    min-height: 415px;

    @media (max-width: 524px) { 
        gap: 2rem;
        min-height: 500px;
    }
`;

export const HeroDisplay = styled.p `
    font-size: 4rem;
    line-height: 60px;
    text-align: center;
    color: white;

    @media (max-width: 524px) { 
        font-size: 2.7rem;;
        line-height: 45px;
    }
`;

export const HeroCall = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    color: white;
    text-align: center;

    @media (max-width: 524px) { 
        gap: 1rem;
    }
`;

export const HeroButtons = styled.div `
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
        width: 250px;
        padding: .6rem 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        gap: .5rem;
        font-weight: bold;
        font-size: 13px;
    }

    button:nth-child(1) {
        border-radius: 32px 32px 0px 32px;
        background-color: var(--primary-color);
        color: white;
    }

    button:nth-child(2) {
        border-radius: 32px 32px 32px 0px;
        background-color: white;
        color: var(--primary-color);
    }

    @media (max-width: 524px) { 
        flex-direction: column;
        gap: .8rem;

        button {
            border-radius: 32px !important;
            padding: .6rem 2.5rem;
        }
    }
`;

// About & Benefits

export const About = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    img {
        z-index: 99; 
        box-shadow: 0px 16px 50px 5px rgba(0, 205, 180, 0.2);
    }

    @media (max-width: 958px) { 
        flex-direction: column;

        img {
            width: 100%;
            height: auto;
        }
    }
`;

export const Benefits = styled.div `
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media (max-width: 958px) { 
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2.8rem;
    }

    @media ${device.tablet} { 
        flex-direction: column;
        gap: 2.8rem;
    }
`;

export const BenefitsItem = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    position: relative;

    @media (max-width: 958px) { 
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
    }
`;

export const BenefitsTitle = styled.h1 `
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    z-index: 99;
`;

export const BenefitsContent = styled.h1 `
    color: white;
    font-size: .9rem;
    font-weight: 400;
    line-height: 25px;
    white-space: nowrap;

    @media (max-width: 958px) { 
        text-align: center
    }
`;

export const BenefitsRetangle = styled.div `
    height: 45px;
    width: 310px;
    left: -5rem;
    top: -.7rem;
    border-radius: 0px 32px 32px 0px;
    background-color: var(--primary-color);
    position: absolute;

    .secundary {width: 280px !important;}

    @media (max-width: 958px) { 
        align-items: center;
        justify-content: center;
        left: auto;
        box-shadow: 0px 16px 50px 5px rgba(0, 205, 180, 0.2);
        border-radius: 32px;
    }
`;

// Arrow

export const Arrow = styled.div `
    width: 100%;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;
    font-size: 2rem;
`;

// Section

export const Section = styled.section `
    border-radius: 32px 32px 0px 0px;
    padding: 1.5rem;

    > div {padding: 0}
`;

export const SectionContainer = styled.div `
    width: 100%;
`;

// Grid Layout

export const GridLayout = styled.div `
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 400px 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 1.5rem; 
    grid-template-areas: 
    "strategic-concepts support functions-services"
    "security-practices support functions-services"
    "counter counter counter";
    justify-items: center;

    @media ${device.laptopL} { 

        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr auto;
        justify-items: center;
        width: 100%;

        grid-template-areas: 
        "strategic-concepts functions-services"
        "security-practices functions-services"
        "support counter"; 

        transition: all ease-in-out 0.25s;
    }

    @media ${device.tablet} { 

        display: flex;
        flex-direction: column;

    }
`;

// Layouts Areas

export const SupportArea = styled.div `
    grid-area: support; 
    color: white;
    justify-content: center;

    @media ${device.laptopL} {
        background: var(--dark-color);
        width: 100%;
    }
`;

// Support

export const SupportHeader = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: .8rem;

    h1 {
        font-weight: 400;
        font-size: 2rem;
        line-height: 45px;
    }

    @media ${device.laptopL} { 
        h1 {
            font-size: 20px;
            line-height: 30px;
            width: 100%;
        }
    }
`;

export const CardTag = styled.div `
    display: flex;
    padding: .5rem 1.5rem;
    background-color: var(--primary-color);
    border-radius: 32px;
    font-weight: 700;
    font-size: 11px;
    line-height: 10px;
    color: white;
`;

// Counter

export const SectionCounter = styled.div `
    grid-area: counter; 
    width: 100%;
    height: 100%;

    button {display: none;}

    @media ${device.laptopL} { 
        background-color: rgba(29, 42, 56, 0.5);

        button {display: block}
    }
`;

export const CounterMain = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    margin-bottom: .8rem;
    color: white;

    div:nth-child(1) {display: none;}

    h1 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 45px;
    }

    @media ${device.laptopL} { 

        text-align: left;
        align-items: flex-start;

        h1 {
            font-size: 20px;
            line-height: 30px;
            width: 90%;
        }
        > div:nth-child(1) {display: block;}
    }

`;

export const StrategicArea = styled.div `
    grid-area: strategic-concepts;
`;

export const SecurityArea = styled.div `
    grid-area: security-practices;
`;

export const FunctionsArea = styled.div `
    grid-area: functions-services;
`;

// Card

export const CardHeader = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    h1 {
        font-size: 22px;
        color: white;
    }
`;

export const CardIcon = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 64px;
    background: rgba(12,21,30,1);
    color: var(--primary-color);
    font-size: 22px;
`;

export const CardBody = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CardItem = styled.div `
    display: flex; 
    gap: 1rem;
`;

//  Card Body

export const BodyIcon = styled.div `
    padding: .2rem 0;
    display: flex;
    font-size: 18px;
    color: white;
`;

export const BodyContent = styled.div `
    display: flex;
    flex-direction: column;
    gap: .3rem;
    padding: .05rem 0;

    h1 {
        font-size: 16px;
        color: white;
        font-weight: bold;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #CBCBCB;
        width: 90%;
    }

    @media (max-width: 524px) { 
        p {width: 100%}
    }
    
`;

// Footer

export const Footer = styled.footer `
    padding: 2rem 0; 
    font-size: .8rem;
    color: white;
`;

export const FooterContainer = styled.div `
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    
    @media (max-width: 524px) { 
        flex-direction: column;
        gap: .5rem;
    }

`;


export const FooterCreated = styled.div `
    display: flex;
    align-items: center;
    gap: .3rem;

    i {color: red;}
`;

export const FooterCopyright = styled.div ``;