import React from 'react'
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import GlobalStyle from '../../styles/global';
import * as C from "./styles.js";
import { useThemeContext } from '../../contexts/theme';

const Navbar = () => {

    function urlNameCheck () {return window.location.pathname;}

    const { signout } = useAuth();
	const navigate = useNavigate();

    const { changeTheme } = useThemeContext();

    return (
        <C.Header>
            <C.Container>
                <C.Navbar>
                    <C.Breadcrumb>
                        <p>Você está em:</p>
                        <p>{urlNameCheck()}</p>
                    </C.Breadcrumb>
                    
                    <GlobalStyle />

                    <C.SearchContainer>
                        <C.NavbarSearch>
                            <a>
                                <i className="ri-search-2-line"></i>
                            </a>
                            <input type="text" placeholder="Pesquisar por nome, grupo, assunto..."/>
                            
                            <a>
                                <i className="ri-arrow-down-s-line"></i>
                            </a>
                        </C.NavbarSearch>
                        <C.NavbarTools>
                            <button>
                                <i className="ri-notification-2-line"></i>
                            </button>
                            <button onClick={changeTheme}>
                                <i className="ri-moon-line"></i>
                            </button>
                        </C.NavbarTools>
                    </C.SearchContainer>

                    <C.NavbarLogout>
                        <button onClick={() => [signout(), navigate("/")]}>
                            Sair
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </C.NavbarLogout>
                </C.Navbar>
            </C.Container>
        </C.Header>
    )
}

export default Navbar;