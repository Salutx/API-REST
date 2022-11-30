import { Fragment } from "react";
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import { ThemeContextProvider } from "../contexts/theme.js";
import useAuth from "../hooks/useAuth.js";
import Inicio from "../pages/Inicio";
import Start from "../pages/Start";
import Equipes from "../pages/Equipes";
import PageNotFound from "../pages/PageNotFound/";
import Test from "../pages/Test/index.jsx";
import Students from "../pages/Students/index.jsx";
import Teachers from "../pages/Teachers/index.jsx";
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
                        <Route path="/start"     element={<Test />} />
                        <Route path="/"          element={<Navigate to="/start" />} />
                        <Route path="*"          element={<Navigate to="/404" />} />

                        {/* Pages Routes */}
                        <Route exact path="/dashboard"  element={
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

                        <Route exact path="/equipes"   element={<Private Item={Equipes} />} />
                        <Route exact path="/404"       element={<PageNotFound />} />
                    </Routes>
                </ThemeContextProvider>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;