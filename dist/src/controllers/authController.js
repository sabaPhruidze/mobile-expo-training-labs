"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.me = exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = require("../models/userModel");
const register = async (req, res) => {
    try {
        const { fullName, email, password } = req
            .validated; // added by this in validate.js
        const existing = await (0, userModel_1.findUserByEmail)(email);
        if (existing)
            return res.status(409).json({ message: "Email already exist" });
        const password_hash = await bcryptjs_1.default.hash(password, 10); //writing salt is not neccessary, this is a shorter way
        const user = await (0, userModel_1.createUser)({ fullName, email, password_hash });
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        return res.status(201).json({
            message: "Registered",
            user: { id: user.id, full_name: user.full_name, email: user.email },
            token,
        });
    }
    catch (error) {
        console.error("REGISTER ERROR:", error);
        return res
            .status(500)
            .json({ message: "Server error", error: error?.message });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.validated;
        const user = await (0, userModel_1.findUserByEmail)(email);
        if (!user)
            return res.status(401).json({ message: "loginSchema " });
        const ok = await bcryptjs_1.default.compare(password, user.password_hash);
        if (!ok)
            return res.status(401).json({ message: "Invalid credentials" });
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return res.status(200).json({
            message: "Logged in",
            user: { id: user.id, full_name: user.full_name, email: user.email },
            token,
        });
    }
    catch (error) {
        console.error("Login error", error);
        return res.status(500).json({ message: "Server error" });
    }
};
exports.login = login;
const me = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await (0, userModel_1.findUserById)(userId);
        if (!user)
            return res.status(404).json({ message: "User not found" });
        return res.status(200).json({
            user: { id: user.id, full_name: user.full_name, email: user.email },
        });
    }
    catch (error) {
        console.log("Me Error", error);
        return res
            .status(500)
            .json({ message: "Server error", error: error?.message });
    }
};
exports.me = me;
