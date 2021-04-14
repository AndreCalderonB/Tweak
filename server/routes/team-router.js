const express = require('express');
const Team = require('../models/Team');

const teamRouter = express.Router();
const { Error } = require('mongoose');

teamRouter.use(express.json());

//Get teams
teamRouter.route('/')
.get((req,res,next) => {
    Team.find({})
    .then((teams) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(teams);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    if(req.body != null){
        Team.create(req.body)
        .then((team) => {
            console.log('Team created', team);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(team);
        }, (err)=> next(err))
        .catch((err) => next(err));
    }else{
        err = new Error('Some fields are missing');
        err.status = 401;
        return next(err);
    }
})

//Get Specific team


module.exports = teamRouter;