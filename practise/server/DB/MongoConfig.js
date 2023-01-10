// const mongoose = require("mongoose");
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const DB = () =>
  mongoose
    .connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((err) => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });

/*   
(err) => {
  if (!err) {
    console.log("MongoDB connection has been successfully established");
  } else {
    console.log("MongoDB connection failed", err);
  }
}
*/