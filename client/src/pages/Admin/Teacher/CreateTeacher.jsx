import React, { useState, useEffect } from "react";
import Axios from 'axios';
import * as C from "../styles";
import GlobalStyle from "../styles"
import Button from '../../../components/Button';
import Loader from "../../../components/Loaders";

const CreateTeacher = () => {
    const url = 'http://localhost:3001/';

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [codInstitution, setCodInstitution] = useState('');
    const [email, setEmail] = useState('');
    const [registroMatricula, setRegistroMatricula] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState();

    const [institutions, setInstitutions] = useState([]);

    const [confirmation, setConfirmation] = useState('');
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        getInstitutions();
	}, []);

    const getInstitutions = async () => {
        try {
            const response = await Axios.get(`${url}institutions/`);
            return setInstitutions(response.data.institutions);
        } catch (error) {
            return console.log(error)
        }
        
    }

    const registerTeachers = async () => {
        if (!registroMatricula | !firstName | !lastName | !nascimento | !email | !password | !avatar |  !codInstitution) {
            setConfirmation("Preencha todos os campos!")
            return;
        }

        const formData = new FormData();
            formData.append('registroMatricula', registroMatricula);
            formData.append('first_name', firstName);
            formData.append('last_name', lastName);
            formData.append('birth_date', nascimento);
            formData.append('email', email);
            formData.append('passwordHash', password);
            formData.append('user_type', "Professor");
            formData.append('telefone', telefone);
            formData.append('avatar', avatar);
            formData.append('is_active', "Ativo");
            formData.append('institution_id', codInstitution);

        try {
            console.log(formData);
            const response = await Axios.post(`${url}teachers/register`, formData)
            return setConfirmation(response.data.message);
        } catch(error) {
            return setConfirmation(error)
        }
    }

    const changeHandler = (event) => {
        return setAvatar(event.target.files[0]);
    }

    const checkRegister = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            return registerTeachers();
        }, 800); 
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          checkRegister();
        }
    }

    return (
        <C.AdminUserContainer onKeyDown={handleKeyDown}>
            <GlobalStyle />
             <C.Content enctype="multipart/form-data">
                <C.AdminBody>
                    <C.ContentHeader>
                        <h1>Cadastrar professor<span>.</span></h1>
                    </C.ContentHeader>
                    <C.Body>
                        <C.DividerArea>
                            <h1>Dados pessoais</h1>
                            <C.Line>
                                <C.InputItem>
                                    <label>Nome</label>
                                    <C.InputMain>
                                        <i className="ri-user-line"></i>
                                        <input type="text" placeholder="John" onChange={(e) => {setFirstName(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                                <C.InputItem>
                                    <label>Sobrenome</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="Doe" onChange={(e) => {setLastName(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>

                            <C.Line>
                                <C.InputItem>
                                    <label>Nascimento</label>
                                    <C.InputMain>
                                        <i className="ri-calendar-line"></i>
                                        <input type="text" placeholder="19/08/1988" onChange={(e) => {setNascimento(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                                <C.InputItem>
                                    <label>Telefone</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="(XX) XXXX-XXXX" onChange={(e) => {setTelefone(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>
                        </C.DividerArea>

                        <C.Divider></C.Divider>

                        <C.DividerArea>
                            <h1>MATRICULA</h1>
                            <C.Line>
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
                                <C.InputItem className="short">
                                    <label>RM</label>
                                    <C.InputMain>
                                        <input type="number" placeholder="00" onChange={(e) => {setRegistroMatricula(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>
                            <C.Line className="flex-end">
                                <C.InputItem>
                                    <label>Senha</label>
                                    <C.InputMain>
                                        <input type="password" placeholder="********" onChange={(e) => {setPassword(e.target.value); setConfirmation('')}} />
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
                        </C.DividerArea>
                    </C.Body> 
                </C.AdminBody>
                <Button onClick={() => checkRegister()} >
                    {loading ? <Loader/> : "Continuar"}
                </Button>
            </C.Content>
        </C.AdminUserContainer>
    )
}

export default CreateTeacher;