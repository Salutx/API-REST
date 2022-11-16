import React, { useState } from 'react'
import * as C from './styles'
import { useNavigate } from "react-router-dom";
import LPHeader from '../../components/LandingPage/Header'
import ThemeSwitch from '../../components/LandingPage/ThemeSwitch'
import Container from '../../components/Container'
import CreateUser from './UserTools/CreateUser';
import ListUser from './UserTools/ListUser';

const Admin = () => {
	const navigate = useNavigate();

	const [openCreateUser, setOpenCreateUser] = useState(false);
	const [openListUser, setOpenListUser] = useState(false);

  	return (
		<>
			<C.Main>
				{openCreateUser && <CreateUser closeCreateUser={setOpenCreateUser} />}
				{openListUser && <ListUser closeListUser={setOpenListUser} />}
				<LPHeader>
					<C.Badge>BETA</C.Badge>
					<ThemeSwitch/>
					<h1>Painel Administrativo</h1>
				</LPHeader>

				<Container>
					<C.Hint>
						<i className="ri-shield-user-fill"></i>
						<h1>Painel administrativo para a plataforma.</h1>
					</C.Hint>
				</Container>
				
				<Container>
					<C.Tools>
						<h1>Ferramentas</h1>
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
											<i className="ri-user-line"></i>
										</C.ToolsIcon>
										<C.ToolsBody>
											<h1>Ferramenta de Instituições</h1>
											<p>Liste, crie, delete e atualize os usuários da sua instituição.</p>
										</C.ToolsBody>
									</C.ToolsHeader>
									
									<C.ToolsButtons>
										<C.btnTools>CADASTRAR</C.btnTools>
										<C.btnTools>LISTAR INSTITUIÇÕES</C.btnTools>
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

							{/* <C.ToolsItem>
								<C.ToolsContent>
									<C.ToolsHeader>
										<C.ToolsIcon>
											<i className="ri-file-chart-line"></i>
										</C.ToolsIcon>
										<C.ToolsBody>
											<h1>Avançado</h1>
											<p>Faça o monitoramento de desempenho dos usuários da instituição.</p>
										</C.ToolsBody>
									</C.ToolsHeader>
									
									<C.btnTools>Verificar</C.btnTools>
								</C.ToolsContent>
							</C.ToolsItem>

							<C.ToolsItem>
								<C.ToolsContent>
									<C.ToolsHeader>
										<C.ToolsIcon>
											<i className="ri-lock-2-line"></i>
										</C.ToolsIcon>
										<C.ToolsBody>
											<h1>Segurança</h1>
											<p>Verifique os termos de privacidade estipulados pelas instituições.</p>
										</C.ToolsBody>
									</C.ToolsHeader>
									
									<C.btnTools>Verificar</C.btnTools>
								</C.ToolsContent>
							</C.ToolsItem> */}
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

export default Admin