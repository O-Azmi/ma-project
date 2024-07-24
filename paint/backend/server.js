const express = require("express");
const cors = require('cors');
const session = require('./session')
const app = express();
const port = 3000;

app.use(express.json()); 
app.use(session);

app.use('/', require("./routes/auth/signup"))
app.use('/', require("./routes/auth/signin") )

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = session;