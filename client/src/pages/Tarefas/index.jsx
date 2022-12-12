import React, { useState } from 'react';
import VerticalMenu from '../../components/VerticalMenu';
import * as G from "../../styles/global"
import * as C from "./styles.js"
import GlobalStyle from "./styles.js"
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';
import PermissionGate from '../../hooks/permissionGate';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import teacherprofile from '../../assets/images/admin.png'

const Equipes = () => {

    const [isSelected, setIsSelected] = useState('notdelivered');

    const checkSelect = (props) => {
        if (props === isSelected) {
            return isSelected
        }
    }
    
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
                                <C.SectionTitle>Suas tarefas
                                    <C.SectionParagraph>
                                        <i className="ri-star-s-line"></i>
                                        Visualize as informações da tarefa clicando nela.
                                    </C.SectionParagraph>
                                </C.SectionTitle>
                            </C.SectionHeader>
                            <Tabs className="Tabs">
                                <TabList>
                                    <Tab className={`react-tabs__tab ${checkSelect('notdelivered')} default-notdelivered`} onClick={() => {setIsSelected('notdelivered')}}>Não-entregues</Tab>
                                    <Tab className={`react-tabs__tab ${checkSelect('delivered')} default-delivered`} onClick={() => {setIsSelected('delivered')}}>Entregues</Tab>
                                </TabList>
                                <TabPanel className="tab-notdelivered">
                                    <C.TaskContainer>
                                        <C.TaskItem>
                                            <C.Summary>
                                                <C.TaskContent>
                                                    <div className='brand brand-notdelivered'>
                                                        X
                                                    </div>
                                                    <C.TaskInfo>
                                                        <C.TaskMatter>Matemática</C.TaskMatter>
                                                        <C.TaskTitle>Equações do 2° Grau</C.TaskTitle>
                                                    </C.TaskInfo>
                                                </C.TaskContent>
                                                <C.TaskDetails>
                                                    <C.TaskDuration>Fecha em 65hrs</C.TaskDuration>
                                                    <C.TaskLink>Ver atividade</C.TaskLink>
                                                </C.TaskDetails>
                                            </C.Summary>
                                            <C.TaskDescription>
                                                <C.TeacherArea>
                                                    <C.TaskTeacher>
                                                        <img src={teacherprofile} alt="" />
                                                    </C.TaskTeacher>
                                                    <hr />
                                                    <C.Description>
                                                        <C.DescriptionContent>
                                                            <h1>Olá, Alunos.</h1>
                                                            <p>A teacher is responsible for preparing lesson plans and educating students at all levels. Their duties include assigning homework, grading tests, and documenting progress. Teachers must be able to instruct in a variety of subjects and reach students with engaging lesson plans.</p>
                                                        </C.DescriptionContent>

                                                        <C.DescriptionDetails>
                                                            <C.TaskTerm>
                                                                <h1>Prazo até</h1>
                                                                <p>17/12/2022 às 23:59</p>
                                                            </C.TaskTerm>
                                                            <C.TaskDelivery>
                                                                <C.TaskFile>
                                                                    Arraste um arquivo
                                                                </C.TaskFile>
                                                                <C.TaskFinish>
                                                                    <i className="ri-check-line"></i>
                                                                </C.TaskFinish>
                                                            </C.TaskDelivery>
                                                        </C.DescriptionDetails>
                                                    </C.Description>
                                                </C.TeacherArea>

                                                <C.SupportMaterial>
                                                    <C.MaterialItem>
                                                        <i className="ri-link"></i>
                                                        <p>Livro de Matemática (Pág. 87)</p>
                                                    </C.MaterialItem>
                                                </C.SupportMaterial>
                                            </C.TaskDescription>
                                        </C.TaskItem>

                                        <C.TaskItem>
                                            <C.Summary>
                                                <C.TaskContent>
                                                    <div className='brand brand-notdelivered'>
                                                        X
                                                    </div>
                                                    <C.TaskInfo>
                                                        <C.TaskMatter>Português</C.TaskMatter>
                                                        <C.TaskTitle>Redação Alibaba</C.TaskTitle>
                                                    </C.TaskInfo>
                                                </C.TaskContent>
                                                <C.TaskDetails>
                                                    <C.TaskDuration>Fecha em 65hrs</C.TaskDuration>
                                                    <C.TaskLink>Ver atividade</C.TaskLink>
                                                </C.TaskDetails>
                                            </C.Summary>
                                            <C.TaskDescription>
                                                <C.TeacherArea>
                                                    <C.TaskTeacher>
                                                        <img src={teacherprofile} alt="" />
                                                    </C.TaskTeacher>
                                                    <hr />
                                                    <C.Description>
                                                        <C.DescriptionContent>
                                                            <h1>Olá, Alunos.</h1>
                                                            <p>A teacher is responsible for preparing lesson plans and educating students at all levels. Their duties include assigning homework, grading tests, and documenting progress. Teachers must be able to instruct in a variety of subjects and reach students with engaging lesson plans.</p>
                                                        </C.DescriptionContent>

                                                        <C.DescriptionDetails>
                                                            <C.TaskTerm>
                                                                <h1>Prazo até</h1>
                                                                <p>19/12/2022 às 23:59</p>
                                                            </C.TaskTerm>
                                                            <C.TaskDelivery>
                                                                <C.TaskFile>
                                                                    Arraste um arquivo
                                                                </C.TaskFile>
                                                                <C.TaskFinish>
                                                                    <i className="ri-check-line"></i>
                                                                </C.TaskFinish>
                                                            </C.TaskDelivery>
                                                        </C.DescriptionDetails>
                                                    </C.Description>
                                                </C.TeacherArea>

                                                <C.SupportMaterial>
                                                    <C.MaterialItem>
                                                        <i className="ri-link"></i>
                                                        <p>Material de Apoio</p>
                                                    </C.MaterialItem>
                                                </C.SupportMaterial>
                                            </C.TaskDescription>
                                        </C.TaskItem>

                                        <C.TaskItem>
                                            <C.Summary>
                                                <C.TaskContent>
                                                    <div className='brand brand-notdelivered'>
                                                        X
                                                    </div>
                                                    <C.TaskInfo>
                                                        <C.TaskMatter>Banco de Dados I</C.TaskMatter>
                                                        <C.TaskTitle>Scripts SQL</C.TaskTitle>
                                                    </C.TaskInfo>
                                                </C.TaskContent>
                                                <C.TaskDetails>
                                                    <C.TaskDuration>Fecha em 78hrs</C.TaskDuration>
                                                    <C.TaskLink>Ver atividade</C.TaskLink>
                                                </C.TaskDetails>
                                            </C.Summary>
                                            <C.TaskDescription>
                                                <C.TeacherArea>
                                                    <C.TaskTeacher>
                                                        <img src={teacherprofile} alt="" />
                                                    </C.TaskTeacher>
                                                    <hr />
                                                    <C.Description>
                                                        <C.DescriptionContent>
                                                            <h1>Olá, Alunos.</h1>
                                                            <p>A teacher is responsible for preparing lesson plans and educating students at all levels. Their duties include assigning homework, grading tests, and documenting progress. Teachers must be able to instruct in a variety of subjects and reach students with engaging lesson plans.</p>
                                                        </C.DescriptionContent>

                                                        <C.DescriptionDetails>
                                                            <C.TaskTerm>
                                                                <h1>Prazo até</h1>
                                                                <p>20/12/2022 às 23:59</p>
                                                            </C.TaskTerm>
                                                            <C.TaskDelivery>
                                                                <C.TaskFile>
                                                                    Arraste um arquivo
                                                                </C.TaskFile>
                                                                <C.TaskFinish>
                                                                    <i className="ri-check-line"></i>
                                                                </C.TaskFinish>
                                                            </C.TaskDelivery>
                                                        </C.DescriptionDetails>
                                                    </C.Description>
                                                </C.TeacherArea>

                                                <C.SupportMaterial>
                                                    <C.MaterialItem>
                                                        <i className="ri-link"></i>
                                                        <p>SQL_APOSTILA-2022.pdf</p>
                                                    </C.MaterialItem>
                                                </C.SupportMaterial>
                                            </C.TaskDescription>
                                        </C.TaskItem>

                                        <C.TaskItem>
                                            <C.Summary>
                                                <C.TaskContent>
                                                    <div className='brand brand-notdelivered'>
                                                        X
                                                    </div>
                                                    <C.TaskInfo>
                                                        <C.TaskMatter>Programação Web I</C.TaskMatter>
                                                        <C.TaskTitle>PHP x Javascript</C.TaskTitle>
                                                    </C.TaskInfo>
                                                </C.TaskContent>
                                                <C.TaskDetails>
                                                    <C.TaskDuration>Fecha em 82hrs</C.TaskDuration>
                                                    <C.TaskLink>Ver atividade</C.TaskLink>
                                                </C.TaskDetails>
                                            </C.Summary>
                                            <C.TaskDescription>
                                                <C.TeacherArea>
                                                    <C.TaskTeacher>
                                                        <img src={teacherprofile} alt="" />
                                                    </C.TaskTeacher>
                                                    <hr />
                                                    <C.Description>
                                                        <C.DescriptionContent>
                                                            <h1>Olá, Alunos.</h1>
                                                            <p>A teacher is responsible for preparing lesson plans and educating students at all levels. Their duties include assigning homework, grading tests, and documenting progress. Teachers must be able to instruct in a variety of subjects and reach students with engaging lesson plans.</p>
                                                        </C.DescriptionContent>

                                                        <C.DescriptionDetails>
                                                            <C.TaskTerm>
                                                                <h1>Prazo até</h1>
                                                                <p>20/12/2022 às 19:59</p>
                                                            </C.TaskTerm>
                                                            <C.TaskDelivery>
                                                                <C.TaskFile>
                                                                    Arraste um arquivo
                                                                </C.TaskFile>
                                                                <C.TaskFinish>
                                                                    <i className="ri-check-line"></i>
                                                                </C.TaskFinish>
                                                            </C.TaskDelivery>
                                                        </C.DescriptionDetails>
                                                    </C.Description>
                                                </C.TeacherArea>

                                                <C.SupportMaterial>
                                                    <C.MaterialItem>
                                                        <i className="ri-link"></i>
                                                        <p>W3School</p>
                                                    </C.MaterialItem>
                                                </C.SupportMaterial>
                                            </C.TaskDescription>
                                        </C.TaskItem>

                                        <C.TaskItem>
                                            <C.Summary>
                                                <C.TaskContent>
                                                    <div className='brand brand-notdelivered'>
                                                        X
                                                    </div>
                                                    <C.TaskInfo>
                                                        <C.TaskMatter>Química</C.TaskMatter>
                                                        <C.TaskTitle>Química Orgânica</C.TaskTitle>
                                                    </C.TaskInfo>
                                                </C.TaskContent>
                                                <C.TaskDetails>
                                                    <C.TaskDuration>Fecha em 88hrs</C.TaskDuration>
                                                    <C.TaskLink>Ver atividade</C.TaskLink>
                                                </C.TaskDetails>
                                            </C.Summary>
                                            <C.TaskDescription>
                                                <C.TeacherArea>
                                                    <C.TaskTeacher>
                                                        <img src={teacherprofile} alt="" />
                                                    </C.TaskTeacher>
                                                    <hr />
                                                    <C.Description>
                                                        <C.DescriptionContent>
                                                            <h1>Olá, Alunos.</h1>
                                                            <p>A teacher is responsible for preparing lesson plans and educating students at all levels. Their duties include assigning homework, grading tests, and documenting progress. Teachers must be able to instruct in a variety of subjects and reach students with engaging lesson plans.</p>
                                                        </C.DescriptionContent>

                                                        <C.DescriptionDetails>
                                                            <C.TaskTerm>
                                                                <h1>Prazo até</h1>
                                                                <p>20/12/2022 às 23:59</p>
                                                            </C.TaskTerm>
                                                            <C.TaskDelivery>
                                                                <C.TaskFile>
                                                                    Arraste um arquivo
                                                                </C.TaskFile>
                                                                <C.TaskFinish>
                                                                    <i className="ri-check-line"></i>
                                                                </C.TaskFinish>
                                                            </C.TaskDelivery>
                                                        </C.DescriptionDetails>
                                                    </C.Description>
                                                </C.TeacherArea>

                                                <C.SupportMaterial>
                                                    <C.MaterialItem>
                                                        <i className="ri-link"></i>
                                                        <p>Livro de Matemática (Pág. 87)</p>
                                                    </C.MaterialItem>
                                                </C.SupportMaterial>
                                            </C.TaskDescription>
                                        </C.TaskItem>
                                    </C.TaskContainer>
                                </TabPanel>
                                <TabPanel className="tab-delivered">
                                    <C.TaskContainer>
                                        <C.TaskItem>
                                            <C.Summary>
                                                <C.TaskContent>
                                                    <div className='brand brand-delivered'>
                                                        X
                                                    </div>
                                                    <C.TaskInfo>
                                                        <C.TaskMatter>Trabalho de Conclusão de Curso</C.TaskMatter>
                                                        <C.TaskTitle>Finalização do curso em Desenvolvimento de Sistemas</C.TaskTitle>
                                                    </C.TaskInfo>
                                                </C.TaskContent>
                                                <C.TaskDetails>
                                                    <C.TaskDuration>Entregue agora</C.TaskDuration>
                                                    <C.TaskLink>Ver atividade</C.TaskLink>
                                                </C.TaskDetails>
                                            </C.Summary>
                                            <C.TaskDescription>
                                                <C.TeacherArea>
                                                    <C.TaskTeacher>
                                                        <img src={teacherprofile} alt="" />
                                                    </C.TaskTeacher>
                                                    <hr />
                                                    <C.Description>
                                                        <C.DescriptionContent>
                                                            <h1>Olá, Alunos.</h1>
                                                            <p>A teacher is responsible for preparing lesson plans and educating students at all levels. Their duties include assigning homework, grading tests, and documenting progress. Teachers must be able to instruct in a variety of subjects and reach students with engaging lesson plans.</p>
                                                        </C.DescriptionContent>

                                                        <C.DescriptionDetails>
                                                            <C.TaskTerm>
                                                                <h1>Prazo até</h1>
                                                                <p>12/12/2022 às 10:30</p>
                                                            </C.TaskTerm>
                                                            <C.TaskDelivery>
                                                                <C.TaskFile>
                                                                    Arquivo enviado!
                                                                </C.TaskFile>
                                                                <C.TaskFinish>
                                                                    <i className="ri-close-line"></i>
                                                                </C.TaskFinish>
                                                            </C.TaskDelivery>
                                                        </C.DescriptionDetails>
                                                    </C.Description>
                                                </C.TeacherArea>

                                                <C.SupportMaterial>
                                                    <C.MaterialItem>
                                                        <i className="ri-link"></i>
                                                        <p>Mindset Student - Oficial.pdf</p>
                                                    </C.MaterialItem>
                                                </C.SupportMaterial>
                                            </C.TaskDescription>
                                        </C.TaskItem>
                                    </C.TaskContainer>
                                </TabPanel>
                            </Tabs>
                        </C.SectionContent>
                    </G.Section>
                </G.Main>
            </G.Content>
            </PermissionGate>
        </G.TestLoader>
    )
}

export default Equipes;