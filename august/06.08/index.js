// Middleware
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log(`Home`);
  res.send(`Home`);
});

app.get("/about", (req, res) => {
  console.log(`about`);
  res.send(`Hey`);
});

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});