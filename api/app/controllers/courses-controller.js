const mysql = require('../mysql').pool;

exports.getCourses = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query( 
            'SELECT * from course;',
            (error, result, fields) => {
                if (error) { return res.status(500).send ({ error: error }) }
                const response = {
                    quantity: result.length,
                    courses: result.map(course => {
                        return {
                            id: course.id,
                            name: course.name,
                            course_level_id: course.course_level_id,
                        }
                    })
                }
                return res.status(200).send(response);
            }
        );
    })
};

exports.postCourse = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }
        
        conn.query('SELECT * FROM course WHERE name = ?', [req.body.name], (error, result) => {
            conn.release();
            if (error) { return res.status(500).send ({ error: error }) }
            if(result.length > 0) {
                res.status(409).send({ message: "Instituição já cadastrada!" });
            } else {
                conn.query(
                    'INSERT INTO course (name, course_level_id) VALUES (?, ?)',
                    [
                        req.body.name,
                        req.body.course_level_id
                    ],
                    (error, result, field) => {
                        if (error) { return res.status(500).send ({ error: error }) }
                        const response = {
                            message: 'Course inserida com sucesso!',
                            cursoCriado: {
                                id: result.insertId,
                                name: req.body.name,
                                course_level_id: req.body.course_level_id,
                            }
                        }
                        return res.status(201).send(response);
                    }
                )
            }
        })
    });
};

exports.patchCourse = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(
            `UPDATE course SET name = ?, course_level_id = ? WHERE id = ?`,
                [
                    req.body.name,
                    req.body.course_level_id,
                ],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Curso atualizada com sucesso!',
                    usuarioAtualizado: {
                        id: req.body.id,
                        name: req.body.name,
                        endereco_cep: req.body.course_level_id,
                        created_at: req.body.created_at,
                        updated_at: req.body.updated_at,
                        request: {
                            type: 'PATCH',
                            description: 'Retorna todas as instituicoes',
                            url: 'http://localhost:3001/courses/' + req.body.id,
                        }
                    }
                }
                return res.status(202).send(response);
            }
        )
    });
};

exports.deleteCourse = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(`DELETE FROM course WHERE id = ?`, [req.body.id], (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Curso deletado com sucesso!',
                    request: {
                        type: 'DELETE',
                        description: 'Insere um curso',
                        url: 'http://localhost:3001/course/register',
                    }
                }
                return res.status(202).send(response);
            }
        )
    });
};