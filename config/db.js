const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  const MONGO_URL = "mongodb+srv://user:useruser@cluster0.os8ed6j.mongodb.net/";
  try {
    await mongoose.connect(MONGO_URL);
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
