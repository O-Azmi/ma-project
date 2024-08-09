const express = require("express");
const mysql = require("mysql2/promise");
const bcrypt = require('bcrypt');
const { promisify } = require('util');
const dbConfig = require("../../db");

const app = express();
app.use(express.json());

const db = mysql.createPool(dbConfig);

const genSalt = promisify(bcrypt.genSalt);
const hash = promisify(bcrypt.hash);

const signup = async (req, res) => {
  try {
    let { full_name, email_address, password } = req.body;
    const saltRounds = 10;

    full_name = full_name.toLowerCase();
    email_address = email_address.toLowerCase();
    const salt = await genSalt(saltRounds);
    const password_hash = await hash(password, salt);

    const query = 'INSERT INTO customers (email_address, full_name, password_hash, password_salt) VALUES (?, ?, ?, ?)';
    const values = [email_address, full_name, password_hash, salt];
    await db.query(query, values);

    res.status(200).send("Yes");
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = signup;
