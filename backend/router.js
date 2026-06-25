import { Router } from "express";
import authRoutes from "./routes/auth.routes.js";
import videoRoutes from "./routes/video.routes.js";

const router = Router();

router.use('/auth',authRoutes);
router.use('/videos',videoRoutes);


export default router ;