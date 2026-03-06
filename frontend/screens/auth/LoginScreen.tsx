import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome Back</Text>
        <Text>Sign in to continue</Text>
        <Text>Email</Text>
        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text>Password</Text>
        <TextInput placeholder="Enter your password" secureTextEntry />
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
