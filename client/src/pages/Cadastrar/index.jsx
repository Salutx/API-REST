import React, { useState } from 'react'
import * as C from "./styles";
import Input from '../../components/Input';
import Button from '../../components/Button';
import Axios from 'axios';

const Cadastrar = () => {

    Axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    Axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';

    const url = "http://localhost:3001/usuarios";
    const [data, setData] = useState({
        registroMatricula: "",
        name: "",
        senha: "",
        idade: "",
        email: "",
        telefone: "",
        dataNascimento: "",
        Instituicao_id: "",
    });

    const submit = (e) => {
        e.preventDefault();
        Axios.post(url, {
            registroMatricula: data.registroMatricula,
            name: data.name,
            senha: data.senha,
            idade: data.idade,
            email: data.email,
            telefone: data.telefone,
            dataNascimento: data.dataNascimento,
            Instituicao_id: data.Instituicao_id,
        })
        .then(res => {
            console.log(res.data);
        })
    }

    const handleInputChange = (e) => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    
    return (
        <C.Container>
            <C.Cadastro onSubmit={(e) => submit(e)}>
                <C.Label>CADASTRAR USUÁRIOS</C.Label>
                <C.Main>
                    <C.Content>
                        <Input
                            LabelText="Registro de Matrícula"
                            type="text"
                            placeholder="00"
                            value={data.registroMatricula}
                            onChange={(e) => handleInputChange(e)}
                            name="registroMatricula"
                            id="registroMatricula"
                        />

                        <Input
                            LabelText="Nome"
                            type="text"
                            placeholder="Jason Mary"
                            value={data.name}
                            onChange={(e) => handleInputChange(e)}
                            name="name"
                            id="name"
                        />

                        <Input
                            LabelText="Email"
                            type="email"
                            placeholder="test@test.com"
                            value={data.email}
                            onChange={(e) => handleInputChange(e)}
                            name="email"
                            id="email"
                        />

                        <Input 
                            LabelText="Senha"
                            type="password"
                            placeholder="********"
                            value={data.password}
                            onChange={(e) => handleInputChange(e)}
                            name="password"
                            id="password"
                        />

                    </C.Content>

                    <C.Content>
                        <Input 
                            LabelText="Data de Nascimento"
                            type="text"
                            placeholder="00/00/0000"
                            value={data.dataNascimento}
                            onChange={(e) => handleInputChange(e)}
                            name="dataNascimento"
                            id="dataNascimento"
                        />

                        <Input 
                            LabelText="Idade"
                            type="text"
                            placeholder="00"
                            value={data.idade}
                            onChange={(e) => handleInputChange(e)}
                            name="idade"
                            id="idade"
                        />

                        <Input
                            LabelText="Telefone"
                            type="text"
                            placeholder="XX XXXX-XXXX"
                            value={data.telefone}
                            onChange={handleInputChange}
                            name="telefone"
                            id="telefone"
                        />

                        <Input 
                            LabelText="Cód. Instituição"
                            type="text"
                            placeholder="00"
                            value={data.codInstituicao}
                            onChange={(e) => handleInputChange(e)}
                            name="codInstituicao"
                            id="codInstituicao"
                        />
                    </C.Content>
                </C.Main>

                <C.LabelError></C.LabelError>
                <Button Text="Cadastrar" Type='submit' />

            </C.Cadastro>
        </C.Container>
    )
}

export default Cadastrar