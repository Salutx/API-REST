import React, { useEffect, useState } from "react";
import Axios from 'axios';
import * as C from "../styles";
import GlobalStyle from "../styles"
import Logo from '../../../../../components/Logo';
import Loader from "../../../../../components/Loaders";
import InstitutionsTimeline from "./DisplayInstitutions";

const ListInstitution = () => {
    const [institutions, getInstitutions] = useState('');
    const [loading, setLoading] = useState(false);

	const url = 'http://localhost:3001/';

	useEffect(() => {
		getAllInstitutions();
	}, []);

    const getAllInstitutions = () => {
		Axios.get(`${url}institutions`)
		.then((response) => {
			const allInstitutions = response.data.institutions;
			getInstitutions(allInstitutions);
		})
		.catch(error => console.log(`Error: ${error}`));
	}

    const checkInstitutions = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            return getAllInstitutions();
        }, 400); 
    }


    return (
        <C.AdminUserContainer>
            <GlobalStyle />
            <C.AdminBody>
                <C.Content>
                    <C.ContentHeader>
                        <h1>Lista de usuários</h1>
                        <C.ContentIcons>
                            <i className="ri-refresh-line" onClick={() => checkInstitutions()} ></i>
                            <i className="ri-search-line"></i>
                        </C.ContentIcons>
                    </C.ContentHeader>

                    <C.UserList>
                        {loading ? <Loader/> : <InstitutionsTimeline institutions={institutions}/>}
                    </C.UserList>
                </C.Content>
            </C.AdminBody>
        </C.AdminUserContainer>
    )
}

export default ListInstitution;