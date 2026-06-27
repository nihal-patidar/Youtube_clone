import Reaction from "../models/reaction.model.js";
import Video from "../models/video.model.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const likeVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const owner = req.user._id;

  const video = await Video.findById(videoId);

  if (!video) {
    throw new ApiError(404, "Video not found");
  }

  const reaction = await Reaction.findOneAndUpdate(
    {
      videoId,
      owner,
    },
    {
      reaction: "like",
    },
    {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    },
  );

  return res
    .status(200)
    .json(new ApiResponse(200, reaction, "Video liked successfully"));
});

export const dislikeVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const owner = req.user._id;

  const video = await Video.findById(videoId);

  if (!video) {
    throw new ApiError(404, "Video not found");
  }

  const reaction = await Reaction.findOneAndUpdate(
    {
      videoId,
      owner,
    },
    {
      reaction: "dislike",
    },
    {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    },
  );

  return res
    .status(200)
    .json(new ApiResponse(200, reaction, "Video disliked successfully"));
});

export const removeReaction = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const owner = req.user._id;

  const reaction = await Reaction.findOneAndDelete({
    videoId,
    owner,
  });

  if (!reaction) {
    throw new ApiError(404, "Reaction not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Reaction removed successfully"));
});

export const getReaction = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  const likes = await Reaction.countDocuments({
    videoId,
    reaction: "like",
  });

  const dislikes = await Reaction.countDocuments({
    videoId,
    reaction: "dislike",
  });

  let userReaction = null;

  if (req.user) {
    const reaction = await Reaction.findOne({
      videoId,
      owner: req.user._id,
    });

    userReaction = reaction ? reaction.reaction : null;
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        likes,
        dislikes,
        userReaction,
      },
      "Reaction fetched successfully",
    ),
  );
});
