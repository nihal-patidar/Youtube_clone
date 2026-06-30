import { Router } from "express";
import upload from "../middlewares/multer.middleware.js";
import { testUpload } from "../controllers/uploadTest.controller.js";
import multer from "multer";

const testRoutes = Router();

// testRoutes.post("/upload", upload.single("image"), testUpload);

testRoutes.post("/upload", (req, res) => {
  upload.single("image")(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log(err);
      return res.status(400).json(err);
    }

    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    testUpload(req, res);
  });
});

export default testRoutes;
