import "./global.css";
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { getToken } from "./services/storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import TabNavigator, { TabParamList } from "./navigation/TabNavigator";
import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";

import HobbyListScreen from "./screens/HobbyListScreen";
import RestaurantMenuScreen from "./screens/RestaurantMenuScreen";

import Sixth from "./components/Sixth";
import Seventh from "./components/Seventh";
import Eight from "./components/Eight";
import Nine from "./components/Nine";
import Ten from "./components/Ten";
import Eleven from "./components/Eleven";
import Twelve from "./components/Twelve";
import Thirteen from "./components/Thirteen";
import Fourteen from "./components/Fourteen";
import Fifteen from "./components/Fifteen";
import Sixteen from "./components/Sixteen";
import SevenTeen from "./components/SevenTeen";

import RegisterScreen from "./screens/auth/RegisterScreen";
import LoginScreen from "./screens/auth/LoginScreen";

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  HobbyListScreen: undefined;
  RestaurantMenuScreen: undefined;
  Sixth: undefined;
  Seventh: undefined;
  Eight: undefined;
  Nine: undefined;
  Ten: undefined;
  Eleven: undefined;
  Twelve: undefined;
  Thirteen: undefined;
  Fourteen: undefined;
  Fifteen: undefined;
  Sixteen: { id?: string };
  SevenTeen: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      RegisterScreen: "register",
      LoginScreen: "login",
      RestaurantMenuScreen: "restaurant-menu",
      Sixteen: "user/:id",
      Tabs: {
        screens: {
          ProfileCardScreen: "profile-card",
          SmartBulbScreen: "smart-bulb",
          SecretBackDropScreen: "secret-back-drop",
        },
      },
    },
  },
};

const Main = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // We receive token here and make sure it exists or not
    const checkAuth = async () => {
      try {
        const token = await getToken();
        if (token) {
          setIsSignedIn(true);
        } else {
          setIsSignedIn(false);
        }
      } catch (error) {
        console.log("auth check error:", error);
        setIsSignedIn(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);
  if (isLoading) {
    return (
      <View className="fle-1 items-center justify-center bg-black">
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
  return (
    <NavigationContainer linking={linking}>
      <StatusBar style="light" />
      {/* if I want to remove all headers I can add attribute on Stack.Navigator screenOptions={{headerShown:false}} */}
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#fff" },
          contentStyle: { backgroundColor: "#000" }, // ეკრანების “base” background
        }}
      >
        {!isSignedIn ? (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Tabs"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="HobbyListScreen" component={HobbyListScreen} />
            <Stack.Screen
              name="RestaurantMenuScreen"
              component={RestaurantMenuScreen}
            />
            <Stack.Screen name="Sixth" component={Sixth} />
            <Stack.Screen name="Seventh" component={Seventh} />
            <Stack.Screen name="Eight" component={Eight} />
            <Stack.Screen name="Nine" component={Nine} />
            <Stack.Screen
              name="Ten"
              component={Ten}
              options={{ headerShown: false }} // I removed the header on ten in order to test how it works
            />
            <Stack.Screen
              name="Eleven"
              component={Eleven}
              options={{
                title: "11 test",
                headerStyle: { backgroundColor: "green" }, //background color , which consists statusbar as well
                headerTintColor: "white", //text color
                statusBarStyle: "auto",
              }}
            />
            <Stack.Screen name="Twelve" component={Twelve} />
            <Stack.Screen name="Thirteen" component={Thirteen} />
            <Stack.Screen name="Fourteen" component={Fourteen} />
            <Stack.Screen name="Fifteen" component={Fifteen} />
            <Stack.Screen name="Sixteen" component={Sixteen} />
            <Stack.Screen name="SevenTeen" component={SevenTeen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
