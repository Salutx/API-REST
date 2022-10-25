import React from 'react'
import * as C from "./styles";
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';

const SignUp = () => {

    const { signup } = useAuth();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [instituicao, setInstituicao] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = () => {
        if (!nascimento | !instituicao | !email | !senha | !nome) {
            setError("Preencha todos os campos");
            return;
        }
      
        const res = signup(nascimento, instituicao, email, senha, nome);
      
        if (res) {
            setError(res);
            return;
        }
      
          alert("Usuário cadastrado com sucesso!");
          navigate("/");
    };

    return (
    <C.Container>
    <C.Label>CADASTRAR USUÁRIOS</C.Label>
    <C.Content>
            <Input
                LabelText="Nome"
                type="text"
                placeholder="Jason Mary"
                value={nome}
                onChange={(e) => [setNome(e.target.value), setError("")]}
            />

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

        <Button Text="Cadastrar" onClick={handleSignUp} />
    </C.Content>
</C.Container>
  )
}

export default SignUp;