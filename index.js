const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("2nd");
  res.send("Hello World 1st!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
