const mysql = require('../mysql').pool;

exports.getInstituicao = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query( 
            'SELECT * from instituicao;',
            (error, result, fields) => {
                if (error) { return res.status(500).send ({ error: error }) }
                const response = {
                    quantidade: result.length,
                    instituicoes: result.map(instituicao => {
                        return {
                            id: instituicao.id,
                            name: instituicao.name,
                            enderecoCEP: instituicao.endereco_cep,
                            enderecoCIDADE: instituicao.endereco_cidade,
                            enderecoRUA: instituicao.endereco_rua,
                            telefonePrimario: instituicao.telefonePrimario,
                            telefoneSecundario: instituicao.telefoneSecundario,
                            email: instituicao.email, 
                            request: {
                                type: 'GET',
                                description: 'Retorna todos os detalhes',
                                url: 'http://localhost:3001/instituicoes/' + instituicao.id,
                            }
                        }
                    })
                }
                return res.status(200).send(response);
            }
        );
    })
};

exports.postInstituicao = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }
        
        conn.query('SELECT * FROM instituicao WHERE email = ?', [req.body.email], (error, result) => {
            conn.release();
            if (error) { return res.status(500).send ({ error: error }) }
            if(result.length > 0) {
                res.status(409).send({ message: "Instituição já cadastrada!" });
            } else {
                conn.query(
                    'INSERT INTO instituicao (name, endereco_cep, endereco_cidade, endereco_rua, telefonePrimario, telefoneSecundario, email) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    [
                        req.body.name,
                        req.body.endereco_cep,
                        req.body.endereco_cidade, 
                        req.body.endereco_rua, 
                        req.body.telefonePrimario, 
                        req.body.telefoneSecundario,
                        req.body.email
                    ],
                    (error, result, field) => {
                        if (error) { return res.status(500).send ({ error: error }) }
                        const response = {
                            message: 'Instituição inserida com sucesso!',
                            instituicaoCriada: {
                                id: result.insertId,
                                name: req.body.name,
                                endereco_cep: req.body.enderecoCEP,
                                endereco_cidade: req.body.enderecoCIDADE,
                                endereco_rua: req.body.enderecoRUA,
                                telefonePrimario: req.body.telefonePrimario,
                                telefoneSecundario: req.body.telefoneSecundario,
                                email: req.body.email,
                                request: {
                                    type: 'POST',
                                    description: 'Ver todas as instituições',
                                    url: 'http://localhost:3001/instituicoes',
                                }
                            }
                        }
                        return res.status(201).send(response);
                    }
                )
            }
        })
    });
};

exports.getUniqueInstituicao = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(
            'SELECT * FROM instituicao WHERE id = ?;',
            [req.params.id],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                if (result.length < 1) {
                    return res.status(404).send({
                        message: "Não foi encontrada a instituição com este ID"
                    });
                }
                
                const response = {
                    instituicao: {
                        id: result[0].id,
                        name: result[0].name,
                        enderecoCEP: result[0].endereco_cep,
                        enderecoCIDADE: result[0].endereco_cidade,
                        enderecoRUA: result[0].endereco_rua,
                        telefonePrimario: result[0].telefonePrimario,
                        telefoneSecundario: result[0].telefoneSecundario,
                        email: result[0].email,
                        request: {
                            type: 'GET',
                            description: 'Ver todas as instituições',
                            url: 'http://localhost:3001/instituicoes',
                        }
                    }
                }
                return res.status(201).send(response);
            }
        )
    });
};

exports.patchInstituicao = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(
            `UPDATE usuario SET name = ?, endereco_cep = ?, endereco_cidade = ?, endereco_rua = ?, telefonePrimario = ?, telefoneSecundario = ?, email = ? WHERE id = ?`,
                [
                    req.body.name,
                    req.body.enderecoCEP,
                    req.body.enderecoCIDADE,
                    req.body.enderecoRUA,
                    req.body.telefonePrimario,
                    req.body.telefoneSecundario,
                    req.body.email
                ],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Instituição atualizada com sucesso!',
                    usuarioAtualizado: {
                        id: req.body.id,
                        name: req.body.name,
                        endereco_cep: req.body.enderecoCEP,
                        endereco_cidade: req.body.enderecoCIDADE,
                        telefonePrimario: req.body.telefonePrimario,
                        telefoneSecundario: req.body.telefoneSecundario,
                        email: req.body.email,
                        request: {
                            type: 'PATCH',
                            description: 'Retorna todas as instituicoes',
                            url: 'http://localhost:3001/instituicoes/' + req.body.id,
                        }
                    }
                }
                return res.status(202).send(response);
            }
        )
    });
};

exports.deleteInstituicao = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(`DELETE FROM instituicao WHERE id = ?`, [req.body.id], (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Instituicao deletado com sucesso!',
                    request: {
                        type: 'DELETE',
                        description: 'Insere um usuário',
                        url: 'http://localhost:3001/users/registrar',
                    }
                }
                return res.status(202).send(response);
            }
        )
    });
};