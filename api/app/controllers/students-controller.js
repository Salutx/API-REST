const mysql = require('../mysql').pool;

const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getStudents = async (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query( 
            'SELECT student.*, course.course_name, course.course_abbr, course_level.level FROM student LEFT JOIN course ON student.course_id = course.id LEFT JOIN course_level ON course.course_level_id = course_level.id',
            (error, result, fields) => {
                if (error) { return res.status(500).send ({ error: error }) }
                const response = {
                    quantity: result.length,
                    students: result.map(student => {
                        return {
                            id: student.id,
                            registroMatricula: student.registroMatricula,
                            first_name: student.first_name,
                            last_name: student.last_name,
                            email: student.email,
                            birth_date: student.birth_date,
                            user_type: student.user_type,
                            telefone: student.telefone,
                            is_active: student.is_active,
                            avatar: student.avatar,
                            course: {
                                course_id: student.course_id,
                                course_name: student.course_name,
                                course_abbr: student.course_abbr,
                                course_level: student.level,
                                institution_id: student.institution_id,
                            },
                            request: {
                                type: 'GET',
                                description: 'Retorna todos os detalhes',
                                url: 'http://localhost:3001/students/' + student.id,
                            }
                        }
                    })
                }
                return res.status(200).send(response);
            }
        );
    })
};

exports.postStudent = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(200).send ({ error: error }) }
        
        conn.query('SELECT * FROM student WHERE registroMatricula = ?', [req.body.registroMatricula], (error, result) => {
            conn.release();
            if (error) { return res.status(200).send ({ error: error }) }
            if (result.length >= 1) {
                return res.status(409).send({ message: "Aluno já cadastrado!" });
            } else {
                bcrypt.hash(req.body.passwordHash, saltRounds, (err, hash) => {
                    conn.query(
                        'INSERT INTO student (registroMatricula, first_name, last_name, birth_date, email, passwordHash, user_type, telefone, avatar, is_active, course_id, institution_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
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
                            req.body.course_id,
                            req.body.institution_id
                        ],
                        (error, result, field) => {
                            if (error) { return res.status(200).send ({ error: error }) }
                            const response = {
                                message: 'Aluno inserido com sucesso!',
                                studentCriado: {
                                    id: result.insertId,
                                    registroMatricula: req.body.registroMatricula,
                                    first_name: req.body.first_name,
                                    last_name: req.body.last_name,
                                    birth_date: req.body.birth_date,
                                    email: req.body.email,
                                    passwordHash: hash,
                                    user_type: req.body.user_type,
                                    telefone: req.body.telefone,
                                    avatar: req.path.file,
                                    is_active: req.body.is_active,
                                    created_at: req.body.created_at,
                                    course_id: req.body.course_id,
                                    institution_id: req.body.institution_id,
                                    request: {
                                        type: 'POST',
                                        description: 'Ver todos os alunos',
                                        url: 'http://localhost:3001/students',
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

exports.getUniqueStudent = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }
        conn.query(
            'SELECT student.*, course.course_name, course.course_abbr, course_level.level FROM student LEFT JOIN course ON student.course_id = course.id LEFT JOIN course_level ON course.course_level_id = course_level.id WHERE registroMatricula = ?;',
            [req.params.id, req.params.id],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                if (result.length < 1) {
                    return res.status(404).send({
                        message: "Não foi encontrado o aluno com este ID"
                    });
                }
                
                const response = {
                    student: {
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
                        course: {
                            course_id: result[0].course_id,
                            course_level: result[0].level,
                            course_name: result[0].course_name,
                            course_abbr: result[0].course_abbr,
                            institution_id: result[0].institution_id,
                        },
                        request: {
                            type: 'GET',
                            description: 'Ver todos os students',
                            url: 'http://localhost:3001/students',
                        }
                    }
                }
                return res.status(201).send(response);
            }
        )
    });
};

exports.patchStudent = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(
            `UPDATE student SET registroMatricula = ?, first_name = ?, last_name = ?, birth_date = ?, email = ?, passwordHash = ?, user_type = ?, telefone = ?, avatar = ?, is_active = ?, updated_at = ?, course_id = ?, institution_id = ? WHERE id = ?`,
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
                    req.body.course_id,
                    req.body.institution_id,
                ],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Aluno atualizado com sucesso!',
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
                        course_id: req.body.course_id,
                        institution_id: req.body.institution_id,
                        request: {
                            type: 'GET',
                            description: 'Retorna todos os detalhes',
                            url: 'http://localhost:3001/students/' + req.body.id,
                        }
                    }
                }
                return res.status(202).send(response);
            }
        )
    });
};

exports.deleteStudent = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(`DELETE FROM student WHERE id = ?`, [req.body.id], (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Student deletado com sucesso!',
                    request: {
                        type: 'DELETE',
                        description: 'Insere um student',
                        url: 'http://localhost:3001/students/register',
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
                            "course_id": "Int",
                            "institution_id": "Int"
                        }
                    }
                }
                return res.status(202).send(response);
            }
        )
    });
};