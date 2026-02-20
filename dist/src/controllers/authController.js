"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = require("../models/userModel");
const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.validated; // added by this in validate.js
        const existing = await (0, userModel_1.findUserByEmail)(email);
        if (existing)
            return res.status(409).json({ message: "Email already exist" });
        const password_hash = await bcryptjs_1.default.hash(password, 10); //writing salt is not neccessary, this is a shorter way
        const user = await (0, userModel_1.createUser)({ fullName, email, password_hash });
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        return res.status(201).json({ message: "Registered", user, token });
    }
    catch (error) {
        console.error("REGISTER ERROR:", error);
        return res
            .status(500)
            .json({ message: "Server error", error: error?.message });
    }
};
exports.register = register;
