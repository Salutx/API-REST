import React, { useEffect, useState } from "react";
import Axios from 'axios';
import * as C from "../styles";
import GlobalStyle from "../styles"
import Logo from '../../../../../components/Logo';
import Loader from "../../../../../components/Loaders";
import StudentsTimeline from "./DisplayStudents";

const ListStudent = ({ closeListStudent }) => {
    const [students, getStudents] = useState('');
    const [loading, setLoading] = useState(false);

	const url = 'http://localhost:3001/';

	useEffect(() => {
		getAllStudents();
	}, []);

    const getAllStudents = () => {
		Axios.get(`${url}students`)
		.then((response) => {
			const allStudents = response.data.students;
			getStudents(allStudents);
		})
		.catch(error => console.log(`Error: ${error}`));
	}

    const checkStudents = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            return getAllStudents();
        }, 400); 
    }


    return (
        <C.AdminUserContainer>
            <GlobalStyle />
            <C.AdminBody>
                <C.AdminHeader>
                    <Logo />
                    <button onClick={() => closeListStudent(false)}>
                        <i className="ri-close-line"></i>
                    </button>
                </C.AdminHeader>

                <C.Content>
                    <C.ContentHeader>
                        <h1>Lista de usuários</h1>
                        <C.ContentIcons>
                            <i className="ri-refresh-line" onClick={() => checkStudents()} ></i>
                            <i className="ri-search-line"></i>
                        </C.ContentIcons>
                    </C.ContentHeader>

                    <C.UserList>
                        {loading ? <Loader/> : <StudentsTimeline students={students}/>}
                    </C.UserList>
                </C.Content>
            </C.AdminBody>
        </C.AdminUserContainer>
    )
}

export default ListStudent;