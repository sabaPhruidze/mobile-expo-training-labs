import * as z from "zod";

export const loginSchema = z.object({
  fullName: z.string().min(3, "სახელი უნდა იყოს მინიმუმ 3 სიმბოლო"),
  email: z.email("არასწორი მეილის ფორმატი"),
  password: z.string().min(6, "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
