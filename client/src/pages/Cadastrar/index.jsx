import React, { useRef, useState } from 'react'
import * as C from "./styles";
import Input from '../../components/Input';
import Button from '../../components/Button';
const apiConfig = require('../../base/api');

const Cadastrar = () => {
    
    const post_name = useRef(null);
    const post_registroMatricula = useRef(null);
    const post_senha = useRef(null);
    const post_idade = useRef(null);
    const post_email = useRef(null);
    const post_telefone = useRef(null);
    const post_dataNascimento = useRef(null);
    const post_Instituicao_id = useRef(null);

    const [postResult, setPostResult] = useState(null);

    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    }

    async function createUsuario() {
        const createUsuario = {
            name: post_name.current.value,
            registroMatricula: post_registroMatricula.current.value,
            senha: post_senha.current.value,
            idade: post_idade.current.value,
            email: post_email.current.value,
            telefone: post_telefone.current.value,
            dataNascimento: post_dataNascimento.current.value,
            Instituicao_id: post_Instituicao_id.current.value
        };

        try {
            const res = await fetch(apiConfig.urlAPI + "usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": "token-value",
                },
                body: JSON.stringify(createUsuario)
            });

            if(!res.ok) {
                const message = `Ocorreu um erro: ${res.status} - ${res.statusText}`;
                throw new Error(message);
            }

            const data = await res.json();

            const result = {
                data
            };

            setPostResult(fortmatResponse(result));

        } catch (err) {
            setPostResult(err.message)
        }
    }

    // const handleInputChange = (e) => {
    //     const newdata = { ...data }
    //     newdata[e.target.id] = e.target.value
    //     setData(newdata)
    // }

        return (
            <C.Container>
                <C.Cadastro>
                    <C.Label>CADASTRAR USUÁRIOS</C.Label>
                    <C.Main>
                        <C.Content>
                            <Input
                                LabelText="Registro de Matrícula"
                                type="text"
                                placeholder="00"
                                ref={post_registroMatricula}
                                name="registroMatricula"
                                id="registroMatricula"
                            />
    
                            <Input
                                LabelText="Nome"
                                type="text"
                                placeholder="Jason Mary"
                                ref={post_name}
                                name="name"
                                id="name"
                            />
    
                            <Input
                                LabelText="Email"
                                type="email"
                                placeholder="test@test.com"
                                ref={post_email}
                                name="email"
                                id="email"
                            />
    
                            <Input 
                                LabelText="Senha"
                                type="password"
                                placeholder="********"
                                ref={post_senha}
                                name="password"
                                id="password"
                            />
    
                        </C.Content>
    
                        <C.Content>
                            <Input 
                                LabelText="Data de Nascimento"
                                type="text"
                                placeholder="00/00/0000"
                                ref={post_dataNascimento}
                                name="dataNascimento"
                                id="dataNascimento"
                            />
    
                            <Input 
                                LabelText="Idade"
                                type="text"
                                placeholder="00"
                                ref={post_idade}
                                name="idade"
                                id="idade"
                            />
    
                            <Input
                                LabelText="Telefone"
                                type="text"
                                placeholder="XX XXXX-XXXX"
                                ref={post_telefone}
                                name="telefone"
                                id="telefone"
                            />
    
                            <Input 
                                LabelText="Cód. Instituição"
                                type="text"
                                placeholder="00"
                                ref={post_Instituicao_id}
                                name="codInstituicao"
                                id="codInstituicao"
                            />
                        </C.Content>
                    </C.Main>
    
                    <C.LabelError></C.LabelError>
                    <Button Text="Cadastrar" onClick={createUsuario} />
    
                </C.Cadastro>
            </C.Container>
        )
}

export default Cadastrar