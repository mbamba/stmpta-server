var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: true
    },
    dates: {
      type: String,
      required: true
    },
    volunteers_needed: {
      type: String,
      required: true
    }
	}, 
	{
    timestamps: true
	}
);

// the schema is useless so far
// we need to create a model using it
var event = mongoose.model('Event', eventSchema);

// make this available to our Node applications
module.exports = event;
