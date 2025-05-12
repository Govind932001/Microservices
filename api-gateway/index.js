const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // for HTML

const PORT = 4000;

app.get('/users', async (req, res) => {
  const response = await axios.get('http://localhost:4001/users');
  res.json(response.data);
});

app.post('/users', async (req, res) => {
  const response = await axios.post('http://localhost:4001/users', req.body);
  res.status(201).json(response.data);
});

app.get('/products', async (req, res) => {
  const response = await axios.get('http://localhost:4002/products');
  res.json(response.data);
});

app.post('/products', async (req, res) => {
  const response = await axios.post('http://localhost:4002/products', req.body);
  res.status(201).json(response.data);
});

app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
