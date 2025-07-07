import express from "express";
const router = express.Router();

import { auth } from "../../middleware/auth.middleware";

import authRoutes from "./auth/auth.routes";
import userRoutes from "./user/user.routes";
import articleRoutes from "./article/article.routes";

router.use("/auth", authRoutes);

router.use(auth);

router.use("/user", userRoutes);
router.use("/article", articleRoutes);

export default router;
