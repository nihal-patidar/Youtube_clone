import { Router } from "express";
import authRoutes from "./routes/auth.routes.js";
import videoRoutes from "./routes/video.routes.js";
import channelRoutes from "./routes/channel.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import reactionRoutes from "./routes/reaction.routes.js";
import testRoutes from "./routes/test.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/videos", videoRoutes);
router.use("/channel", channelRoutes);
router.use("/comments", commentRoutes);
router.use("/reaction", reactionRoutes);
router.use("/test", testRoutes);
export default router;
