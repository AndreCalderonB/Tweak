const express = require('express');
const mongoose = require('mongoose');
const Sports = require('../models/Sports');
const Test = require('../models/Test');
const sportRouter = express.Router();

sportRouter.use(express.json());

sportRouter.route('/')  
.get((req,res,next) => {
    Sports.find({})
    .populate('test')
    .then((sport) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sport);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Sports.create(req.body)
    .then((sport) => {
        console.log('Sport Created ', sport);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sport);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /sports');
})
.delete((req, res, next) => {
    Sports.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

sportRouter.route('/:sportId')
.get((req,res,next) => {
    Sports.findById(req.params.sportId)
    .then((sport) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sport);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /sports/'+ req.params.sportId);
})
.put((req, res, next) => {
    Sports.findByIdAndUpdate(req.params.sportId, {
        $set: req.body
    }, { new: true })
    .then((sport) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sport);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Sports.findByIdAndRemove(req.params.sportId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

sportRouter.route('/:sportId/testSport')
.get((req,res,next) => {
    Sports.findById(req.params.sportId)
    .then((sport) => {
        if (sport != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(sport.typeSport);
        }
        else {
            err = new Error('sport ' + req.params.sportId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Sports.findById(req.params.sportId)
    .then((sport) => {
        if (sport != null) {
            Test.create(req.body)
            .then((test) => {
                console.log(test);
                sport.test.push(test);
                console.log(sport)
                sport.save()
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(test);                
            }, (err) => next(err));
        }
        else {
            err = new Error('sport ' + req.params.sportId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /Sports/'
        + req.params.sportId + '/typeSport');
})
.delete((req, res, next) => {
    Sports.findById(req.params.sportId)
    .then((sport) => {
        if (sport != null) {
            for (var i = (sport.typeSport.length -1); i >= 0; i--) {
                sport.typeSport.id(sport.typeSport[i]._id).remove();
            }
            sport.save()
            .then((sport) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(sport);                
            }, (err) => next(err));
        }
        else {
            err = new Error('sport ' + req.params.sportId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));    
});

sportRouter.route('/:sportId/typeSport/:typeSportId')
.get((req,res,next) => {
    Sports.findById(req.params.sportId)
    .then((sport) => {
        if (sport != null && sport.typeSport.id(req.params.typeSportId) != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(sport.typeSport.id(req.params.typeSportId));
        }
        else if (sport == null) {
            err = new Error('sport ' + req.params.sportId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Comment ' + req.params.typeSportId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /Sports/'+ req.params.sportId
        + '/typeSport/' + req.params.typeSportId);
})
.put((req, res, next) => {
    Sports.findById(req.params.sportId)
    .then((sport) => {
        if (sport != null && sport.typeSport.id(req.params.typeSportId) != null) {
            if (req.body.rating) {
                sport.typeSport.id(req.params.typeSportId).rating = req.body.rating;
            }
            if (req.body.comment) {
                sport.typeSport.id(req.params.typeSportId).comment = req.body.comment;                
            }
            sport.save()
            .then((sport) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(sport);                
            }, (err) => next(err));
        }
        else if (sport == null) {
            err = new Error('sport ' + req.params.sportId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Comment ' + req.params.typeSportId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Sports.findById(req.params.sportId)
    .then((sport) => {
        if (sport != null && sport.typeSport.id(req.params.typeSportId) != null) {
            sport.typeSport.id(req.params.typeSportId).remove();
            sport.save()
            .then((sport) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(sport);                
            }, (err) => next(err));
        }
        else if (sport == null) {
            err = new Error('sport ' + req.params.sportId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Comment ' + req.params.typeSportId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = sportRouter;