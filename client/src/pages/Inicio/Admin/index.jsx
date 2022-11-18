import React, { useState } from 'react'
import * as C from './styles'
import { useNavigate } from "react-router-dom";
import Container from '../../../components/Container'

import CreateUser from './Tools/UserTools/CreateUser';
import ListUser from './Tools/UserTools/ListUser';

import CreateInstitution from './Tools/InstitutionTools/CreateInstitution';
import ListInstitution from './Tools/InstitutionTools/ListInstitution';

const Admin = () => {
	const navigate = useNavigate();

	const [openCreateUser, setOpenCreateUser] = useState(false);
	const [openListUser, setOpenListUser] = useState(false);

	const [openCreateInstitution, setOpenCreateInstitution] = useState(false);
	const [openListInstitution, setOpenListInstitution] = useState(false);

  	return (
		<>
			<C.Main>
				{openCreateUser && <CreateUser closeCreateUser={setOpenCreateUser} />}
				{openListUser && <ListUser closeListUser={setOpenListUser} />}
				
				{openCreateInstitution && <CreateInstitution closeCreateInstitution={setOpenCreateInstitution} />}
				{openListInstitution && <ListInstitution closeListInstitution={setOpenListInstitution} />}
				
				<Container>
					<C.Tools>
						<h1>Painel Administrativo</h1>
						<C.ToolsContainer>
							<C.ToolsItem>
								<C.ToolsContent>
									<C.ToolsHeader>
										<C.ToolsIcon>
											<i className="ri-user-line"></i>
										</C.ToolsIcon>
										<C.ToolsBody>
											<h1>Ferramenta de Usuários</h1>
											<p>Liste, crie, delete e atualize os usuários da sua instituição.</p>
										</C.ToolsBody>
									</C.ToolsHeader>
									
									<C.ToolsButtons>
										<C.btnTools onClick={() => {setOpenCreateUser(true)}}>CADASTRAR</C.btnTools>
										<C.btnTools onClick={() => {setOpenListUser(true)}}>LISTAR USUÁRIOS</C.btnTools>
									</C.ToolsButtons>
								</C.ToolsContent>
							</C.ToolsItem>

							<C.ToolsItem>
								<C.ToolsContent>
									<C.ToolsHeader>
										<C.ToolsIcon>
											<i className="ri-community-line"></i>
										</C.ToolsIcon>
										<C.ToolsBody>
											<h1>Ferramenta de Instituições</h1>
											<p>Ferramentas para criação da sua instituição na plataforma.</p>
										</C.ToolsBody>
									</C.ToolsHeader>
									
									<C.ToolsButtons>
										<C.btnTools onClick={() => {setOpenCreateInstitution(true)}}>CADASTRAR</C.btnTools>
										<C.btnTools onClick={() => {setOpenListInstitution(true)}}>LISTAR INSTITUIÇÕES</C.btnTools>
									</C.ToolsButtons>
								</C.ToolsContent>
							</C.ToolsItem>

							<C.ToolsItem>
								<C.ToolsContent>
									<C.ToolsHeader>
										<C.ToolsIcon>
											<i className="ri-user-line"></i>
										</C.ToolsIcon>
										<C.ToolsBody>
											<h1>Ferramenta de Tarefas</h1>
											<p>Liste, crie, delete e atualize os usuários da sua instituição.</p>
										</C.ToolsBody>
									</C.ToolsHeader>
									
									<C.ToolsButtons>
										<C.btnTools>CADASTRAR</C.btnTools>
										<C.btnTools>LISTAR TAREFAS</C.btnTools>
									</C.ToolsButtons>
								</C.ToolsContent>
							</C.ToolsItem>
						</C.ToolsContainer>
					</C.Tools>
				</Container>
				<C.Footer>
					<p onClick={() => navigate('/')}>Voltar para tela principal</p>
				</C.Footer>
			</C.Main>
		</>
	)
}

export default Admin;