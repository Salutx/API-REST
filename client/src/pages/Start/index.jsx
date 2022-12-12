import { useState } from "react";
import * as C from "./styles";
import GlobalStyle from "./styles";
import Thumbnail from '../../assets/images/app-thumb.svg';
import LoginForm from "../../components/Modals/LoginForm";
import LPHeader from "../../components/LandingPage/Header"
import Container from "../../components/Container";
import SupportButton from "../../components/SupportButton";

const Signin = () => {
    const [openLoginForm, setOpenLoginForm] = useState(false);

    return (
        <>
            <C.Main>
                {openLoginForm && <LoginForm closeLogin={setOpenLoginForm}/>}
                <GlobalStyle />

                <LPHeader>
                    <C.LoginButton onClick={() => {setOpenLoginForm(true)}}>
                        FAZER LOGIN
                    </C.LoginButton>
                </LPHeader>

                <Container>
                    <C.Hero>
                        <C.HeroDisplay>
                            Gestão escolar <br/>
                            <strong>sem limites</strong> 
                        </C.HeroDisplay>

                        <C.HeroCall>
                            <p>Acesse a plataforma e utilize as várias ferramentas acadêmicas</p>
                            <C.HeroButtons>
                                <button onClick={() => {setOpenLoginForm(true)}}>Iniciar plataforma</button>
                                <button>
                                    Ler documentação
                                    <i className="ri-arrow-right-line"></i>
                                </button>
                            </C.HeroButtons>
                        </C.HeroCall>
                    </C.Hero>
                    <C.About>
                        <img src={ Thumbnail } alt="" />
                        <C.Benefits>
                            <C.BenefitsItem>
                                <C.BenefitsRetangle></C.BenefitsRetangle>
                                <C.BenefitsTitle>
                                    O sistema acadêmico
                                </C.BenefitsTitle>
                                <C.BenefitsContent>
                                    Uma plataforma de gestão escolar, que lhe <br/>
                                    proporciona a realização de tarefas e interação <br/>
                                    com outros usuários
                                </C.BenefitsContent>
                            </C.BenefitsItem>

                            <C.BenefitsItem>
                                <C.BenefitsRetangle className="secundary"></C.BenefitsRetangle>
                                <C.BenefitsTitle>
                                    Para o que serve?
                                </C.BenefitsTitle>
                                <C.BenefitsContent>
                                    Uma plataforma de gestão escolar, que lhe <br/>
                                    proporciona a realização de tarefas e interação <br/>
                                    com outros usuários
                                </C.BenefitsContent>
                            </C.BenefitsItem>
                        </C.Benefits>
                    </C.About>
                    <C.Arrow>
                        <i className="ri-arrow-down-s-line"></i>
                    </C.Arrow>
                </Container>
            </C.Main>
            <C.Section>
                <Container>
                    <C.SectionContainer>
                        <C.GridLayout>  
                            
                            <C.StrategicArea className="card card-black">
                                <C.CardHeader>
                                    <C.CardIcon>
                                        <i className="ri-bubble-chart-line"></i>
                                    </C.CardIcon>
                                    <h1>Conceitos Estratégicos</h1>
                                </C.CardHeader>
                                <C.CardBody>
                                    <C.CardItem>
                                        <C.BodyIcon>
                                            <i className="ri-mind-map"></i>
                                        </C.BodyIcon>
                                        <C.BodyContent>
                                            <h1>UI/UX Design</h1>
                                            <p>Estudamos como, onde e porquê os elementos são formados e como são distribuidos.</p>
                                        </C.BodyContent>
                                    </C.CardItem>

                                    <C.CardItem>
                                        <C.BodyIcon>
                                            <i className="ri-cloud-windy-line"></i>
                                        </C.BodyIcon>
                                        <C.BodyContent>
                                            <h1>Performance e Estabilidade</h1>
                                            <p>Com os conceitos estratégicos, a plataforma conta com performance e estabilidade.</p>
                                        </C.BodyContent>
                                    </C.CardItem>
                                </C.CardBody>
                            </C.StrategicArea>

                            <C.SecurityArea className="card card-black">
                                <C.CardHeader>
                                    <C.CardIcon>
                                        <i className="ri-lock-2-line"></i>
                                    </C.CardIcon>
                                    <h1>Práticas de segurança</h1>
                                </C.CardHeader>
                                <C.CardBody>
                                    <C.CardItem>
                                        <C.BodyIcon>
                                            <i className="ri-lock-2-line"></i>
                                        </C.BodyIcon>
                                        <C.BodyContent>
                                            <h1>Os seus dados são criptografados</h1>
                                            <p>Os dados utilizados dentro da plataforma são criptografados por uma conexão segura.</p>
                                        </C.BodyContent>
                                    </C.CardItem>

                                    <C.CardItem>
                                        <C.BodyIcon>
                                            <i className="ri-cloud-windy-line"></i>
                                        </C.BodyIcon>
                                        <C.BodyContent>
                                            <h1>Os dados não são visíveis</h1>
                                            <p>A visibilidade dos dados sensíveis são inacessíveis, consulte a disponibilização dos mesmos.</p>
                                        </C.BodyContent>
                                    </C.CardItem>
                                </C.CardBody>
                            </C.SecurityArea>

                            <C.SupportArea className="card card-black">
                                <C.SupportHeader>
                                    <C.CardTag>SUPORTE</C.CardTag>
                                    <h1>Sempre preparados para atender suas <strong>necessidades.</strong></h1>
                                </C.SupportHeader>

                                <SupportButton>Contatar suporte</SupportButton>
                            </C.SupportArea>

                            <C.FunctionsArea className="card card-black">
                                <C.CardHeader>
                                    <C.CardIcon>
                                        <i className="ri-dashboard-line"></i>
                                    </C.CardIcon>
                                    <h1>Funções & Serviços</h1>
                                </C.CardHeader>
                                <C.CardBody>
                                    <C.CardItem>
                                        <C.BodyIcon>
                                            <i className="ri-inbox-line"></i>
                                        </C.BodyIcon>
                                        <C.BodyContent>
                                            <h1>Caixa de Entrada</h1>
                                            <p>Verifique as mensagens determinadas por prioridades.</p>
                                        </C.BodyContent>
                                    </C.CardItem>

                                    <C.CardItem>
                                        <C.BodyIcon>
                                            <i className="ri-file-list-3-line"></i>
                                        </C.BodyIcon>
                                        <C.BodyContent>
                                            <h1>Atividades</h1>
                                            <p>Faça, entregue, comente e compartilhe as atividades com seus amigos.</p>
                                        </C.BodyContent>
                                    </C.CardItem>

                                    <C.CardItem>
                                        <C.BodyIcon>
                                            <i className="ri-calendar-todo-line"></i>
                                        </C.BodyIcon>
                                        <C.BodyContent>
                                            <h1>Agenda</h1>
                                            <p>Crie marcações que serão lembradas nas suas notificações, criado para se organizar.</p>
                                        </C.BodyContent>
                                    </C.CardItem>

                                    <C.CardItem>
                                        <C.BodyIcon>
                                            <i className="ri-community-line"></i>
                                        </C.BodyIcon>
                                        <C.BodyContent>
                                            <h1>Instituição/Organização</h1>
                                            <p>Entre em contato com a sua instituição de forma descomplicada e fácil.</p>
                                        </C.BodyContent>
                                    </C.CardItem>

                                    <C.CardItem>
                                        <C.BodyIcon>
                                            <i className="ri-team-line"></i>
                                        </C.BodyIcon>
                                        <C.BodyContent>
                                            <h1>Equipes</h1>
                                            <p>Trabalho em grupo é essencial para o desenvolvimento humano.</p>
                                        </C.BodyContent>
                                    </C.CardItem>

                                    <C.CardItem>
                                        <C.BodyIcon>
                                            <i className="ri-pie-chart-2-line"></i>
                                        </C.BodyIcon>
                                        <C.BodyContent>
                                            <h1>Boletim</h1>
                                            <p>Verifique notas e faltas juntamente com as suas estatísticas.</p>
                                        </C.BodyContent>
                                    </C.CardItem>

                                    <C.CardItem>
                                        <C.BodyIcon>
                                            <i className="ri-user-line"></i>
                                        </C.BodyIcon>
                                        <C.BodyContent>
                                            <h1>Usuário</h1>
                                            <p>Personalize suas informações e crie um perfil proativo.</p>
                                        </C.BodyContent>
                                    </C.CardItem>
                                </C.CardBody>
                            </C.FunctionsArea>
                        
                            <C.SectionCounter className="card">
                                <C.CounterMain>
                                    <C.CardTag>CONTADOR</C.CardTag>
                                    <h1>Temos atualmente <strong>38</strong> instituições e <strong>247</strong> usuários.</h1>
                                </C.CounterMain>

                                <SupportButton>Fazer Login</SupportButton>
                            </C.SectionCounter>
                        </C.GridLayout>

                    </C.SectionContainer>
                    </Container> 
            </C.Section>

            <C.Footer>
                <Container>
                    <C.FooterContainer>
                        <C.FooterCreated>
                            Feito com 
                            <i className="ri-heart-line"></i>
                            <strong>Irregular Team</strong>
                        </C.FooterCreated>
                        <C.FooterCopyright>
                            Copyright 2022, <strong>Mindset Student.</strong>
                        </C.FooterCopyright>
                    </C.FooterContainer>
                </Container>
            </C.Footer>
        </>
    )
}

export default Signin;