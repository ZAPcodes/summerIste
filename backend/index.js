const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/auth.routes.js');
const connectDB = require('./config/db.js');
const cookieParser = require('cookie-parser');
const progressRouter = require('./routes/progress.routes.js');
const quizRouter = require('./routes/quiz.routes.js');

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:8080", // For local development (e.g., direct Vite dev server)
  "http://localhost",    // For frontend served by Nginx on port 80
  "https://summer-iste.vercel.app", // Your deployed frontend
];


app.use(cookieParser());
app.use(cors({
  origin: allowedOrigins, 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 5000, () => {
});


app.use('/api/auth', authRouter);
app.use('/api/progress', progressRouter);
app.use('/api/quiz', quizRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});
