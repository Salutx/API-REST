const mysql = require('../mysql').pool;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
                            email: user.email,
                            telefone: user.telefone,
                            dataNascimento: user.dataNascimento,
                            avatar: user.avatar, 
                            Instituicao_id: user.Instituicao_id,
                            request: {
                                type: 'GET',
                                description: 'Retorna todos os detalhes',
                                url: 'http://localhost:3001/users/' + user.id,
                            }
                        }
                    })
                }
                return res.status(200).send(response);
            }
        );
    })
};

exports.loginUser = (req, res, next) => {

    const ConfirmarNascimento = req.body.dataNascimento;
    const ConfirmarInstituicao = req.body.Instituicao_id;
    const ConfirmarSenha = req.body.senha;
    const ConfirmarEmail = req.body.email;

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }
        conn.query('SELECT * FROM usuario WHERE email = ?', [req.body.email], (error, result, fields) => {
            conn.release();

            var user = result[0];

            if (!user) {
                if (error) { return res.status(500).send ({ error: error }) }
            } else {
                
            var dbEmail = user.email;
            var dbNascimento = user.dataNascimento;
            var dbInstituicao_id = user.Instituicao_id;
            var dbSenha = user.senha;

                if(ConfirmarEmail == dbEmail && ConfirmarNascimento == dbNascimento && ConfirmarInstituicao == dbInstituicao_id) {
                    bcrypt.compare(ConfirmarSenha, dbSenha, (err, data) => {
                        if(err) {
                            return res.status(401).send({ error: "Falha na autenticação."})
                        }
                        if(data) {
                            const token = jwt.sign({
                                userId: user.id,
                                email: user.email
                            }, 'w■ebúè0q◘φ',{expiresIn: "1h"})
                            return res.status(200).send(
                                {
                                    message: "Autenticado!", 
                                    token: token
                                })
                        } else {
                            return res.status(401).send({ error: error})
                        }
                        
                    });
                } else {
                    return res.status(401).send({ error: error})
                }
            }
        });
    });
}

exports.postUsuarios = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(200).send ({ error: error }) }
        
        conn.query('SELECT * FROM usuario WHERE registroMatricula = ?', [req.body.registroMatricula], (error, result) => {
            conn.release();
            if (error) { return res.status(200).send ({ error: error }) }
            if (result.length >= 1) {
                return res.status(409).send({ message: "Usuário já cadastrado!" });
            } else {
                bcrypt.hash(req.body.senha, saltRounds, (err, hash) => {
                    conn.query(
                        'INSERT INTO usuario (registroMatricula, name, senha, email, telefone, dataNascimento, avatar, Instituicao_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                        [
                            req.body.registroMatricula, 
                            req.body.name, hash, 
                            req.body.email, 
                            req.body.telefone, 
                            req.body.dataNascimento, 
                            req.file.path,
                            req.body.Instituicao_id
                        ],
                        (error, result, field) => {
                            if (error) { return res.status(200).send ({ error: error }) }
                            const response = {
                                message: 'Usuário inserido com sucesso!',
                                usuarioCriado: {
                                    id: result.insertId,
                                    registroMatricula: req.body.registroMatricula,
                                    name: req.body.name,
                                    senha: hash,
                                    email: req.body.email,
                                    telefone: req.body.telefone,
                                    dataNascimento: req.body.dataNascimento,
                                    avatar: req.file.path,
                                    Instituicao_id: req.body.Instituicao_id,
                                    request: {
                                        type: 'POST',
                                        description: 'Ver todos os usuários',
                                        url: 'http://localhost:3001/users',
                                    }
                                }
                            }
                            return res.status(201).send(response);
                        }
                    )
                })
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
                
                if (result.length < 1) {
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
                        email: result[0].email,
                        telefone: result[0].telefone,
                        dataNascimento: result[0].dataNascimento,
                        avatar: result[0].avatar,
                        Instituicao_id: result[0].Instituicao_id,
                        request: {
                            type: 'GET',
                            description: 'Ver todos os usuários',
                            url: 'http://localhost:3001/users',
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
            `UPDATE usuario SET registroMatricula = ?, name = ?, senha = ?, email = ?, telefone = ?, dataNascimento = ?, Instituicao_id = ? WHERE id = ?`,
                [
                    req.body.registroMatricula, 
                    req.body.name, 
                    req.body.senha,  
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
                        email: req.body.email,
                        telefone: req.body.telefone,
                        dataNascimento: req.body.dataNascimento,
                        Instituicao_id: req.body.Instituicao_id,
                        request: {
                            type: 'GET',
                            description: 'Retorna todos os detalhes',
                            url: 'http://localhost:3001/users/' + req.body.id,
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

        conn.query(`DELETE FROM usuario WHERE id = ?`, [req.body.id], (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Usuário deletado com sucesso!',
                    request: {
                        type: 'DELETE',
                        description: 'Insere um usuário',
                        url: 'http://localhost:3001/users/registrar',
                        body: {
                            name: "String",
                            registroMatricula: "Integer",
                            senha: "String",
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