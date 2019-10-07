const mongoose = require('mongoose');

const DminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Dmin = mongoose.model('dmin', DminSchema);
