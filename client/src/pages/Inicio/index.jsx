import React, { useState, useEffect } from 'react'
import "../../../node_modules/video-react/dist/video-react.css";

import * as G from "../../styles/global"
import * as C from "./styles";

import { Player } from 'video-react';
import PermissionGate from '../../hooks/permissionGate';
import Axios from 'axios';
import jwt_decode from 'jwt-decode';

import VerticalMenu from '../../components/VerticalMenu';
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';

import qrcode from '../../assets/images/qrcode.svg'
import CreateStudent from '../Admin/Student/CreateStudent';
import ListStudent from '../Admin/Student/ListStudent';

const Inicio = () => {
	const url = 'http://localhost:3001';

	const [userData, setUserData] = useState('');
	const [courseData, setCourseData] = useState([]);
	const [userAvatar, setUserAvatar] = useState('');
	const [avatarImg, setAvatarImg] = useState('');

	const token = localStorage.getItem('access-token');
	const decoded = jwt_decode(token);

	useEffect(() => {
		const userCheck = async () => {
			if (decoded.userId !== 0) {
				try {
					const type = await Axios.get(`${url}/categorys/userdetails/${decoded.userId}`)
					if (type.data.user.user_type === "Aluno") {
						Axios.get(`${url}/students/${decoded.userId}`)
						.then((request) => {
							setCourseData(request.data.student.course);
							setUserAvatar(request.data.student.avatar.substring(16));
							setUserData(request.data.student);
						})
						.catch((err) => {
							return console.log(err);
						})
					} 
					
					if(type.data.user.user_type === "Professor") {
						Axios.get(`${url}/teachers/${decoded.userId}`)
						.then((request) => {
							setUserAvatar(request.data.teacher.avatar.substring(16));
							setUserData(request.data.teacher);
						})
						.catch((err) => {
							console.log(err);
						})
					}
					
					if (type.data.user.user_type === "Admin") {
						setUserAvatar(undefined);
					}
				} catch (error) {
					return console.error(error);
				}
			}
		}
		userCheck();
	}, []);

	return (
		<>
		<G.TestLoader>
			<Preloader text="Carregando interface..."/>
			<PermissionGate permissions={['Aluno']}>
			<G.Content>
				<VerticalMenu avatarUploaded={userAvatar} />
				<G.Main>
					<Header />
					<G.Section>
						<C.GridLayout>
							<C.WelcomeArea className='section'>
							<Player
								fluid={false}
								poster={null}
								src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
								width="100%"
								height="100%"
								muted
								autoPlay
								preload="auto"
								className="videoplayer"
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
										<img src={userAvatar} alt="" />
									</C.IdCardAvatar>
									<C.IdCardContent>
										<C.IdCardHeader>
											<h1>{userData.first_name} <span>{userData.last_name}</span></h1>
											<p>{courseData.course_name}</p>
										</C.IdCardHeader>
										<C.IdCardBody>
											<C.IdCardColumn>
												<C.IdCardItem>
													<h1>RM</h1>
												</C.IdCardItem>
												<C.IdCardItem>
													<h1>Instituição</h1>
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
													<p>{userData.registroMatricula}</p>
												</C.IdCardItem>
												<C.IdCardItem>
													<p>ETEC Uirapuru</p>
												</C.IdCardItem>
												<C.IdCardItem>
													<p>{userData.birth_date}</p>
												</C.IdCardItem>
												<C.IdCardItem>
													<p>{userData.is_active}</p>
												</C.IdCardItem>
												<C.IdCardItem>
													<p>Turma A</p>
												</C.IdCardItem>
												<C.IdCardItem>
													<p>{courseData.course_level} {courseData.course_abbr}</p>
												</C.IdCardItem>
											</C.IdCardColumn>
										</C.IdCardBody>

										<C.IdCardQrcode>
											<p>Seu QRCODE:</p>
											<img src={qrcode} alt="QRCodeUser" />
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
						</C.GridLayout>
					</G.Section>
				</G.Main>
			</G.Content>
			</PermissionGate>
			
			<PermissionGate permissions={['Admin']}>
			<G.Content>
				<VerticalMenu avatarUploaded={userAvatar} />
				<G.Main>
					<Header />
					<G.Section>
						<C.AdminSections>
							<CreateStudent/>
							<ListStudent />
						</C.AdminSections>
					</G.Section>
				</G.Main>
			</G.Content>
			</PermissionGate>		
		</G.TestLoader>
		</>
	)
}
	
export default Inicio;