import React, {useState, useEffect} from 'react';
import Logo from '../../assets/images/NewLogo.png';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import * as C from "./styles.js";
import Axios from 'axios';
import jwt_decode from 'jwt-decode';
import PermissionGate from '../../hooks/permissionGate';
import adminImage from '../../assets/images/admin.png'

const VerticalMenu = ( ) => {
	const navigate = useNavigate();
	const { signout } = useAuth();

	const url = 'http://localhost:3001';
	const token = localStorage.getItem('access-token');
	const decoded = jwt_decode(token);

	const [userData, setUserData] = useState([]);
	const [userAvatar, setUserAvatar] = useState('')

	const urlCheck = ( check ) => {if(window.location.href.indexOf(check) > -1) {return "active";}}

	useEffect(() => {
		const userCheck = async () => {
			if (decoded.userId !== 0) {
				try {
					const type = await Axios.get(`${url}/categorys/userdetails/${decoded.userId}`)
					if (type.data.user.user_type === "Aluno") {
						Axios.get(`${url}/students/${decoded.userId}`)
						.then((request) => {
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
		<PermissionGate permissions={['Aluno']}>
			<C.VerticalMenu>
				<C.NavLogo>
					<img src={Logo} alt="" />
					<p>Mindset <strong>Student</strong></p>
				</C.NavLogo>

				<C.JustifySpacebetween>
					<C.NavContainer>
						<C.NavSection>
							<C.NavHeader>Dashboard</C.NavHeader>
							<C.NavMenu>
								<C.NavItem status={urlCheck("dashboard")}>
									<button onClick={() => navigate("/dashboard")}>
										<i className="ri-home-2-line"></i>
										<p>Página Inicial</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("equipes")}>
									<button onClick={() => navigate("/equipes")}>
										<i className="ri-team-line"></i>
										<p>Equipes</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("agenda")}>
									<button>
										<i className="ri-calendar-todo-line"></i>
										<p>Agenda</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("tarefas")}>
									<button>
										<i className="ri-file-list-3-line"></i>
										<p>Tarefas</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("boletim")}>
									<button>
										<i className="ri-pie-chart-2-line"></i>
										<p>Boletim</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("avisos")}>
									<button>
										<i className="ri-inbox-line"></i>
										<p>Avisos</p>
									</button>
								</C.NavItem>
							</C.NavMenu>
						</C.NavSection>

						<C.NavSection>
							<C.NavHeader>Geral</C.NavHeader>
							<C.NavMenu>
								<C.NavItem status={urlCheck("organizacao")}>
									<button>
										<i className="ri-community-line"></i>
										<p>Organização</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("perfil")}>
									<button>
										<i className="ri-user-line"></i>
										<p>Perfil</p>
									</button>
								</C.NavItem>
							</C.NavMenu>
						</C.NavSection>
					</C.NavContainer>

					<C.UserContainer>
						<C.NavUser>
							<C.NavUserLeft>
								<img src={userAvatar} alt="" />
								<C.UserDetails>
									<p>{userData.first_name} {userData.last_name}</p>
									<p>{userData.user_type}(a)</p>
								</C.UserDetails>
							</C.NavUserLeft>
							<C.NavUserRight onClick={() => [signout(), navigate("/")]}>
								<i className="ri-logout-box-r-line"></i>
							</C.NavUserRight>
						</C.NavUser>
					</C.UserContainer>
				</C.JustifySpacebetween>
			</C.VerticalMenu>
		</PermissionGate>

		<PermissionGate permissions={['Professor']}>
			<C.VerticalMenu>
				<C.NavLogo>
					<img src={Logo} alt="" />
					<p>Mindset <strong>Student</strong></p>
				</C.NavLogo>

				<C.JustifySpacebetween>
					<C.NavContainer>
						<C.NavSection>
							<C.NavHeader>Dashboard</C.NavHeader>
							<C.NavMenu>
								<C.NavItem status={urlCheck("dashboard")}>
									<button onClick={() => navigate("/dashboard")}>
										<i className="ri-home-2-line"></i>
										<p>Página Inicial</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("equipes")}>
									<button onClick={() => navigate("/equipes")}>
										<i className="ri-team-line"></i>
										<p>Equipes</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("agenda")}>
									<button>
										<i className="ri-calendar-todo-line"></i>
										<p>Agenda</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("tarefas")}>
									<button>
										<i className="ri-file-list-3-line"></i>
										<p>Tarefas</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("boletim")}>
									<button>
										<i className="ri-pie-chart-2-line"></i>
										<p>Boletim</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("avisos")}>
									<button>
										<i className="ri-inbox-line"></i>
										<p>Avisos</p>
									</button>
								</C.NavItem>
							</C.NavMenu>
						</C.NavSection>

						<C.NavSection>
							<C.NavHeader>Geral</C.NavHeader>
							<C.NavMenu>
								<C.NavItem status={urlCheck("boletim")}>
									<button>
										<i className="ri-community-line"></i>
										<p>Organização</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("boletim")}>
									<button>
										<i className="ri-user-line"></i>
										<p>Perfil</p>
									</button>
								</C.NavItem>
							</C.NavMenu>
						</C.NavSection>
					</C.NavContainer>

					<C.UserContainer>
						<C.NavUser>
							<C.NavUserLeft>
								<img src={userAvatar} alt="" />
								<C.UserDetails>
									<p>{userData.first_name} {userData.last_name}</p>
									<p>{userData.user_type}(a)</p>
								</C.UserDetails>
							</C.NavUserLeft>
							<C.NavUserRight onClick={() => [signout(), navigate("/")]}>
								<i className="ri-logout-box-r-line"></i>
							</C.NavUserRight>
						</C.NavUser>
					</C.UserContainer>
				</C.JustifySpacebetween>
			</C.VerticalMenu>
		</PermissionGate>

		<PermissionGate permissions={['Admin']}>
			<C.VerticalMenu>
				<C.NavLogo>
					<img src={Logo} alt="" />
					<p>Mindset <strong>Student</strong></p>
				</C.NavLogo>

				<C.JustifySpacebetween>
					<C.NavContainer>
						<C.NavSection>
							<C.NavHeader>Gerenciar</C.NavHeader>
							<C.NavMenu>
								<C.NavItem status={urlCheck("students")}>
									<button onClick={() => navigate("/students")}>
										<i className="ri-user-smile-line"></i>
										<p>Alunos</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("teachers")}>
									<button onClick={() => navigate("/teachers")}>
										<i className="ri-user-star-line"></i>
										<p>Professores</p>
									</button>
								</C.NavItem>
								<C.NavItem status={urlCheck("courses")}>
									<button onClick={() => navigate("/courses")}>
										<i className="ri-dashboard-line"></i>
										<p>Cursos</p>
									</button>
								</C.NavItem>
							</C.NavMenu>
						</C.NavSection>
					</C.NavContainer>

					<C.UserContainer>
						<C.NavUser>
							<C.NavUserLeft>
								<img src={adminImage} alt="" />
								<C.UserDetails>
									<p>Logado como:</p>
									<p>Administrador</p>
								</C.UserDetails>
							</C.NavUserLeft>
							<C.NavUserRight onClick={() => [signout(), navigate("/")]}>
								<i className="ri-logout-box-r-line"></i>
							</C.NavUserRight>
						</C.NavUser>
					</C.UserContainer>
				</C.JustifySpacebetween>
			</C.VerticalMenu>
		</PermissionGate>
		</>
  	)
}

export default VerticalMenu;