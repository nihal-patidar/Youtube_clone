
import { Router } from "express";
import { register } from "../controllers/authController.js";

const authRoutes = Router();

authRoutes.post('/register',register);

// authRoutes.login('/login', login);


export default authRoutes ;