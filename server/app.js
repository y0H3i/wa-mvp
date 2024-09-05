const express = require('express');
const app = express();
const cors = require('cors');

// Middleware to handle JSON and URL encoded data
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Route to handle root request
app.get('/', (req, res) => {
  res.send('Hello from wa server!');
});

// Import other routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
