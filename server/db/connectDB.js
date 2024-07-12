import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  mongoose
    .connect(`${process.env.MONGO_DB}`)
    .then(() => {
      console.log("connect Db success");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
