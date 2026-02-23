import { Request, Response, NextFunction } from "express";

const validate =
  (schema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));
      return res.status(400).json({ message: "Validation error", errors });
    }
    (req as any).validated = result.data;
    next();
  };
export default validate;
