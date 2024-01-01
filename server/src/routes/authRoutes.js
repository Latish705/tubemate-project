import { Router } from "express";
import { upload } from "../middlewares/multerMiddleware";
import { loginUser } from "../controllers/authController";

const authRouter = Router();

authRouter.route("/register").post(
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

authRouter.route("/login", loginUser);

export default authRouter;
