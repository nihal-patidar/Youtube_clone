import Channel from "../models/channel.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const createChannel = asyncHandler(async (req, res) => {
  const { channelName, handle, description, banner, avatar } = req.body || {};

  if (!channelName || !handle) {
    throw new ApiError(400, "Channel name and handle are required");
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

  const channel = await Channel.create({
    name: channelName,
    handle,
    description,
    banner,
    avatar,
    owner: req.user._id,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, channel, "Channel created successfully"));
});
