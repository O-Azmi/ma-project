const express = require("express");
const mysql = require("mysql2");
const dbConfig = require("../../db");
const bcrypt = require('bcrypt');

const app = express();

app.use(express.json());

const db = mysql.createPool(dbConfig);

const signup = (req, res) => {
  const {full_name, email_address, password} = req.body

  const saltRounds = 10;
  const password_salt = bcrypt.genSaltSync(saltRounds);
  const password_hash= bcrypt.hashSync(password, password_salt);


  db.query('INSERT INTO customers (email_address, full_name, password_hash, password_salt) VALUES (?, ?, ?, ?)',
    [email_address, full_name, password_hash, password_salt],
    (err, results) =>{
      if(err){
        console.log(err)
        return res.send("Error inserting data")
      }
      res.status(200)
      res.send("Signup data inserted into database")
    }

)};

module.exports = signup;
