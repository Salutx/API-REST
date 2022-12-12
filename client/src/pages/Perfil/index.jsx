import React from 'react';
import VerticalMenu from '../../components/VerticalMenu';
import * as G from "../../styles/global"
import * as C from "./styles.js"
import GlobalStyle from "./styles.js"
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';
import PermissionGate from '../../hooks/permissionGate';

const Perfil = () => {
    return (
        <G.TestLoader>
            <GlobalStyle />
            <Preloader text="Carregando interface..."/>
            <PermissionGate permissions={['Aluno', 'Professor']}>
            <G.Content>
                <VerticalMenu />
                <G.Main>
                    <Header />
                    <G.Section>
                        <C.SectionContent>
                            <C.SectionHeader>
                                <C.SectionTitle>Perfil Pessoal
                                    <C.SectionParagraph>
                                        <i className="ri-star-s-line"></i>
                                        Edite as informações do seu perfil.
                                    </C.SectionParagraph>
                                </C.SectionTitle>
                            </C.SectionHeader>
                        </C.SectionContent>
                    </G.Section>
                </G.Main>
            </G.Content>
            </PermissionGate>
        </G.TestLoader>
    )
}

export default Perfil;