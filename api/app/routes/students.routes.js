const express = require('express');
const router = express.Router();
const Auth = require('../middleware/auth');

const StudentController = require('../controllers/students-controller');
const upload = require('../middleware/upload.js');

router.get('/', StudentController.getStudents);
router.post('/register', upload, StudentController.postStudent);
router.get('/:id', StudentController.getUniqueStudent);
router.patch('/update', StudentController.patchStudent);
router.delete('/delete', StudentController.deleteStudent);

module.exports = router;