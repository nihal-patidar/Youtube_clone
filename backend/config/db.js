import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  if (!process.env.DB_URL) {
    console.error("Error : Connection String is not Available");
    return;
  }
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database Connection Error", err.message);
    process.exit(1);
  }
};

export default connectDB;
