import multer from "multer";
import fs from "fs";
import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = async (
  localFilePath,
  folder,
  resourceType = "auto",
) => {
  try {
    const response = await cloudinary.uploader.upload(localFilePath, {
      folder,
      resource_type: resourceType,
    });

    fs.unlinkSync(localFilePath);

    return response;
  } catch (err) {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    throw error;
  }
};

export default uploadToCloudinary;
