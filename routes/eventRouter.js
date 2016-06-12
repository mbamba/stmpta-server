var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Event = require('../models/event');

var eventRouter = express.Router();
eventRouter.use(bodyParser.json());	

eventRouter.route('/')

	.get(function(req,res,next){
		Event.find({}, function (err, evt) {
      if (err) throw err;
      res.json(evt);
    });
	})

	.post(function(req, res, next){
		Event.create(req.body, function (err, evt) {
      if (err) throw err;
      console.log('event created!');
      var id = evt._id;

      res.writeHead(200, {
          'Content-Type': 'text/plain'
      });
      res.end('Added the event with id: ' + id);
    });
	})

	.delete(function(req, res, next){
    Event.remove({}, function (err, resp) {
      if (err) throw err;
      res.json(resp);
    });
	});

eventRouter.route('/:eventId')

.get(function(req,res,next){
    Dishes.findById(req.params.eventId, function (err, evt) {
        if (err) throw err;
        res.json(evt);
    });
})

.put(function(req, res, next){
	  Event.findByIdAndUpdate(req.params.eventId, {
	    $set: req.body
	}, {
	    new: true
	}, function (err, evt) {
	    if (err) throw err;
	    res.json(evt);
	});
})

.delete(function(req, res, next){
  Event.findByIdAndRemove(req.params.eventId, function (err, resp) {        
  	if (err) throw err;
      res.json(resp);
  });
});

module.exports = eventRouter;