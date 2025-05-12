const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const PORT = 4002;
let products = require('./data.json');

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const product = req.body;
  products.push(product);
  fs.writeFileSync('./data.json', JSON.stringify(products, null, 2));
  res.status(201).json(product);
});

app.listen(PORT, () => {
  console.log(`Product Service running on http://localhost:${PORT}`);
});
