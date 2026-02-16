import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  type RegisterSchema,
  registerSchema,
} from "../../features/auth/schema";

const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: RegisterSchema) => {
    console.log("Format data", data);
  };

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1"
        keyboardVerticalOffset={80}
      >
        <ScrollView
          contentContainerStyle={{ padding: 16 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="w-full max-w-[420px] mx-auto rounded-3xl border border-slate-700 bg-slate-900 px-5 py-6">
            <Text className="text-2xl font-extrabold text-white">
              Registration
            </Text>
            <Text className="mt-2 text-sm text-slate-300">
              Fill information
            </Text>
            {/* full name */}
            <Text className="mt-5 mb-2 text-sm font-bold text-slate-200">
              First and last name
            </Text>
            <Controller
              control={control}
              name="fullName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className={`h-12 rounded-2xl border px-6 text-white bg-slate-800 ${errors.fullName ? "border-red-500" : "border-slate-700"} `}
                  placeholder="Ex: Denise Hubbard"
                  placeholderTextColor="#94a3b8"
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {!!errors.fullName && (
              <Text className="mt-2 text-xs font-semibold text-red-400">
                {errors.fullName.message}
              </Text>
            )}

            {/* email */}

            <Text className="mt-4 mb-2 text-sm font-bold text-slate-200">
              Email
            </Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className={`h-12 rounded-2xl border px-6 text-white ${errors.email ? "border-red-500" : "border-slate-700"} bg-slate-800`}
                  placeholder="Ex: Denise1@gmail.com"
                  placeholderTextColor="#94a3b8"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {!!errors.email && (
              <Text className="mt-2 text-xs font-semibold text-red-400">
                {errors.email.message}
              </Text>
            )}
            {/* password */}
            <Text className="mt-4 mb-2 text-sm font-bold text-slate-200">
              Password
            </Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  className={`h-12 rounded-2xl border px-4 text-white ${
                    errors.password ? "border-red-500" : "border-slate-700"
                  } bg-slate-800`}
                  placeholder="******"
                  placeholderTextColor="#94a3b8"
                  secureTextEntry
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {!!errors.password && (
              <Text className="mt-2 text-xs font-semibold text-red-400">
                {errors.password.message}
              </Text>
            )}
            {/* confirmming password */}
            <Text className="mt-4 mb-2 text-sm font-bold text-slate-200">
              Confirm password
            </Text>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className={`h-12 rounded-2xl border px-4 text-white ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-slate-700"
                  } bg-slate-800`}
                  placeholder="******"
                  placeholderTextColor="#94a3b8"
                  secureTextEntry
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {!!errors.confirmPassword && (
              <Text className="mt-2 text-xs font-semibold text-red-400">
                {errors.confirmPassword.message}
              </Text>
            )}
            <Pressable
              className={`mt-6 h-12 rounded-2xl items-center justify-center ${isSubmitting ? "bg-slate-600" : "bg-white"}`}
              disabled={isSubmitting}
              onPress={handleSubmit(onSubmit)}
            >
              <Text
                className={`text-base font-extrabold ${isSubmitting ? "text-slate-200" : "text-slate-950"}`}
              >
                {isSubmitting ? "Loading..." : "Submit"}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
