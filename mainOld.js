const express = require("express");

const app = express();

//These are routes. They determine how to handle when a user reaches to a path.
app.get("/", function(req, res) {
  res.end("Home Page");
});

app.get("/complement", function(req, res) {
  res.end(complement.html);
});

app.listen(3000);
console.log("listening on http://localhost:3000");