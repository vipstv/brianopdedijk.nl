require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");

//work without .html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("*", (req, res) => {
  //if exist folder, send index.html
  if (fs.existsSync(__dirname + "/public" + req.path + "/index.html")) {
    res.sendFile(__dirname + "/public" + req.path + "/index.html");
  }
  //if not exist folder, send file
  else res.sendFile(__dirname + "/public" + req.path);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
