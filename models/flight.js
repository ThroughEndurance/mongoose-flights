const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String, 
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
  },
  arrival: {
    type: Date,
    default: () => new Date(+new Date() + 730*24*60*60*1000)
  }
}, {
  timestamps: true
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['Southwest', 'United', 'American']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: () => new Date(+new Date() + 730*24*60*60*1000)
  },
  destinations: [destinationSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);