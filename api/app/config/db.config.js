module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "mindset_db2",
    PORT: "3306",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}