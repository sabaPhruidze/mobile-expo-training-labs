"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z
    .object({
    fullName: zod_1.z.string().min(3, "Name must contain at least 3 symbol"),
    email: zod_1.z.email("Wrong email format"),
    password: zod_1.z.string().min(6, "Password must be at least 6 symbol"),
    confirmPassword: zod_1.z.string().min(6, "Repeat password"),
})
    .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
})
    .strict();
exports.loginSchema = zod_1.z
    .object({
    email: zod_1.z.email("Wrong email format"),
    password: zod_1.z.string().min(6, "Password must be at least 6 symbol"),
})
    .strict();
