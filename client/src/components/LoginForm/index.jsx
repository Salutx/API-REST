import React from "react";
import * as C from "./styles";
import Logo from '../Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginForm = ({ closeLogin }) => {
    return (
        <C.LoginContainer>
            <C.LoginBody>
                <C.LoginHeader>
                    <Logo />
                    <button onClick={() => closeLogin(false)}>
                        <i className="ri-close-line"></i>
                    </button>
                </C.LoginHeader>

                <C.LoginMain>
                    <C.Content>
                        <h1>Autentique-se<span>.</span></h1>
                        <C.Line>
                            <Input
                                LabelText="Nascimento"
                                type="number"
                                placeholder="00-00-0000"
                            />

                            <Input 
                                LabelText="Cód. Instituição"
                                type="number"
                                placeholder="000"
                            />
                        </C.Line>

                        <Input
                            LabelText="Email"
                            type="email"
                            placeholder="test@test.com"
                        />

                        <Input 
                            LabelText="Senha"
                            type="password"
                            placeholder="********"
                        />

                        <C.LabelError></C.LabelError>
                        <Button Text="Continuar" />
                    </C.Content>

                    <C.LoginDivider>ou</C.LoginDivider>

                    <C.LoginSupport>
                        <h1>Quer <span>cadastrar</span> sua instituição na plataforma?</h1>
                        <C.SupportButton>Contatar Suporte</C.SupportButton>
                    </C.LoginSupport>
                </C.LoginMain>
            </C.LoginBody>
        </C.LoginContainer>
    )
}

export default LoginForm;