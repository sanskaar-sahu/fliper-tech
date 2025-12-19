import express from "express";
import upload from "../middlewares/upload.js";
import { uploadImage } from "../controllers/upload.controller.js";
import protect from "../config/protect.js";

const router = express.Router();

router.post("/",protect,  upload.single("image"), uploadImage);

export default router;
