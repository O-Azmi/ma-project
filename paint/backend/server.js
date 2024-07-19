const express = require("express");
const cors = require('cors');


const app = express();
const port = 3000;
app.use(express.json()); 

app.use('/', require("./routes/auth/signup"))

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
