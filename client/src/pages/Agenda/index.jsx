import React from 'react';
import VerticalMenu from '../../components/VerticalMenu';
import * as G from "../../styles/global"
import * as C from "./styles.js"
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';
import PermissionGate from '../../hooks/permissionGate';

const Agenda = () => {
    return (
        <G.TestLoader>
			<Preloader text="Carregando interface..."/>
			<PermissionGate permissions={['Aluno', 'Professor']}>
            <G.Content>
                <VerticalMenu />
                <G.Main>
                    <Header />
                    <G.Section>
                        <C.SectionContent>
                            <C.SectionHeader>
                                <C.SectionTitle>Calendário (Dezembro)</C.SectionTitle>
                                <C.SectionButtons>
                                    <C.ButtonIcon>
                                        <i className="ri-arrow-left-s-line"></i>
                                    </C.ButtonIcon>
                                    <C.ButtonIcon>
                                        <i className="ri-arrow-right-s-line"></i>
                                    </C.ButtonIcon>
                                </C.SectionButtons>
                            </C.SectionHeader>
                            <C.Week> 
                                <p>Domingo</p>
                                <p>Segunda</p>
                                <p>Terça</p>
                                <p>Quarta</p>
                                <p>Quinta</p>
                                <p>Sexta</p>
                                <p>Sábado</p>
                            </C.Week>
                            <C.DaysContainer>
                                <C.Day status="inactive">27</C.Day>
                                <C.Day status="inactive">28</C.Day>
                                <C.Day status="inactive">29</C.Day>
                                <C.Day status="inactive">30</C.Day>
                                <C.Day status="unmarked">1</C.Day>
                                <C.Day status="unmarked">2</C.Day>
                                <C.Day status="unmarked">3</C.Day>
                                <C.Day status="unmarked">4</C.Day>
                                <C.Day status="unmarked">5</C.Day>
                                <C.Day status="unmarked">6</C.Day>
                                <C.Day status="unmarked">7</C.Day>
                                <C.Day status="unmarked">8</C.Day>
                                <C.Day status="unmarked">9</C.Day>
                                <C.Day status="unmarked">10</C.Day>
                                <C.Day status="unmarked">11</C.Day>
                                <C.Day status="unmarked">12</C.Day>
                                <C.Day status="unmarked">13</C.Day>
                                <C.Day status="unmarked">14</C.Day>
                                <C.Day status="unmarked">15</C.Day>
                                <C.Day status="unmarked">16</C.Day>
                                <C.Day status="unmarked">17</C.Day>
                                <C.Day status="unmarked">18</C.Day>
                                <C.Day status="unmarked">19</C.Day>
                                <C.Day status="unmarked">20</C.Day>
                                <C.Day status="unmarked">21</C.Day>
                                <C.Day status="unmarked">22</C.Day>
                                <C.Day status="unmarked">23</C.Day>
                                <C.Day status="unmarked">24</C.Day>
                                <C.Day status="unmarked">25</C.Day>
                                <C.Day status="unmarked">26</C.Day>
                                <C.Day status="unmarked">27</C.Day>
                                <C.Day status="unmarked">28</C.Day>
                                <C.Day status="marked">29</C.Day>
                                <C.Day status="marked">30</C.Day>
                                <C.Day status="marked">31</C.Day>
                                <C.Day status="inactive">1</C.Day>
                                <C.Day status="inactive">2</C.Day>
                                <C.Day status="inactive">3</C.Day>
                                <C.Day status="inactive">4</C.Day>
                                <C.Day status="inactive">5</C.Day>
                                <C.Day status="inactive">6</C.Day>
                                <C.Day status="inactive">7</C.Day>
                            </C.DaysContainer>
                        </C.SectionContent>
                    </G.Section>
                </G.Main>
            </G.Content>
            </PermissionGate>
        </G.TestLoader>
    )
}

export default Agenda;