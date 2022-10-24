module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        name: {
            type: Sequelize.STRING
        },
        idade: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        }
    });

    return Usuario;
}