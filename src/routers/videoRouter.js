import express from "express";
import {watch, edit, upload, deleteVideo} from "../controllers/videoController"

const videoRouter = express.Router();

videoRouter.get("/:id", watch);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;