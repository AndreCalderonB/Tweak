const express = require('express');
const User = require('../models/User');
const Sport  = require('../models/Sports');
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
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    User.findOne({_id: req.params.userId})
    .then((user) => {
        console.log(req.body)
        if(req.body != null){
            Sport.findOne({name:req.body.sport}).then(sport => {
                req.body.sport = sport._id
                console.log(req.body)
                const details = req.body
                console.log(details)
                
                user.details = details
                user.completedRegistration = true
                console.log(user)
                
                user.save().then(details =>{
                    console.log("Saved!")
                });
                /*
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
                */
            }, (err) => next(err))
            .catch((err) => next(err));

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
            console.log(follower.following.includes(user._id))
            if(!follower.following.includes(user._id)){
                follower.following.push(user._id);
                user.followers.push(follower._id);
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