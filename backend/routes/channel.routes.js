import { Router } from "express";
import {
  createChannel,
  getChannelByHandle,
  getChannelVideos,
} from "../controllers/channelController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const channelRoutes = Router();

channelRoutes.post("/create", verifyJWT, createChannel);

channelRoutes.get("/:handle", getChannelByHandle);

channelRoutes.get("/:channelId/videos", getChannelVideos);

export default channelRoutes;
