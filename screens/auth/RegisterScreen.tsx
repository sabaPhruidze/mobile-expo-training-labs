import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

const registerSchema = z
  .object({
    name: z.string().min(3, { message: "Write at least 3 letter" }),
    email: z.email("Wrong email format"),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 letter" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 letter" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const RegisterScreen = () => {
  return (
    <View>
      <Text>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;
