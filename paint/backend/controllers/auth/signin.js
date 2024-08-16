const jwt = require("jsonwebtoken");
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
    const Plength = password.length;
    // Check if email_address and password are provided
    if (!email_address || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Query the database for the user's password hash and salt
    const [results] = await db.query(
      "SELECT customer_id, full_name, phone_number, password_hash, password_salt FROM customers WHERE email_address = ?",
      [email_address]
    );

    if (results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const { full_name, phone_number, customer_id, password_hash: storedHash } = results[0];

    // Compare the provided password with the stored hash
    const match = await bcrypt.compare(password, storedHash);

    if (match) {
      const token = jwt.sign(
        { customer_id, full_name },
        process.env.MY_SECRET,
        { expiresIn: "1h" }
      );
      return res.status(200).json({ message: "Sign-in successful", token, full_name, email_address, phone_number, Plength });
    } else {
      return res.status(401).json({ error: "Invalid password" });
    }
  } catch (err) {
    console.error("Error during sign-in:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = signin;
