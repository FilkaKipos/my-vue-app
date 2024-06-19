const express = require('express');
const Coach = require('../models/coach');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const coaches = await Coach.find();
    res.json(coaches);
  } catch (error) {
    res.status(500).send('Error fetching coaches');
  }
});

router.post('/', authMiddleware, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).send('Access denied');
  }
  const { name, photoUrl, vkLink } = req.body;
  const coach = new Coach({ name, photoUrl, vkLink });
  await coach.save();
  res.send(coach);
});

module.exports = router;
