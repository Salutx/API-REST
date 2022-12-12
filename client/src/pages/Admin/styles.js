import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    .short {width: 60% !important;}
    .flex-end {
        display: flex;
        justify-content: flex-end !important;
        align-items: flex-end !important;
    }

    .enought {font-size: 13px; color: var(--secundary-color); font-weight: bold;};

    
    #popover-positioned-bottom {
        cursor: pointer;
        transition: none;
        position: relative;
        z-index: 995;
    }

    #popoverbody {
        z-index: 200 !important;
        background-color: #ef6e6e;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        font-size: 10px;
        padding: .3rem .5rem;
        position: absolute;
        right: -10rem;
        bottom: -3.2rem;
        z-index: 899;
    }
`;

export const AdminUserContainer = styled.div `
    width: 100%;
    position: relative;
`;

export const Content = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 6px;
    position: relative;
    background-color: ${props => props.theme.card};
    padding: 1.5rem;
`;

export const AdminBody = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
`;

export const Body = styled.div `
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-y: auto;
    max-height: calc(100vh - 300px);
    gap: 2rem;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {display: none;}
`;

export const DividerArea = styled.div `
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    gap: 1.5rem;

    > h1 {
        display: none;
        padding: .7rem 1rem;
        background-color: var(--primary-color-opacity) !important;
        border-radius: 4px;
        color: var(--primary-color) !important;
        text-transform: uppercase;
        font-size: 10px !important;
        font-weight: bold;
    }
`;

export const Line = styled.div `
    display: flex;
    gap: 1rem;

    .short {
        width: 35% !important;
    }
`;

export const InputItem = styled.div `
    display: flex;
    color: ${props => props.theme.backgroundStartAssets};
    flex-direction: column;
    gap: .3rem;
    width: 100%;

    label {
        font-weight: 600;
        font-size: 11px;
        line-height: 21px;
    }
    .short {width: 60%;}
`;

export const InputMain = styled.div `
    padding: 1rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: .8rem;
    background-color: ${props => props.theme.background};
    border: none !important;
    outline: none !important;

    > input {
        border: none;
        background: transparent;
        color: ${props => props.theme.title};
        font-size: 12px;
        width: 100%;
    }

    ::selection {
        outline: none !important;
        border: none !important;
    }

    > input::placeholder {
        font-size: 12px;
        color: ${props => props.theme.placeholder};
    }

    > i {
        font-size: 14px;
        color: ${props => props.theme.placeholder};
    }
`;

export const Divider = styled.hr `
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-top: ${props => props.theme.borderHr};
`;

export const InputSelect = styled.select `
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.background};
    padding: 1rem;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    outline: none;
    color: ${props => props.theme.title};

    background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 50%;

    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
`;

export const btnGerar = styled.button `
    width: 40%;
    background-color: transparent;
    padding: 15px 12px;
    border: ${props => props.theme.border};
    border-radius: 4px;
    color: ${props => props.theme.title};
    text-transform: uppercase;
    font-weight: bold;
    
    :hover {background-color: var(--primary-color); border-color: var(--primary-color);} 
`;

export const ContentHeader = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    border-bottom: ${props => props.theme.border};
    margin-bottom: 1.5rem;

    > h1 {
        color: ${props => props.theme.backgroundStartAssets};
        padding: .5rem 0 .8rem 0rem;
        font-weight: 600;
        font-size: 16px;
    }
`;

export const ContentIcons = styled.div `
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 20px;
    i {cursor: pointer;}
    i:hover {color: var(--primary-color);}
    color: ${props => props.theme.backgroundStartAssets};
`;

export const LabelConfirmation = styled.label `
    font-size: 14px;
    color: var(--secundary-color);
    text-align: center;
`;

export const TableAround = styled.div `
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

// USER

export const UserList = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const btnUser = styled.button `
    display: flex;
    align-items: center;
    background-color: transparent !important;
    color: white;
    font-size: 1.3rem;
`;

export const UserCard = styled.div `
    width: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 4px;
    gap: .5rem;
    overflow: auto;
    border: 1px solid transparent;
    cursor: pointer;

    background-color: ${props => props.theme.background};

    :hover {
        border: ${props => props.theme.border};
    }

    :hover img {
        transform: scale(1.2);
    }
`;

export const UserBody = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    gap: .1rem;

    font-size: 10px;
    color: ${props => props.theme.paragraph};

    > :first-child {
        font-weight: bold;
    }
`;

export const UserHeader = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > p {
        font-size: 9px;
        font-weight: 500;
        color: ${props => props.theme.paragraph};
        text-transform: uppercase;
    }

    > h1 {
        text-transform: uppercase;
        font-size: 16px;
        color: ${props => props.theme.backgroundStartAssets};
    }
`;

export const UserAvatar = styled.div `

    position: relative;
    width: 100%;
    height: 110px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        filter: grayscale(1) brightness(0.6) contrast(0.6);
    }

    i {
        position: absolute;
        top: .7rem;
        right: .8rem;
        color: #fff;
        font-size: 1.3rem;
        z-index: 899;
    }
`;

export const UserDetails = styled.div `
    padding: 1rem;
    display: flex;
    flex-direction: column;

    > h1 {
        text-transform: uppercase;
        font-size: 16px;
    }
`;

export const UserContact = styled.div `
    margin-top: 1rem;

    > p {
        color: ${props => props.theme.paragraph};
        font-size: 10px;
        text-align: center;
    }
`;