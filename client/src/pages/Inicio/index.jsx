import React, { useState, useEffect } from 'react'
import "../../../node_modules/video-react/dist/video-react.css";
import { Player, ControlBar, VolumeMenuButton } from 'video-react';
import VerticalMenu from '../../components/VerticalMenu';
import * as G from "../../styles/global"
import * as C from "./styles";
import Header from '../../components/Header';
import { fetchData } from '../../hooks/fetchData';
import qrcode from '../../assets/images/qrcode.svg'
import PermissionGate from '../../hooks/permissionGate';
import Admin from './Admin';
import Preloader from '../../components/Preloader';

const Inicio = () => {
	const response = fetchData();
	const [userData, setUserData] = useState([]);
	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');

	// useEffect(() => {
	// 	response.then((result) => {
	// 		setUserData(result.usuario); 
	// 		setName(result.usuario.name)
	// 		setAvatar(result.usuario.avatar)
	// 	});
	// }, []);

	const firstName = "enable";
	const secundaryName = "enable";
	const avatarImg = null;

	return (
		<>
		<C.TestLoader>
		<Preloader/>
		<PermissionGate permissions={['Aluno']}>
		<G.Content>
			<VerticalMenu />
				<G.Main>
					<Header />
					<G.Section>
						<C.GridLayout>
							<C.WelcomeArea className='section'>
							<Player
								fluid={false}
								poster="/assets/poster.png"
								src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
								width="100%"
								height="100%"
								muted
								autoPlay
								preload="auto"
							/>
							</C.WelcomeArea> 

							<C.TarefasArea className='section'>
								<C.SectionHeader>
									<C.SectionTitle>
										<i className="ri-file-list-3-line"></i>
										<C.SectionInfo>
											<p>Tarefas Previstas</p>
											<i className="ri-information-line"></i>
										</C.SectionInfo>
									</C.SectionTitle>

									<C.SectionButton>
										Ver mais
										<i className="ri-arrow-right-s-line"></i>
									</C.SectionButton>
								</C.SectionHeader>

								<C.TarefasContainer>
									Inserir tabela aqui
								</C.TarefasContainer>
							</C.TarefasArea>

							<C.InfoArea>
								<C.InfoAreaBackground></C.InfoAreaBackground>
								
								<C.InfoContainer>
									<C.IdCardAvatar>
										<img src={avatarImg} alt="" />
									</C.IdCardAvatar>
									<C.IdCardContent>
										<C.IdCardHeader>
											<h1>{firstName} <span>{secundaryName}</span></h1>
											<p>Desen. de Sistemas</p>
										</C.IdCardHeader>
										<C.IdCardBody>
											<C.IdCardColumn>
												<C.IdCardItem>
													<h1>RM</h1>
												</C.IdCardItem>
												<C.IdCardItem>
													<h1>RG</h1>
												</C.IdCardItem>
												<C.IdCardItem>
													<h1>Nascimento</h1>
												</C.IdCardItem>
												<C.IdCardItem>
													<h1>Situação</h1>
												</C.IdCardItem>
												<C.IdCardItem>
													<h1>Turma</h1>
												</C.IdCardItem>
												<C.IdCardItem>
													<h1>Série</h1>
												</C.IdCardItem>
											</C.IdCardColumn>
											<C.IdCardColumn>
												<C.IdCardItem>
													<p>2260</p>
												</C.IdCardItem>
												<C.IdCardItem>
													<p>607976494/SP</p>
												</C.IdCardItem>
												<C.IdCardItem>
													<p>08/09/2004</p>
												</C.IdCardItem>
												<C.IdCardItem>
													<p>Cursando</p>
												</C.IdCardItem>
												<C.IdCardItem>
													<p>Turma A</p>
												</C.IdCardItem>
												<C.IdCardItem>
													<p>3° ETIM DS</p>
												</C.IdCardItem>
											</C.IdCardColumn>
										</C.IdCardBody>

										<C.IdCardQrcode>
											<p>Seu QRCODE:</p>
											<img src={qrcode} alt="" />
										</C.IdCardQrcode>
									</C.IdCardContent>
								</C.InfoContainer>
							</C.InfoArea>

							<C.FrequencyArea className="section">
								<C.SectionHeader>
									<C.SectionTitle>
										<i className="ri-pie-chart-2-line"></i>
										<C.SectionInfo>
											<p>Frequências e Ocorrências</p>
										</C.SectionInfo>
									</C.SectionTitle>
								</C.SectionHeader>

								<C.FrequencyContainer>
									Inserir gráficos aqui
								</C.FrequencyContainer>
							</C.FrequencyArea>
							{/* <C.SupportArea className="section">
								<h1>Algum problema com a plataforma?</h1>
								<SupportButton>Contatar suporte</SupportButton>
							</C.SupportArea> */}
							
						</C.GridLayout>
					</G.Section>
				</G.Main>
				</G.Content>
		</PermissionGate>
		
		<PermissionGate permissions={['Admin']}>
			<Admin/>
		</PermissionGate>		
		</C.TestLoader>
		</>
	)
}
	
export default Inicio;