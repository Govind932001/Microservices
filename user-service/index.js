const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const PORT = 4001;
let users = require('./data.json');

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  fs.writeFileSync('./data.json', JSON.stringify(users, null, 2));
  res.status(201).json(user);
});

app.listen(PORT, () => {
  console.log(`User Service running on http://localhost:${PORT}`);
});