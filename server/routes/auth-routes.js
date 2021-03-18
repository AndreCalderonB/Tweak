const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController')


//------------ Register POST Handle ------------//
router.post('/user', authController.registerHandle);

router.post('/user/login', authController.loginHandle);

router.get('/activate/:token', authController.activateHandle);

module.exports = router;