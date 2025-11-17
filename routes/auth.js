const express = require('express');
const router = express.Router();

const { login } = require('../controllers/loginController');
const { checkEmail } = require('../controllers/authController');
const { updatePassword } = require('../controllers/updatePassword');

router.post('/login', login);
router.post('/checkEmail', checkEmail);
router.post("/updatePassword", updatePassword);

module.exports = router;
