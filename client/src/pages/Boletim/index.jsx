import React, {useState, useEffect} from 'react';
import VerticalMenu from '../../components/VerticalMenu';
import * as G from "../../styles/global"
import * as C from "./styles.js"
import GlobalStyle from "./styles.js"
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';
import PermissionGate from '../../hooks/permissionGate';
import Axios from 'axios';
import jwt_decode from 'jwt-decode';

const Equipes = () => {
    const url = 'http://localhost:3001/';
    const [avareges, setAvareges] = useState([]);

	useEffect(() => {
        const token = localStorage.getItem('access-token');
        const decoded = jwt_decode(token);
        
        const getAvareges = async () => {
            try {
                const response = await Axios.get(`${url}avareges/${decoded.userId}`);
                console.log(response.data.avareges)
                return setAvareges(response.data.avareges);
            } catch (error) {
                return console.log(error)
            }
        }
        getAvareges();
	}, []);

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
                                <C.SectionTitle>Seu boletim
                                    <C.SectionParagraph>
                                        <i className="ri-star-s-line"></i>
                                        Nessa seção, você verá suas notas, faltas, ocorrências etc.
                                    </C.SectionParagraph>
                                </C.SectionTitle>
                            </C.SectionHeader>
                            <C.BoletimContainer>
                                <C.Table>
                                    <C.TableHeader>
                                        <C.TableHeaderCell>
                                            Componente curricular
                                        </C.TableHeaderCell>
                                        <C.TableHeaderCell>
                                            1° Sem.
                                        </C.TableHeaderCell>
                                        <C.TableHeaderCell>
                                            2° Sem.
                                        </C.TableHeaderCell>
                                        <C.TableHeaderCell>
                                            3° Sem.
                                        </C.TableHeaderCell>
                                        <C.TableHeaderCell>
                                            Final
                                        </C.TableHeaderCell>
                                        <C.TableHeaderCell>
                                            Aulas
                                        </C.TableHeaderCell>
                                        <C.TableHeaderCell>
                                            Faltas
                                        </C.TableHeaderCell>
                                        <C.TableHeaderCell>
                                            Freq %
                                        </C.TableHeaderCell>
                                    </C.TableHeader>

                                    <C.TableBody>
                                        {
                                            avareges?.map((avarege) => {
                                                return (
                                                    <C.TableRow key={avarege.registroMatricula}>
                                                        <C.TableBodyCell>
                                                            {avarege.name}
                                                        </C.TableBodyCell>
                                                        <C.TableBodyCell>
                                                            -
                                                        </C.TableBodyCell>
                                                        <C.TableBodyCell>
                                                            -
                                                        </C.TableBodyCell>
                                                        <C.TableBodyCell>
                                                            {avarege.avarege}
                                                        </C.TableBodyCell>
                                                        <C.TableBodyCell>
                                                            -
                                                        </C.TableBodyCell>
                                                        <C.TableBodyCell>
                                                            -
                                                        </C.TableBodyCell>
                                                        <C.TableBodyCell>
                                                            -
                                                        </C.TableBodyCell>
                                                        <C.TableBodyCell>
                                                            -
                                                        </C.TableBodyCell>
                                                 </C.TableRow>
                                                )
                                            })
                                        }

                                        {/* <C.TableRow>
                                            <C.TableBodyCell>
                                                Educação Física
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                -
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                B
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                MB
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                -
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                34
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                2
                                            </C.TableBodyCell>
                                            <C.TableBodyCell>
                                                94,12%
                                            </C.TableBodyCell>
                                        </C.TableRow> */}
                                    </C.TableBody>
                                </C.Table>
                            </C.BoletimContainer>
                        </C.SectionContent>
                    </G.Section>
                </G.Main>
            </G.Content>
            </PermissionGate>
        </G.TestLoader>
    )
}

export default Equipes;