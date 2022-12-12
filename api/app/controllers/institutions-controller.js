const mysql = require('../mysql').pool;

exports.getInstitutions = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query( 
            'SELECT * from institution;',
            (error, result, fields) => {
                if (error) { return res.status(500).send ({ error: error }) }
                const response = {
                    quantity: result.length,
                    institutions: result.map(institution => {
                        return {
                            id: institution.id,
                            name: institution.name,
                            telefonePrimario: institution.telefonePrimario,
                            telefoneSecundario: institution.telefoneSecundario,
                            email: institution.email,
                            request: {
                                type: 'GET',
                                description: 'Retorna todos os detalhes',
                                url: 'http://localhost:3001/institutions/' + institution.id,
                            }
                        }
                    })
                }
                return res.status(200).send(response);
            }
        );
    })
};

exports.postInstitution = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }
        
        conn.query('SELECT * FROM institution WHERE email = ?', [req.body.email], (error, result) => {
            conn.release();
            if (error) { return res.status(500).send ({ error: error }) }
            if(result.length > 0) {
                res.status(409).send({ message: "Instituição já cadastrada!" });
            } else {
                conn.query(
                    'INSERT INTO institution (name, endereco_cep, endereco_cidade, endereco_rua, telefonePrimario, telefoneSecundario, email) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    [
                        req.body.name,
                        req.body.endereco_cep,
                        req.body.endereco_cidade, 
                        req.body.endereco_rua, 
                        req.body.telefonePrimario, 
                        req.body.telefoneSecundario,
                        req.body.email,
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
                                created_at: req.body.created_at,
                                request: {
                                    type: 'POST',
                                    description: 'Ver todas as instituições',
                                    url: 'http://localhost:3001/institutions',
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

exports.getUniqueInstitution = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(
            'SELECT * FROM institution WHERE id = ?;',
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
                    institution: {
                        id: result[0].id,
                        name: result[0].name,
                        endereco_cep: result[0].endereco_cep,
                        endereco_cidade: result[0].endereco_cidade,
                        endereco_rua: result[0].endereco_rua,
                        telefonePrimario: result[0].telefonePrimario,
                        telefoneSecundario: result[0].telefoneSecundario,
                        email: result[0].email,
                        created_at: result[0].created_at,
                        updated_at: result[0].updated_at,
                        request: {
                            type: 'GET',
                            description: 'Ver todas as instituições',
                            url: 'http://localhost:3001/institutions',
                        }
                    }
                }
                return res.status(201).send(response);
            }
        )
    });
};

exports.patchInstitution = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(
            `UPDATE institution SET name = ?, endereco_cep = ?, endereco_cidade = ?, endereco_rua = ?, telefonePrimario = ?, telefoneSecundario = ?, email = ?, updated_at = ? WHERE id = ?`,
                [
                    req.body.name,
                    req.body.endereco_cep,
                    req.body.endereco_cidade,
                    req.body.endereco_rua,
                    req.body.telefonePrimario,
                    req.body.telefoneSecundario,
                    req.body.email,
                    req.body.updated_at
                ],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Instituição atualizada com sucesso!',
                    usuarioAtualizado: {
                        id: req.body.id,
                        name: req.body.name,
                        endereco_cep: req.body.endereco_cep,
                        endereco_cidade: req.body.endereco_cidade,
                        telefonePrimario: req.body.telefonePrimario,
                        telefoneSecundario: req.body.telefoneSecundario,
                        email: req.body.email,
                        created_at: req.body.created_at,
                        updated_at: req.body.updated_at,
                        request: {
                            type: 'PATCH',
                            description: 'Retorna todas as instituicoes',
                            url: 'http://localhost:3001/institutions/' + req.body.id,
                        }
                    }
                }
                return res.status(202).send(response);
            }
        )
    });
};

exports.deleteInstitution = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(`DELETE FROM institution WHERE id = ?`, [req.body.id], (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Institutição deletada com sucesso!',
                    request: {
                        type: 'DELETE',
                        description: 'Insere uma instituição',
                        url: 'http://localhost:3001/institution/registrar',
                    }
                }
                return res.status(202).send(response);
            }
        )
    });
};