import './styles.js';
import * as C from "./styles";
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth.js';
import { useState } from 'react';
import Logo from '../../assets/images/NewLogo.png';

const Signin = () => {

    const { signin } = useAuth();
    const navigate = useNavigate();

    const [nascimento, setNascimento] = useState("");
    const [instituicao, setInstituicao] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!nascimento | !instituicao | !email | !senha) {
            setError("Preencha todos os campos!");
            return;
        }

        const res = signin(nascimento, instituicao, email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/inicio");
    };

    return (
        <C.Container>

            <C.Border>
                <img src={ Logo } alt="" />
                
                <C.FormHeader>
                    <C.Title>MINDSET <C.Highlight>STUDENT</C.Highlight></C.Title>
                    <C.Apresentation>Bem-vindo(a) de volta, por favor entre na sua conta.</C.Apresentation>
                </C.FormHeader>
                <C.Content>
                    <C.Line>
                        <Input
                            LabelText="Nascimento"
                            type="number"
                            placeholder="00-00-0000"
                            value={nascimento}
                            onChange={(e) => [setNascimento(e.target.value), setError("")]}
                        />

                        <Input 
                            LabelText="Cód. Instituição"
                            type="number"
                            placeholder="000"
                            value={instituicao}
                            onChange={(e) => [setInstituicao(e.target.value), setError("")]}
                        />
                    </C.Line>

                    <Input
                        LabelText="Email"
                        type="email"
                        placeholder="test@test.com"
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />

                    <Input 
                        LabelText="Senha"
                        type="password"
                        placeholder="********"
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />

                    <C.LabelError>{ error }</C.LabelError>
                    <Button Text="Continuar" onClick={handleLogin} />
                </C.Content>
            </C.Border>
        </C.Container>
    )
}

export default Signin;