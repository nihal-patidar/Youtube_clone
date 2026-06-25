import Video from "../models/video.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";

export const getAllVideos = asyncHandler(async (req, res) => {
  const { search, category, page = 1, limit = 10 } = req.query || {}

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

  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  const skip = (pageNumber - 1) * limitNumber;

  const totalVideos = await Video.countDocuments(filter);

  const videos = await Video.find(filter)
    .populate("owner", "avatar username")
    .populate("channel", "name handle")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNumber);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        page: pageNumber,
        limit: limitNumber,
        totalVideos,
        totalPages: Math.ceil(totalVideos / limitNumber),
        count: videos.length,
        videos,
      },
      "Videos fetched successfully",
    ),
  );
});


export const getVideoById = asyncHandler(async (req, res) => {
  const { videoId } = req.params || {}

  const video = await Video.findById(videoId)
    .populate("owner", "name avatar");

  if (!video) {
    throw new ApiError(404, "Video not found");
  }

  // increase views
  video.views += 1;
  await video.save();

  res.status(200).json({
    success: true,
    video,
  });
});


export const createVideo = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    category,
    videoUrl,
    thumbnailUrl,
  } = req.body || {} // handling destructuring error
  if (
    !title ||
    !description ||
    !category ||
    !videoUrl ||
    !thumbnailUrl
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const video = await Video.create({
    title,
    description,
    category,
    videoUrl,
    thumbnailUrl,
    owner: req.user._id,
  });

  res.status(201).json({
    success: true,
    message: "Video uploaded successfully",
    video,
  });
});


export const updateVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  const video = await Video.findById(videoId);

  if (!video) {
    throw new ApiError(404, "Video not found");
  }

  if (video.owner.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized");
  }

  const allowedUpdates = [
    "title",
    "description",
    "category",
    "thumbnailUrl",
    "videoUrl",
  ];

  allowedUpdates.forEach((field) => {
    if (req.body[field] !== undefined) {
      video[field] = req.body[field];
    }
  });

  await video.save();

  res.status(200).json({
    success: true,
    message: "Video updated successfully",
    video,
  });
});