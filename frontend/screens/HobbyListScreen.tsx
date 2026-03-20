import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
export const hobbiesData = [
  { id: 1, title: "Programming" },
  { id: 2, title: "Working out" },
  { id: 3, title: "Reading books" },
  { id: 4, title: "Photography" },
  { id: 5, title: "Traveling" },
  { id: 6, title: "Listening to music" },
  { id: 7, title: "Drawing" },
  { id: 8, title: "Cooking" },
  { id: 9, title: "Learning languages" },
  { id: 10, title: "Chess" },
  { id: 11, title: "Watching movies" },
  { id: 12, title: "Gaming" },
] as const;

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";

type Props = NativeStackScreenProps<RootStackParamList, "HobbyListScreen">;
const HobbyListScreen = ({ navigation }: Props) => {
  return (
    <View className="flex-1 bg-slate-950 px-4 pt-6">
      <View className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
        <Text className="text-2xl font-bold text-white">My hobbies</Text>
        <Text className="mt-2 text-sm text-slate-400">
          Hobbies screen placeholder
        </Text>
      </View>
    </View>
  );
};

export default HobbyListScreen;
