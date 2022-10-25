const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const usuarioRouter = require('./routes/usuarios.routes.js');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // SERVIDOR ESPECIFICO
    res.header(
        'Access-Control-Allow-Header', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
});

app.use('/usuarios', usuarioRouter);

app.use((req, res, next) => {
    const error = new Error('Não encontrado.');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        Error: {
            message: error.message
        }
    });
});


module.exports = app;