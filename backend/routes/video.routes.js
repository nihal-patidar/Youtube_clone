import { Router } from "express";
import { getAllVideos } from "../controllers/videoController.js";

const videoRoutes = Router();

videoRoutes.get('/all',getAllVideos);


export default videoRoutes 