import { Router } from "express";
import { getAllVideos } from "../controllers/videoController";

const videoRoutes = Router();

videoRoutes.use('/videos',getAllVideos);