const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Health check
app.get('/', (req, res) => {
  try {
    return res.status(200).json({ data: 'service is running' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a book
app.post('/books', (req, res) => {
  try {
    console.log(req.body);
    // Echo the request body
    res.status(201).json({ data: req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a book
app.put('/books/:id', (req, res) => {
  try {
    // Echo the request body
    res.status(200).json({ data: req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 404s fall through to here
app.get('*', (req, res) => {
  const { path, method } = req;
  res
    .status(404)
    .json({ error: `No handler implemented for ${method} ${path}` });
});

module.exports = app;
