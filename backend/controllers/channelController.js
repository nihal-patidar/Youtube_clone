import Channel from "../models/channel.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Video from "../models/video.model.js";
import User from "../models/user.model.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

export const createChannel = asyncHandler(async (req, res) => {
  const { channelName, handle, description, image } = req.body || {};

  if (!channelName || !handle) {
    throw new ApiError(400, "Channel name and handle are required");
  }

  if (!req.file.path) {
    throw new ApiError(400, "Channel profile image is required");
  }

  // check handle uniqueness
  const existingChannel = await Channel.findOne({ handle });

  if (existingChannel) {
    throw new ApiError(409, "Handle already exists");
  }

  // one channel per user
  const userChannel = await Channel.findOne({
    owner: req.user._id,
  });

  if (userChannel) {
    throw new ApiError(409, "User already owns a channel");
  }

  const result = await uploadToCloudinary(
    req.file.path,
    "youtube-clone/avatar",
    "image",
  );

  console.log("result upload image", result);

  let channel = await Channel.create({
    name: channelName,
    handle,
    description,
    avatar: result.url,
    owner: req.user._id,
  });

  const user = await User.findByIdAndUpdate(req.user._id, {
    $set: { channel: channel._id },
  });

  channel = await Channel.findById(channel._id).populate(
    "owner",
    "name email avatar",
  );

  return res
    .status(201)
    .json(new ApiResponse(201, channel, "Channel created successfully"));
});

export const getChannelByHandle = asyncHandler(async (req, res) => {
  const { handle } = req.params;

  const channel = await Channel.findOne({ handle }).populate(
    "owner",
    "name email avatar",
  );

  if (!channel) {
    throw new ApiError(404, "Channel not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, channel, "Channel fetched successfully"));
});

export const getChannelVideos = asyncHandler(async (req, res) => {
  const { channelId } = req.params;

  const channel = await Channel.findById(channelId);

  if (!channel) {
    throw new ApiError(404, "Channel not found");
  }

  const videos = await Video.find({
    channel: channelId,
  })
    .populate("owner", "name avatar")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, videos, "Channel videos fetched successfully"));
});
