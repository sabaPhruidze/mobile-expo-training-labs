import * as z from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(3, "სახელი უნდა იყოს მინიმუმ 3 სიმბოლო"),
    email: z.email("არასწორი მეილის ფორმატი"),
    password: z.string().min(6, "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო"),
    confirmPassword: z.string().min(6, "Repeat password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
