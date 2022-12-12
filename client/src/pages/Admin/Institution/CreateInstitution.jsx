import React, { useState } from "react";
import Axios from 'axios';
import * as C from "../styles";
import GlobalStyle from "../styles"
import Button from '../../../components/Button';
import Loader from "../../../components/Loaders";

const CreateInstitution = () => {
    const url = 'http://localhost:3001/';

    const [name, setName] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [rua, setRua] = useState('');
    const [telefonePrimario, setTelefonePrimario] = useState('');
    const [telefoneSecundario, setTelefoneSecundario] = useState('');
    const [email, setEmail] = useState('');

    const [confirmation, setConfirmation] = useState('');
    const [loading, setLoading] = useState(false);

    const registerInstitutions = () => {
        if (!name | !cep | !cidade | !rua | !telefonePrimario | !email ) {
            setConfirmation("Preencha todos os campos!")
            return;
        } else {
            return Axios.post(`${url}institutions/register`, {
                'name': name,
                'endereco_cep': cep,
                'endereco_cidade': cidade,
                'endereco_rua': rua,
                'telefonePrimario': telefonePrimario,
                'telefoneSecundario': telefoneSecundario,
                'email': email
            })
            .then((response) => {
                return setConfirmation(response.data.message);
            })
            .catch((error) => {
                return setConfirmation(error.response.data.message)
            });
        } 
    }

    const checkRegister = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            return registerInstitutions();
        }, 800);
    }

    return (
        <C.AdminUserContainer>
            <GlobalStyle />
            <C.AdminBody>
                <C.Content enctype="multipart/form-data">
                    <h1>Cadastrar instituição<span>.</span></h1>
                    <C.Body>
                        <C.DividerArea>
                            <h1>Informações Gerais</h1>
                            <C.Line>
                                <C.InputItem>
                                    <label>Nome</label>
                                    <C.InputMain>
                                        <i className="ri-community-line"></i>
                                        <input type="text" placeholder="ETEC São Paulo" onChange={(e) => {setName(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                                <C.InputItem>
                                    <label>Email</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="sp@etec.sp.gov.br" onChange={(e) => {setEmail(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>

                            <C.Line>
                                <C.InputItem>
                                    <label>Telefone Primário</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="(XX) XXXX-XXXX" onChange={(e) => {setTelefonePrimario(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>

                            <C.Line>
                                <C.InputItem>
                                    <label>Telefone Secundário (opcional)</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="(XX) XXXX-XXXX" onChange={(e) => {setTelefoneSecundario(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>
                        </C.DividerArea>

                        <C.Divider></C.Divider>

                        <C.DividerArea>
                            <h1>Endereço</h1>
                            <C.Line>
                                <C.InputItem>
                                    <label>Cidade</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="São Paulo" onChange={(e) => {setCidade(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                                <C.InputItem className="short">
                                    <label>Código Postal</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="01001-000" onChange={(e) => {setCep(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>
                            <C.Line>
                                <C.InputItem>
                                    <label>Endereço</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="Praça da Sé" onChange={(e) => {setRua(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>
                            <C.LabelConfirmation>{confirmation}</C.LabelConfirmation>
                            <Button onClick={() => checkRegister()} >
                                {loading ? <Loader/> : "Continuar"}
                            </Button>
                        </C.DividerArea>
                    </C.Body> 
                </C.Content>
            </C.AdminBody>
        </C.AdminUserContainer>
    )
}

export default CreateInstitution;