const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");


app.use(express.json()); 
app.use(cookieParser());
app.use('/', require("./routes/auth/signup"))
app.use('/', require("./routes/auth/signin") )

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

