const express = require("express");
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const dbConfig = require("../../db");

const app = express();

app.use(express.json());

const db = mysql.createPool(dbConfig);

const signin = async (req, res) => {
  try {
    const { email_address, password } = req.body;

    // Query the database for the user's password hash and salt
    const [results] = await db.query(
      'SELECT customer_id, password_hash, password_salt FROM customers WHERE email_address = ?',
      [email_address]
    );

    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const {customer_id, password_hash: storedHash, password_salt: storedSalt } = results[0];

    // Compare the provided password with the stored hash
    const match = await bcrypt.hash(password, storedSalt).then(hash => hash === storedHash);

    if (match) {
      req.session.customer_id = customer_id;
      req.session.visited = true;
      console.log('Session data after sign-in:', req.session);
      return res.status(200).send('Sign-in successful');
    } else {
      console.log('Password does not match.');
      return res.status(401).send('Invalid password');
    }
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = signin;
