import { Router } from "express";
import { getAllVideos, getVideoById } from "../controllers/videoController.js";

const videoRoutes = Router();

videoRoutes.get('/all',getAllVideos);

videoRoutes.get('/:videoId',getVideoById);


export default videoRoutes 