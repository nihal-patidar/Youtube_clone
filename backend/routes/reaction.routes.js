import express from "express";
import verifyJWT from "../middlewares/auth.middleware.js";

import {
  likeVideo,
  dislikeVideo,
  removeReaction,
  getReaction,
} from "../controllers/reaction.controller.js";

const reactionRoutes = express.Router();

reactionRoutes.post("/:videoId/like", verifyJWT, likeVideo);

reactionRoutes.post("/:videoId/dislike", verifyJWT, dislikeVideo);

reactionRoutes.delete("/:videoId", verifyJWT, removeReaction);

reactionRoutes.get("/:videoId", verifyJWT, getReaction);

export default reactionRoutes;
