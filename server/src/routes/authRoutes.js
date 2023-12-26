import { Router } from "express";
import { upload } from "../middlewares/multerMiddleware";
import { loginUser } from "../controllers/authController";

const router = Router;

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ])
);

router.route("/login", loginUser);
