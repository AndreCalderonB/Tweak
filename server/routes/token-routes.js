const express = require('express');
const mongoose = require('mongoose');

const tokenController = require('../controllers/tokenController')

const tokenRouter = express.Router();

tokenRouter.use(express.json());

tokenRouter.post('/check',tokenController.checkToken)

module.exports = tokenRouter;