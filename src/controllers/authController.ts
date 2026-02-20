import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByEmail, createUser } from "../models/userModel";

import type { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password } = (req as any).validated as {
      fullName: string;
      email: string;
      password: string;
    }; // added by this in validate.js
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
    return res.status(201).json({ message: "Registered", user, token });
  } catch (error: any) {
    console.error("REGISTER ERROR:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error?.message });
  }
};
