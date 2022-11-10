import React from 'react'
import GlobalStyle from '../../styles/global';
import * as C from "./styles.js";
import { useThemeContext } from '../../contexts/theme';

const Navbar = () => {
    const { changeTheme } = useThemeContext();

    return (
        <C.Header>
            <GlobalStyle />
            <C.Container>
                <C.Navbar>
                    <C.HeaderTitle>
                        <h1>Dashboard</h1>
                        <C.Breadcumb>/ PÁGINA INICIAL</C.Breadcumb>
                    </C.HeaderTitle>

                    <C.SearchContainer>
                        <C.NavbarTools>
                            <button>
                                <i className="ri-notification-2-line"></i>
                            </button>
                            <button onClick={changeTheme}>
                                <i className="ri-moon-line"></i>
                            </button>
                        </C.NavbarTools>
                        <C.NavbarSearch>
                            <button>
                                <i className="ri-search-2-line"></i>
                            </button>

                            <input type="text" placeholder="Pesquisar por nome, grupo, assunto..."/>
                            
                            <button>
                                <i className="ri-arrow-down-s-line"></i>
                            </button>
                        </C.NavbarSearch>
                    </C.SearchContainer>
                </C.Navbar>
            </C.Container>
        </C.Header>
    )
}

export default Navbar;