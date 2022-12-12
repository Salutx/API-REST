import React from 'react';
import VerticalMenu from '../../components/VerticalMenu';
import * as G from "../../styles/global"
import * as C from "./styles.js"
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';
import PermissionGate from '../../hooks/permissionGate';

const Equipes = () => {
    return (
        <G.TestLoader>
			<Preloader text="Carregando interface..."/>
			<PermissionGate permissions={['Aluno', 'Professor']}>
            <G.Content>
                <VerticalMenu />
                <G.Main>
                    <Header />
                    <G.Section>
                        <C.SectionColumns>
                            <C.SectionContent>
                                <C.SectionHeader>
                                    <C.SectionTitle>Suas equipes
                                        <C.SectionParagraph>
                                            <i className="ri-star-s-line"></i>
                                            Visualize as informações da equipe clicando nela.
                                        </C.SectionParagraph>
                                    </C.SectionTitle>
                                    <C.SectionButtons>
                                        <C.ButtonIcon>
                                            <i className="ri-layout-grid-fill"></i>
                                        </C.ButtonIcon>
                                        <C.ButtonIcon>
                                            <i className="ri-layout-row-line"></i>
                                        </C.ButtonIcon>
                                    </C.SectionButtons>
                                </C.SectionHeader>

                                <C.TeamsContainer>
                                    <C.TeamsCard>
                                        <C.TeamsCardBrand>
                                            M
                                        </C.TeamsCardBrand>
                                        <C.TeamsCardContent>
                                            <h1>Matemática</h1>
                                            <p>Prof. Luis Claudio</p>
                                        </C.TeamsCardContent>
                                    </C.TeamsCard>
                                    <C.TeamsCard>
                                        <C.TeamsCardBrand>
                                            P
                                        </C.TeamsCardBrand>
                                        <C.TeamsCardContent>
                                            <h1>Português</h1>
                                            <p>Prof. Josias</p>
                                        </C.TeamsCardContent>
                                    </C.TeamsCard>
                                    <C.TeamsCard>
                                        <C.TeamsCardBrand>
                                            PWI
                                        </C.TeamsCardBrand>
                                        <C.TeamsCardContent>
                                            <h1>Programação Web I</h1>
                                            <p>Prof. Fábio Claret</p>
                                        </C.TeamsCardContent>
                                    </C.TeamsCard>
                                    <C.TeamsCard>
                                        <C.TeamsCardBrand>
                                            BDI
                                        </C.TeamsCardBrand>
                                        <C.TeamsCardContent>
                                            <h1>Banco de Dados I</h1>
                                            <p>Prof. Jhonatan Cavalaro</p>
                                        </C.TeamsCardContent>
                                    </C.TeamsCard>
                                    <C.TeamsCard>
                                        <C.TeamsCardBrand>
                                            G
                                        </C.TeamsCardBrand>
                                        <C.TeamsCardContent>
                                            <h1>Geografia</h1>
                                            <p>Prof. Alan Pereira</p>
                                        </C.TeamsCardContent>
                                    </C.TeamsCard>
                                    <C.TeamsCard>
                                        <C.TeamsCardBrand>
                                            I
                                        </C.TeamsCardBrand>
                                        <C.TeamsCardContent>
                                            <h1>IPSSI</h1>
                                            <p>Prof. Emílio Brito</p>
                                        </C.TeamsCardContent>
                                    </C.TeamsCard>
                                    <C.TeamsCard>
                                        <C.TeamsCardBrand>
                                            Q
                                        </C.TeamsCardBrand>
                                        <C.TeamsCardContent>
                                            <h1>Química</h1>
                                            <p>Prof. Wilson</p>
                                        </C.TeamsCardContent>
                                    </C.TeamsCard>
                                    
                                </C.TeamsContainer>
                            </C.SectionContent>

                            <C.SectionContent>
                                <C.SectionHeader>
                                    <C.SectionTitle>Fixadas       
                                        <C.SectionParagraph>
                                            <i className="ri-star-s-line"></i>
                                            Deixe duas equipes fixadas aqui.
                                        </C.SectionParagraph>
                                    </C.SectionTitle>
                                    <C.SectionButtons>
                                        <C.ButtonIcon>
                                            <i className="ri-pencil-line"></i>
                                        </C.ButtonIcon>
                                    </C.SectionButtons>
                                </C.SectionHeader>

                                <C.FixedContainer>
                                    <C.Fixed>
                                        <i className="ri-drag-drop-line"></i>
                                        <p>Arraste a equipe</p>
                                    </C.Fixed>
                                    <C.Fixed>
                                        <i className="ri-drag-drop-line"></i>
                                        <p>Arraste a equipe</p>
                                    </C.Fixed>
                                </C.FixedContainer>
                            </C.SectionContent>
                        </C.SectionColumns>
                    </G.Section>
                </G.Main>
            </G.Content>
            </PermissionGate>
        </G.TestLoader>
    )
}

export default Equipes;