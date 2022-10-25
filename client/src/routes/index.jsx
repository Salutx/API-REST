import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContextProvider } from "../contexts/theme.js";
import useAuth from "../hooks/useAuth.js";
import Inicio from "../pages/Inicio";
import Signin from "../pages/Signin";
import Cadastrar from "../pages/Cadastrar/index.jsx";
import Equipes from "../pages/Equipes";
import Usuarios from "../pages/Usuarios/index.jsx";

const Private = ({ Item }) => {
    const { signed } = useAuth();
    return signed > 0 ? <Item /> : <Signin />;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <ThemeContextProvider>
                    <Routes>
                        <Route exact path="/inicio"        element={<Private Item={Inicio} />} />
                        <Route path="/"                 element={<Signin />} />
                        <Route exact path="/cadastrar"  element={<Cadastrar />} />
                        <Route path="/"                 element={<Signin />} />
                        <Route exact path="/equipes"  element={<Private Item={Equipes} />} />
                        <Route path="/"                 element={<Signin />} />
                        <Route exact path="/usuarios"  element={<Usuarios />} />
                    </Routes>
                </ThemeContextProvider>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;