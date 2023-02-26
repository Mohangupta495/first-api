const mongoose = require("mongoose");

const connectionDB = async () => {
  const uri =
    "mongodb+srv://mohan:mohan@webbrings.pageubo.mongodb.net/retryWrites=true&w=majority";
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
