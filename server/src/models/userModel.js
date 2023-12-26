import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userScheme = mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowecase: true,
    unique: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    index: true, //keep a specific field index:true means if you are going to perform many quries on that field it will improve the performance suppose you are going to find
  },
  avatar: {
    type: String, //cloudinary url
    required: true,
  },
  coverImage: {
    type: String, //cloudinary url
  },
  watchHistory: [
    // it is going to be array of object which will contain an if of video model
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  refreshToken: {
    type: String,
  },
});

userScheme.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userScheme.methods.isPasswordCorrect = async (password) => {
  return await bcrypt.compare(password, this.password);
};

userScheme.methods.generateAccessToken = async () => {
  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      email: this.email,
      password: this.password,
      fullName: this.fullName,
    },
    process.env.JWT_ACCESS_TOKEN,
    {
      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY,
    }
  );
};

userScheme.methods.generateRefreshToken = async () => {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_REFRESH_TOKEN,
    {
      expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userScheme);
