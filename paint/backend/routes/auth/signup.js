const express = require("express");
const cors = require("cors")
const router = express.Router();
const signup = require('../../controllers/auth/signup')

//middleware to allow data being sent from different hosts.
router.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

router.post('/signup', signup)

module.exports = router;