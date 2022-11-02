import React from 'react'
import * as C from './styles'
import { useNavigate } from "react-router-dom";
import LPHeader from '../../components/LandingPage/Header'
import ThemeSwitch from '../../components/LandingPage/ThemeSwitch'
import Container from '../../components/Container'

const Admin = () => {
	const navigate = useNavigate();
  	return (
		<>
			<C.Main>
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
								<C.ToolsDifficulty>Básico</C.ToolsDifficulty>

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
									
									<C.btnTools>Usar</C.btnTools>
								</C.ToolsContent>
							</C.ToolsItem>

							<C.ToolsItem>
								<C.ToolsDifficulty>Avançado</C.ToolsDifficulty>

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
								<C.ToolsDifficulty>Intermediário</C.ToolsDifficulty>

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

export default Admin