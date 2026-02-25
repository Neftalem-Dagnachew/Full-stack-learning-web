const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

router.post('/ask-ai', aiController.askAI);

module.exports = router;