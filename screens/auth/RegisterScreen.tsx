import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
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
type RegisterSchema = z.infer<typeof registerSchema>;
const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });
  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };
  return (
    <View className="flex-1 justify-center p-5 bg-black">
      <Text className="text-lg font-bold mb-6 text-center">RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;
