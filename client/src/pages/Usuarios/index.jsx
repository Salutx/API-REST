import React from "react"

class Usuarios extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            usuarios: []
        }

        fetch("http://localhost:3001/usuarios")
        .then(res => res.json())
        .then(data => {
            this.setState({
                usuarios : data
            })
            return console.log(data);
        })
    }

    componentDidMount() {
        this.listUsuarios();
    }

    listUsuarios = () => {
        fetch("http://localhost:3001/usuarios")
        .then(res => res.json())
        .then(data => {
            this.setState({
                usuarios : data
            })
            return console.log(data);
        })
    }

    render () {
        return (
            <>
            {
                this.state.usuarios.map((usuario) => {
                    <div>
                    <p>{usuario.id}</p>
                    <h1>Nome: {usuario.name}</h1>
                    <p>Email: {usuario.email}</p>
                    <p>Senha: {usuario.senha}</p>
                    <p>Idade: {usuario.idade}</p>
                    <p>Data de Nascimento: {usuario.dataNascimento}</p>
                    <p>Telefone: {usuario.telefone}</p>
                    <p>Registro Matrícula: {usuario.registroMatricula}</p>
                    <p>Instituição: {usuario.Instituicao_id}</p>
                    </div>
                })
            }
            </>
        );
    }

}

export default Usuarios;