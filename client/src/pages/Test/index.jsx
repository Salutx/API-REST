import React, {useState} from 'react'
import * as C from './styles.js';
import image from '../../assets/images/darklp2.svg'
import LoginForm from "../../components/Modals/LoginForm";

const Test = () => {
    const [openLoginForm, setOpenLoginForm] = useState(false);

    return (
        <>
            <C.Main>
                {openLoginForm && <LoginForm closeLogin={setOpenLoginForm}/>}
                <C.Container>
                    <C.MainContainer>
                        <C.Header>
                            <C.Brand>
                                <span>Mindset</span> Student
                            </C.Brand>

                            <C.BtnCall onClick={() => {setOpenLoginForm(true)}}>
                                Dashboard
                                <i className="ri-login-box-line"></i>
                            </C.BtnCall>
                        </C.Header>

                        <C.Hero>
                            <C.HeroCTA>
                                <C.CTAHeader>
                                    <p>v.2</p>
                                    <h1>Seu planejamento e sua gestão escolar, em apenas um só lugar.</h1>
                                </C.CTAHeader>
                                <C.CTAContainer>
                                    <C.CTABody>
                                        Descubra e utilize as mais variadas ferramentas que disponibilizamos em nossa plataforma!
                                    </C.CTABody>
                                    <C.CTAButtons>
                                        <C.BtnCall className="active" onClick={() => {setOpenLoginForm(true)}}>
                                            Dashboard
                                            <i className="ri-login-box-line"></i>
                                        </C.BtnCall>
                                        <C.BtnSupport>Suporte</C.BtnSupport>
                                    </C.CTAButtons>
                                </C.CTAContainer>
                            </C.HeroCTA>

                            <C.HeroImage>
                                <img src={image} alt="hero" />
                            </C.HeroImage>
                        </C.Hero>
                    </C.MainContainer>
                </C.Container>
            </C.Main>
        </>
    )
}

export default Test