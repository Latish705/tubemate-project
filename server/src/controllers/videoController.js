import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import { Video } from "../models/videoModel";
import { ApiResponse } from "../utils/ApiResponse.js";

export const uploadVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  //the auth middleware will confirm the user than give him access
  const { user } = req.user;

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

  const newVideo = await Video.create({
    video: video.secure.url,
    title: title,
    description: description,
    // duration: duration,      we are gonna check the reponse from cloudinary that what it is going to send then set the duration //we will see it later
    owner: user._id,
  });

  const uploadedVideo = Video.findById(newVideo._id);

  if (!uploadVideo) {
    throw new ApiError(400, "Video not found");
  }

  res
    .status(201)
    .json(new ApiResponse(201, { newVideo }, "Video uploaded successfully"));
});

export const getUsersAllVideos = asyncHandler(async (req, res) => {
  //we will get user from our verifyToken middleware
  //then we will find all the video upload in database like Video.find({owner:user._id})
  //it will get all the video then we will return all the video

  const { user } = req.user;

  const allVideo = Video.find({ owner: user._id });
  if (!allVideo) {
    throw new ApiError(400, "Could get Video from DB");
  }

  res.status(200, { allVideo }, "Fetched all the videos successfully");
});

export const getAVideo = asyncHandler(async (req, res) => {
  // we are going to get video id from params
});
