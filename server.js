const express = require('express');
const userRouter = require('./routes/user.routes');
require('./db');
require('dotenv').config();

const app = express();
const port = 3000 || "https://tf-be.onrender.com";

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
