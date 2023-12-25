import { Router } from "express";
import { upload } from "../middlewares/multerMiddleware";

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
