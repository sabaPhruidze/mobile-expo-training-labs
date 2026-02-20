import { z } from "zod";

const registerSchema = z
  .object({
    fullName: z.string().min(3, "Name must contain at least 3 symbol"),
    email: z.email("Wrong email format"),
    password: z.string().min(6, "Password must be at least 6 symbol"),
    confirmPassword: z.string().min(6, "Repeat password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
  })
  .strict();
export type RegisterSchema = z.infer<typeof registerSchema>;
export default registerSchema;
