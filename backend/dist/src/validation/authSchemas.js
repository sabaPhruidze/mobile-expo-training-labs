"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const registerSchema = zod_1.z
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
exports.default = registerSchema;
