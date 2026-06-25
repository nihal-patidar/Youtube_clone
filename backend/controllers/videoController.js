import Video from "../models/video.model.js";

import Video from "../models/video.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getAllVideos = asyncHandler(async (req, res) => {
  const { search, category } = req.query;

  const filter = {};

  if (search) {
    filter.title = {
      $regex: search,
      $options: "i",
    };
  }

  if (category) {
    filter.category = category;
  }

  const videos = await Video.find(filter)
    .populate("owner","avatar username")
    .populate("channel", "name handle")
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: videos.length,
    videos,
  });
});


