const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const auth = require("../middleware/auth")

router.get('/search', auth, courseController.getCoursesByFilter);
router.post('/add', auth, courseController.addLesson);

module.exports = router;