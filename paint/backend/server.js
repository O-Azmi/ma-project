const express = require('express');
const db = require('./db'); 

const app = express();
const port = 3020;


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
