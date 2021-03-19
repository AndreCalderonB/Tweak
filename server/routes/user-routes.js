const express = require('express');

const userRouter = express.Router();

const userController = require('../controllers/userController')

userRouter.use(express.json());

//Show All
userRouter.get('/index/:id', userController.showAllHandle);

//Show
userRouter.get('/show/:id', userController.showHandle);

module.exports = userRouter;