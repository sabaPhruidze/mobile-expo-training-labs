import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByEmail, findUserById, createUser } from "../models/userModel";
import type { LoginSchema, RegisterSchema } from "../validation/authSchemas";

import type { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password } = (req as any)
      .validated as RegisterSchema; // added by this in validate.js
    const existing = await findUserByEmail(email);
    if (existing)
      return res.status(409).json({ message: "Email already exist" });
    const password_hash = await bcrypt.hash(password, 10); //writing salt is not neccessary, this is a shorter way
    const user = await createUser({ fullName, email, password_hash });
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      },
    );
    return res.status(201).json({
      message: "Registered",
      user: { id: user.id, full_name: user.full_name, email: user.email },
      token,
    });
  } catch (error: any) {
    console.error("REGISTER ERROR:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error?.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = (req as any).validated as LoginSchema;

    const user = await findUserByEmail(email);
    if (!user) return res.status(401).json({ message: "Invalid credentials " });

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" },
    );
    return res.status(200).json({
      message: "Logged in",
      user: { id: user.id, full_name: user.full_name, email: user.email },
      token,
    });
  } catch (error) {
    console.error("Login error", error);
    return res.status(500).json({ message: "Server error" });
  }
};
export const me = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId as number;
    const user = await findUserById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json({
      user: { id: user.id, full_name: user.full_name, email: user.email },
    });
  } catch (error) {
    console.log("Me Error", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error?.message });
  }
};
