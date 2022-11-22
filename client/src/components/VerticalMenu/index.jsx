import React, {useState, useEffect} from 'react';
import Logo from '../../assets/images/NewLogo.png';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import * as C from "./styles.js";
import { fetchData } from '../../hooks/fetchData';

const VerticalMenu = () => {

	const navigate = useNavigate();
	const { signout } = useAuth();

	const [userData, setUserData] = useState([]);
	const [avatar, setAvatar] = useState('');

	const urlCheck = ( check ) => {if(window.location.href.indexOf(check) > -1) {return "active";}}

	useEffect(() => {
		const response = fetchData();
		response.then((result) => {
			setUserData(result.user)
		});
	}, []);

	const name = userData.first_name + " " + userData.last_name;

  	return (
		<C.VerticalMenu>
			<C.NavLogo>
				<img src={Logo} alt="" />
				<p>Mindset <strong>Student</strong></p>
			</C.NavLogo>

			<C.JustifySpacebetween>
				<C.NavContainer>
					<C.NavSection>
						<C.NavHeader>DASHBOARD</C.NavHeader>
						<C.NavMenu>
							<C.NavItem status={urlCheck("inicio")}>
								<button onClick={() => navigate("/inicio")}>
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
						<C.NavHeader>ÁREA DO USUÁRIO</C.NavHeader>
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

				<C.NavUser>
					<C.NavUserLeft>
						<img src={avatar} alt="" />
						<C.UserDetails>
							<p>{name}</p>
							<p>{userData.user_type}(a)</p>
						</C.UserDetails>
					</C.NavUserLeft>
					<C.NavUserRight onClick={() => [signout(), navigate("/")]}>
						<i className="ri-logout-box-r-line"></i>
					</C.NavUserRight>
				</C.NavUser>
			</C.JustifySpacebetween>
		</C.VerticalMenu>
  	)
}

export default VerticalMenu;