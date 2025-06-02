const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/auth.routes.js');
const connectDB = require('./config/db.js');
const cookieParser = require('cookie-parser');
const progressRouter = require('./routes/progress.routes.js');

dotenv.config();
connectDB();

const app = express();

app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:8080', 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});


app.use('/api/auth', authRouter);
app.use('/api/progress', progressRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});