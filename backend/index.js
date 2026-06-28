import express from "express";
import dotenv from "dotenv";
import "./config/db.js";
import connectDB from "./config/db.js";
import authRoutes from "./router.js";
import router from "./router.js";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.handler.js";
import requestLogger from "./middlewares/logger.middleware.js";
import cors from "cors";
dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;

server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

server.use(express.json());
server.use(cookieParser());
server.use(requestLogger);
connectDB();

server.use(router);

server.use(errorMiddleware);

server.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
