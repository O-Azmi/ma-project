const express = require('express');
const db = require('./db'); 

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!'); 
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error fetching users');
      return;
    }
    console.log('Fetched users:', results); 
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
