import styled from "styled-components";

export const SectionColumns = styled.div `
    display: flex;
    gap: 2rem;
    align-items: stretch;
    width: 100%;
    height: 100%;

    >:last-child {
        width: 25%;
    }

    >:first-child {
        width: 75%;
    }
`;

export const SectionContent = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .3rem;
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

export const TeamsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    gap: 1rem;

    width: 100%;
    overflow-y: scroll;
`;

export const TeamsCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 1rem;

    width: 23.97%;
    height: 270px;

    background: ${props => props.theme.card};
    border-radius: 4px;

    cursor: pointer;
    border: 1px solid transparent;

    :hover {
        border: ${props => props.theme.border};
    }
`;

export const TeamsCardBrand = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, #64d8fb 0%, #3085ca 100%);
    border-radius: 32px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 24px;
    color: #FFFFFF;
`;

export const TeamsCardContent = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: ${props => props.theme.title};
    }

    p {
        font-weight: 600;
        font-size: 12px;
        line-height: 21px;
        color: ${props => props.theme.paragraph};
    }
`;

export const FixedContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
`;

export const Fixed = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    width: 100%;
    height: 50%;
    padding: 4.5rem 0;

    background: ${props => props.theme.fixedOpacity};
    border: 1px dashed var(--primary-color);
    border-radius: 4px;
    color: ${props => props.theme.paragraph};

    i {
        font-size: 1.5rem;
    }

    p {
        font-size: .8rem;
    }
`;