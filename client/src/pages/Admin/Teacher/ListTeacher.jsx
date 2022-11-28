import React, { useEffect, useState } from "react";
import Axios from 'axios';
import * as C from "../styles";
import GlobalStyle from "../styles"
import Loader from "../../../components/Loaders";
import TeachersTimeline from "./DisplayTeachers";

const ListTeacher = ({ closeListTeacher }) => {
    const [teachers, getTeachers] = useState('');
    const [loading, setLoading] = useState(false);

	const url = 'http://localhost:3001/';

	useEffect(() => {
		getAllTeachers();
	}, []);

    const getAllTeachers = () => {
		Axios.get(`${url}teachers`)
		.then((response) => {
			const allTeachers = response.data.teachers;
			getTeachers(allTeachers);
		})
		.catch(error => console.log(`Error: ${error}`));
	}

    const checkTeachers = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            return getAllTeachers();
        }, 400); 
    }


    return (
        <C.AdminUserContainer>
            <GlobalStyle />
            <C.AdminBody>
                <C.Content>
                    <C.ContentHeader>
                        <h1>Professores cadastrados ({teachers.length})</h1>
                        <C.ContentIcons>
                            <i className="ri-refresh-line" onClick={() => checkTeachers()} ></i>
                            <i className="ri-search-line"></i>
                        </C.ContentIcons>
                    </C.ContentHeader>

                    <C.UserList>
                        {loading ? <Loader/> : <TeachersTimeline teachers={teachers}/>}
                    </C.UserList>
                </C.Content>
            </C.AdminBody>
        </C.AdminUserContainer>
    )
}

export default ListTeacher;