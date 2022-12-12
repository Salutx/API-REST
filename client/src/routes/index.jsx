import { Fragment } from "react";
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import { ThemeContextProvider } from "../contexts/theme.js";
import useAuth from "../hooks/useAuth.js";
import Inicio from "../pages/Inicio";
import Start from "../pages/Start";
import Equipes from "../pages/Equipes";
import PageNotFound from "../pages/PageNotFound/";
import Students from "../pages/Students/index.jsx";
import Teachers from "../pages/Teachers/index.jsx";
import Agenda from "../pages/Agenda/index.jsx";
import Tarefas from "../pages/Tarefas/index.jsx";
import Boletim from "../pages/Boletim/index.jsx";
import Avisos from "../pages/Avisos/index.jsx";
import Perfil from "../pages/Perfil/index.jsx";
import PermissionGate from '../hooks/permissionGate';

const Private = ({ Item }) => {
    const { signed } = useAuth();
    return signed > 0 ? <Item /> : <Start />;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <ThemeContextProvider>
                    <Routes>
                        {/* Global Routes */}
                        <Route path="/start"     element={<Start />} />
                        <Route path="/"          element={<Navigate to="/start" />} />
                        <Route path="*" element={
                            <>
                                <PermissionGate permissions={['Aluno', 'Professor']}>
                                    <Navigate to="/dashboard" />
                                </PermissionGate>
                                <PermissionGate permissions={['Admin']}>
                                    <Navigate to="/students" />
                                </PermissionGate>
                            </>
                        } />

                        {/* Pages Routes */}
                        <Route exact path="/dashboard" element={
                            <>
                                <PermissionGate permissions={['Aluno', 'Professor']}>
                                    <Private Item={Inicio} />
                                </PermissionGate>
                                <PermissionGate permissions={['Admin']}>
                                    <Navigate to="/students" />
                                </PermissionGate>
                            </>
                        } />

                        <Route exact path="/students" element={
                            <>
                                <PermissionGate permissions={['Aluno', 'Professor']}>
                                    <Navigate to="/dashboard" />
                                </PermissionGate>
                                <PermissionGate permissions={['Admin']}>
                                    <Private Item={Students} />
                                </PermissionGate>
                            </>
                        } />

                        <Route exact path="/teachers" element={
                            <>
                                <PermissionGate permissions={['Aluno', 'Professor']}>
                                    <Navigate to="/dashboard" />
                                </PermissionGate>
                                <PermissionGate permissions={['Admin']}>
                                    <Private Item={Teachers} />
                                </PermissionGate>
                            </>
                        } />

                        <Route exact path="/equipes" element={
                            <>
                                <PermissionGate permissions={['Aluno', 'Professor']}>
                                    <Private Item={Equipes} />
                                </PermissionGate>
                                <PermissionGate permissions={['Admin']}>
                                    <Navigate to="/dashboard" />
                                </PermissionGate>
                            </>
                        } />

                        <Route exact path="/agenda" element={
                            <>
                                <PermissionGate permissions={['Aluno', 'Professor']}>
                                    <Private Item={Agenda} />
                                </PermissionGate>
                                <PermissionGate permissions={['Admin']}>
                                    <Navigate to="/dashboard" />
                                </PermissionGate>
                            </>
                        } />

                        <Route exact path="/tarefas" element={
                            <>
                                <PermissionGate permissions={['Aluno', 'Professor']}>
                                    <Private Item={Tarefas} />
                                </PermissionGate>
                                <PermissionGate permissions={['Admin']}>
                                    <Navigate to="/dashboard" />
                                </PermissionGate>
                            </>
                        } />

                        <Route exact path="/boletim" element={
                            <>
                                <PermissionGate permissions={['Aluno', 'Professor']}>
                                    <Private Item={Boletim} />
                                </PermissionGate>
                                <PermissionGate permissions={['Admin']}>
                                    <Navigate to="/dashboard" />
                                </PermissionGate>
                            </>
                        } />

                        <Route exact path="/avisos" element={
                            <>
                                <PermissionGate permissions={['Aluno', 'Professor']}>
                                    <Private Item={Avisos} />
                                </PermissionGate>
                                <PermissionGate permissions={['Admin']}>
                                    <Navigate to="/dashboard" />
                                </PermissionGate>
                            </>
                        } />

                        <Route exact path="/perfil" element={
                            <>
                                <PermissionGate permissions={['Aluno', 'Professor']}>
                                    <Private Item={Perfil} />
                                </PermissionGate>
                                <PermissionGate permissions={['Admin']}>
                                    <Navigate to="/dashboard" />
                                </PermissionGate>
                            </>
                        } />

                        <Route exact path="/404"       element={<PageNotFound />} />
                    </Routes>
                </ThemeContextProvider>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;