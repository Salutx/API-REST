import { Fragment } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ThemeContextProvider } from "../contexts/theme.js";
import useAuth from "../hooks/useAuth.js";
import Inicio from "../pages/Inicio";
import Start from "../pages/Start";
import Cadastrar from "../pages/Cadastrar/";
import Equipes from "../pages/Equipes";
import Usuarios from "../pages/Usuarios/";
import PageNotFound from "../pages/PageNotFound/";

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
                        <Route path="*"          element={<Navigate to="/404" />} />

                        {/* Pages Routes */}
                        <Route exact path="/inicio"    element={<Private Item={Inicio} />} />
                        <Route exact path="/cadastrar" element={<Cadastrar />} />
                        <Route exact path="/equipes"   element={<Private Item={Equipes} />} />
                        <Route exact path="/usuarios"  element={<Usuarios />} />
                        <Route exact path="/404"       element={<PageNotFound />} />
                    </Routes>
                </ThemeContextProvider>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;