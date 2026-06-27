
import { Router } from "express";
import { login, register ,logout, refreshToken, getCurrentUser} from "../controllers/authController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const authRoutes = Router();

authRoutes.post('/register',register);

authRoutes.post('/login', login);

authRoutes.post('/logout',verifyJWT,logout);

authRoutes.post('/refresh-token',refreshToken);

authRoutes.get('/me', getCurrentUser);


export default authRoutes ;