// const express = require('express');
import express from "express";
// import { DB } from "./DB/MongoConfig.js";
// require('./models/db');
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Connection successfully done");
});

mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to the database!");
      app.listen(5000, (req, res) => {
      console.log("listening on port: 5000");
    });
    })
    .catch((err) => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });

// app.listen(5000, (req, res) => {
//     // DB;
//   console.log("listening on port: 5000");
// });
