import React, { useEffect, useState } from "react";
import Axios from 'axios';
import * as C from "../styles";
import GlobalStyle from "../styles"
import Loader from "../../../components/Loaders";
import StudentsTimeline from "./DisplayStudents";

const ListStudent = () => {
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
		.catch(error => console.error(`Error: ${error}`));
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
            <C.Content className="list-content">
                <C.AdminBody>
                    <C.ContentHeader>
                        <h1>⭐ Alunos cadastrados <small>({students.length})</small></h1>
                        <C.ContentIcons>
                            <i className="ri-refresh-line" onClick={() => checkStudents()} ></i>
                            <i className="ri-search-line"></i>
                        </C.ContentIcons>
                    </C.ContentHeader>

                    <C.TableAround>
                        {loading ? <Loader/> : <StudentsTimeline students={students}/>}
                    </C.TableAround>
                </C.AdminBody>
            </C.Content>
        </C.AdminUserContainer>
    )
}

export default ListStudent;