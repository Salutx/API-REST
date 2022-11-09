import React from 'react';
import Logo from '../../assets/images/NewLogo.png';
import AvatarExample from '../../assets/images/avatarexample.png';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import * as C from "./styles.js";

const VerticalMenu = () => {

	const navigate = useNavigate();
	const { signout } = useAuth();

	function urlCheck ( check ) {if(window.location.href.indexOf(check) > -1) {return "active";}}

  	return (
		<C.VerticalMenu>
			<C.NavLogo>
				<img src={ Logo } alt="" />
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
						<img src={ AvatarExample } alt="" />
						<C.UserDetails>
							<p>Mary Jane</p>
							<p>Aluno(a)</p>
						</C.UserDetails>
					</C.NavUserLeft>
					<C.NavUserRight onClick={() => [signout(), navigate("/")]}>
						<i class="ri-logout-box-r-line"></i>
					</C.NavUserRight>
				</C.NavUser>
			</C.JustifySpacebetween>
		</C.VerticalMenu>
  	)
}

export default VerticalMenu;