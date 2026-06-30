import { Router } from "express";
import {
  createVideo,
  deleteVideo,
  getAllVideos,
  getVideoById,
  updateVideo,
} from "../controllers/videoController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";
import upload from "../middlewares/multer.middleware.js";

const videoRoutes = Router();

videoRoutes.get("/all", getAllVideos);

videoRoutes.get("/:videoId", getVideoById);

videoRoutes.post(
  "/",
  verifyJWT,
  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },
    {
      name: "video",
      maxCount: 1,
    },
  ]),
  createVideo,
);

videoRoutes.patch("/:videoId", verifyJWT, updateVideo);

videoRoutes.delete("/:videoId", verifyJWT, deleteVideo);

export default videoRoutes;
