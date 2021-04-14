const express = require('express');
const Coach = require('../models/Coach');

const coachRouter = express.Router();
const { Error } = require('mongoose');

coachRouter.use(express.json());

//Get coaches
coachRouter.route('/')
.get((req,res,next) => {
    Coach.find({})
    .then((coaches) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(coaches);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    if(req.body != null){
        Coach.create(req.body)
        .then((coach) => {
            console.log('coach created', coach);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(coach);
        }, (err)=> next(err))
        .catch((err) => next(err));
    }else{
        err = new Error('Some fields are missing');
        err.status = 401;
        return next(err);
    }
})

//Get Specific coach


module.exports = coachRouter;