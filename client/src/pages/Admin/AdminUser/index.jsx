import React, { useEffect, useState } from "react";
import axios from 'axios';
import * as C from "./styles";
import Logo from '../../../components/Logo';
import Button from '../../../components/Button';
import './styles.css'
import UsersTimeline from "./DisplayUsers";

const AdminUser = ({ closeUser }) => {
    const [users, getUsers] = useState('');
	const url = 'http://localhost:3001/';

	useEffect(() => {
		getAllUsers();
	}, []);
	
	const getAllUsers = () => {
		axios.get(`${url}usuarios`)
		.then((response) => {
			const allUsers = response.data.usuarios;
			getUsers(allUsers);
		})
		.catch(error => console.log(`Error: ${error}`));
	}
    
    return (
        <C.LoginContainer>
            <C.LoginBody>
                <C.LoginHeader>
                    <Logo />
                    <button onClick={() => closeUser(false)}>
                        <i className="ri-close-line"></i>
                    </button>
                </C.LoginHeader>

                <C.LoginMain>
                    <C.Content>
                        <h1>Inserir usuário<span>.</span></h1>
                        <C.Line>
                            <div className="input-item short">
                                <label>Nacimento</label>
                                <div className="input-main">
                                    <i className="ri-calendar-line"></i>
                                    <input type="text" placeholder="19/08/1988" />
                                </div>
                            </div>

                            <div className="input-item">
                                <label>Nome completo</label>
                                <div className="input-main">
                                    <i className="ri-calendar-line"></i>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                            </div>
                        </C.Line>

                        <C.Line>
                            <div className="input-item">
                                <label>Telefone</label>
                                <div className="input-main">
                                    <input type="text" placeholder="(XX) XXXX-XXXX" />
                                </div>
                            </div>
                        </C.Line>

                        <C.Line>
                            <div className="input-item">
                                <label>RM</label>
                                <div className="input-main">
                                    <input type="number" placeholder="00" />
                                </div>
                            </div>

                            <div className="input-item">
                                <label>Cód. Instituição</label>
                                <div className="input-main">
                                    <input type="number" placeholder="230" />
                                </div>
                            </div>
                        </C.Line>

                        <C.Line>
                            <div className="input-item">
                                <label>Email</label>
                                <div className="input-main">
                                    <input type="text" placeholder="230" />
                                </div>
                            </div>
                        </C.Line>

                        <C.Line className="flex-end">
                            <div className="input-item">
                                <label>Senha</label>
                                <div className="input-main">
                                    <input type="password" placeholder="********" />
                                    <i className="ri-eye-line"></i>
                                </div>
                            </div>
                            <button className="btnGerar">Gerar</button>
                        </C.Line>

                        <C.LabelError></C.LabelError>
                        <Button Text="Continuar" />
                    </C.Content>

                    <C.Content>
                        <div className="content-header">
                            <h1>Lista de usuários</h1>
                            <div className="content-icons">
                                <i className="ri-refresh-line"></i>
                                <i className="ri-search-line"></i>
                            </div>
                        </div>

                        <div className="user-list">
                            <div className="user-item">
                                <UsersTimeline users={users} />
                                <button className="btnUser">
                                    <i className="ri-more-line"></i>
                                </button>
                            </div>
                        </div>
                    </C.Content>
                </C.LoginMain>
            </C.LoginBody>
        </C.LoginContainer>
    )
}

export default AdminUser;