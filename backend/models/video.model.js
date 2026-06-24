import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    thumbnailUrl: {
      type: String,
      required: true,
    },

    videoUrl: {
      type: String,
      required: true,
    },

    channel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
      required: true,
    },

    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    views: {
      type: Number,
      default: 0,
    },

    likesCount: {
      type: Number,
      default: 0,
    },

    dislikesCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

videoSchema.index({ title: "text" });
videoSchema.index({ category: 1 });
videoSchema.index({ channel: 1 });
videoSchema.index({ createdAt: -1 });

export default mongoose.model("Video", videoSchema);
