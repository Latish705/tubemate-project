import { User } from "../models/userModel.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import uploadToCloudinary from "../utils/cloudinary.js";

export const registerUser = asyncHandler(async (req, res) => {
  //first we will check the all the inputs are present in request
  //we will check does the user with email and username already exists
  //if not then we will upload the avatar sent by user (using multer)
  // will hash the password
  //then if there is not other error then we will save the user in database and send response of success
  const { username, email, password, fullName } = req.body;
  if (
    [fullName, username, password, email].some((field) => field.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new ApiError(400, "User with email or username already exists");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;

  const avatar = await uploadToCloudinary(avatarLocalPath);
  console.log(avatar.url);
});
