import { View, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../Main";
import { Controller, useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "../../features/auth/schema";
import { loginRequest } from "../../api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
type Props = NativeStackScreenProps<RootStackParamList, "LoginScreen">;
const LoginScreen = ({ navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const [serverError, setServerError] = useState("");

  const onSubmit = async (data: LoginSchema) => {
    try {
      setServerError("");
      const requestBody = await loginRequest(data);
      console.log("Login went succesfully:", requestBody.token);
      navigation.navigate("Tabs", { screen: "ProfileCardScreen" });
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Email or Password is incorrect";
      setServerError(message);
      console.log("Login error", message);
    }
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="p-4 flex-1">
        <View className="mx-auto w-full max-w-[420px] rounded-3xl border border-slate-700 bg-slate-900 px-5 py-6">
          <Text className="text-2xl font-extrabold text-white">Login</Text>
          <Text className="mt-2 text-sm text-slate-300">
            Sign in to continue
          </Text>
          <Text className="mt-5 mb-2 text-sm font-bold text-slate-200">
            Email
          </Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Ex: Denise1@gmail.com"
                keyboardType="email-address"
                placeholderTextColor="#94a3b8"
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className={`h-12 rounded-2xl border border-slate-700 bg-slate-800 px-6 text-white ${errors.email ? "border-red-500" : "border-slate-700"}`}
              />
            )}
          />
          {errors.email && (
            <Text className="mt-2 text-xs font-semibold text-red-400">
              {errors.email.message}
            </Text>
          )}
          <Text className="mt-4 mb-2 text-sm font-bold text-slate-200">
            Password
          </Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter your password"
                secureTextEntry
                placeholderTextColor="#94a3b8"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className={`h-12 rounded-2xl border border-slate-700 bg-slate-800 px-4 text-white ${errors.email ? "border-red-500" : "border-slate-700"}`}
              />
            )}
          />
          {errors.password && (
            <Text className="mt-2 text-xs font-semibold text-red-400">
              {errors.password.message}
            </Text>
          )}
          <Pressable
            className={`mt-6 h-12 items-center justify-center rounded-2xl ${isSubmitting ? "bg-slate-600" : "bg-white"}`}
            disabled={isSubmitting}
            onPress={handleSubmit(onSubmit)}
          >
            <Text
              className={`text-base font-extrabold ${isSubmitting ? "text-slate-200" : "text-slate-950"}`}
            >
              {isSubmitting ? "Loading..." : "Login"}
            </Text>
          </Pressable>
          <View className="flex justify-center items-center">
            {serverError && (
              <Text className="mt-4 text-sm font-semibold text-red-400">
                {serverError}
              </Text>
            )}
          </View>
          <Pressable
            className={`${serverError ? "mt-2" : "mt-4"} h-10 flex-row justify-center items-center`}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text className="text-sm text-slate-300">
              Don't have an account?
            </Text>
            <Text className="text-sm font-bold text-white"> Register here</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
