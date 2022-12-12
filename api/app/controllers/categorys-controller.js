const mysql = require('../mysql').pool;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = (req, res, next) => {

    const ConfirmarNascimento = req.body.birth_date;
    const ConfirmarInstituicao = req.body.institution_id;
    const ConfirmarSenha = req.body.passwordHash;
    const ConfirmarEmail = req.body.email;

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }
        conn.query('SELECT * FROM ( SELECT registroMatricula, birth_date, institution_id, email, passwordHash FROM mindset_db2.student UNION ALL SELECT registroMatricula, birth_date, institution_id, email, passwordHash FROM mindset_db2.teacher UNION ALL SELECT registroMatricula, birth_date, institution_id, email, passwordHash FROM mindset_db2.institution_admin ) N WHERE email = ?', [req.body.email], (error, result, fields) => {
            conn.release();

            var user = result[0];

            if (!user) {
                if (error) { return res.status(500).send ({ error: error }) }
            } else {
                
            var dbEmail = user.email;
            var dbSenha = user.passwordHash;
            var dbNascimento = user.birth_date;
            var dbInstituicao_id = user.institution_id;

                if(ConfirmarEmail == dbEmail && ConfirmarNascimento == dbNascimento && ConfirmarInstituicao == dbInstituicao_id) {
                    bcrypt.compare(ConfirmarSenha, dbSenha, (err, data) => {
                        if(err) {
                            return res.status(401).send({ error: "Falha na autenticação."})
                        }
                        if(data) {
                            const token = jwt.sign({
                                userId: user.registroMatricula,
                                email: user.email,
                            }, 'w■ebúè0q◘φ',{expiresIn: "1h"})
                            return res.status(200).send(
                                {
                                    message: "Autenticado!", 
                                    token: token
                                })
                        } else {
                            return res.status(401).send({ error: "JWT Error!"})
                        }
                        
                    });
                } else {
                    return res.status(401).send({ error: "Confirmação error!"})
                }
            }
        });
    });
}

exports.getUserTypes = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }

        conn.query( 
            'SELECT student.registroMatricula, matter_avarege.avarege, matter.name FROM student INNER JOIN matter_avarege ON student.id = matter_avarege.student_id INNER JOIN matter ON matter.id = matter_avarege.matter_id WHERE registroMatricula = ?',
            (error, result, fields) => {
                if (error) { return res.status(500).send ({ error: error }) }
                const response = {
                    quantity: result.length,
                    user_types: result.map(type => {
                        return {
                            name: type.user_type,
                        }
                    })
                }
                return res.status(200).send(response);
            }
        );
    })
};

exports.getUserDetails = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send ({ error: error }) }
        conn.query( 
            'SELECT * FROM ( SELECT registroMatricula, birth_date, institution_id, email, passwordHash, first_name, last_name, user_type, avatar FROM mindset_db2.student UNION ALL SELECT registroMatricula, birth_date, institution_id, email, passwordHash, first_name, last_name, user_type, avatar FROM mindset_db2.teacher UNION ALL SELECT registroMatricula, birth_date, institution_id, email, passwordHash, first_name, last_name, user_type, avatar FROM mindset_db2.institution_admin ) N WHERE registroMatricula = ?;',
            [req.params.id],
            (error, result, fields) => {
                conn.release();
                if (error) { return res.status(500).send ({ error: error }) }
                if (result.length < 1) {
                    return res.status(404).send({
                        message: "Não foi encontrado o usuário com este ID"
                    });
                }
                
                const response = {
                    user: {
                        registroMatricula: result[0].registroMatricula,
                        first_name: result[0].first_name,
                        last_name: result[0].last_name,
                        birth_date: result[0].birth_date,
                        avatar: result[0].avatar,
                        user_type: result[0].user_type,
                    }
                }
                return res.status(200).send(response);
            }
        );
    })
};