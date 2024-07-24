const express = require("express");
const cors = require("cors")
const router = express.Router();
const signin = require('../../controllers/auth/signin')

//middleware to allow data being sent from different hosts.
router.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

router.post('/signin', signin)

module.exports = router;