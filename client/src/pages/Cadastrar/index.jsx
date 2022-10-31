import React, { useRef, useState } from 'react'
import * as C from "./styles";
import Button from '../../components/Button';
const apiConfig = require('../../base/api');

const Cadastrar = () => {

    const refName = useRef("");
    const refRegistroMatricula = useRef("");
    const refSenha = useRef("");
    const refIdade = useRef("");
    const refEmail = useRef("");
    const refTelefone = useRef("");
    const refDataNascimento = useRef("");
    const refInstituicaoId = useRef("");

    const [error, setError] = useState("");
    const [success, setSucess] = useState("");

    function createUsuario() {

        if(!refName.current.value | !refRegistroMatricula.current.value | !refSenha.current.value | !refIdade.current.value | !refEmail.current.value | !refTelefone.current.value | !refDataNascimento.current.value | !refInstituicaoId.current.value) {
            setError("Preencha todos os campos!")
            return;
        }

        const createUsuario = {
            name: refName.current.value,
            registroMatricula: refRegistroMatricula.current.value,
            senha: refSenha.current.value,
            idade: refIdade.current.value,
            email: refEmail.current.value,
            telefone: refTelefone.current.value,
            dataNascimento: refDataNascimento.current.value,
            Instituicao_id: refInstituicaoId.current.value
        };

        try {
            fetch(apiConfig.urlAPI + "usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": "token-value",
                },
                body: JSON.stringify(createUsuario)
            })

            .then((response) => response.json())

            .then(data => {
                if(!data.ok) {
                    const message = `${data.message}`;
                    setError(message)
                    throw new Error(message);
                } else {
                    const message = `${data.message}`;
                    setSucess(message)
                }
            })

        } catch (err) {
            setError(err)
        }
    }
        return (
            <C.Container>
                <C.Cadastro onSubmit={(e) => e.preventDefault()}>
                    <C.Label>CADASTRAR USUÁRIOS</C.Label>
                    <C.Main>
                        <C.Content>
                            <div className='form-item'>
                                <label className='form-label'>Registro de Matrícula</label>
                                <input
                                    type="text"
                                    placeholder="00"
                                    ref={refRegistroMatricula}
                                    name="registroMatricula"
                                    id="registroMatricula"
                                    onChange={(e) => setError("")}
                                />
                            </div>
            
                            <div className='form-item'>
                                <label className='form-label'>Nome</label>
                                <input
                                    type="text"
                                    placeholder="Jason Mary"
                                    ref={refName}
                                    name="name"
                                    id="name"
                                    onChange={(e) => setError("")}
                                />
                            </div>
    
                            <div className='form-item'>
                                <label className='form-label'>Email</label>
                                <input
                                    type="email"
                                    placeholder="test@test.com"
                                    ref={refEmail}
                                    name="email"
                                    id="email"
                                    onChange={(e) => setError("")}
                                />
                            </div>

                            <div className='form-item'>
                                <label className='form-label'>Senha</label>
                                <input 
                                    type="password"
                                    placeholder="********"
                                    ref={refSenha}
                                    name="password"
                                    id="password"
                                    onChange={(e) => setError("")}
                                />
                            </div>
    
                        </C.Content>
    
                        <C.Content>
                            <div className='form-item'>
                                <label className='form-label'>Data de Nascimento</label>
                                <input 
                                    type="text"
                                    placeholder="00/00/0000"
                                    ref={refDataNascimento}
                                    name="dataNascimento"
                                    id="dataNascimento"
                                    onChange={(e) => setError("")}
                                />
                            </div>

                            <div className='form-item'>
                                <label className='form-label'>Idade</label>
                                <input 
                                    type="text"
                                    placeholder="00"
                                    ref={refIdade}
                                    name="idade"
                                    id="idade"
                                    onChange={(e) => setError("")}
                                />
                            </div>

    
                            <div className='form-item'>
                                <label className='form-label'>Telefone</label>
                                <input
                                    type="text"
                                    placeholder="XX XXXX-XXXX"
                                    ref={refTelefone}
                                    name="telefone"
                                    id="telefone"
                                    onChange={(e) => setError("")}
                                />
                            </div>


                            <div className='form-item'>
                                <label className='form-label'>Cód. Instituição</label>
                                <input 
                                    type="text"
                                    placeholder="00"
                                    ref={refInstituicaoId}
                                    name="codInstituicao"
                                    id="codInstituicao"
                                    onChange={(e) => setError("")}
                                />
                            </div>
                        </C.Content>
                    </C.Main>
    
                    <C.LabelError>{ error }</C.LabelError>
                    <C.LabelSuccess>{ success }</C.LabelSuccess>
                    <Button Text="Cadastrar" onClick={ createUsuario } />
    
                </C.Cadastro>
            </C.Container>
        )
}

export default Cadastrar