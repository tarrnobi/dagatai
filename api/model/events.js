// import dependency
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  entryDate: Date,
  author: String,
  text: String,
});

module.exports = mongoose.model('Event', EventsSchema);
