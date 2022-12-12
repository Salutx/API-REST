const mysql = require('../mysql').pool;

const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getTeachers = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query( 
            'SELECT * from teacher;',
            (error, result, fields) => {
                if (error) { return res.status(500).send ({ error: error }) }
                const response = {
                    quantity: result.length,
                    teachers: result.map(teacher => {
                        return {
                            id: teacher.id,
                            registroMatricula: teacher.registroMatricula,
                            first_name: teacher.first_name,
                            last_name: teacher.last_name,
                            email: teacher.email,
                            birth_date: teacher.birth_date,
                            user_type: teacher.user_type,
                            telefone: teacher.telefone,
                            is_active: teacher.is_active,
                            avatar: teacher.avatar,
                            institution_id: teacher.institution_id,
                            request: {
                                type: 'GET',
                                description: 'Retorna todos os detalhes',
                                url: 'http://localhost:3001/teachers/' + teacher.id,
                            }
                        }
                    })
                }
                return res.status(200).send(response);
            }
        );
    })
};

exports.postTeacher = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(200).send ({ error: error }) }
        
        conn.query('SELECT * FROM teacher WHERE registroMatricula = ?', [req.body.registroMatricula], (error, result) => {
            conn.release();
            if (error) { return res.status(200).send ({ error: error }) }
            if (result.length >= 1) {
                return res.status(409).send({ message: "Professor já cadastrado!" });
            } else {
                bcrypt.hash(req.body.passwordHash, saltRounds, (err, hash) => {
                    conn.query(
                        'INSERT INTO teacher (registroMatricula, first_name, last_name, birth_date, email, passwordHash, user_type, telefone, avatar, is_active, institution_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                        [
                            req.body.registroMatricula, 
                            req.body.first_name, 
                            req.body.last_name,
                            req.body.birth_date,
                            req.body.email,
                            hash, 
                            req.body.user_type, 
                            req.body.telefone, 
                            req.file.path,
                            req.body.is_active,
                            req.body.institution_id
                        ],
                        (error, result, field) => {
                            if (error) { return res.status(200).send ({ error: error }) }
                            const response = {
                                message: 'Professor inserido com sucesso!',
                                teacherCriado: {
                                    id: result.insertId,
                                    registroMatricula: req.body.registroMatricula,
                                    first_name: req.body.first_name,
                                    last_name: req.body.last_name,
                                    birth_date: req.body.birth_date,
                                    email: req.body.email,
                                    passwordHash: hash,
                                    user_type: req.body.user_type,
                                    telefone: req.body.telefone,
                                    avatar: req.file.path,
                                    is_active: req.body.is_active,
                                    created_at: req.body.create_at,
                                    institution_id: req.body.institution_id,
                                    request: {
                                        type: 'POST',
                                        description: 'Ver todos os professores',
                                        url: 'http://localhost:3001/teachers',
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

exports.getUniqueTeacher = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(
            'SELECT * FROM teacher WHERE registroMatricula = ?;',
            [req.params.id],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                if (result.length < 1) {
                    return res.status(404).send({
                        message: "Não foi encontrado o professor com este ID"
                    });
                }
                
                const response = {
                    teacher: {
                        id: result[0].id,
                        registroMatricula: result[0].registroMatricula,
                        first_name: result[0].first_name,
                        last_name: result[0].last_name,
                        birth_date: result[0].birth_date,
                        email: result[0].email,
                        passwordHash: result[0].passwordHash,
                        user_type: result[0].user_type,
                        telefone: result[0].telefone,
                        avatar: result[0].avatar,
                        is_active: result[0].is_active,
                        created_at: result[0].created_at,
                        updated_at: result[0].updated_at,
                        institution_id: result[0].institution_id,
                        request: {
                            type: 'GET',
                            description: 'Ver todos os professores',
                            url: 'http://localhost:3001/teachers',
                        }
                    }
                }
                return res.status(201).send(response);
            }
        )
    });
};

exports.patchTeacher = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(
            `UPDATE teacher SET registroMatricula = ?, first_name = ?, last_name = ?, birth_date = ?, email = ?, passwordHash = ?, user_type = ?, telefone = ?, avatar = ?, is_active = ?, updated_at = ?, institution_id = ? WHERE id = ?`,
                [
                    req.body.first_name, 
                    req.body.last_name, 
                    req.body.birth_date,  
                    req.body.email, 
                    req.body.passwordHash, 
                    req.body.user_type, 
                    req.body.telefone,
                    req.body.avatar,
                    req.body.is_active,
                    req.body.updated_at,
                    req.body.institution_id,
                ],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Student atualizado com sucesso!',
                    usuarioAtualizado: {
                        id: req.body.id,
                        last_name: req.body.last_name, 
                        birth_date: req.body.birth_date,  
                        email: req.body.email, 
                        passwordHash: req.body.passwordHash, 
                        user_type: req.body.user_type, 
                        telefone: req.body.telefone,
                        avatar: req.body.avatar,
                        is_active: req.body.is_active,
                        updated_at: req.body.updated_at,
                        institution_id: req.body.institution_id,
                        request: {
                            type: 'GET',
                            description: 'Retorna todos os detalhes',
                            url: 'http://localhost:3001/teachers/' + req.body.id,
                        }
                    }
                }
                return res.status(202).send(response);
            }
        )
    });
};

exports.deleteTeacher = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(`DELETE FROM Teacher WHERE id = ?`, [req.body.id], (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Teacher deletado com sucesso!',
                    request: {
                        type: 'DELETE',
                        description: 'Insere um teacher',
                        url: 'http://localhost:3001/teachers/register',
                        body: {
                            "registroMatricula": "String",
                            "first_name": "String",
                            "last_name": "String",
                            "birth_date": "String",
                            "email": "String",
                            "passwordHash": "String",
                            "user_type": "String",
                            "telefone": "String",
                            "is_active": "Int",
                            "updated_at": "Datetime",
                            "institution_id": "Int"
                        }
                    }
                }
                return res.status(202).send(response);
            }
        )
    });
};