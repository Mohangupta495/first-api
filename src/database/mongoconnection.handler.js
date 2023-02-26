const mongoose = require("mongoose");

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
module.exports = connectionDB;
