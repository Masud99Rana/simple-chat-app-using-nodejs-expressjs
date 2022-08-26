// external imports
const express = require("express");
const dotenv = require("dotenv");


const app = express();
dotenv.config();


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});