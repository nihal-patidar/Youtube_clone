import { Router } from "express";
import {
  createChannel,
  getChannelByHandle,
  getChannelVideos,
} from "../controllers/channelController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";
import upload from "../middlewares/multer.middleware.js";

const channelRoutes = Router();

channelRoutes.post("/create", verifyJWT, upload.single("image"), createChannel);

channelRoutes.get("/:handle", getChannelByHandle);

channelRoutes.get("/:channelId/videos", getChannelVideos);

export default channelRoutes;
