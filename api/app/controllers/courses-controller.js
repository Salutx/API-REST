const mysql = require('../mysql').pool;

exports.getCoursesLevel = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query( 
            'SELECT * from course_level;',
            (error, result, fields) => {
                if (error) { return res.status(500).send ({ error: error }) }
                const response = {
                    quantity: result.length,
                    levels: result.map(level => {
                        return {
                            id: level.id,
                            name: level.level,
                            created_at: level.created_at,
                            updated_at: level.updated_at
                        }
                    })
                }
                return res.status(200).send(response);
            }
        );
    })
};

exports.postCourseLevel = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }
        
        conn.query('SELECT * FROM course_level WHERE name = ?', [req.body.name], (error, result) => {
            conn.release();
            if (error) { return res.status(500).send ({ error: error }) }
            if(result.length > 0) {
                res.status(409).send({ message: "Série já cadastrada!" });
            } else {
                conn.query(
                    'INSERT INTO course_level (name) VALUES (?)',
                    [
                        req.body.name,
                    ],
                    (error, result, field) => {
                        if (error) { return res.status(500).send ({ error: error }) }
                        const response = {
                            message: 'Série inserida com sucesso!',
                            serieCriada: {
                                id: result.insertId,
                                name: req.body.name,
                            }
                        }
                        return res.status(201).send(response);
                    }
                )
            }
        })
    });
};

exports.getUniqueCourseLevel = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }
        conn.query(
            'SELECT * FROM course_level WHERE id = ?',
            [req.params.levelId],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                if (result.length < 1) {
                    return res.status(404).send({
                        message: "Não foi encontrado a série com este ID"
                    });
                }
                
                const response = {
                    level: {
                        id: result[0].id,
                        name: result[0].level,
                        created_at: result[0].created_at,
                    }
                }
                return res.status(201).send(response);
            }
        )
    });
};

exports.deleteCourseLevel = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query(`DELETE FROM course_level WHERE id = ?`, [req.body.id], (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                const response = {
                    message: 'Série deletada com sucesso!',
                    request: {
                        type: 'DELETE',
                        description: 'Insere uma série',
                        url: 'http://localhost:3001/course/register',
                    }
                }
                return res.status(202).send(response);
            }
        )
    });
};

// CURSO

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
                            name: course.course_name,
                            course_level_id: course.course_level_id,
                            created_at: course.created_at,
                            updated_at: course.updated_at
                        }
                    })
                }
                return res.status(200).send(response);
            }
        );
    })
};

exports.getUniqueCourse = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }
        conn.query(
            'SELECT * FROM course WHERE id = ?;',
            [req.params.id],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                
                if (result.length < 1) {
                    return res.status(404).send({
                        message: "Não foi encontrado o curso com este ID"
                    });
                }
                
                const response = {
                    course: {
                        id: result[0].id,
                        course_name: result[0].course_name,
                        created_at: result[0].created_at,
                        updated_at: result[0].updated_at,
                        course_level_id: result[0].course_level_id,
                    }
                }
                return res.status(201).send(response);
            }
        )
    });
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