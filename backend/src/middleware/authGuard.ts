import type { Request, Response, NextFunction } from "express";
import * as jsonwebtoken from "jsonwebtoken";

const authGuard = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: missing token" });
  }
  const token = header.split(" ")[1];
  try {
    const decoded = jsonwebtoken.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as {
      userId: number;
    };
    (req as any).userId = decoded.userId;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized:invalid token" });
  }
};
export default authGuard;
