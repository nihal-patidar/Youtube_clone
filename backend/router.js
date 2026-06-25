import { Router } from "express";
import authRoutes from "./routes/auth.routes.js";
import videoRoutes from "./routes/video.routes.js";
import channelRoutes from "./routes/channel.routes.js";

const router = Router();

router.use('/auth',authRoutes);
router.use('/videos',videoRoutes);
router.use('/channel',channelRoutes)


export default router ;