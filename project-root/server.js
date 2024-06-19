const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/newsapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Импорт маршрутов
const authRoutes = require('./routes/auth');
const newsRoutes = require('./routes/news');
const coachRoutes = require('./routes/coaches');
const videoRoutes = require('./routes/videos');

// Использование маршрутов
app.use('/auth', authRoutes);
app.use('/news', newsRoutes);
app.use('/coaches', coachRoutes);
app.use('/videos', videoRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
