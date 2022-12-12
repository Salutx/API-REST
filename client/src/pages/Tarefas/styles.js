import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    .Tabs {height: 100%;}

    .react-tabs__tab-list {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .react-tabs__tab {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 140px;
        height: 45px;
        cursor: pointer;
        border-radius: 4px;
        font-weight: 600;
        outline: none;
        border: 1px solid transparent;
    
        font-size: .75rem;    
    }

    .default-notdelivered {color: var(--lightred);}
    .notdelivered {background: rgba(251, 100, 131, 0.2); border-color: var(--lightred);}

    .default-delivered {color: var(--lightgreen);}
    .delivered {background: rgba(108, 255, 142, 0.2); border-color: var(--lightgreen);}

    .react-tabs__tab-panel {
        display: none;
    }

    .react-tabs__tab-panel--selected {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .brand {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 4px;
        font-weight: 600;
        font-size: 12px;
        color: white;
    }

    .brand-notdelivered {background: linear-gradient(135deg, #FB6483 0%, #CA304F 100%);}
    .brand-delivered {background: linear-gradient(135deg, #8BFB64 0%, #30CA52 100%);}

`;

export const SectionContent = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .3rem;
    height: 100%;
`;

export const SectionHeader = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .5rem 0px;
    gap: 10px;
`;

export const SectionParagraph = styled.p `
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: ${props => props.theme.paragraph};
    font-size: .8rem;
    font-weight: 400 !important;

    i {
        color: yellow;
    }
`;

export const SectionTitle = styled.h1 `
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    color: ${props => props.theme.title};
`;

export const SectionButtons = styled.div `
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const ButtonIcon = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px;
    gap: 16px;

    width: 40px;
    height: 40px;
    color: var(--primary-color);

    transition: color .1s;
    transition: background .2s;

    background: rgba(0, 205, 180, 0.1);
    border-radius: 32px;
    cursor: pointer;
    font-size: 1rem;

    :hover {
        background-color: var(--primary-color);
        color: white !important;
    }
`;

export const TaskContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
    height: 100%;
`;

export const TaskItem = styled.details `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .8rem;
    background: ${props => props.theme.card};
    border-radius: 4px;
    border: 1px solid transparent;

    :hover {
        border: ${props => props.theme.border};
    }
`;

export const TaskContent = styled.div `
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const TaskInfo = styled.div `
    display: flex;
    flex-direction: column;
    gap: .2rem;
`;

export const TaskMatter = styled.p `
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.paragraph};
`;

export const TaskTitle = styled.h2 `
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    color: ${props => props.theme.title};
`;

export const TaskDetails = styled.div `
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: end;
`;

export const TaskDuration = styled.p `
    font-weight: 400;
    font-size: 12px;
    color: ${props => props.theme.paragraph};
`;

export const TaskLink = styled.p `
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: var(--primary-color);
    cursor: pointer;

    :hover {color: var(--primary-color-dark);}
`;

export const TaskTeacher = styled.div `
    display: flex;
    flex-direction: column;
    gap: .8rem;
    padding: 0 .45rem;

    img {
        width: 32px;
        height: 32px;
    }
`;

export const Summary = styled.summary `
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

export const TaskDescription = styled.div `
    margin-top: 2rem;
    display: flex;
    align-items: stretch;
    gap: 8rem;
`

export const TeacherArea = styled.div `
    display: flex;
    gap: .7rem;
    flex: 1 0 40%;

    hr {
        border: ${props => props.theme.borderHr};
    }
`;

export const Description = styled.div `
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const DescriptionContent = styled.div `
    display: flex;
    flex-direction: column;
    gap: .3rem;

    h1 {
        color: ${props => props.theme.paragraph};
        font-weight: 600;
        font-size: 14px;
    }

    p {
        font-size: 13px;
        color: ${props => props.theme.paragraph};
        line-height: 21px;
    }
`;

export const SupportMaterial = styled.div `
    flex: 1 0 30%;
    display: flex;
    flex-direction: column;
    gap: .5rem;
`;

export const MaterialItem = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    gap: .5rem;
    background-color: ${props => props.theme.background};
    padding: .7rem 1rem;
    line-height: 18px;
    border-radius: 4px;
    color: ${props => props.theme.paragraph};
    cursor: pointer;
    transition: .1s color;

    p { font-size: 12px;}
    i {font-size: 14px;}

    :hover {color: ${props => props.theme.title};}
`;

export const DescriptionDetails = styled.div `
    display: flex;
    align-items: stretch;
    gap: 2rem;
`;

export const TaskTerm = styled.div `
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 12px;
        font-weight: 600;
        color: ${props => props.theme.paragraph};
    }

    p {
        font-size: 11px;
        color: ${props => props.theme.paragraph};
    }
`;

export const TaskDelivery = styled.div `
    display: flex;
    align-items: center;
    padding: .2rem .3rem;
    border-radius: 32px;
    background-color: ${props => props.theme.background};;
`;

export const TaskFile = styled.div `
    font-size: 10px;
    color: ${props => props.theme.paragraph};
    padding: 0 2rem 0 1rem;
`;

export const TaskFinish = styled.div `
    width: 32px;
    height: 32px;
    background: rgba(108, 255, 142, 0.2);
    color: var(--lightgreen);
    border-radius: 64px;
    border: 1px solid var(--lightgreen);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background: var(--lightgreen);
        color: black;
    }
`;