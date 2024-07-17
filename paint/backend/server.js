const express = require('express');
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

const signupRoute = require('./api/auth/signup');

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

