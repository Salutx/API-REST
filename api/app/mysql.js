const mysql = require('mysql');
const dbConfig = require('./config/db.config');

var pool = mysql.createPool( {
    "connectionLimit": dbConfig.pool.idle,
    "user": dbConfig.USER,
    "password": dbConfig.PASSWORD,
    "database": dbConfig.DB,
    "host": dbConfig.HOST,
    "port": dbConfig.PORT
});

exports.execute = (query, params=[]) => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (error, result, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

exports.pool = pool;
