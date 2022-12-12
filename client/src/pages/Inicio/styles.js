import styled from "styled-components";
import gradient from "../../assets/images/gradient2.svg"

export const GridLayout = styled.div `

    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr .7fr; 
    grid-template-rows: 0.8fr 1fr 1fr; 
    gap: 24px 24px; 
    height: 100%;
    grid-template-areas: 
        "welcome-area welcome-area info-area"
        "welcome-area welcome-area info-area"
        "tarefas-area frequency-area info-area";

    .videoplayer video {object-fit: cover !important; border: ${props => props.theme.border};}

    .section {
        border-radius: 8px;
        padding: 2rem;
        gap: 1rem;
        box-shadow: ${props => props.theme.boxShadowCard};
        background-color: ${props => props.theme.card} !important;
    }
    
    @media (max-width: 1280px) { 
        display: flex !important;
        flex-direction: column;
        gap: 24px;
    }

`;

export const WelcomeArea = styled.div `
    grid-area: welcome-area; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem !important;
    padding: 0 !important;
    outline: 1px solid #2F3037;
    overflow: hidden;
`;

export const WelcomeHeader = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const WelcomeTitle = styled.div `
    display: flex;
    flex-direction: column;
    gap: .2rem;

    h1 {
        font-size: 24px;
        color: ${props => props.theme.titleAssets};
    }

    P {
        font-size: 12px;
        color: ${props => props.theme.paragraph};
    }
`;

export const WelcomeBrand = styled.div `
    width: 200px;
    height: 75px;
    background-image: url(${props => props.theme.banner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const WelcomeInfo = styled.div `
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    border-radius: 4px !important;
`;

export const InfoSection = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: .5rem;
`;

export const InfoTitle = styled.p `
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.paragraph};;
`;

export const InfoAreaContent = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const InfoAreaItem = styled.div `
    display: flex;
    flex-direction: column;
`;

export const InfoButton = styled.button `
    background-color: var(--primary-color-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    gap: 10px;
    border-radius: 4px;
    color: white;
    font-size: 12px;

    i {font-size: 16px;}
    :hover {background-color: var(--primary-color);}
`;

export const InfoMembers = styled.div `
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${props => props.theme.titleAssets};
    font-size: 10px;
`;

export const MembersList = styled.div ``;
export const MembersLabel = styled.div ``;

// Tarefas

export const TarefasArea = styled.div `
    grid-area: tarefas-area; 
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100%;
`;

export const TarefasContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.title};
`;

export const SectionHeader = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SectionTitle = styled.div `
    display: flex;
    align-items: center;
    gap: .8rem;

    > i {
        background-color: var(--primary-color-opacity);
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary-color);
        border-radius: 4px;
    }
`;

export const SectionInfo = styled.div `
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 13px;
    color: ${props => props.theme.titleAssets};
    font-weight: 500;

    > i {color: ${props => props.theme.paragraph};}
`;

export const SectionButton = styled.button `
    display: flex;
    align-items: center;
    color: ${props => props.theme.titleAssets};
    background-color: transparent;
    justify-content: center;
    gap: .3rem;

    i {font-size: 18px;}
    :hover {
        background-color: transparent;
        color: var(--primary-color);
    }
`;

// Info Area

export const InfoArea = styled.div `
    background-color: ${props => props.theme.card} !important;
    position: relative;
    grid-area: info-area; 
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 4px;
    height: 100%;
    overflow: auto;
`;

export const InfoContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    padding-bottom: 4rem;
    flex-direction: column;
    align-items: center;
    margin-top: -3rem;
    gap: .5rem;
`;

export const InfoAreaBackground = styled.div `
    width: 100%;
    background: url(${gradient});
    height: 150px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 1.5rem;
`;

export const InfoAreaFooter = styled.div `
    width: 100%;
    background: url(${gradient});
    height: 35px;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const IdCardAvatar = styled.div `
    img {
        object-fit: cover;
        border-radius: 64px;
        outline: 3px solid ${props => props.theme.card};
        width: 92px;
        height: 92px;
    }
`;

export const IdCardContent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    height: 100%;
`;

export const IdCardHeader = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .2rem;

    h1 {
        font-weight: 600;
        font-size: 18px;
        color: ${props => props.theme.titleAssets};
        text-transform: uppercase; 
    }

    span {color: var(--primary-color);}

    p {
        font-size: 10px;
        font-weight: bold;
        color: white;
        background-color: var(--primary-color);
        padding: .1rem 1.3rem;
        border-radius: 32px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
    }
`;

export const IdCardBody = styled.div `
    display: flex;
    gap: .5rem;
    justify-content: space-between;
`;

export const IdCardColumn = styled.div `
    display: flex;
    flex-direction: column;
    gap: .3rem;
    width: 50%;

    :first-child {text-align: right;}
`;

export const IdCardItem = styled.div `
    h1 {
        color: ${props => props.theme.titleAssets};
        font-weight: 600;
    }

    h1, p {font-size: 13px;}

    p {
        color: ${props => props.theme.paragraph};
        font-weight: 500;
    }
`;

export const IdCardQrcode = styled.div `
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center; 
    font-size: 12px;
    font-weight: bold;
    gap: .5rem;
    color: ${props => props.theme.titleAssets};

    img {
        width: 128px;
        height: 128px;
    }
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

// Frequency Area
export const FrequencyArea = styled.div `
    grid-area: frequency-area;
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const FrequencyContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.title};
`;

// Support Area

export const SupportArea = styled.div `
    grid-area: support-area; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${props => props.theme.titleAssets};
    gap: 24px !important;

    button {
        color: ${props => props.theme.titleAssets} !important;
        border: 1px solid ${props => props.theme.titleAssets} !important;
    }
`;

export const AdminSections = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    gap: 1.5rem;

    justify-content: space-between;

    > div {max-height: 100%}
    > div:first-child {
        width: 40%;
        box-shadow: ${props => props.theme.boxShadowCard};
    }
`;