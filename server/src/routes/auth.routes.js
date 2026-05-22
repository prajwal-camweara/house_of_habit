import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {
  addPhone,
  sendOtp,
  verifyOtp,
} from "../controllers/auth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/send-otp", sendOtp);
authRoutes.post("/verify-otp", verifyOtp);
authRoutes.post("/add-phone", protect, addPhone);

export default authRoutes;
