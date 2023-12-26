import { User } from "../models/userModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import uploadToCloudinary from "../utils/cloudinary.js";

const generateAccessandRefreshToken = async (userId) => {
  const user = User.findOne({ userId });
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

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

const loginUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;
  if ([email, username, password].some((fields) => fields.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (!user) {
    throw new ApiError(400, "Unable to find user");
  }

  const passwordMatch = await user.isPasswordCorrect(password);

  if (!passwordMatch) {
    throw new ApiError(200, "Password incorrect");
  }

  const { accessToken, refreshToken } = await generateAccessandRefreshToken(
    user._id
  );
  
  const loggedInUser = await User.findById({user._id}).select("-password refreshToken");

  const options = {
    httpOnly : true,
    secure : true,
  }

  return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
      new ApiResponse(200,{user:loggedInUser,accessToken,refreshToken},"User loggen in successfully")
    )
});
