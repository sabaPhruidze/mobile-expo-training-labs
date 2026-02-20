process.on("uncaughtException", (err) => {
    const message = err instanceof Error ? err.message : String(err);
    (console.log("critical error,system must be shut down"), message);
    process.exit(1);
});
process.on("unhandledRejection", (err) => {
    const message = err instanceof Error ? err.message : String(err);
    console.log("unhandled promise rejection", message);
    process.exit(1);
});
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use("/auth", authRoutes);
app.listen(port, () => {
    console.log(`Move on this link : http://localhost:${port}`);
});
