const { sign, verify } = require('jsonwebtoken');

const createTokens = (user) => {
    const accessToken = sign(
        { registroMatricula: user.registroMatricula, id: user.id }, 
        "Í▬┤╠►L4b╕231"
    );

    return accessToken;
}

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"];

    if (!accessToken) 
        return res.status(400).json({error: "Usuário não autenticado"});

    try {
        const validToken = verify(accessToken, process.env.JWT_KEY)
        if (validToken) {
            req.authenticated = true;
            return next()
        }
    } catch (err) {
        return res.status(400).json({error: err});
    }
}

module.exports = { createTokens, validateToken };