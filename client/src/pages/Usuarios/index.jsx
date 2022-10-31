import React, { Component } from "react"
import { Table } from 'react-bootstrap';
import GlobalStyle from './styles';
import * as C from "./styles";
const apiConfig = require('../../base/api');
class Usuarios extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            usuarios: []
        }
    }

    componentDidMount() {
        this.listUsuarios();
    }

    componentWillUnmount() {

    }

    listUsuarios = () => {
        fetch(apiConfig.urlAPI + "usuarios")
        .then((response) => response.json())
        .then(data => {
            this.setState({
                usuarios: data.usuarios
            });
        })
    }

    deleteUsuario = () => {
        
    }

    render () {
        return (
            <>
            <GlobalStyle />
            <C.Container>
                <C.Main>
                    <C.MainHeader>
                        <h1>Usuários</h1>
                        <h1>{this.state.usuarios.length} cadastrados</h1>
                    </C.MainHeader>
                    <C.SearchContainer>
                        <C.SearchRefresh onClick={this.listUsuarios}>
                            <i className="ri-refresh-line"></i>
                        </C.SearchRefresh>
                        <input type="text" placeholder="Pesquisar por nome, id..." />
                    </C.SearchContainer>

                    <C.MainContent>

                        <Table hover size="md">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Senha</th>
                                    <th scope="col">Idade</th>
                                    <th scope="col">Nascimento</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Matrícula</th>
                                    <th scope="col">Inst.</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.usuarios.map((usuario) => (
                                    <tr key={usuario.id}>
                                        <th scope="row">{usuario.id}</th>
                                        <td>{usuario.name}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.senha}</td>
                                        <td>{usuario.idade}</td>
                                        <td>{usuario.dataNascimento}</td>
                                        <td>{usuario.telefone}</td>
                                        <td>{usuario.registroMatricula}</td>
                                        <td>{usuario.Instituicao_id}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                    </C.MainContent>
                </C.Main>
            </C.Container>
            </>
        );
    }

}

export default Usuarios;