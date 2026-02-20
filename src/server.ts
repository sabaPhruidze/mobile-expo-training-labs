import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
process.on("uncaughtException", (err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  (console.log("critical error,system must be shut down"), message);
  process.exit(1);
});
process.on("unhandledRejection", (err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  console.log("unhandled promise rejection", message);
  process.exit(1);
});

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Move on this link : http://localhost:${port}`);
});
