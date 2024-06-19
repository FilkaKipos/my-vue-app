const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  description: String,
  date: { type: Date, default: Date.now }
});

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;
