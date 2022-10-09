const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    categoriesId: [
      {
        type: mongoose.Types.ObjectId,
        required: true,
      },
    ],
    rank: {
      type: Number,
      required: true,
    },
    ratings: {
      type: Number,
    },
    des: [String],
    tagsId: [
      {
        type: mongoose.Types.ObjectId,
        required: true,
      },
    ],
    status: {
      type: String,
      enum: ["Not_Started", "In_Progress", "Completed"],
      default: "Not_Started",
    },
    clientId: {
      type: mongoose.Types.ObjectId,
      ref: "People",
    },
    live_site: {
      type: String,
    },
    client_repo: {
      type: String,
    },
    server_repo: {
      type: String,
    },
    thumb_img: {
      type: String,
    },
    sub_img: [String],
  },
  {
    timestamps: true,
  }
);

const Project = model("Project", projectSchema);

module.exports = Project;
