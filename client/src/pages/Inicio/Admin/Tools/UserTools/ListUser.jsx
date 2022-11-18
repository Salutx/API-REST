import React, { useEffect, useState } from "react";
import Axios from 'axios';
import * as C from "../styles";
import GlobalStyle from "../styles"
import Logo from '../../../../../components/Logo';
import Loader from "../../../../../components/Loaders";
import UsersTimeline from "./DisplayUsers";

const ListUser = ({ closeListUser }) => {
    const [users, getUsers] = useState('');
    const [loading, setLoading] = useState(false);

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

    const checkUsers = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            return getAllUsers();
        }, 400); 
    }


    return (
        <C.AdminUserContainer>
            <GlobalStyle />
            <C.AdminBody>
                <C.AdminHeader>
                    <Logo />
                    <button onClick={() => closeListUser(false)}>
                        <i className="ri-close-line"></i>
                    </button>
                </C.AdminHeader>

                <C.Content>
                    <C.ContentHeader>
                        <h1>Lista de usuários</h1>
                        <C.ContentIcons>
                            <i className="ri-refresh-line" onClick={() => checkUsers()} ></i>
                            <i className="ri-search-line"></i>
                        </C.ContentIcons>
                    </C.ContentHeader>

                    <C.UserList>
                        {loading ? <Loader/> : <UsersTimeline users={users}/>}
                    </C.UserList>
                </C.Content>
            </C.AdminBody>
        </C.AdminUserContainer>
    )
}

export default ListUser;