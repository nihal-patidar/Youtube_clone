
import { Router } from "express";
import { login, register ,logout } from "../controllers/authController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const authRoutes = Router();

authRoutes.post('/register',register);

authRoutes.post('/login', login);

authRoutes.post('/logout',verifyJWT,logout)


export default authRoutes ;