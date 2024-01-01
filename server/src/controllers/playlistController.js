import { Playlist } from "../models/playlistModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// we are going to perform CRUD operation to playlist
//1 create playlist
//2 add to playlist
//3 delete from playlist
//4 delete playlist

export const createPlaylistOfUser = asyncHandler(async (req, res) => {
  //we are going check that user is logged in or not using tokens

  const { name, description } = req.body;

  if ([name, description].some((fields) => fields.trim() === "")) {
    throw new ApiError(400, "name and description are required");
  }

  const playlist = await Playlist.create({
    creator: req.user._id,
    name,
    description,
  });

  if (!playlist) {
    throw new ApiError(400, "Error creating playlist");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, { playlist }, "Playlist created successfully"));
});

export const addVideoToPlaylist = asyncHandler(async (req, res) => {
  const { videoId } = req.body || req.params;

  if (!videoId) {
    throw new ApiError(400, "Video ID is need to add a video to playlist");
  }
});
