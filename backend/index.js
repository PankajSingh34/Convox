import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/messageRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/message", messageRoutes);
app.get("/api/v1/health-check", (req, res) => {
  return res.status(200).json({ message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
