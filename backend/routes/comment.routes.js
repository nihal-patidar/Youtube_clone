import { Router } from "express";
import {
  addComment,
  deleteComment,
  getComments,
  updateComment,
} from "../controllers/commentController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const commentRoutes = Router();

commentRoutes.post("/:videoId", verifyJWT, addComment);
commentRoutes.get("/:videoId", verifyJWT, getComments);
commentRoutes.patch("/:commentId", verifyJWT, updateComment);
commentRoutes.delete("/:commentId", verifyJWT, deleteComment);

export default commentRoutes;
