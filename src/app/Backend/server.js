const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

mongoose.connect('mongodb://localhost:27017/fitbloom', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
