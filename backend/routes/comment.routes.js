import { Router } from "express";
import { addComment } from "../controllers/commentController.js";

const commentRoutes = Router();

commentRoutes.use("/comment", addComment);

export default commentRoutes;
