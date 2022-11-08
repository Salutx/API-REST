import styled, {createGlobalStyle} from "styled-components";
import { device } from "../../../components/@media-query";

export default createGlobalStyle `
    .short {width: 60% !important;}

    .flex-end {
        display: flex;
        justify-content: flex-end !important;
        align-items: flex-end !important;
    }

    .enought {font-size: 13px; color: var(--secundary-color); font-weight: bold;};

    #popover-positioned-bottom {
        z-index: 200 !important;
        background-color: #ef6e6e;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        font-size: 10px;
        padding: .3rem .5rem;
        cursor: pointer;
        transition: none;
    }
`;

export const AdminUserContainer = styled.div `

    position: fixed;
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);

    z-index: 180;
    transition: all .2s linear;
    backdrop-filter: blur(4px);
    @media ${device.tablet} {position: absolute; top: 0;}

`;

export const AdminBody = styled.div `

    background: ${props => props.theme.background};
    max-width: 1200px;
    width: 100%;
    border-radius: 16px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media ${device.tablet} {border-radius: 0; padding: 2rem; height:100%}

`;

export const AdminHeader = styled.div `

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    button {
        background-color: transparent;
        font-size: 24px;
        color: ${props => props.theme.title};
        display: flex;
    }

    button:hover {
        background-color: transparent; 
        color: var(--primary-color);
    }

`;

export const AdminMain = styled.div `
    display: flex;
    gap: 2.7rem;
    align-items: center;

    > h1 {
        font-size: 1rem;
        color: ${props => props.theme.title};
        position: relative;
    }

    > h1::before {
        content: '';
        width: 1px;
        height: 120px;
        background-color: #9799B0;
        position: absolute;
        left: 50%;
        top: -130px;
    }

    > h1::after {
        content: '';
        width: 1px;
        height: 120px;
        background-color: #9799B0;
        position: absolute;
        left: 50%;
        bottom: -130px;
    }

    @media ${device.tablet} {
        flex-direction: column;
        height: 100%;
        > h1{
            display: flex;
            gap: 1rem;
        }

        > h1::before {
            content: ' ';
            height: 1px;
            width: 120px;
            background-color: #9799B0;
            position: absolute;
            top: 50%;
            left: -150px;
            right: 0;
        }

        > h1::after {
            content: ' ';
            height: 1px;
            width: 120px;
            background-color: #9799B0;
            position: absolute;
            top: 50%;
            left: 50px;
        }
    }

`;

export const Content = styled.div`
    gap: 1rem;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    border-radius: 6px;
    position: relative;
    
    :first-child {
        max-width: 430px;
    }

    h1 {
        color: ${props => props.theme.title};
        font-size: 1.5rem;
    }

    h1 span {
        color: var(--primary-color);
    }

    @media ${device.tablet} {height: 100%;}
`;

export const ContentHeader = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    color: white;
`;

export const ContentIcons = styled.div `
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 20px;

    i {cursor: pointer;}
    i:hover {color: var(--primary-color);}
`;

export const UserList = styled.div `
    display: flex;
    flex-direction: column;
    gap: .9rem;
    max-height: 580px;
    overflow-y: auto;
    @media ${device.tablet} {max-height: 100%; overflow-y: hidden;}
`;

export const UserItem = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 205, 180, 0.1);
    border-radius: 4px;
    padding: .7rem 1.3rem;
    color: white;
`;

export const UserName = styled.div `
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: #CBCBCB;
  
    i {font-size: 6px;}
`;

export const btnUser = styled.button `
    display: flex;
    align-items: center;
    background-color: transparent !important;
    color: white;
    font-size: 1.3rem;
`;

export const Line = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;

export const InputItem = styled.div `
    display: flex;
    color: white;
    flex-direction: column;
    gap: .6rem;
    width: 100%;

    label {
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
    }

    .short {width: 60%;}
`;

export const InputMain = styled.div `
    display: flex;
    background-color: var(--dark-color);
    padding: 16px 12px;
    border: 2px solid #252F38;
    border-radius: 4px;
    align-items: center;
    gap: .5rem;
    
    input {
        background-color: transparent;
        border: none;
        color: white;
        width: 100%;
    }

    i {color: #6C757D;}
`;

export const btnGerar = styled.button `
    width: 40%;
    background-color: var(--dark-color);
    padding: 16px 12px;
    border: 2px solid #252F38;
    border-radius: 4px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
`;

export const LabelConfirmation = styled.label `
    font-size: 14px;
    color: var(--secundary-color);
    text-align: center;
`;

