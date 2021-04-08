const express = require('express');
const Invitation = require('../models/Invitation');

const invitationRouter = express.Router();
const { Error } = require('mongoose');

invitationRouter.use(express.json());

//Get invitations
invitationRouter.route('/')
.get((req,res,next) => {
    Invitation.find({})
    .then((inv) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(inv);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req,res,next) => {
    Invitation.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err)=> next(err))
    .catch((err) => next(err));
});

invitationRouter.route('/:coachId/invite/:userId/to/:teamId')
.post((req, res, next) => {
    if(req.body != null){
        Invitation.findOne({coach: req.params.coachId, user: req.params.userId, team: req.params.teamId})
        .then((invitation) => {
            console.log(invitation)
            if(invitation === null){
                Invitation.create({coach: req.params.coachId, user: req.params.userId, team: req.params.teamId})
                .then((invitation) => {
                    console.log('Invitation sent', invitation);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(invitation);
                }, (err)=> next(err)) 
            }else{
                err = new Error('Invitation already sent');
                err.status = 401;
                return next(err);
            }
        }, (err)=> next(err))
        .catch((err) => next(err));
    }else{
        err = new Error('Some fields are missing');
        err.status = 401;
        return next(err);
    }
})

//Get Specific team


module.exports = invitationRouter;