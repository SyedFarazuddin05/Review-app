const express = require("express");

const app = express();

app.use(express.json());

const validate = (req, res, next) => {
  const { email, password } = req.body;
  
};
