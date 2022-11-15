import React, { useState, useEffect } from 'react'
import VerticalMenu from '../../components/VerticalMenu';
import * as G from "../../styles/global"
import * as C from "./styles";
import Header from '../../components/Header';
import SupportButton from '../../components/SupportButton';
import { fetchData } from '../../hooks/fetchData';
import qrcode from '../../assets/images/qrcode.svg'

const Inicio = () => {
	const response = fetchData();
	const [userData, setUserData] = useState([]);
	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');

	useEffect(() => {
		response.then((result) => {
			setUserData(result.usuario); 
			setName(result.usuario.name)
			setAvatar(result.usuario.avatar)
		});
	}, []);

	const firstName = name.split(' ')[0];
	const secundaryName = name.split(' ')[1];
	const avatarImg = avatar.substring(16);

	return (
		<G.Content>
			<VerticalMenu />
			<G.Main>
				<Header />
				<G.Section>
					<C.GridLayout>
						<C.WelcomeArea className='section'>
							<C.WelcomeHeader>
								<C.WelcomeTitle>
									<h1>Bom dia, {firstName}!</h1>
									<p>Fique atento(a) nas atividades e notificações.</p>
								</C.WelcomeTitle>

								<C.WelcomeBrand></C.WelcomeBrand>
							</C.WelcomeHeader>

							<C.WelcomeInfo>
								<C.InfoSection>
									<C.InfoTitle>Instituição:</C.InfoTitle>
									<C.InfoButton>
										ETEC Uirapuru
										<i className="ri-external-link-line"></i>
									</C.InfoButton>
								</C.InfoSection>

								<C.InfoSection>
									<C.InfoTitle>Membros:</C.InfoTitle>
									<C.InfoMembers>
										<C.MembersList>
											teste
										</C.MembersList>
										<C.MembersLabel>
											+147
										</C.MembersLabel>
									</C.InfoMembers>
								</C.InfoSection>
							</C.WelcomeInfo>
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
							{/* <C.InfoAreaFooter></C.InfoAreaFooter> */}
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
						<C.SupportArea className="section">
							<h1>Algum problema com a plataforma?</h1>
							<SupportButton>Contatar suporte</SupportButton>
						</C.SupportArea>
						
					</C.GridLayout>
                </G.Section>
			</G.Main>
		</G.Content>
	)
}
	
export default Inicio;