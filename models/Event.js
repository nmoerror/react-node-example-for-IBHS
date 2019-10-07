const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  eventid: {
    type: String,
    required: true,
    unique: true
  },
  eventname: {
    type: String,
    required: true
  },
  host: {
    type: String
  },
  description: {
    type: String
  },
  eventdate: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  location_id: {
    type: String
  },
  capacity: {
    type: Number
  },
  price: {
    type: Number,
    default: 0
  },
  currently: {
    type: Boolean,
    default: true
  },
  speaker: [
    {
      name: {
        type: String
      },
      title: {
        type: String
      },
      about: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Event = mongoose.model('event', EventSchema);
