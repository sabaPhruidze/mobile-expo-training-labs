import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
    console.log("ფორმის მონაცემები:", data);
  };

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
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
            {!!errors.fullName && <Text>{errors.fullName.message}</Text>}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
