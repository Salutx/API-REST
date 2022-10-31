const SQL = require("./index.js");

const Usuario = function(usuario) {
    this.registroMatricula = usuario.registroMatricula;
    this.senha = usuario.senha;
    this.idade = usuario.idade;
    this.email = usuario.email;
    this.telefone = usuario.telefone;
    this.dataNascimento = usuario.dataNascimento;
    this.codInstituicao = usuario.Instituicao_id;
    this.name = usuario.name;
};

Usuario.create = (newUsuario, result) => {
    SQL.query("INSERT INTO usuario SET ?", newUsuario, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        console.log("Created usuario: ", { id: res.insertId, ...newUsuario });
    });
};

Usuario.getAll = (name, result) => {
    let query = "SELECT * FROM usuario";
    if (name) {
        query += `WHERE name LIKE '%${name}%'`;
    }

    SQL.query(query, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            return (null, err);
        }

        console.log("Usuarios: ", res);
        result(null, res);
    });
}

module.exports = Usuario;