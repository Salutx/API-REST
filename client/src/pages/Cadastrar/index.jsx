import React, { useState } from 'react'
import * as C from "./styles";
import Input from '../../components/Input';
import Button from '../../components/Button';
import UsuarioService from '../../services/usuario.services.js';
 
const Cadastrar = () => {

    const initialUsuarioState = {
        id: null,
        name: "",
        nascimento: "",
        codInstituicao: "",
        email: "",
        password: "",

        sended: false,
    };

    const [usuario, setUsuario] = useState(initialUsuarioState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUsuario({ [name]: value })
    }

    const saveUsuario = () => {
        var data = {
            id: null,
            name: usuario.name,
            nascimento: usuario.nascimento,
            codInstituicao: usuario.codInstituicao,
            email: usuario.email,
            password: usuario.password,
        };
    
        UsuarioService.create(data)
          .then(response => {
            setUsuario({
              id: response.data.id,
              name: response.data.name,
              nascimento: response.data.nascimento,
              codInstituicao: response.data.codInstituicao,
              email: response.data.email,
              password: response.data.password,
            });
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

    const newUsuario = () => {
        setUsuario(initialUsuarioState);
        setSubmitted(false);
    }
    
    return (
            <C.Container>
            <C.Label>CADASTRAR USUÁRIOS</C.Label>
            <C.Content>
                <Input
                    LabelText="Nome"
                    type="text"
                    placeholder="Jason Mary"
                    value={usuario.name}
                    onChange={handleInputChange}
                    name="name"
                />

                <Input
                    LabelText="Nascimento"
                    type="number"
                    placeholder="00-00-0000"
                    value={usuario.nascimento}
                    onChange={handleInputChange}
                    name="nascimento"
                />

                <Input 
                    LabelText="Cód. Instituição"
                    type="number"
                    placeholder="000"
                    value={usuario.codInstituicao}
                    onChange={handleInputChange}
                    name="codInstituicao"
                />

                <Input
                    LabelText="Email"
                    type="email"
                    placeholder="test@test.com"
                    value={usuario.email}
                    onChange={handleInputChange}
                    name="email"
                />

                <Input 
                    LabelText="Senha"
                    type="password"
                    placeholder="********"
                    value={usuario.password}
                    onChange={handleInputChange}
                    name="password"
                />

            <C.LabelError></C.LabelError>

            <Button Text="Cadastrar" onClick={newUsuario} />
            </C.Content>
        </C.Container>
    )
}

export default Cadastrar