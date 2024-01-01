import { Router } from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { uploadVideo } from "../controllers/videoController.js";

const videoRouter = Router();

videoRouter.route("/uploadvideo").post(verifyToken, uploadVideo);

export default videoRouter;
