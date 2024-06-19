const express = require('express');
const News = require('../models/news');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).send('Access denied');
  }
  const { title, content, imageUrl } = req.body;
  const news = new News({ title, content, imageUrl });
  await news.save();
  res.send(news);
});

router.get('/', async (req, res) => {
  const news = await News.find();
  res.send(news);
});

module.exports = router;
