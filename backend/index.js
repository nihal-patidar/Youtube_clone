import express from "express";
import dotenv from 'dotenv';
import './config/db.js'
import connectDB from "./config/db.js";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000 ;

connectDB();

server.listen(PORT , ()=>{
    console.log("Server is running on ", PORT);
})