process.on("uncaughtException", (err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  (console.log("critical error,system must be shut down"), message);
  process.exit(1);
});
process.on("unhandledRejection", (err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  console.log("unhandled promise rejection", message);
  process.exit(1); //fe
});
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Move on this link : http://localhost:${port}`);
});
