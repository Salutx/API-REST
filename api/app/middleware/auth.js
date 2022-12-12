const jwt = require('jsonwebtoken');

exports.required = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.usuario = decode;
        next();
    } catch (error) {
        return res.status(401).send({ error: 'Falha na autenticação.'})
    }
    
}

exports.opcional = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.usuario = decode;
        next();
    } catch (error) {
        next();
    }
    
}