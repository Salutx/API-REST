const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

const institutionRouter = require('./routes/institutions.routes.js');
const courseRouter = require('./routes/courses.routes.js');
const studentRouter = require('./routes/students.routes.js');
const teacherRouter = require('./routes/teachers.routes.js');
const avaregesRouter = require('./routes/avareges.routes.js');
const categorysRouter = require('./routes/categorys.routes.js');

app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // SERVIDOR ESPECIFICO
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

app.use('/institutions', institutionRouter);
app.use('/courses', courseRouter);
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter);
app.use('/avareges', avaregesRouter);
app.use('/categorys', categorysRouter);
app.use('/uploads', express.static('uploads'));

app.use((req, res, next) => {
    const error = new Error('/users, /institution');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        Routes: {
            Users: error.message
        }
    });
});


module.exports = app;