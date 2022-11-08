import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import * as C from "./styles";
import Logo from '../../Logo';
import Input from '../../Input';
import Button from '../../Button';
import Axios from 'axios';

const LoginForm = ({ closeLogin }) => {

    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [codInstituicao, setCodInstituicao] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const url = 'http://localhost:3001/';

    const login = () => {
        if(!nascimento | !codInstituicao | !email | !senha) {
            setError("Preencha todos os campos!");
            return;
        }
        Axios.post(`${url}users/login`, {
            email: email,
            dataNascimento: nascimento,
            Instituicao_id: codInstituicao,
            senha: senha
        })
        .then((response) => {
            if(!response) {
                setError(response.data);
                console.log(response.data);
                return;
            } else {
                const token = response.data.token
                signin(token)
                localStorage.setItem("access-token", token)
                localStorage.setItem("access-inst", codInstituicao)
                console.log(response);
                navigate("/inicio");
            }
        })
        .catch(error => setError("Erro na autenticação."))
    }

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
                                onChange={(e) => [setNascimento(e.target.value), setError("")]}
                            />

                            <Input 
                                LabelText="Cód. Instituição"
                                type="number"
                                placeholder="000"
                                onChange={(e) => [setCodInstituicao(e.target.value), setError("")]}
                            />
                        </C.Line>

                        <Input
                            LabelText="Email"
                            type="email"
                            placeholder="test@test.com"
                            onChange={(e) => [setEmail(e.target.value), setError("")]}
                        />

                        <Input 
                            LabelText="Senha"
                            type="password"
                            placeholder="********"
                            onChange={(e) => [setSenha(e.target.value), setError("")]}
                        />

                        <C.LabelError>{ error }</C.LabelError>
                        <Button Text="Continuar" onClick={login} />
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