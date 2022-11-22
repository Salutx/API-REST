import React, { useState, useEffect } from "react";
import Axios from 'axios';
import * as C from "../styles";
import GlobalStyle from "../styles"
import Logo from '../../../../../components/Logo';
import Button from '../../../../../components/Button';
import Loader from "../../../../../components/Loaders";

const CreateUser = ({ closeCreateUser }) => {
    const url = 'http://localhost:3001/';

    const [selectedValue, setSelectedValue] = ('');
    const [nascimento, setNascimento] = useState('');
    const [name, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [registroMatricula, setRegistroMatricula] = useState('');
    const [codInstitution, setCodInstitution] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [avatar, setAvatar] = useState();
    const [permissions, setPermissions] = useState();
    const [institutions, setInstitutions] = useState(null);

    const [confirmation, setConfirmation] = useState('');
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        getInstitutions();
	}, []);

    const getInstitutions = async () => {
        try {
            const response = await Axios.get(`${url}institutions/`)
            return setInstitutions(response.data.institutions);
        } catch (error) {
            return console.log(error)
        }
    }

    const registerUsers = async() => {
        if (!registroMatricula | !name | !senha | !email | !telefone | !nascimento | !avatar | !codInstitution | !permissions) {
            setConfirmation("Preencha todos os campos!")
            return;
        } else {
            const formData = new FormData();
            formData.append('registroMatricula', registroMatricula);
            formData.append('name', name);
            formData.append('senha', senha);
            formData.append('email', email);
            formData.append('telefone', telefone);
            formData.append('dataNascimento', nascimento);
            formData.append('avatar', avatar);
            formData.append('user_permissions', permissions);
            formData.append('instituicao_id', codInstitution);
    
            return await Axios.post(`${url}users/register`, formData)
            .then((response) => {
                return setConfirmation(response.data.message);
            })
            .catch((error) => {
                return setConfirmation(error.response.data.message);
            });
        }
    }

    const changeHandler = (event) => {
        return setAvatar(event.target.files[0]);
    }

    const checkRegister = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            return registerUsers();
        }, 800); 
    }

    return (
        <C.AdminUserContainer>
            <GlobalStyle />
            <C.AdminBody>
                <C.AdminHeader>
                    <Logo />
                    <button onClick={() => closeCreateUser(false)}>
                        <i className="ri-close-line"></i>
                    </button>
                </C.AdminHeader>

                <C.Content enctype="multipart/form-data">
                    <h1>Cadastrar usuário<span>.</span></h1>
                    <C.Body>
                        <C.DividerArea>
                            <h1>Dados pessoais</h1>
                            <C.Line>
                                <C.InputItem>
                                    <label>Usuário</label>
                                    <C.InputSelect onChange={(e) => {setSelectedValue(e.target.value)}}>
                                        <option value="">Selecione</option>
                                        <option value="1">Aluno</option>
                                        <option value="2">Professor</option>
                                    </C.InputSelect>
                                </C.InputItem>
                            </C.Line>

                            {
                            }

                            <C.Line>
                                <C.InputItem className="short">
                                    <label>Nascimento</label>
                                    <C.InputMain>
                                        <i className="ri-calendar-line"></i>
                                        <input type="text" placeholder="19/08/1988" onChange={(e) => {setNascimento(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>

                                <C.InputItem>
                                    <label>Nome completo</label>
                                    <C.InputMain>
                                        <i className="ri-user-line"></i>
                                        <input type="text" placeholder="John Doe" onChange={(e) => {setName(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>

                            <C.Line>
                                <C.InputItem>
                                    <label>Telefone</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="(XX) XXXX-XXXX" onChange={(e) => {setTelefone(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>

                            <C.Line>
                                <C.InputItem>
                                    <label>RM</label>
                                    <C.InputMain>
                                        <input type="number" placeholder="00" onChange={(e) => {setRegistroMatricula(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>

                                <C.InputItem>
                                    <label>Cód. Instituição</label>
                                    <C.InputSelect onChange={(e) => {setCodInstitution(e.target.value); setConfirmation('')}}>
                                        <option value="">Selecione</option>
                                        {
                                            institutions?.map((institution) => {
                                                return (
                                                    <option 
                                                        key={institution.id} 
                                                        value={institution.id}>

                                                        {institution.name}
                                                    </option>
                                                )
                                            })
                                        }
                                    </C.InputSelect>
                                </C.InputItem>
                            </C.Line>
                        </C.DividerArea>

                        <C.Divider></C.Divider>

                        <C.DividerArea>
                            <h1>Autenticação</h1>
                            <C.Line>
                                <C.InputItem>
                                    <label>Email</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="test@etec.sp.gov.br" onChange={(e) => {setEmail(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>
                            <C.Line className="flex-end">
                                <C.InputItem>
                                    <label>Senha</label>
                                    <C.InputMain>
                                        <input type="password" placeholder="********" onChange={(e) => {setSenha(e.target.value); setConfirmation('')}} />
                                        <i className="ri-eye-line"></i>
                                    </C.InputMain>
                                </C.InputItem>
                                <C.btnGerar>Gerar</C.btnGerar>
                            </C.Line>

                            <C.Line>
                                <C.InputItem>
                                    <label>Avatar</label>
                                    <C.InputMain>
                                        <input type="file" name="file" onChange={changeHandler} />
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

export default CreateUser;