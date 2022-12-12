const express = require('express');
const router = express.Router();
const Auth = require('../middleware/auth');

const TeacherController = require('../controllers/teachers-controller');
const upload = require('../middleware/upload.js');

router.get('/', TeacherController.getTeachers);
router.post('/register', upload, TeacherController.postTeacher);
router.get('/:id', TeacherController.getUniqueTeacher);
router.patch('/update', TeacherController.patchTeacher);
router.delete('/delete', TeacherController.deleteTeacher);

module.exports = router;