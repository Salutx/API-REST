import React from 'react'
import VerticalMenu from '../../components/VerticalMenu';
import TitleSection from '../../components/TitleSection';
import * as G from "../../styles/global"
import * as C from "./styles";
import Header from '../../components/Header';

const Inicio = () => {
	return (
		<G.Content>
			<VerticalMenu />
			<G.Main>
				<Header />
				<G.Section>
					<C.GridLayout>
						<C.WelcomeArea className='section'>
							<h1>Bem-vindo de volta,</h1>
							<p>25 de Setembro de 2022</p>
						</C.WelcomeArea>
						
						<C.GadgetsArea>
							
							<C.GadgetsContainer>
								<C.GadgetsIcon>
									<i className="ri-user-location-line"></i>
								</C.GadgetsIcon>
								<C.GadgetsMain>
									<h1>Bimestral</h1>
									<p id='frequencia-counter' className='counter'>98,8%</p>
									<p id='frequencia-priority'className='priority normal'>Controlado</p>
								</C.GadgetsMain>
							</C.GadgetsContainer>

							<C.GadgetsContainer>
								<C.GadgetsIcon>
									<i className="ri-line-chart-line"></i>
								</C.GadgetsIcon>
								<C.GadgetsMain>
									<h1>Ocorrências</h1>
									<p id='frequencia-counter' className='counter'>0</p>
									<p id='frequencia-priority' className='priority normal'>Controlado</p>
									</C.GadgetsMain>
							</C.GadgetsContainer>
						</C.GadgetsArea>

						<C.TasksArea className='section'>
							<TitleSection 
								title="Avaliações Previstas" 
								icon="ri-file-list-3-line" 
								navigateTo="tarefas"
							/>
						</C.TasksArea>

						<C.TeamsArea className='section'>
							<TitleSection 
								title="Equipes" 
								icon="ri-team-line" 
								navigateTo="equipes"
							/>
						</C.TeamsArea>

						<C.UserArea className='section'>
							4
						</C.UserArea>
						
					</C.GridLayout>
                </G.Section>
			</G.Main>
		</G.Content>
	)
}
	
export default Inicio;