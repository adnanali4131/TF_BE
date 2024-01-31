const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
require('./db');
require('dotenv').config();

app.options('*', cors());
const app = express();
const port = 3000 || "https://tf-be.onrender.com";

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
