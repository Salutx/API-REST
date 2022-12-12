import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import * as C from "./styles";
import Logo from '../../Logo';
import Input from '../../Input';
import Button from '../../Button';
import Loader from "../../Loaders";
import Axios from 'axios';
import GlobalStyle from './styles';

const LoginForm = ({ closeLogin }) => {

    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [codInstituicao, setCodInstituicao] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const url = 'http://localhost:3001/';

    const login = () => {
        if(!nascimento | !codInstituicao | !email | !senha) {
            setError("Preencha todos os campos!");
        }
        Axios.post(`${url}categorys/login`, {
            email: email,
            birth_date: nascimento,
            institution_id: codInstituicao,
            passwordHash: senha
        })
        .then((response) => {
            const token = response.data.token;
            signin(token)
            localStorage.setItem("access-token", token);
            localStorage.setItem("access-inst", codInstituicao);
            navigate("/dashboard");
        })
        .catch((error) => setError(error))
    }
    
    const LoginCheck = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            login();
        }, 800); 
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          LoginCheck();
        }
    }

    return (
        <C.LoginContainer status={closeLogin} onKeyDown={handleKeyDown}>
            <GlobalStyle/>
            <C.LoginBody>
                <C.LoginHeader>
                    <Logo />
                    <button onClick={() => closeLogin(false)}>
                        <i className="ri-close-line"></i>
                    </button>
                </C.LoginHeader>

                <C.LoginMain>
                    <C.Content confirmation={error}>
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

                        <Button onClick={() => [LoginCheck()]}>
                            {loading ? <Loader/> : error ? "Tente novamente" : "Continuar"}
                        </Button>
                        
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