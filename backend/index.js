import express from "express";
import dotenv from 'dotenv';
import './config/db.js'
import connectDB from "./config/db.js";
import authRoutes from "./router.js";
import router from "./router.js";
import cookieParser from "cookie-parser";
dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000 ;

server.use(express.json());
server.use(cookieParser());

server.use(router)

connectDB();

server.listen(PORT , ()=>{
    console.log("Server is running on ", PORT);
})