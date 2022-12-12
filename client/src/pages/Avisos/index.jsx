import React from 'react';
import VerticalMenu from '../../components/VerticalMenu';
import * as G from "../../styles/global"
import * as C from "./styles.js"
import GlobalStyle from "./styles.js"
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';
import PermissionGate from '../../hooks/permissionGate';

const Avisos = () => {
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
                                <C.SectionTitle>Seus avisos
                                    <C.SectionParagraph>
                                        <i className="ri-star-s-line"></i>
                                        Verifique as mensagens e os avisos importantes aqui.
                                    </C.SectionParagraph>
                                </C.SectionTitle>
                            </C.SectionHeader>
                            <C.AvisosContainer>
                                <C.Table>
                                    <C.TableHeader>
                                        <C.TableHeaderCell>
                                            <C.CheckBox></C.CheckBox>
                                        </C.TableHeaderCell>
                                        <C.TableHeaderCell>
                                            Assunto
                                        </C.TableHeaderCell>
                                        <C.TableHeaderCell className='center'>
                                            Prioridade
                                        </C.TableHeaderCell>
                                        <C.TableHeaderCell>
                                            Classificação
                                        </C.TableHeaderCell>
                                        <C.TableHeaderCell>
                                            Data
                                        </C.TableHeaderCell>
                                        <C.TableHeaderCell className='center'>
                                            <C.DeleteButton>Deletar</C.DeleteButton>
                                        </C.TableHeaderCell>
                                    </C.TableHeader>

                                    <C.TableBody>
                                         <C.TableRow>
                                            <C.TableBodyCell>
                                                <C.CheckBox></C.CheckBox>
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                Reunião de Pais
                                            </C.TableBodyCell>
                                            <C.TableBodyCell className='center'>
                                                Baixa
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                Divulgação
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                23/03/2022
                                            </C.TableBodyCell>
                                            <C.TableBodyCell className='center'>
                                                Ver mais
                                            </C.TableBodyCell>
                                        </C.TableRow>

                                        <C.TableRow>
                                            <C.TableBodyCell>
                                                <C.CheckBox></C.CheckBox>
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                Comunicação Rematrícula
                                            </C.TableBodyCell>
                                            <C.TableBodyCell className='center'>
                                                Media
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                Aviso
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                17/12/2022
                                            </C.TableBodyCell>
                                            <C.TableBodyCell className='center'>
                                                Ver mais
                                            </C.TableBodyCell>
                                        </C.TableRow>

                                        <C.TableRow>
                                            <C.TableBodyCell>
                                                <C.CheckBox></C.CheckBox>
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                Divulgação de turmas
                                            </C.TableBodyCell>
                                            <C.TableBodyCell className='center'>
                                                Baixa
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                Divulgação
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                08/12/2021
                                            </C.TableBodyCell>
                                            <C.TableBodyCell className='center'>
                                                Ver mais
                                            </C.TableBodyCell>
                                        </C.TableRow>

                                        <C.TableRow>
                                            <C.TableBodyCell>
                                                <C.CheckBox></C.CheckBox>
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                Rematrícula
                                            </C.TableBodyCell>
                                            <C.TableBodyCell className='center'>
                                                Média
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                Divulgação
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                07/12/2021
                                            </C.TableBodyCell>
                                            <C.TableBodyCell className='center'>
                                                Ver Mais
                                            </C.TableBodyCell>
                                        </C.TableRow>

                                        <C.TableRow>
                                            <C.TableBodyCell>
                                                <C.CheckBox></C.CheckBox>
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                Bolsa do Povo
                                            </C.TableBodyCell>
                                            <C.TableBodyCell className='center'>
                                                Importante
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                Aviso
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                25/11/2022
                                            </C.TableBodyCell>
                                            <C.TableBodyCell className='center'>
                                                Ver mais
                                            </C.TableBodyCell>
                                        </C.TableRow>
                                    </C.TableBody>
                                </C.Table>
                            </C.AvisosContainer>
                        </C.SectionContent>
                    </G.Section>
                </G.Main>
            </G.Content>
            </PermissionGate>
        </G.TestLoader>
    )
}

export default Avisos;