import { Router } from "express";
import { getAllVideos } from "../controllers/videoController";

const videoRoutes = Router();

videoRoutes.use('/all',getAllVideos);


export default videoRoutes 