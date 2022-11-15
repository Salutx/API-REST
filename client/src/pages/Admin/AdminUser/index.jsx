import React, { useEffect, useState } from "react";
import Axios from 'axios';
import * as C from "./styles";
import GlobalStyle from "./styles"
import Logo from '../../../components/Logo';
import Button from '../../../components/Button';
import UsersTimeline from "./DisplayUsers";

const AdminUser = ({ closeUser }) => {
    const [users, getUsers] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [name, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [registroMatricula, setRegistroMatricula] = useState('');
    const [codInstituicao, setCodInstituicao] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [avatar, setAvatar] = useState();
    const [confirmation, setConfirmation] = useState('');

	const url = 'http://localhost:3001/';

	useEffect(() => {
		getAllUsers();
	}, []);

    const getAllUsers = () => {
		Axios.get(`${url}users`)
		.then((response) => {
			const allUsers = response.data.usuarios;
			getUsers(allUsers);
		})
		.catch(error => console.log(`Error: ${error}`));
	}

    const registerUsers = async() => {
        const formData = new FormData();
        formData.append('registroMatricula', registroMatricula);
        formData.append('name', name);
        formData.append('senha', senha);
        formData.append('email', email);
        formData.append('telefone', telefone);
        formData.append('dataNascimento', nascimento);
        formData.append('avatar', avatar);
        formData.append('Instituicao_id', codInstituicao);

        try {
            await Axios.post(`${url}users/register`, formData)
            setConfirmation('Usuário registrado com sucesso!')
            getAllUsers();
        } catch (error) {
            setConfirmation('Houve um erro no registro.')
        }
        
    }

    const changeHandler = (event) => {
        return setAvatar(event.target.files[0]);
    }

    return (
        <C.AdminUserContainer>
            <GlobalStyle />
            <C.AdminBody>
                <C.AdminHeader>
                    <Logo />
                    <button onClick={() => closeUser(false)}>
                        <i className="ri-close-line"></i>
                    </button>
                </C.AdminHeader>

                <C.AdminMain>
                    <C.Content enctype="multipart/form-data">
                        <h1>Cadastrar usuário<span>.</span></h1>
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
                                    <i className="ri-calendar-line"></i>
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
                                <C.InputMain>
                                    <input type="number" placeholder="230" onChange={(e) => {setCodInstituicao(e.target.value); setConfirmation('')}} />
                                </C.InputMain>
                            </C.InputItem>
                        </C.Line>

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

                        <C.Line className="flex-end">
                            <C.InputItem>
                                <label>Avatar</label>
                                <C.InputMain>
                                    <input type="file" name="file" onChange={changeHandler} />
                                </C.InputMain>
                            </C.InputItem>
                        </C.Line>

                        <C.LabelConfirmation>{confirmation}</C.LabelConfirmation>
                        <Button Text="Continuar" onClick={registerUsers} />
                    </C.Content>

                    <C.Content>
                        <C.ContentHeader>
                            <h1>Lista de usuários</h1>
                            <C.ContentIcons>
                                <i className="ri-refresh-line" onClick={() => getAllUsers()} ></i>
                                <i className="ri-search-line"></i>
                            </C.ContentIcons>
                        </C.ContentHeader>

                        <C.UserList>
                            <UsersTimeline users={users}/>
                        </C.UserList>
                    </C.Content>
                </C.AdminMain>
            </C.AdminBody>
        </C.AdminUserContainer>
    )
}

export default AdminUser;