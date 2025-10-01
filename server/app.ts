import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

// Sample route
app.get("/", (req, res) => {
  res.send("Hello from Bun + Express backend!");
});

export default app;
