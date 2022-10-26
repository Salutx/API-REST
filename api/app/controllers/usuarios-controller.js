const mysql = require('../mysql').pool;
const bcrypt = require('bcrypt');

exports.getUsuarios = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query( 
            'SELECT * from usuario;',
            (error, result, fields) => {
                if (error) { return res.status(500).send ({ error: error }) }
                const response = {
                    quantidade: result.length,
                    usuarios: result.map(user => {
                        return {
                            id: user.id,
                            registroMatricula: user.registroMatricula,
                            name: user.name,
                            senha: user.senha,
                            idade: user.idade,
                            email: user.email,
                            telefone: user.telefone,
                            dataNascimento: user.dataNascimento,
                            Instituicao_id: user.Instituicao_id,
                            request: {
                                type: 'GET',
                                description: 'Retorna todos os detalhes',
                                url: 'http://localhost:3001/usuarios/' + user.id,
                            }
                        }
                    })
                }
                return res.status(200).send(response);
            }
        );
    })
};

exports.postUsuarios = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }
        
        conn.query('SELECT * FROM usuario WHERE registroMatricula = ?', [req.body.registroMatricula], (error, result) => {
            conn.release();
            if (error) { return res.status(500).send ({ error: error }) }
            if(result.length > 0) {
                res.status(409).send({ message: "Usuário já cadastrado!" });
            } else {
                bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
                    conn.query(
                        'INSERT INTO usuario (registroMatricula, name, senha, idade, email, telefone, dataNascimento, Instituicao_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                        [req.body.registroMatricula, req.body.name, hash, req.body.idade, req.body.email, req.body.telefone, req.body.dataNascimento, req.body.Instituicao_id],
                        (error, result, field) => {
                            if (error) { return res.status(500).send ({ error: error }) }
                            const response = {
                                message: 'Usuário inserido com sucesso',
                                usuarioCriado: {
                                    id: result.insertId,
                                    registroMatricula: req.body.registroMatricula,
                                    name: req.body.name,
                                    senha: hash,
                                    idade: req.body.idade,
                                    email: req.body.email,
                                    telefone: req.body.telefone,
                                    dataNascimento: req.body.dataNascimento,
                                    Instituicao_id: req.body.Instituicao_id,
                                    request: {
                                        type: 'POST',
                                        description: 'Ver todos os usuários',
                                        url: 'http://localhost:3001/usuarios',
                                    }
                                }
                            }
                            return res.status(201).send(response);
                        }
                    )
                });
            }
        })
    });
};

exports.getUniqueUsuarios = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(
            'SELECT * FROM usuario WHERE id = ?;',
            [req.params.id],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                if (result.length === "0") {
                    return res.status(404).send({
                        message: "Não foi encontrado o usuário com este ID"
                    });
                }
                
                const response = {
                    usuario: {
                        id: result[0].id,
                        registroMatricula: result[0].registroMatricula,
                        name: result[0].name,
                        senha: result[0].senha,
                        idade: result[0].idade,
                        email: result[0].email,
                        telefone: result[0].telefone,
                        dataNascimento: result[0].dataNascimento,
                        Instituicao_id: result[0].Instituicao_id,
                        request: {
                            type: 'GET',
                            description: 'Ver todos os usuários',
                            url: 'http://localhost:3001/usuarios',
                        }
                    }
                }
                return res.status(201).send(response);
            }
        )
    });
};

exports.patchUsuarios = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(
            `UPDATE usuario SET registroMatricula = ?, name = ?, senha = ?, idade = ?, email = ?, telefone = ?, dataNascimento = ?, Instituicao_id = ? WHERE id = ?`,
                [
                    req.body.registroMatricula, 
                    req.body.name, 
                    req.body.senha, 
                    req.body.idade, 
                    req.body.email, 
                    req.body.telefone, 
                    req.body.dataNascimento, 
                    req.body.Instituicao_id,
                    req.body.id
                ],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Usuário atualizado com sucesso!',
                    usuarioAtualizado: {
                        id: req.body.id,
                        registroMatricula: req.body.registroMatricula,
                        name: req.body.name,
                        senha: req.body.senha,
                        idade: req.body.idade,
                        email: req.body.email,
                        telefone: req.body.telefone,
                        dataNascimento: req.body.dataNascimento,
                        Instituicao_id: req.body.Instituicao_id,
                        request: {
                            type: 'GET',
                            description: 'Retorna todos os detalhes',
                            url: 'http://localhost:3001/usuarios/' + req.body.id,
                        }
                    }
                }
                return res.status(202).send(response);
            }
        )
    });
};

exports.deleteUsuarios = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(
            `DELETE FROM usuario WHERE id = ?`, [req.body.id],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Usuário deletado com sucesso!',
                    request: {
                        type: 'POST',
                        description: 'Insere um usuário',
                        url: 'http://localhost:3001/usuarios/',
                        body: {
                            name: "String",
                            registroMatricula: "Integer",
                            senha: "String",
                            idade: "Integer",
                            email: "String",
                            telefone: "String",
                            dataNascimento: "String",
                            Instituicao_id: "Integer"
                        }
                    }
                }
                return res.status(202).send(response);
            }
        )
    });
};