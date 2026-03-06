import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1"
        keyboardVerticalOffset={80}
      >
        <ScrollView
          contentContainerClassName="p-4"
          keyboardShouldPersistTaps="handled"
        >
          <View className="mx-auto w-full max-w-[420px] rounded-3xl border border-slate-700 bg-slate-900 px-5 py-6">
            <Text className="text-2xl font-extrabold text-white">Login</Text>
            <Text className="mt-2 text-sm text-slate-300">
              Sign in to continue
            </Text>
            <Text className="mt-5 mb-2 text-sm font-bold text-slate-200">
              Email
            </Text>
            <TextInput
              placeholder="Ex: Denise1@gmail.com"
              keyboardType="email-address"
              placeholderTextColor="#94a3b8"
              autoCapitalize="none"
              className="h-12 rounded-2xl border border-slate-700 bg-slate-800 px-6 text-white"
            />
            <Text className="mt-4 mb-2 text-sm font-bold text-slate-200">
              Password
            </Text>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry
              placeholderTextColor="#94a3b8"
              className="h-12 rounded-2xl border border-slate-700 bg-slate-800 px-4 text-white"
            />
            <Pressable className="mt-6 h-12 items-center justify-center rounded-2xl bg-white">
              <Text className="text-base font-extrabold text-slate-950">
                Login
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
