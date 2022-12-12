import React from 'react';
import PermissionGate from '../../hooks/permissionGate';
import VerticalMenu from '../../components/VerticalMenu';
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';
import CreateTeacher from '../Admin/Teacher/CreateTeacher';
import ListTeacher from '../Admin/Teacher/ListTeacher';

import * as G from "../../styles/global"
import * as C from "../Inicio/styles";

const Teachers = () => {
  return (
    <G.TestLoader>
    <Preloader text="Carregando interface..."/>
    <PermissionGate permissions={['Admin']}>
    <G.Content>
        <VerticalMenu/>
            <G.Main>
                <Header />
                <G.Section>
                    <C.AdminSections>
                        <CreateTeacher/>
                        <ListTeacher />
                    </C.AdminSections>
                </G.Section>
            </G.Main>
    </G.Content>
    </PermissionGate>
    </G.TestLoader>
  )
}

export default Teachers