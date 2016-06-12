var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Leadership = require('../models/leadership');

var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());	

leaderRouter.route('/')

	.get(function(req,res,next){
		Leadership.find({}, function (err, ldr) {
      if (err) throw err;
      res.json(ldr);
    });
	})

	.post(function(req, res, next){
		Leadership.create(req.body, function (err, ldr) {
      if (err) throw err;
      console.log('Leader created!');
      var id = ldr._id;

      res.writeHead(200, {
          'Content-Type': 'text/plain'
      });
      res.end('Added the leader with id: ' + id);
    });
	})

	.delete(function(req, res, next){
    Leadership.remove({}, function (err, resp) {
      if (err) throw err;
      res.json(resp);
    });
	});

leaderRouter.route('/:leaderId')

.get(function(req,res,next){
    Dishes.findById(req.params.leaderId, function (err, ldr) {
        if (err) throw err;
        res.json(ldr);
    });
})

.put(function(req, res, next){
	  Leadership.findByIdAndUpdate(req.params.leaderId, {
	    $set: req.body
	}, {
	    new: true
	}, function (err, ldr) {
	    if (err) throw err;
	    res.json(ldr);
	});
})

.delete(function(req, res, next){
  Leadership.findByIdAndRemove(req.params.leaderId, function (err, resp) {        
  	if (err) throw err;
      res.json(resp);
  });
});

module.exports = leaderRouter;