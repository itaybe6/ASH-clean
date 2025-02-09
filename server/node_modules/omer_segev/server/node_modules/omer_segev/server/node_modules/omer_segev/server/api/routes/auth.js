const express = require('express');
const router = express.Router();
const { login } = require('../controller/auth');

// התחברות כללית
router.post('/login', login);

module.exports = router;
