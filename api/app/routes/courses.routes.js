const express = require('express');
const router = express.Router();
const Auth = require('../middleware/auth');

const CoursesController = require('../controllers/courses-controller');

router.get('/', CoursesController.getCourses);
router.post('/register', CoursesController.postCourse);
router.patch('/update', CoursesController.patchCourse);
router.delete('/delete', CoursesController.deleteCourse);

module.exports = router;