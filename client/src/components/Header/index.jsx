import React, { useState, useEffect } from 'react'
import GlobalStyle from '../../styles/global';
import * as C from "./styles.js";
import { useThemeContext } from '../../contexts/theme';
import PermissionGate from '../../hooks/permissionGate';
import Axios from 'axios';
import jwt_decode from 'jwt-decode';

const Navbar = () => {
    const { changeTheme } = useThemeContext();
	
    const url = 'http://localhost:3001';
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem('access-token');
		const decoded = jwt_decode(token);	

		if (decoded.userId !== 0) {
			const fetchData = async () => {
				try {
					const fetchUser = await Axios.get(`${url}/students/${decoded.userId}`);
					setUserData(fetchUser.data.student);
				} catch (error) {
					console.error(error);
				}
			};
			fetchData();
		}
	}, []);
    

    return (
        <>
            <PermissionGate permissions={['Aluno']}>
                <C.Header>
                    <GlobalStyle />
                    <C.Container>
                        <C.Navbar>
                            <C.HeaderTitle>
                                <h1>Dashboard </h1>
                                <C.Breadcumb>- Olá, {userData.first_name}!</C.Breadcumb>
                            </C.HeaderTitle>

                            <C.SearchContainer>
                                <C.NavbarTools>
                                    <button>
                                        <span></span>
                                        <i className="ri-notification-2-line"></i>
                                    </button>
                                    <button>
                                        <span></span>
                                        <i className="ri-chat-1-line"></i>
                                    </button>
                                    <button onClick={changeTheme}>
                                        <i className="ri-moon-line"></i>
                                    </button>
                                </C.NavbarTools>
                                <C.NavbarSearch>
                                    <button>
                                        <i className="ri-search-2-line"></i>
                                    </button>

                                    <input type="text" placeholder="Pesquisar por nome, grupo, assunto..."/>
                                    
                                    <button>
                                        <i className="ri-arrow-down-s-line"></i>
                                    </button>
                                </C.NavbarSearch>
                            </C.SearchContainer>
                        </C.Navbar>
                    </C.Container>
                </C.Header>
            </PermissionGate>

            <PermissionGate permissions={['Admin']}>
                <C.Header>
                    <GlobalStyle />
                    <C.Container>
                        <C.Navbar>
                            <C.HeaderTitle>
                                <h1>Dashboard </h1>
                                <C.Breadcumb>- Olá, Administrador!</C.Breadcumb>
                            </C.HeaderTitle>

                            <C.SearchContainer>
                                <C.NavbarTools>
                                    <button onClick={changeTheme}>
                                        <i className="ri-moon-line"></i>
                                    </button>
                                </C.NavbarTools>
                                <C.NavbarSearch>
                                    <button>
                                        <i className="ri-search-2-line"></i>
                                    </button>

                                    <input type="text" placeholder="Pesquisar por nome, grupo, assunto..."/>
                                    
                                    <button>
                                        <i className="ri-arrow-down-s-line"></i>
                                    </button>
                                </C.NavbarSearch>
                            </C.SearchContainer>
                        </C.Navbar>
                    </C.Container>
                </C.Header>
            </PermissionGate>
        </>
    )
}

export default Navbar;