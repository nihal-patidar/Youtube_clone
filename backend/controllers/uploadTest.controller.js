import uploadToCloudinary from "../utils/uploadToCloudinary.js";

export const testUpload = async (req, res) => {
  try {
    console.log("req file", req.file);

    const result = await uploadToCloudinary(
      req.file.path,
      "youtube-clone/testing",
      "image",
    );

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
