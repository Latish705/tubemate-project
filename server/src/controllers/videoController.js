import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import { Video } from "../models/videoModel";

export const uploadVideo = asyncHandler(async (req, res) => {
  const { title, description, owner } = req.body;

  if ([title, description].some((fields) => fields.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  let videoLocalPath;
  if (req.files && isArray(req.files.video) && req.files.video.length > 0) {
    video = req.files.video[0].path;
  }

  const video = await uploadToCloudinary(videoLocalPath);

  if (!video) {
    throw new ApiError(400, "Video is required");
  }

  Video.create({
    video: video.secure.url,
    title: title,
    description: description,
    duration: duration,
  });
});
