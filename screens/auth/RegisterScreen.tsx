import { View, Text, TextInput } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SafeAreaView } from "react-native-safe-area-context";
import { type LoginSchema, loginSchema } from "../../features/auth/schema";

const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    console.log("ფორმის მონაცემები:", data);
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <TextInput />
      <Text className="text-white">რეგისტრაცია</Text>
    </SafeAreaView>
  );
};

export default RegisterScreen;
