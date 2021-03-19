const express = require('express');
const mongoose = require('mongoose');
const Tests = require('../models/Test');
const testRouter = express.Router();

testRouter.use(express.json());

testRouter.route('/')
.get((req,res,next) => {
    Tests.find({})
    .then((test) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(test);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Tests.create(req.body)
    .then((test) => {
        console.log('Test Created ', test);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(test);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /test');
})
.delete((req, res, next) => {
    Tests.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});
module.exports = testRouter;