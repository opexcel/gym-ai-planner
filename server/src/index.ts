import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { profileRouter } from "./routes/profile.js";
import { planRouter } from "./routes/plan.js";

console.log("=== SERVER STARTING ===");

dotenv.config();

console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// API Routes
app.use("/api/profile", profileRouter);
app.use("/api/plan", planRouter);

app.get("/api/debug-db", (_req, res) => {
  res.json({
    database: process.env.DATABASE_URL,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});