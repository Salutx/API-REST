import React from 'react';
import PermissionGate from '../../hooks/permissionGate';
import VerticalMenu from '../../components/VerticalMenu';
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';
import CreateStudent from '../Admin/Student/CreateStudent';
import ListStudent from '../Admin/Student/ListStudent';

import * as G from "../../styles/global"
import * as C from "../Inicio/styles";

const Students = () => {
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
                        <CreateStudent/>
                        <ListStudent />
                    </C.AdminSections>
                </G.Section>
            </G.Main>
    </G.Content>
    </PermissionGate>
    </G.TestLoader>
  )
}

export default Students