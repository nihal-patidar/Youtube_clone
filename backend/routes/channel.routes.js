import { Router } from "express";
import { createChannel } from "../controllers/channelController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const channelRoutes = Router();

channelRoutes.post("/create", verifyJWT, createChannel);

export default channelRoutes;
