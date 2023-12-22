import { asyncHandler } from "../utils/asyncHandler.js";

export const registerUser = asyncHandler((req, res) => {
  //first we will check the all the inputs are present in request
  //we will check does the user with email and username already exists
  //if not then we will upload the avatar sent by user (using multer)
  // will hash the password
  //then if there is not other error then we will save the user in database and send response of success
  // const {}
});
