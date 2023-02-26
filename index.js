const express = require("express");
const products = require("./data");
const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 4000;

const VisiterModel = new Schema(
  {
    phoneNo: String,
    name: String,
    desc: String,
    email: String,
    lastActivityTimeStamp: { type: Number, default: new Date() },
  },
  { timestamps: true }
);
app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
const visiterModel = mongoose.model("Visiter", VisiterModel);
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

const connectionDB = async () => {
  const uri =
    "mongodb://mongo:n35XPZWfj0W2QWTLKJhU@containers-us-west-30.railway.app:7012";
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection is established", conn.connection.host);
  } catch (err) {
    console.log("Error", err.message);
  }
};
connectionDB();
app.get("/", (req, res) => {
  res.send("welocme to webbrings");
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});
app.post("/sendmail", async (req, res) => {
  console.log(req.body);
  const { name, email, phone, desc } = req.body;
  const visiter = new visiterModel({ name, email, phone, desc });
  const savedUserData = await visiter.save();
  const response = { isSaved: true, dbResponse: savedUserData };
  res.status(200).send(response);
});
app.get("/products", (req, res) => {
  res.send(products);
});

// Export the Express API
module.exports = app;
