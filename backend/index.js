const express = require("express");
require("dotenv").config();
require("./db/db");
const cors = require("cors");
const {
  register,
  login,
  addReview,
  getReviews,
} = require("./controllers/Controllers.js");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/add-review", addReview);

app.post("/login", login);

app.get("/getReviews/:id", getReviews);

app.post("/register", register);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
