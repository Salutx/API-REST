const express = require('express');
const router = express.Router();
const Auth = require('../middleware/auth');

const CoursesController = require('../controllers/courses-controller');

// COURSE LEVEL
router.get('/levels', CoursesController.getCoursesLevel);
router.get('/levels/:levelId', CoursesController.getUniqueCourseLevel);
router.post('/levels/register', CoursesController.postCourseLevel);
router.delete('levels/delete', CoursesController.deleteCourseLevel);

// COURSE
router.get('/', CoursesController.getCourses);
router.get('/:id', CoursesController.getUniqueCourse);
router.post('/register', CoursesController.postCourse);
router.patch('/update', CoursesController.patchCourse);
router.delete('/delete', CoursesController.deleteCourse);

module.exports = router;