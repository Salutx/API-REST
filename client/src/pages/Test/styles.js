import styled from 'styled-components';
import backgroundImage from '../../assets/images/background.svg'

export const Main = styled.main `
    width: 100%;
    min-height: 100vh;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    position: relative;
`;

export const Container = styled.div `
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const MainContainer = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Header = styled.header `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
`;

export const Brand = styled.div `
    color: white;
    font-size: 16px;
    text-transform: uppercase;

    span {font-weight: bold}
`;

export const BtnCall = styled.button `
    border-radius: 4px;
    border: solid 1px white;
    background-color: transparent;
    padding: .6rem 1.5rem .6rem 2rem;
    font-size: 12px;
    color: white;
    font-weight: bold;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 1rem;

    i {font-size: 14px;}

    :hover {
        background-color: white;
        background-clip: initial;
        box-shadow: initial;
        color: black;
    }
`;

export const Hero = styled.div `
    width: 100%;
    height: calc(80vh - 80px);
    margin: 0 auto;

    display: flex;
    align-items: center;
    color: white;

    gap: 4rem;

    > div:first-child {width: 40%;}
    > div:last-child {width: 60%;}
`;

export const HeroCTA = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const CTAHeader = styled.div `
    font-size: 1.2em;
    line-height: 50.4px;

    p {
        color: white;
        font-size: 12px;
    }
`;

export const CTAContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const CTABody = styled.div `
    font-size: 16px;
    line-height: 28px;
    color: rgb(226, 226, 226);
`;

export const CTAButtons = styled.div `
    display: flex;
    align-items: center;
    gap: 4rem;
 
    .active {
        background-color: white;
        color: black;
    }
`;

export const BtnSupport = styled.div `
    color: white;
    background-color: transparent;
    font-size: 12px;
    cursor: pointer;

    :hover {background-color: transparent;}
`;

export const HeroImage = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    img {
        position: absolute;
        transform: translatey(0);
        transform: scale(1.2);
    }
`;