const express = require('express');
const Video = require('../models/video');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).send('Error fetching videos');
  }
});

router.post('/', authMiddleware, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).send('Access denied');
  }
  const { title, videoUrl, description } = req.body;
  const video = new Video({ title, videoUrl, description });
  await video.save();
  res.send(video);
});

module.exports = router;
