const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { auth } = require('../middleware/authMiddleware');

router.get('/search', auth, courseController.getCoursesByFilter);

module.exports = router;