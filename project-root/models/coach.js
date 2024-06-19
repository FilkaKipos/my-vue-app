const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  name: String,
  photoUrl: String,
  vkLink: String
});

const Coach = mongoose.model('Coach', coachSchema);
module.exports = Coach;
