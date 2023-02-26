const express = require("express");
const products = require("./data");

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  res.send("welocme to webbrings");
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});
app.post("/sendmail", (req, res) => {
  const data = new Model({
    name: req.body.name,
    email: req.body.email,
    desc: req.body.desc,
    phone: req.body.phone,
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  // res.send("This is my about route..... ");
});
app.get("/products", (req, res) => {
  res.send(products);
});

// Export the Express API
module.exports = app;
