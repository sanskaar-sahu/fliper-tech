import express from "express";
import { adminLogin  , createAdminIfNotExists } from "../controllers/admin.controller.js";

const router = express.Router();

/**
 * Admin Authentication Routes
 */
router.post("/login", adminLogin);
router.post('/create', createAdminIfNotExists);

export default router;
