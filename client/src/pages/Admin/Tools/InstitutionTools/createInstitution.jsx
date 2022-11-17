import React, { useState } from "react";
import Axios from 'axios';
import * as C from "../styles";
import GlobalStyle from "../styles"
import Logo from '../../../../components/Logo';
import Button from '../../../../components/Button';
import Loader from "../../../../components/Loaders";

const CreateInstitution = ({ closeCreateInstitution }) => {
    const url = 'http://localhost:3001/';

    const [name, setName] = useState('');
    const [enderecoCEP, setEnderecoCEP] = useState('');
    const [enderecoCIDADE, setEnderecoCIDADE] = useState('');
    const [enderecoRUA, setEnderecoRUA] = useState('');
    const [telefonePrimario, setTelefonePrimario] = useState('');
    const [telefoneSecundario, setTelefoneSecundario] = useState('');
    const [email, setEmail] = useState('');

    const [confirmation, setConfirmation] = useState('');
    const [loading, setLoading] = useState(false);

    const registerInstitutions = async () => {
        if (!name | !enderecoCEP | !enderecoCIDADE | !enderecoRUA | !telefonePrimario | !telefoneSecundario | !email ) {
            setConfirmation("Preencha todos os campos!")
            return;
        } 

        const formData = new FormData();
        formData.append('name', name);
        formData.append('endereco_cep', enderecoCEP);
        formData.append('endereco_cidade', enderecoCIDADE);
        formData.append('endereco_rua', enderecoRUA);
        formData.append('telefonePrimario', telefonePrimario);
        formData.append('telefoneSecundario', telefoneSecundario);
        formData.append('email', email);

        try {
            console.log(formData)
            await Axios.post(`${url}instituicoes/register`, formData);
            return setConfirmation('Instituição registrada com sucesso!');
        } catch (err) {
            console.error(err)
            return setConfirmation(err.response.data.message);
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
                <C.AdminHeader>
                    <Logo />
                    <button onClick={() => closeCreateInstitution(false)}>
                        <i className="ri-close-line"></i>
                    </button>
                </C.AdminHeader>

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
                                        <input type="text" placeholder="São Paulo" onChange={(e) => {setEnderecoCIDADE(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                                <C.InputItem className="short">
                                    <label>Código Postal</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="01001-000" onChange={(e) => {setEnderecoCEP(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>
                            <C.Line>
                                <C.InputItem>
                                    <label>Endereço</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="Praça da Sé" onChange={(e) => {setEnderecoRUA(e.target.value); setConfirmation('')}} />
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