import { Router } from "express";
import { createVideo, deleteVideo, getAllVideos, getVideoById, updateVideo } from "../controllers/videoController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const videoRoutes = Router();

videoRoutes.get('/all',getAllVideos);

videoRoutes.get('/:videoId',getVideoById);

videoRoutes.post('/',verifyJWT,createVideo);

videoRoutes.patch('/:videoId',verifyJWT,updateVideo);

videoRoutes.delete('/:videoId',verifyJWT,deleteVideo);
export default videoRoutes 