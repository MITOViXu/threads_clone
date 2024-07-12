import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDb.js";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse JSON data in the req.body
app.use(express.urlencoded({extended: true})) // To parse from data in the req.body
app.use(cookieParser())

app.listen(5000, () =>
  console.log(`Server started at https://localhost:${PORT}`)
);
