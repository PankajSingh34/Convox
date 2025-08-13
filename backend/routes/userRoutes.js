import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { register, login, logout, getOtherUsers } from "../controllers/userController.js";
import User from "../models/userModel.js";

const router = express.Router();

// Authentication routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Get all users except the logged-in user
router.get("/", isAuthenticated, async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.id } }).select(
      "-password"
    ); // exclude password

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to load users" });
  }
});

// Get other users (alias for the above route)
router.get("/other-users", isAuthenticated, getOtherUsers);

export default router;
