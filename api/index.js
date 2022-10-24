const express = require('express');
const cors = require("cors");

const app = express();

const db = require("./app/models");
db.sequelize.sync();

var corsOption = {
    origin: "http://localhost:3002"
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get("/", (req, res) => {
    res.json({ express: "ExpressJS Connected to the Backend" })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running in ${PORT}. `);
});

