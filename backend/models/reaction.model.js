import mongoose from "mongoose";

const reactionSchema = new mongoose.Schema(
  {
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    reaction: {
      type: String,
      enum: ["like", "dislike"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

reactionSchema.index(
  {
    videoId: 1,
    owner: 1,
  },
  {
    unique: true,
  },
);

export default mongoose.model("Reaction", reactionSchema);
