const express = require("express");
const app = express();

app.listen(80, () => {
  console.log(`Server is running on http://localhost:80`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});
