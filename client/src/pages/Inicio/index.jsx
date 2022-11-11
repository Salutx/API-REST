import React, { useState, useEffect } from 'react'
import VerticalMenu from '../../components/VerticalMenu';
import * as G from "../../styles/global"
import * as C from "./styles";
import Header from '../../components/Header';
import Brasao from '../../assets/images/cps-branco.png';
import SupportButton from '../../components/SupportButton';
import Axios from 'axios';
import jwt_decode from 'jwt-decode';
import './styles.css'

const Inicio = () => {

    const [name, setName] = useState('');
	const [total, setTotal] = useState('');
	
	const url = 'http://localhost:3001/';
	const token = localStorage.getItem('access-token');
	const decoded = jwt_decode(token);

	useEffect(() => {
		getUserDetails();
	}, []);

	const getUserDetails = () => {	
		Axios.get(`${url}users/${decoded.userId}`)
		.then((response) => {
			var nomeCompleto = (response.data.usuario.name);
			var nome = nomeCompleto.split(" ")[0];
			setName(nome);
		})
		.catch(error => console.log(`Error: ${error}`));
	}

	return (
		<G.Content>
			<VerticalMenu />
			<G.Main>
				<Header />
				<G.Section>
					<C.GridLayout>
						
						<div class="welcome-area section">
							<div class="welcome-header">
								<div class="welcome-title">
									<h1>Hey, {name}.</h1>
									<p>Bem-vindo(a) de volta! Fique atento nas atividades e notificações.</p>
								</div>

								<div class="welcome-brand">
									<img src={ Brasao } alt="" />
								</div>
							</div>

							<div class="welcome-info">
								<div class="info-section">
									<p class="info-title">Instituição:</p>
									<button class="btnInfo">
										ETEC Uirapuru
										<i class="ri-external-link-line"></i>
									</button>
								</div>

								<div class="info-section">
									<p class="info-title">Membros:</p>
									<div class="members">
										<div class="members-list">
											teste
										</div>
										<div class="members-label">
											+147
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="tarefas-area section">
							<div class="section-header">
								<div class="section-title">
									<i class="ri-file-list-3-line"></i>
									<div class="section-info">
										<p>Tarefas Previstas</p>
										<i class="ri-information-line"></i>
									</div>
								</div>

								<button className='btnSection'>
									Ver mais
									<i class="ri-arrow-right-s-line"></i>
								</button>
							</div>

							<div class="tarefas-container">
								Inserir tabela aqui
							</div>
						</div>

						<div class="info-area section">
							<div class="info-header">
								<div class="info-title">
									<h1>Porcentagem de entregas</h1>
									<p>Tarefas - Novembro</p>
								</div>
								<div class="info-percent">
									<p>95,5%</p>
								</div>
							</div>

							<div class="info-container">
								Inserir gráfico aqui
							</div>
						</div>

						<div class="frequency-area section">
							<div class="section-header">
								<div class="section-title">
									<i class="ri-pie-chart-2-line"></i>
									<div class="section-info">
										<p>Frequências e Ocorrências</p>
									</div>
								</div>
							</div>

							<div class="frequency-container">
								Inserir gráficos aqui
							</div>
						</div>
						<div class="support-area section">
							<h1>Algum problema com a plataforma?</h1>
							<SupportButton>Contatar suporte</SupportButton>
						</div>
						
					</C.GridLayout>
                </G.Section>
			</G.Main>
		</G.Content>
	)
}
	
export default Inicio;