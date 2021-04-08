const express = require('express');
const User = require('../models/User');

const userRouter = express.Router();

const userController = require('../controllers/userController');
const { Error } = require('mongoose');

userRouter.use(express.json());
//Show All
userRouter.get('/index/:id', userController.showAllHandle);

//Show
userRouter.get('/show/:id', userController.showHandle);


//Show All users with details
userRouter.route('/')
.get((req,res,next) => {
    User.find({})
    .then((users) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
    }, (err) => next(err))
    .catch((err) => next(err));
})

//User details - Muestra seguidores, seguidos y detalles de usuario
userRouter.route('/details/:userId')
.get((req,res,next) => {
    User.findOne({_id: req.params.userId})
    .populate('followers')
    .populate('following')
    .then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user.details);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    User.findOne(req.params.id)
    .then((user) => {
        if(req.body != null){
            const details = req.body;
            user.details = details;
            user.save();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})

//Follow user
userRouter.route('/:userId/follow/:followerId')
.post((req, res, next) => {
    User.findOne({_id: req.params.userId})
    .then((user) => {
        User.findOne({_id: req.params.followerId})
        .then((follower) => {
            if(!user.following.includes(follower)){
                user.following.push(follower);
                follower.followers.push(user);
                user.save();
                follower.save();
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }else{
                err = new Error('You already follow that user');
                err.status = 401;
                return next(err);
            }
        })  
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    User.findOne({_id: req.params.userId})
    .then((user) => {
        User.findOne({_id: req.params.followerId})
        .then((follower) => {
            if(!user.following.includes(follower)){
                for(var i=0; i<user.following.length; i++){
                    if(JSON.stringify(user.following[i]) === JSON.stringify(follower._id)){
                        user.following.splice(i,1)
                    }
                }
                for(var i=0; i<follower.followers.length; i++){
                    if(JSON.stringify(follower.followers[i]) === JSON.stringify(user._id)){
                        follower.followers.splice(i,1)
                    }
                }
                user.save();
                follower.save();
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }else{
                err = new Error('You already follow that user');
                err.status = 401;
                return next(err);
            }
        })  
    }, (err) => next(err))
    .catch((err) => next(err));
})




module.exports = userRouter;