const mysql = require('../mysql').pool;

exports.getAvareges = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }
        conn.query( 
            'SELECT student.registroMatricula, matter_avarege.avarege, matter.name FROM student INNER JOIN matter_avarege ON student.id = matter_avarege.student_id INNER JOIN matter ON matter.id = matter_avarege.matter_id WHERE registroMatricula = ?',
            [req.params.id],
            (error, result, fields) => {
                if (error) { return res.status(500).send ({ error: error }) }
                const response = {
                    quantity: result.length,
                    avareges: result.map(avarege => {
                        return {
                            registroMatricula: avarege.registroMatricula,
                            name: avarege.name,
                            avarege: avarege.avarege,
                        }
                    })
                }
                return res.status(200).send(response);
            }
        );
    })
};

exports.postAvarege = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query( 
            'INSET INTO matter_avarege (avarege, matter_id, student_id) VALUES (?, ?, ?)',
            [
                req.body.avarege,
                req.body.matter_id,
                req.body.student_id
            ],
            (error, result, fields) => {
                if (error) { return res.status(500).send ({ error: error }) }
                const response = {
                    message: 'Aluno inserido com sucesso!',
                    studentCriado: {
                        id: result.insertId,
                        avarege: req.body.avarege,
                        matter_id: req.body.matter_id,
                        student_id: req.body.student_id,
                    }
                }
                return res.status(200).send(response);
            }
        );
    })
};