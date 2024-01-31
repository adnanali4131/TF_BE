const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
require('./db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(userRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
