const express = require("express");
//path is a nodejs object which handles path of the files
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express();

//sends complement.html on home page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "complement.html"));
});

app.get("/secret", (req, res) => {
  res.sendFile(path.join(__dirname, "secret-page.html"));
})

//sends a json response with complement key and a random string
app.get("/complement", function (req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");