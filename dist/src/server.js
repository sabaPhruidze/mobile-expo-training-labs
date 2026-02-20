"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
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
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/auth", authRoutes_1.default);
app.listen(port, () => {
    console.log(`Move on this link : http://localhost:${port}`);
});
